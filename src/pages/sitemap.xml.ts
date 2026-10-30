// 網站地圖：給 Google 看的「這個網站有哪些頁面」清單，網址是 /sitemap.xml
// 新增食譜時會自動更新，不用手動改。
import type { APIRoute } from 'astro';
import { allRecipes, CATEGORIES, recipeUrl, categoryUrl, type CategoryKey } from '../site';

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.toString() ?? 'https://philiaskitchen.com/').replace(/\/$/, '');
  const zh = await allRecipes('zh');
  const enIds = new Set((await allRecipes('en')).map((r) => r.id));
  const newest = zh[0]?.data.date;

  type Entry = { zh: string; en?: string; lastmod?: Date };
  const pages: Entry[] = [
    { zh: '/', en: '/en/', lastmod: newest },
    { zh: '/about/', en: '/en/about/' },
    { zh: '/privacy/', en: '/en/privacy/' },
    ...(Object.keys(CATEGORIES) as CategoryKey[]).map((c) => ({ zh: categoryUrl(c, 'zh'), en: categoryUrl(c, 'en'), lastmod: newest })),
    ...zh.map((r) => ({ zh: recipeUrl(r, 'zh'), en: enIds.has(r.id) ? recipeUrl(r, 'en') : undefined, lastmod: r.data.date })),
  ];

  const urlTag = (loc: string, p: Entry) => {
    const alt = p.en
      ? `\n    <xhtml:link rel="alternate" hreflang="zh-Hant" href="${base}${p.zh}"/>\n    <xhtml:link rel="alternate" hreflang="en" href="${base}${p.en}"/>`
      : '';
    const mod = p.lastmod ? `\n    <lastmod>${p.lastmod.toISOString().slice(0, 10)}</lastmod>` : '';
    return `  <url>\n    <loc>${base}${loc}</loc>${mod}${alt}\n  </url>`;
  };
  const body = pages.flatMap((p) => [urlTag(p.zh, p), ...(p.en ? [urlTag(p.en, p)] : [])]).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
