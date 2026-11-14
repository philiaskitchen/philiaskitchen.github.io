// 料理小知識翻卡（每篇食譜一則）
// 內容都對照過資料來源（src）；只是傳說的內容會寫「相傳／據說」。2026-11-11 Claude 整理，Philia 審稿。
export type Trivia = { zh: { q: string; a: string }; en: { q: string; a: string }; src: { label: string; url: string } };

export const TRIVIA: Record<string, Trivia> = {
  'lemon-tart': {
    zh: { q: '檸檬卡士達（Lemon Curd）以前是怎麼吃的？', a: '檸檬卡士達來自英國。在 19 世紀末到 20 世紀初的英國，家裡自己做的檸檬卡士達常常在下午茶時抹在麵包或司康上，用來代替果醬。因為它不像果醬那麼耐放，所以通常一次只做一小罐。' },
    en: { q: 'How was lemon curd eaten in the past?', a: 'Lemon curd comes from England. In the late 19th and early 20th centuries, homemade lemon curd was often served with bread or scones at afternoon tea instead of jam. It doesn\'t keep as long as jam, so people usually made only a small amount at a time.' },
    src: { label: 'Wikipedia: Fruit curd', url: 'https://en.wikipedia.org/wiki/Fruit_curd' },
  },
  'brown-sugar-fagao': {
    zh: { q: '為什麼發糕一定要「裂開」？', a: '發糕在閩南語叫「發粿」，諧音「發財、高升」，是傳統的過年點心，也常用來拜拜或送親友。客家人把發糕上的裂痕叫做「笑」：發得越大、裂得越深，就象徵新的一年笑口常開、事事順利。' },
    en: { q: 'Why should fa gao split open on top?', a: 'In Taiwanese Hokkien, fa gao is called huat-kué, which sounds like “getting rich and moving up”. It is a traditional Lunar New Year treat, also used as an offering or a gift for family. Hakka people call the cracks on top a “smile” — the higher it rises and the deeper it splits, the more you will smile in the new year.' },
    src: { label: '維基百科：發糕', url: 'https://zh.wikipedia.org/zh-tw/%E7%99%BC%E7%B3%95' },
  },
  'sesame-egg-rolls': {
    zh: { q: '蛋捲是台灣原創的嗎？', a: '不是喔！蛋捲的祖先是西班牙的威化捲餅（barquillo），後來傳到亞洲，在香港特別流行。1977 年以前，台灣市面上幾乎買不到蛋捲，後來才有台灣的烘焙點心公司從香港引進手工煎製蛋捲的技術，再調整成台灣人喜歡的口味，慢慢變成過年送禮的經典伴手禮。' },
    en: { q: 'Are egg rolls originally from Taiwan?', a: 'No! Their ancestor is the Spanish rolled wafer called barquillo. It later spread to Asia and became very popular in Hong Kong. Before 1977 you could hardly buy egg rolls in Taiwan. Then a Taiwanese bakery company brought in the Hong Kong way of making them by hand, adjusted the taste for local people, and they slowly became a classic Lunar New Year gift.' },
    src: { label: '維基百科：蛋捲', url: 'https://zh.wikipedia.org/zh-tw/%E8%9B%8B%E5%8D%B7' },
  },
  canele: {
    zh: { q: '可麗露是從哪裡來的？', a: '可麗露來自法國波爾多。一般認為最早出自當地的安農西亞修道院（Couvent des Annonciades），不過是 15 世紀還是 18 世紀，說法不一，確切的由來到現在還沒有定論。' },
    en: { q: 'Where do canelés come from?', a: 'Canelés come from Bordeaux, France. They are believed to have started at a convent there, the Couvent des Annonciades — but whether that was in the 15th or the 18th century is not clear, and the true origin is still unknown.' },
    src: { label: 'Wikipedia: Canelé', url: 'https://en.wikipedia.org/wiki/Canel%C3%A9' },
  },
  'lemon-madeleines': {
    zh: { q: '為什麼瑪德蓮會讓人想起「回憶」？', a: '瑪德蓮來自法國洛林地區的 Commercy 和 Liverdun。法國作家普魯斯特在《追憶似水年華》裡，寫到主角嘗到瑪德蓮時，忽然想起早已忘記的往事。這段「瑪德蓮的片段」非常有名，所以瑪德蓮也常被用來形容「一下子勾起回憶的味道」。' },
    en: { q: 'Why are madeleines linked to memories?', a: 'Madeleines come from Commercy and Liverdun in Lorraine, France. In Marcel Proust’s novel In Search of Lost Time, the taste of a madeleine suddenly brings back a forgotten memory. This “episode of the madeleine” is so famous that the madeleine became a symbol of a taste that brings back the past.' },
    src: { label: 'Wikipedia: Madeleine (cake)', url: 'https://en.wikipedia.org/wiki/Madeleine_(cake)' },
  },
  'pain-au-chocolat': {
    zh: { q: '巧克力可頌在法國有兩個名字？', a: '在巴黎和法國大部分地區叫 pain au chocolat；但在法國西南部（新亞奎丹、奧克西塔尼地區）和加拿大魁北克，大家叫它 chocolatine。到底哪個名字才對，法國人到現在還常常在爭論。' },
    en: { q: 'Do these have two names in France?', a: 'Yes! In Paris and most of France they are called pain au chocolat. But in south-west France (Nouvelle-Aquitaine and Occitanie) and in Quebec, people call them chocolatine — and the French still argue about which name is right.' },
    src: { label: 'Wikipedia: Pain au chocolat', url: 'https://en.wikipedia.org/wiki/Pain_au_chocolat' },
  },
  'lattice-apple-pie': {
    zh: { q: '蘋果派是美國發明的嗎？', a: '不是喔！最早的蘋果派記錄來自 14 世紀的英國，食譜集《Forme of Cury》裡的蘋果派除了蘋果，還加了無花果、葡萄乾、西洋梨和香料，並用番紅花上色。後來蘋果派在美國非常受歡迎，才有「as American as apple pie（像蘋果派一樣美國）」這句話。' },
    en: { q: 'Was apple pie invented in America?', a: 'No! The first records of apple pie come from 14th-century England. A recipe in the book Forme of Cury used apples, figs, raisins, pears and spices, coloured with saffron. Apple pie later became so loved in the USA that people say “as American as apple pie”.' },
    src: { label: 'Wikipedia: Apple pie', url: 'https://en.wikipedia.org/wiki/Apple_pie' },
  },
  'classic-banana-cake': {
    zh: { q: '香蕉麵包是什麼時候開始流行的？', a: '1930 年代，泡打粉開始在超市買得到，香蕉麵包（banana bread）的食譜也在這時出現在北美各地的食譜書裡。有人認為它和經濟大蕭條有關——主婦們捨不得丟掉熟過頭的香蕉；也有人認為，是麵粉和泡打粉公司為了推銷產品而發明的。' },
    en: { q: 'When did banana bread become popular?', a: 'In the 1930s, when baking powder became easy to buy in shops, banana bread recipes started to appear in cookbooks across North America. Some say it came from the Great Depression, when people did not want to waste overripe bananas. Others think flour and baking powder companies created it to sell their products.' },
    src: { label: 'Wikipedia: Banana bread', url: 'https://en.wikipedia.org/wiki/Banana_bread' },
  },
  pastillas: {
    zh: { q: '牛奶片的故鄉在哪裡？', a: '菲律賓呂宋島布拉干省（Bulacan）的聖米格爾鎮（San Miguel）。最早是養水牛的農家自己在家做，用的是水牛奶；後來才變成小型產業，也開始用牛奶來做。' },
    en: { q: 'Where do pastillas come from?', a: 'From the town of San Miguel in Bulacan, the Philippines. At first, farmers who raised carabao (water buffalo) made them at home with carabao milk. Later they became a small local industry, and cow’s milk was used too.' },
    src: { label: 'Wikipedia: Pastillas', url: 'https://en.wikipedia.org/wiki/Pastillas' },
  },
  'strawberry-watermelon-cake': {
    zh: { q: '這個蛋糕為什麼這麼有名？', a: '草莓西瓜蛋糕是雪梨甜點店 Black Star Pastry 的招牌，這家店 2008 年在雪梨開業，也是這款蛋糕的創始店。《紐約時報》曾經稱它是「全世界在 Instagram 上被拍最多次的蛋糕」。' },
    en: { q: 'Why is this cake so famous?', a: 'The Strawberry Watermelon Cake was created by Black Star Pastry, a bakery that opened in Sydney in 2008. The New York Times once called it “the world’s most Instagrammed cake”.' },
    src: { label: 'Black Star Pastry: About', url: 'https://blackstarpastry.com/pages/about' },
  },
  'vanilla-milk-pudding': {
    zh: { q: '香草是從哪裡來的？', a: '香草來自一種蘭花的果莢！商業種植的香草花，要靠人工一朵一朵授粉，而且要在花開後 12 小時內完成。以重量來算，香草是全世界第二貴的香料，僅次於番紅花。' },
    en: { q: 'Where does vanilla come from?', a: 'Vanilla comes from the seed pods of an orchid! On farms, each flower has to be pollinated by hand, within 12 hours of opening. By weight, vanilla is the second most expensive spice in the world, after saffron.' },
    src: { label: 'Wikipedia: Vanilla', url: 'https://en.wikipedia.org/wiki/Vanilla' },
  },
  'sesame-tangyuan': {
    zh: { q: '什麼時候吃湯圓？', a: '湯圓是元宵節（上元）和冬至的應景食物。像福州人冬至早上會先用湯圓祭拜祖先，再全家一起當早餐吃；四川則習慣在大年初一和十五吃湯圓，象徵團圓。' },
    en: { q: 'When do people eat tangyuan?', a: 'Tangyuan are eaten at the Lantern Festival and at the winter solstice (Dongzhi). In Fuzhou, families first offer tangyuan to their ancestors on the morning of Dongzhi, then eat them together for breakfast. In Sichuan, people eat them on the 1st and 15th day of the Lunar New Year, as a symbol of family reunion.' },
    src: { label: '維基百科：湯圓', url: 'https://zh.wikipedia.org/zh-tw/%E6%B9%AF%E5%9C%86' },
  },
  'black-sesame-mantou': {
    zh: { q: '「饅頭」這個名字是怎麼來的？', a: '相傳和三國時代的諸葛亮有關：他南征時，當地習俗要用人頭祭河神，他改用麵皮包肉、做成人頭的樣子來代替。因為「饅」和「蠻」音近，就叫「饅首」，後來又變成「饅頭」。不過這只是傳說，真正的由來已經很難考證。' },
    en: { q: 'Where does the name “mantou” come from?', a: 'Legend says it goes back to Zhuge Liang, a famous strategist of the Three Kingdoms period. Local custom asked for human heads as an offering to a river god, so he made dough “heads” filled with meat instead. The name may come from this story — but it is only a legend, and the real origin is hard to prove.' },
    src: { label: '維基百科：饅頭', url: 'https://zh.wikipedia.org/zh-tw/%E9%A6%92%E5%A4%B4' },
  },
  'scallion-flower-rolls': {
    zh: { q: '花捲和饅頭有什麼不同？', a: '花捲和饅頭的麵糰做法很像，最大的差別是形狀：花捲是捲起來的。花捲可甜可鹹，常見的有加芝麻醬的麻醬花捲、加花椒鹽的椒鹽花捲；在中國南方，還有人沾煉乳吃。' },
    en: { q: 'How are flower rolls different from mantou?', a: 'The dough is very similar — the big difference is the shape: flower rolls are rolled and twisted. They can be sweet or savoury, for example with sesame paste or with Sichuan pepper salt. In southern China, some people even dip them in condensed milk.' },
    src: { label: '維基百科：花卷', url: 'https://zh.wikipedia.org/zh-tw/%E8%8A%B1%E5%8D%B7' },
  },
  'chocolate-mantou': {
    zh: { q: '為什麼可可粉的顏色有深有淺？', a: '有一種可可粉叫「荷蘭式可可粉」，是用鹼處理過的，顏色比較深、味道比較不酸也不苦。這個方法是 19 世紀初荷蘭的巧克力製造商范豪頓（Coenraad van Houten）發展出來的。沒有用鹼處理過的，就是「天然可可粉」。' },
    en: { q: 'Why are some cocoa powders darker?', a: 'Dutch-process cocoa is treated with an alkali, which makes it darker, less acidic and less bitter. The method was developed in the early 19th century by the Dutch chocolate maker Coenraad van Houten. Cocoa without this treatment is called natural cocoa.' },
    src: { label: 'Wikipedia: Dutch process chocolate', url: 'https://en.wikipedia.org/wiki/Dutch_process_chocolate' },
  },
  'pork-floss-bread': {
    zh: { q: '肉鬆是怎麼做出來的？', a: '肉鬆又叫肉酥、肉絨，是把豬瘦肉（也可以用魚肉或雞肉）持續乾炒，把水分炒乾，變成蓬鬆的絲狀。台灣麵包店的肉鬆麵包，就是先抹上沙拉醬，再沾滿肉鬆。' },
    en: { q: 'How is meat floss made?', a: 'Meat floss is made by dry-frying lean pork (or fish or chicken) for a long time until all the water is gone and it turns light and fluffy. Taiwanese bakeries spread mayonnaise on the bread and roll it in the floss.' },
    src: { label: '維基百科：肉鬆', url: 'https://zh.wikipedia.org/zh-tw/%E8%82%89%E9%AC%86' },
  },
  'taiwanese-egg-cake': {
    zh: { q: '台灣的雞蛋糕是從哪裡來的？', a: '據說雞蛋糕源自二戰後日本關西的一種小吃，原本叫「迷你長崎蛋糕」，傳到台灣後被叫做雞蛋糕，成了常見的街頭小吃。它和香港的雞蛋仔有點像，但口味和形狀不太一樣。' },
    en: { q: 'Where do Taiwanese egg cakes come from?', a: 'They are said to come from a snack in Kansai, Japan, after World War II, called “mini castella”. In Taiwan they became a popular street snack called jidangao (egg cake). They look a little like Hong Kong egg waffles, but the taste and shape are different.' },
    src: { label: '維基百科：雞蛋糕', url: 'https://zh.wikipedia.org/zh-tw/%E9%B8%A1%E8%9B%8B%E7%B3%95' },
  },
  'taiwanese-lemon-cakes': {
    zh: { q: '刨檸檬皮時，為什麼只刨黃色那層？', a: '檸檬最外面的黃色表皮帶著香氣，把它和糖一起搓揉，香味會跑出來；但下面那層白色的皮會苦，所以刨皮時只刨黃色的部分就好。' },
    en: { q: 'Why do we only grate the yellow part of the lemon peel?', a: 'The thin yellow outer layer (the zest) holds the lemon aroma — rubbing it into sugar helps release it. The white layer underneath (the pith) can be bitter, so it is best to grate only the yellow part.' },
    src: { label: 'Wikipedia: Zest (ingredient)', url: 'https://en.wikipedia.org/wiki/Zest_(ingredient)' },
  },
};
