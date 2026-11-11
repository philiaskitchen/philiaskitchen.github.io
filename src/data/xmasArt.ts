// 聖誕節小插圖（SVG），風格跟 logo 烤箱一樣：平塗＋深色鉛筆線
const INK = '#4A4536';

// 胖胖的聖誕帽：圓滾滾的帽身、蓬蓬的毛邊、大毛球
export const SANTA_HAT = `<svg viewBox="0 0 84 70" aria-hidden="true"><path d="M10 50C8 30 22 10 44 9c16-1 27 9 28 21 .5 6-1 11-4 15-1.5-6-5-11-10-12-6 3-9 11-9 19Z" fill="#C8352B" stroke="${INK}" stroke-width="2.6" stroke-linejoin="round"/><path d="M20 28c4-8 12-13 20-14" fill="none" stroke="#E2665A" stroke-width="3" stroke-linecap="round"/><path d="M6 52c0-5 4-7 7-6 1-4 6-5 8-2 2-3 7-3 9 0 2-3 7-3 9 0 2-3 7-2 8 1 4-1 7 2 6 6 1 5-3 8-7 7-1 3-6 4-8 1-2 3-7 3-9 0-2 3-7 3-9 0-2 3-7 3-8-1-4 2-8-1-8-5Z" fill="#FFF8EE" stroke="${INK}" stroke-width="2.4" stroke-linejoin="round"/><g class="pom"><circle cx="69" cy="50" r="10" fill="#FFF8EE" stroke="${INK}" stroke-width="2.4"/><path d="M64 46a5 5 0 0 1 5-3" fill="none" stroke="#E8E0CC" stroke-width="2" stroke-linecap="round"/></g></svg>`;

export const GINGERBREAD = `<svg viewBox="0 0 40 46" aria-hidden="true"><path d="M20 2a7 7 0 0 1 7 7c0 2-.6 3.4-1.6 4.6 3.2.2 9 .6 11.6 2.8 2 1.8.6 4.6-2 4.6h-6.6l3.8 14.6c.8 3-2.4 4.8-4.4 2.6L20 33l-7.8 5.6c-2 2.2-5.2.4-4.4-2.6L11.6 21H5c-2.6 0-4-2.8-2-4.6 2.6-2.2 8.4-2.6 11.6-2.8A7 7 0 0 1 13 9a7 7 0 0 1 7-7Z" fill="#B8733A" stroke="${INK}" stroke-width="1.8" stroke-linejoin="round"/><circle cx="17.4" cy="8" r="1.3" fill="${INK}"/><circle cx="22.6" cy="8" r="1.3" fill="${INK}"/><path d="M17 11.4q3 2.2 6 0" fill="none" stroke="#FFF8EE" stroke-width="1.4" stroke-linecap="round"/><circle cx="20" cy="19" r="1.6" fill="#C8352B"/><circle cx="20" cy="24.5" r="1.6" fill="#5F8B4C"/><path d="M6 18.5h4 M30 18.5h4 M12.5 34l2.5-2 M27.5 34l-2.5-2" stroke="#FFF8EE" stroke-width="1.4" stroke-linecap="round"/></svg>`;

export const GINGERBREAD_BURNT = GINGERBREAD.replace('#B8733A', '#2E211A').replace('<circle cx="17.4" cy="8" r="1.3" fill="#4A4536"/><circle cx="22.6" cy="8" r="1.3" fill="#4A4536"/>', '<path d="M15.6 6.4l3 3 M18.6 6.4l-3 3 M21.4 6.4l3 3 M24.4 6.4l-3 3" stroke="#F7E6C4" stroke-width="1.3" stroke-linecap="round"/>');

export const CANDY_CANE = `<svg viewBox="0 0 30 46" aria-hidden="true"><path d="M9 44V16a8 8 0 0 1 16 0v3" fill="none" stroke="${INK}" stroke-width="9" stroke-linecap="round"/><path d="M9 44V16a8 8 0 0 1 16 0v3" fill="none" stroke="#FFF8EE" stroke-width="6" stroke-linecap="round"/><path d="M9 44V16a8 8 0 0 1 16 0v3" fill="none" stroke="#C8352B" stroke-width="6" stroke-dasharray="4 4"/></svg>`;

export const STAR = `<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 3l5 10.6 11.6 1.5-8.5 8 2.2 11.5L20 29l-10.3 5.6 2.2-11.5-8.5-8L15 13.6Z" fill="#E8B33A" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/><circle cx="16" cy="18" r="1.2" fill="${INK}"/><circle cx="24" cy="18" r="1.2" fill="${INK}"/><path d="M17.6 22q2.4 1.8 4.8 0" fill="none" stroke="${INK}" stroke-width="1.3" stroke-linecap="round"/></svg>`;

export const BELL = `<svg viewBox="0 0 40 42" aria-hidden="true"><path d="M20 4c-7 0-11 6-11 13v8l-4 6h30l-4-6v-8c0-7-4-13-11-13Z" fill="#E8B33A" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/><circle cx="20" cy="34.5" r="3.5" fill="#C9963A" stroke="${INK}" stroke-width="1.6"/><path d="M12 4.5c3 2.5 5 3 8 3s5-.5 8-3" fill="none" stroke="#C8352B" stroke-width="3" stroke-linecap="round"/><path d="M14 13c1-3 3-5 5-5.6" fill="none" stroke="#FFF1C2" stroke-width="2" stroke-linecap="round"/></svg>`;

export const BAUBLE = `<svg viewBox="0 0 36 42" aria-hidden="true"><rect x="13" y="2" width="10" height="7" rx="1.5" fill="#E8B33A" stroke="${INK}" stroke-width="1.6"/><circle cx="18" cy="24" r="15" fill="#5F8B4C" stroke="${INK}" stroke-width="2"/><path d="M4 22q14 7 28 0" fill="none" stroke="#FFF8EE" stroke-width="2.4"/><path d="M5 28q13 6 26 0" fill="none" stroke="#C8352B" stroke-width="2.4"/><circle cx="12" cy="17" r="2.6" fill="#A9C79A"/></svg>`;

// 禮物盒（抽籤的聖誕版）：盒蓋是 .lid，會跳開
export const GIFT_BOX = `<svg class="gift" viewBox="0 0 120 170" width="120" height="170" aria-hidden="true"><g class="box"><rect x="18" y="78" width="84" height="78" rx="4" fill="#C8352B" stroke="${INK}" stroke-width="2.4"/><rect x="53" y="78" width="14" height="78" fill="#E8B33A" stroke="${INK}" stroke-width="1.6"/><path d="M24 92h20 M76 92h20" stroke="#E86A55" stroke-width="2" stroke-linecap="round"/></g><g class="lid"><rect x="12" y="60" width="96" height="20" rx="4" fill="#C8352B" stroke="${INK}" stroke-width="2.4"/><rect x="53" y="60" width="14" height="20" fill="#E8B33A" stroke="${INK}" stroke-width="1.6"/><path d="M60 60c-10-16-30-18-30-6 0 7 14 8 30 6Z M60 60c10-16 30-18 30-6 0 7-14 8-30 6Z" fill="#E8B33A" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/><circle cx="60" cy="58" r="5" fill="#E8B33A" stroke="${INK}" stroke-width="2"/></g><g class="pop" opacity="0"><path d="M60 50l3-8 3 8 8 3-8 3-3 8-3-8-8-3Z" fill="#FFE08A" stroke="#E8B33A" stroke-width="1.4"/><circle cx="38" cy="44" r="3" fill="#C8352B"/><circle cx="84" cy="40" r="3" fill="#5F8B4C"/><circle cx="74" cy="28" r="2.4" fill="#E8B33A"/></g></svg>`;

export const ORNAMENTS = [GINGERBREAD, CANDY_CANE, STAR, BELL, BAUBLE];

// 吊飾上方的小紅蝴蝶結（掛在遮陽棚上）
export const BOW = `<svg viewBox="0 0 30 18" aria-hidden="true"><path d="M15 9C10 2 3 1 3 6s7 6 12 3Zm0 0c5-7 12-8 12-3s-7 6-12 3Z" fill="#C8352B" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><path d="M13 10l-3 7 4-2 1 2 1-2 4 2-3-7" fill="#C8352B" stroke="${INK}" stroke-width="1.4" stroke-linejoin="round"/><circle cx="15" cy="9" r="2.6" fill="#E2665A" stroke="${INK}" stroke-width="1.4"/></svg>`;

// 各種表情、形狀的薑餅人（聖誕節點 logo 會跳出來）
type GOpts = { shape: 'man' | 'girl' | 'kid' | 'round'; face: 'smile' | 'wink' | 'o' | 'happy' | 'tongue' | 'sleepy'; icing: string; burnt?: boolean };
export function gingerbread({ shape, face, icing, burnt = false }: GOpts) {
  const body = burnt ? '#2E211A' : '#B8733A', line = burnt ? '#6B5A4A' : '#FFF8EE', eye = burnt ? '#F7E6C4' : INK;
  const kid = shape === 'kid', s = kid ? .82 : 1;
  const outline = shape === 'round'
    ? `<circle cx="20" cy="22" r="18" fill="${body}" stroke="${INK}" stroke-width="1.8"/>`
    : `<path d="M20 2a7 7 0 0 1 7 7c0 2-.6 3.4-1.6 4.6 3.2.2 9 .6 11.6 2.8 2 1.8.6 4.6-2 4.6h-6.6l3.8 14.6c.8 3-2.4 4.8-4.4 2.6L20 33l-7.8 5.6c-2 2.2-5.2.4-4.4-2.6L11.6 21H5c-2.6 0-4-2.8-2-4.6 2.6-2.2 8.4-2.6 11.6-2.8A7 7 0 0 1 13 9a7 7 0 0 1 7-7Z" fill="${body}" stroke="${INK}" stroke-width="1.8" stroke-linejoin="round"/>`
      + (shape === 'girl' ? `<path d="M11.6 24h16.8l4 11c.6 2-1 3.4-3 3.4H10.6c-2 0-3.6-1.4-3-3.4Z" fill="${body}" stroke="${INK}" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 33q11 4 22 0" fill="none" stroke="${line}" stroke-width="1.4" stroke-linecap="round" stroke-dasharray="2 2"/><path d="M15 3.5q-3-3-5 0 2 2.6 5 0Zm0 0q3-3 5 0-2 2.6-5 0Z" fill="${icing}" stroke="${INK}" stroke-width="1"/>` : '');
  const ey = shape === 'round' ? 17 : 8, cx = 20;
  const eyes = burnt ? `<path d="M${cx - 4.4} ${ey - 1.6}l3 3 M${cx - 1.4} ${ey - 1.6}l-3 3 M${cx + 1.4} ${ey - 1.6}l3 3 M${cx + 4.4} ${ey - 1.6}l-3 3" stroke="${eye}" stroke-width="1.3" stroke-linecap="round"/>`
    : face === 'wink' ? `<circle cx="${cx - 2.6}" cy="${ey}" r="1.3" fill="${eye}"/><path d="M${cx + 1.4} ${ey}q1.4-1.4 2.8 0" fill="none" stroke="${eye}" stroke-width="1.2" stroke-linecap="round"/>`
    : face === 'happy' ? `<path d="M${cx - 4} ${ey + .4}q1.4-1.8 2.8 0 M${cx + 1.2} ${ey + .4}q1.4-1.8 2.8 0" fill="none" stroke="${eye}" stroke-width="1.2" stroke-linecap="round"/>`
    : face === 'sleepy' ? `<path d="M${cx - 4} ${ey}h2.8 M${cx + 1.2} ${ey}h2.8" stroke="${eye}" stroke-width="1.2" stroke-linecap="round"/>`
    : `<circle cx="${cx - 2.6}" cy="${ey}" r="1.3" fill="${eye}"/><circle cx="${cx + 2.6}" cy="${ey}" r="1.3" fill="${eye}"/>`;
  const my = ey + 3.4;
  const mouth = burnt ? `<path d="M${cx - 2.6} ${my + .6}q1.3-1.2 2.6 0 1.3 1.2 2.6 0" fill="none" stroke="${eye}" stroke-width="1.2" stroke-linecap="round"/>`
    : face === 'o' ? `<ellipse cx="${cx}" cy="${my + .4}" rx="1.3" ry="1.6" fill="${INK}"/>`
    : face === 'tongue' ? `<path d="M${cx - 3} ${my - .4}q3 2.6 6 0" fill="none" stroke="${line}" stroke-width="1.4" stroke-linecap="round"/><path d="M${cx + .4} ${my + .9}q1.2 2 2.2 0" fill="#E2665A"/>`
    : `<path d="M${cx - 3} ${my - .4}q3 2.4 6 0" fill="none" stroke="${line}" stroke-width="1.4" stroke-linecap="round"/>`;
  const cheeks = burnt || face === 'sleepy' ? '' : `<circle cx="${cx - 5}" cy="${ey + 2.6}" r="1.4" fill="#E8857C" opacity=".8"/><circle cx="${cx + 5}" cy="${ey + 2.6}" r="1.4" fill="#E8857C" opacity=".8"/>`;
  const buttons = shape === 'round' ? `<path d="M8 22q12 10 24 0" fill="none" stroke="${line}" stroke-width="1.4" stroke-linecap="round" stroke-dasharray="2.4 2.2"/><circle cx="20" cy="28.5" r="1.8" fill="${burnt ? '#5A3F2E' : icing}"/>`
    : shape === 'girl' ? '' : `<circle cx="20" cy="19" r="1.6" fill="${burnt ? '#5A3F2E' : icing}"/><circle cx="20" cy="24.5" r="1.6" fill="${burnt ? '#5A3F2E' : '#5F8B4C'}"/><path d="M6 18.5h4 M30 18.5h4 M12.5 34l2.5-2 M27.5 34l-2.5-2" stroke="${line}" stroke-width="1.4" stroke-linecap="round"/>`;
  const sleepyZ = face === 'sleepy' && !burnt ? `<text x="30" y="6" font-size="6" fill="${INK}" font-family="sans-serif">z</text>` : '';
  return `<svg viewBox="0 0 40 46" aria-hidden="true"><g transform="translate(${20 - 20 * s} ${46 - 46 * s}) scale(${s})">${outline}${buttons}${eyes}${mouth}${cheeks}${sleepyZ}</g></svg>`;
}

