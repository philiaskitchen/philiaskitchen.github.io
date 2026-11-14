import { getCollection, type CollectionEntry } from 'astro:content';
import { lp, type Lang } from './i18n';

export type Recipe = CollectionEntry<'recipes'>;

export const CATEGORIES = {
  taiwanese: {
    name: '台式點心', fr: 'les douceurs taïwanaises', tag: 'olive', tagText: 'var(--on-terracotta)',
    intro: '饅頭、花捲、包子這些從小吃到大的味道。大部分都用中筋麵粉和速發酵母，第一次做建議從黑芝麻牛奶饅頭開始。',
    nameEn: 'Taiwanese', introEn: 'Steamed buns, flower rolls and the other flavours I grew up with. Most use plain flour and instant yeast — if it is your first time, start with the black sesame milk buns.',
  },
  french: {
    name: '法式甜點', fr: 'les pâtisseries', tag: 'terracotta', tagText: 'var(--on-terracotta)',
    intro: '瑪德蓮、塔、可麗露這些法式甜點，用家裡的烤箱一次一次試出來的版本。',
    nameEn: 'French pastry', introEn: 'Madeleines, tarts, canelés — French pastries worked out batch by batch in a home oven.',
  },
  sweets: {
    name: '其他甜點', fr: 'les petites douceurs', tag: 'blue', tagText: 'var(--ink)',
    intro: '不屬於台式點心、也不是法式甜點，但一樣好吃的小甜點，例如菲律賓的焦糖牛奶片。',
    nameEn: 'Other sweets', introEn: 'Little sweets that are not Taiwanese or French, but just as good — like Filipino pastillas.',
  },
  bread: {
    name: '麵包', fr: 'les pains', tag: 'mustard', tagText: 'var(--ink)',
    intro: '肉鬆麵包、吐司這類要花一點時間和耐心的麵包。',
    nameEn: 'Bread', introEn: 'Pork floss buns, milk loaves and other breads that take a little time and patience.',
  },
} as const;
export type CategoryKey = keyof typeof CATEGORIES;

/** 料理類型（Google 食譜結構化資料的 recipeCuisine） */
export const CUISINES = {
  taiwanese: { zh: '台灣', en: 'Taiwanese' },
  french: { zh: '法式', en: 'French' },
  american: { zh: '美式', en: 'American' },
  filipino: { zh: '菲律賓', en: 'Filipino' },
  australian: { zh: '澳洲', en: 'Australian' },
  british: { zh: '英式', en: 'British' },
} as const;

/** 食譜插圖的 600px 小圖（網站建好時由 scripts/optimize.mjs 自動產生） */
export const smallImage = (src: string) => src.replace(/\.(webp|png|jpe?g)$/i, '-sm.webp');

export const catName = (c: CategoryKey, lang: Lang) => (lang === 'en' ? CATEGORIES[c].nameEn : CATEGORIES[c].name);
export const catIntro = (c: CategoryKey, lang: Lang) => (lang === 'en' ? CATEGORIES[c].introEn : CATEGORIES[c].intro);

/** 某個語言的全部食譜。英文版只列出已經有翻譯（src/content/recipes-en/）的食譜。 */
export async function allRecipes(lang: Lang = 'zh'): Promise<Recipe[]> {
  let list = await getCollection('recipes');
  if (lang === 'en') {
    const en = new Map((await getCollection('recipesEn')).map((e) => [e.id, e.data]));
    list = list.filter((r) => en.has(r.id)).map((r) => ({ ...r, data: { ...r.data, ...en.get(r.id)! } }));
  }
  return list.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** 今天的日期（雪梨時間，YYYY-MM-DD），網站建置時用來判斷「預約的本週食譜」到了沒 */
const todaySydney = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Australia/Sydney' }).format(new Date());
const ymd = (d: Date) => d.toISOString().slice(0, 10);

/**
 * 首頁「本週食譜」：
 * 1. 平常是 featured: true 的那篇。
 * 2. 有填 featuredFrom（預約日期）的食譜，到了那天會自動換上首頁（例如聖誕薑餅人 12/1），
 *    並一直留著，直到之後又有比那天更新的食譜設成 featured: true。
 * 網站每天雪梨時間 00:05 會自動重新建置一次（.github/workflows/deploy.yml），所以日期到了就會換。
 */
export async function featuredRecipe(lang: Lang = 'zh'): Promise<Recipe | undefined> {
  const list = await allRecipes(lang);
  const today = todaySydney();
  const scheduled = list
    .filter((r) => r.data.featuredFrom && ymd(r.data.featuredFrom) <= today)
    .sort((a, b) => b.data.featuredFrom!.getTime() - a.data.featuredFrom!.getTime())[0];
  const normal = list.find((r) => r.data.featured);
  if (scheduled && (!normal || ymd(normal.data.date) < ymd(scheduled.data.featuredFrom!))) return scheduled;
  return normal ?? list[0];
}

export const recipeUrl = (r: Recipe, lang: Lang = 'zh') => lp(lang, `/recipes/${r.id}/`);
export const categoryUrl = (c: CategoryKey, lang: Lang = 'zh') => lp(lang, `/category/${c}/`);

export function metaLine(r: Recipe): string {
  const d = r.data;
  const parts = [d.waitLabel && d.waitTime ? `${d.waitLabel} ${d.waitTime}` : d.totalTime, d.servings].filter(Boolean);
  return parts.join(' · ');
}

// 「90 分鐘」「2 小時」→ ISO 8601，給 Google 食譜結構化資料用
export function isoDuration(s: string): string | undefined {
  if (!s) return undefined;
  const h = s.match(/(\d+(?:\.\d+)?)\s*(小時|hours?|hrs?|h\b)/i);
  const m = s.match(/(\d+)\s*(分鐘|分|minutes?|mins?)/i);
  if (!h && !m) return undefined;
  return `PT${h ? `${h[1]}H` : ''}${m ? `${m[1]}M` : ''}`;
}

// 菜單編號：用阿拉伯數字 1. 2. 3.（2026-11-13 Philia 要求；原本羅馬數字只寫到 xv）
export const roman = (n: number) => `${n + 1}.`;

// Google AdSense 設定。申請通過後，把 client（ca-pub-…）和各位置的廣告單元編號填進來，廣告才會出現。
// 還沒填之前，網站上完全不會顯示廣告。
// 想先看看廣告會出現在哪裡：在網址後面加上 ?ads=preview
export const ADS = {
  client: 'ca-pub-8908399220949936',
  slots: {
    recipeTop: '',    // 食譜頁：介紹和材料之間
    recipeBottom: '', // 食譜頁：「你可能也會喜歡」上面
    listBottom: '',   // 分類頁：食譜卡片下面
  } as Record<string, string>,
};

// 電子報（Mailchimp）。到 Mailchimp：Audience → Signup forms → Embedded forms，
// 複製表單 <form action="…"> 裡的網址貼到 action（像 https://xxx.us21.list-manage.com/subscribe/post?u=…&id=…&f_id=…）。
// 空白時網站上不會出現訂閱欄位；想先看看長什麼樣子：在網址後面加上 ?news=preview
export const NEWSLETTER = {
  action: 'https://philiaskitchen.us17.list-manage.com/subscribe/post?u=91c68a2579859916f0532761f&id=893921a6fc&f_id=0039a3e0f0',
};

// Google Analytics 4 評估 ID（G-…）。空白就不載入 GA4。只在正式網站（npm run build）載入，本機預覽不會算進去。
export const GA_ID = 'G-0YKY9WF6DJ';

// 聯絡信箱：拆成兩段放，網頁載入後才組起來，自動抓 email 的程式比較難抓到
export const CONTACT = { user: 'hello', domain: 'philiaskitchen.com' };
