// 多國語言：中文在根目錄（/），英文在 /en/。
// 介面上的固定文字都放在這裡；食譜內容的英文版放在 src/content/recipes-en/。
export type Lang = 'zh' | 'en';
export const LANGS: Lang[] = ['zh', 'en'];
export const HTML_LANG: Record<Lang, string> = { zh: 'zh-Hant', en: 'en' };

export const getLang = (url: URL): Lang => (/^\/en(\/|$)/.test(url.pathname) ? 'en' : 'zh');
/** 把中文路徑轉成某個語言的路徑：lp('en', '/about/') → '/en/about/' */
export const lp = (lang: Lang, path: string) => (lang === 'en' ? '/en' + path : path);
/** 拿掉語言前綴：'/en/about/' → '/about/' */
export const stripLang = (pathname: string) => pathname.replace(/^\/en(?=\/|$)/, '') || '/';

export const UI = {
  zh: {
    siteName: 'Philia的廚房料理',
    logo: '/images/site/logo.png',
    defaultDesc: '台式點心與法式甜點，一道一道記下來的家庭食譜：份量、時間、失敗過的地方都寫在裡面。',
    switchTo: 'English', switchLang: 'en' as Lang, switchLabel: 'Read this page in English',
    nav: { week: '本週食譜', taiwanese: '台式點心', french: '法式甜點', bread: '麵包', sweets: '其他甜點', about: '關於我' },
    mainNav: '主選單', openMenu: '打開選單', homeAria: '首頁',
    footerLine: '每一道都是在家實際做過的食譜', footerNav: '頁尾選單', privacy: '隱私權政策', contact: '聯絡我', writeMe: '寫信給我',
    illus: (t: string) => `${t}插圖`, artTodo: '插圖待生成',
    menuSub: '食譜目錄',
    home: '首頁',
    // 食譜頁
    prep: '準備', servings: '份量', difficulty: '難易度', start: '開始做吧',
    sampleNote: '這是範例食譜，之後會換成我實際做的配方。',
    ingredients: '材料', steps: '步驟',
    scale: { label: '要做多少？', less: '少做一份', more: '多做一份', each: '每份容量', total: '總量約', reset: '回到原本份量', times: '倍',
      note: '材料會自動換算。步驟裡寫的數字和時間不會跟著變；份量變多時，發酵、蒸烤時間可能要稍微拉長。' },
    hint: '做完一步，點一下就會打勾。點綠色的時間按鈕可以開始計時。', reset: '全部重來',
    stepN: (n: number) => `第 ${n} 步：`,
    plus5: '＋5 分鐘',
    tips: 'Philia 的小提醒', fails: '我失敗過的地方', storage: '保存與加熱', alsoLike: '你可能也會喜歡',
    cook: '烹飪模式', cookOff: '點一下，螢幕就不會自動變暗', cookOn: '開著：螢幕不會變暗',
    timer: {
      start: '開始計時：', left: '剩 ', done: '時間到！', doneAria: '時間到，點一下關掉提醒', cancel: '再點一次取消',
      leftAria: '，連點兩下可以取消', titlePrefix: '⏰ 時間到｜',
      rangeMsg: '到 {min} 分鐘了，先看看狀態；還不夠就按「＋5 分鐘」（最多 {max} 分鐘）。點時間按鈕可以關掉提醒。',
      doneMsg: '{label}時間到了！點時間按鈕可以關掉提醒。', barDone: '{label} 時間到！',
    },
    // 分類頁
    count: (n: number) => `目前有 ${n} 道食譜，最新的在前面。`, nextUp: '下一道還在廚房裡',
    // 首頁
    heroWeek: (kind: string, title: string) => ({ before: `這週的點心，`, mid: `是${kind} `, title, after: '。' }),
    heroEmpty: '這週的點心，<br />還在廚房裡。',
    kind: { french: '一盤', bread: '一爐', taiwanese: '一籠', sweets: '一盤' } as Record<string, string>,
    lead: '我把家裡常做的台式點心和法式甜點，一道一道記下來。<br />份量、時間、失敗過的地方都寫在裡面。',
    seeWeek: '看這週的食譜', allRecipes: '全部食譜', latest: '最近做的',
    bannerAlt: '蒸籠裡的花捲、茶壺、法棍和瑪德蓮的插圖', stillAlt: '蒸籠、茶壺和蔥的插圖',
    whoWrites: '寫食譜的人', aboutShort: '住在澳洲的 Philia，有個台灣胃，也是個甜點控。如果你也想試試，歡迎使用我的食譜。', moreAbout: '更多關於我',
    // 廣告
    ad: '廣告', adPreview: '廣告預留位置', adHere: '廣告會出現在這裡',
    // 404
    nfTitle: '找不到這一頁', nfH: '這一頁還在烤箱裡', nfP: '找不到你要的頁面，回首頁看看別的食譜吧。', nfBtn: '回到首頁',
  },
  en: {
    siteName: "Philia's Kitchen",
    logo: '/images/site/logo-en.png',
    defaultDesc: 'Taiwanese dim sum and French pastries from a home kitchen in Australia — with weights, timings and the mistakes I made along the way.',
    switchTo: '中文', switchLang: 'zh' as Lang, switchLabel: '用中文看這一頁',
    nav: { week: "This week", taiwanese: 'Taiwanese', french: 'French pastry', bread: 'Bread', sweets: 'Other sweets', about: 'About' },
    mainNav: 'Main menu', openMenu: 'Open menu', homeAria: 'Home',
    footerLine: 'Every recipe here has been made in my own kitchen', footerNav: 'Footer menu', privacy: 'Privacy policy', contact: 'Contact', writeMe: 'Email me',
    illus: (t: string) => `Illustration of ${t}`, artTodo: 'Illustration coming soon',
    menuSub: 'All recipes',
    home: 'Home',
    prep: 'Prep', servings: 'Makes', difficulty: 'Difficulty', start: "Let's cook",
    sampleNote: 'This is a sample recipe. I will replace it with the version I actually make.',
    ingredients: 'Ingredients', steps: 'Method',
    scale: { label: 'How much to make?', less: 'Make one less', more: 'Make one more', each: 'Size of each', total: 'Total about', reset: 'Back to original', times: '×',
      note: 'Ingredient amounts update automatically. Numbers and times written in the steps stay the same — with a bigger batch, proving, steaming or baking may take a little longer.' },
    hint: 'Tap a step when it is done to tick it off. Tap a green time button to start a timer.', reset: 'Start over',
    stepN: (n: number) => `Step ${n}: `,
    plus5: '+5 min',
    tips: "Philia's tips", fails: 'Where I went wrong', storage: 'Storing & reheating', alsoLike: 'You might also like',
    cook: 'Cooking mode', cookOff: 'Tap to keep your screen awake', cookOn: 'On: your screen stays awake',
    timer: {
      start: 'Start timer: ', left: '', done: "Time's up!", doneAria: "Time's up — tap to dismiss", cancel: 'Tap again to cancel',
      leftAria: ' left — double-tap to cancel', titlePrefix: "⏰ Time's up | ",
      rangeMsg: "That's {min} minutes — check how it looks. If it needs longer, tap “+5 min” (up to {max} minutes). Tap the time button to dismiss.",
      doneMsg: "{label}: time's up! Tap the time button to dismiss.", barDone: "{label} — time's up!",
    },
    count: (n: number) => `${n} recipe${n === 1 ? '' : 's'} so far, newest first.`, nextUp: 'The next one is still in the kitchen',
    heroWeek: (_kind: string, title: string) => ({ before: 'This week from my kitchen:', mid: '', title, after: '' }),
    heroEmpty: 'This week’s bake is<br />still in the kitchen.',
    kind: {} as Record<string, string>,
    lead: 'The Taiwanese dim sum and French pastries I make at home, written down one by one — weights, timings and the mistakes I made along the way.',
    seeWeek: "See this week's recipe", allRecipes: 'All recipes', latest: 'Latest recipes',
    bannerAlt: 'Illustration of a steamer of flower rolls, a teapot, baguettes and madeleines', stillAlt: 'Illustration of a bamboo steamer, a teapot and spring onions',
    whoWrites: 'The cook behind the recipes', aboutShort: 'Philia lives in Australia. She still loves the Taiwanese food she grew up with, and she loves desserts too. If you would like to try, you are welcome to use my recipes.', moreAbout: 'More about me',
    ad: 'Advertisement', adPreview: 'Ad space', adHere: 'An ad will appear here',
    nfTitle: 'Page not found', nfH: 'This page is still in the oven', nfP: "I couldn't find that page. Head back home for more recipes.", nfBtn: 'Back to home',
  },
} as const;

export const t = (lang: Lang) => UI[lang];
