import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://philiaskitchen.com',
  trailingSlash: 'always',
  // 把 CSS 直接寫進每一頁，手機不用再多等一個檔案才開始顯示畫面
  build: { inlineStylesheets: 'always' },
});
