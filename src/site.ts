import { getCollection, type CollectionEntry } from 'astro:content';

export type Recipe = CollectionEntry<'recipes'>;

export const CATEGORIES = {
  taiwanese: {
    name: '台式點心', fr: 'les douceurs taïwanaises', tag: 'olive', tagText: 'var(--on-terracotta)',
    intro: '饅頭、花捲、包子這些從小吃到大的味道。大部分都用中筋麵粉和速發酵母，第一次做建議從黑芝麻饅頭開始。',
  },
  french: {
    name: '法式甜點', fr: 'les pâtisseries', tag: 'terracotta', tagText: 'var(--on-terracotta)',
    intro: '瑪德蓮、塔、可麗露這些法式甜點，用家裡的烤箱一次一次試出來的版本。',
  },
  bread: {
    name: '麵包', fr: 'les pains', tag: 'mustard', tagText: 'var(--ink)',
    intro: '肉鬆麵包、吐司這類要花一點時間和耐心的麵包。',
  },
} as const;
export type CategoryKey = keyof typeof CATEGORIES;

export async function allRecipes(): Promise<Recipe[]> {
  const list = await getCollection('recipes');
  return list.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function featuredRecipe(): Promise<Recipe | undefined> {
  const list = await allRecipes();
  return list.find((r) => r.data.featured) ?? list[0];
}

export const recipeUrl = (r: Recipe) => `/recipes/${r.id}/`;
export const categoryUrl = (c: CategoryKey) => `/category/${c}/`;

export function metaLine(r: Recipe): string {
  const d = r.data;
  const parts = [d.waitLabel && d.waitTime ? `${d.waitLabel} ${d.waitTime}` : d.totalTime, d.servings].filter(Boolean);
  return parts.join(' · ');
}

// 「90 分鐘」「2 小時」→ ISO 8601，給 Google 食譜結構化資料用
export function isoDuration(s: string): string | undefined {
  if (!s) return undefined;
  const h = s.match(/(\d+(?:\.\d+)?)\s*(小時|h)/);
  const m = s.match(/(\d+)\s*(分鐘|分|min)/);
  if (!h && !m) return undefined;
  return `PT${h ? `${h[1]}H` : ''}${m ? `${m[1]}M` : ''}`;
}

const ROMAN = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x', 'xi', 'xii', 'xiii', 'xiv', 'xv'];
export const roman = (n: number) => `${ROMAN[n] ?? n + 1}.`;

// Google AdSense 設定。申請通過後，把 client（ca-pub-…）和各位置的廣告單元編號填進來，廣告才會出現。
// 還沒填之前，網站上完全不會顯示廣告。
// 想先看看廣告會出現在哪裡：在網址後面加上 ?ads=preview
export const ADS = {
  client: '',
  slots: {
    recipeTop: '',    // 食譜頁：介紹和材料之間
    recipeBottom: '', // 食譜頁：「你可能也會喜歡」上面
    listBottom: '',   // 分類頁：食譜卡片下面
  } as Record<string, string>,
};

// 聯絡信箱：拆成兩段放，網頁載入後才組起來，自動抓 email 的程式比較難抓到
export const CONTACT = { user: 'msphilia.com', domain: 'gmail.com' };
