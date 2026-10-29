// 網站建好之後自動執行（npm run build 的最後一步）：
// 1. 字型瘦身：中文字型完整檔各有 2 MB 多，手機下載很慢。
//    這裡只挑出網站上真的用到的字，做成小的字型檔放到 dist/fonts/。
//    之後新增食譜時會自動重新挑字，不用手動處理。完整字型放在 public/fonts/，建好後 dist/fonts/ 裡的會被換成小檔。
// 2. 圖片縮圖：每張食譜插圖另外做一張 720px 寬的小圖（xxx-sm.webp），卡片和手機用小圖。
import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import subsetFont from 'subset-font';
import sharp from 'sharp';

const DIST = 'dist';

async function walk(dir) {
  const out = [];
  for (const name of await readdir(dir)) {
    const p = join(dir, name);
    if ((await stat(p)).isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const files = await walk(DIST);

// ---- 1. 字型瘦身 ----
let text = '';
for (const f of files.filter((f) => f.endsWith('.html'))) text += await readFile(f, 'utf8');
// 再加上基本的英數字和常用標點，確保一定有
for (let c = 32; c < 127; c++) text += String.fromCharCode(c);
text += '，。、；：？！「」『』（）《》〈〉…—–～・·★☆⏱＋％°×／　‘’“”';
const chars = [...new Set(text)].filter((c) => c.codePointAt(0) >= 32).join('');
console.log(`[optimize] 網站用到 ${chars.length} 個不同的字`);

// 凝書體只用在標題（class="display" 和區塊標題 h2），所以只挑標題裡出現的字，檔案更小。
let titleText = '';
for (const f of files.filter((f) => f.endsWith('.html'))) {
  const html = await readFile(f, 'utf8');
  const re = /<(h[1-3]|span|div|a)\b[^>]*class="[^"]*\bdisplay\b[^"]*"[^>]*>([\s\S]*?)<\/\1>|<h2\b[^>]*>([\s\S]*?)<\/h2>/g;
  for (const m of html.matchAll(re)) titleText += (m[2] || m[3] || '').replace(/<[^>]+>/g, '');
}
for (let c = 32; c < 127; c++) titleText += String.fromCharCode(c);
titleText += '，。、：！？「」（）…—–';
const titleChars = [...new Set(titleText)].join('');
console.log(`[optimize] 標題用到 ${titleChars.length} 個不同的字`);

for (const [src, out, set] of [
  ['public/fonts/creamfont.woff2', 'fonts/creamfont.woff2', titleChars],
  ['public/fonts/jf-openhuninn-2.1.woff2', 'fonts/jf-openhuninn-2.1.woff2', chars],
]) {
  const full = await readFile(src);
  const small = await subsetFont(full, set, { targetFormat: 'woff2' });
  await writeFile(join(DIST, out), small);
  console.log(`[optimize] ${out}: ${(full.length / 1024).toFixed(0)} KB → ${(small.length / 1024).toFixed(0)} KB`);
}

// ---- 2. 圖片縮圖 ----
const imgs = files.filter((f) => f.includes(join('images', 'recipes')) && /\.(webp|png|jpe?g)$/i.test(f) && !/-sm.webp$/.test(f));
for (const f of imgs) {
  const out = f.slice(0, -extname(f).length) + '-sm.webp';
  await sharp(f).resize({ width: 720, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
}
console.log(`[optimize] 做了 ${imgs.length} 張小圖`);
