import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 每一道食譜是 src/content/recipes/ 裡的一個 .md 檔。
// 在 Pages CMS 後台填表單，就會自動產生這些檔案。
const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),                       // 食譜名稱
    titleFr: z.string().default(''),        // 法文名
    category: z.enum(['taiwanese', 'french', 'bread']),
    intro: z.string().default(''),          // 介紹（一兩句話）
    image: z.string().optional(),           // 去背插圖，例如 /images/recipes/xxx.webp
    date: z.coerce.date(),                  // 發佈日期，用來排序
    featured: z.boolean().default(false),   // 本週精選：會出現在首頁大標
    sample: z.boolean().default(false),     // 範例內容：會在頁面上加一行提醒
    prepTime: z.string().default(''),       // 準備時間，例如「20 分鐘」
    waitLabel: z.string().default(''),      // 等待項目：發酵／烘烤／蒸／靜置
    waitTime: z.string().default(''),
    cookLabel: z.string().default(''),      // 第二個等待項目（可空白）
    cookTime: z.string().default(''),
    totalTime: z.string().default(''),      // 總時間，例如「90 分鐘」
    servings: z.string().default(''),       // 份量，例如「6 顆」
    difficulty: z.enum(['1', '2', '3']).default('2'),
    ingredients: z.array(z.object({
      group: z.string().default(''),
      items: z.array(z.object({ name: z.string(), amount: z.string().default('') })).default([]),
    })).default([]),
    steps: z.array(z.object({
      title: z.string(),
      text: z.string().default(''),
      timer: z.string().default(''),
    })).default([]),
    tips: z.array(z.string()).default([]),   // Philia 的小提醒
    fails: z.array(z.string()).default([]),  // 我失敗過的地方
    storage: z.array(z.string()).default([]), // 保存與加熱
  }),
});

export const collections = { recipes };
