// ===== 首頁 logo 的小虎斑貓（逐格動畫，每一格都是畫好的完整的貓）=====
// 從畫面右邊走進來 → 在「理」右下方停下、坐下、兩腳站起抬頭、蹲低 → 跳過「房」→ 前腳先落在「廚」左下方
// → 站好 → 一直慢慢走出畫面左邊。每次打開首頁演一次。
// 點貓：貓停下來呼嚕、冒愛心，再繼續走（只跟貓互動，不會觸發烤箱彩蛋）。
import { CAT_WALK, CAT_SEQ, CAT_SEQ_SCALE } from '../data/catFrames';

type Fr = { u: string; w: number; h: number; bottom: number; footL: number; cx: number; cy: number };
const mk = (k: string) => (a: readonly number[], i: number): Fr => ({ u: `/images/site/cat/${k}-${i}.webp`, w: a[0], h: a[1], bottom: a[2], footL: a[3], cx: a[4], cy: a[5] });
const WALK = CAT_WALK.map(mk('walk')), SEQ = CAT_SEQ.map(mk('seq'));

// 停下、最高點、落地的位置（logo 原圖的 x 座標；中英文 logo 字的位置不一樣）
const SPOTS = { zh: { stop: 1600, apex: 1171, land: 921 }, en: { stop: 1500, apex: 1090, land: 850 } };
// 原地的連續動作：[第幾格, 停幾秒]
const GROUND: [number, number][] = [[0, 0.35], [1, 0.3], [2, 1.3], [3, 0.3], [4, 0.95], [5, 0.3], [6, 0.55], [7, 0.16]];
const LAND: [number, number][] = [[11, 0.14], [12, 0.2], [13, 0.4]];

export function logoCat(box: HTMLElement, lang: 'zh' | 'en', purrText: string) {
  const img = box.querySelector<HTMLImageElement>('img.logo');
  if (!img) return;
  const P = SPOTS[lang];
  const stage = document.createElement('div'); stage.className = 'cat-stage'; stage.setAttribute('aria-hidden', 'true');
  const A = document.createElement('img'), B = document.createElement('img');
  [A, B].forEach((el) => { el.className = 'cat-fr'; el.alt = ''; el.draggable = false; el.decoding = 'sync'; stage.append(el); });
  document.body.append(stage);

  let G: { LH: number; X: (s: number) => number; sW: number; sQ: number; ground: number; vw: number; v: number; stride: number };
  const measure = () => {
    const LH = img.clientHeight, r = img.getBoundingClientRect(), vw = document.documentElement.clientWidth;
    const top = r.top + scrollY - LH * 1.8;
    Object.assign(stage.style, { top: top + 'px', width: vw + 'px', height: LH * 3.2 + 'px' });
    const sc = LH / 264, sW = (0.74 * LH) / 131;
    G = { LH, X: (s) => r.left + s * sc, sW, sQ: sW * CAT_SEQ_SCALE, ground: LH * 2.66, vw, v: 0.28 * LH, stride: 0.6 * 0.74 * LH };
  };
  measure();
  addEventListener('resize', () => { if (stage.isConnected) measure(); });

  type Shown = { fr: Fr; s: number; x: number; y: number; anchor: 'core' | 'footL' | 'center' };
  let cur: Shown | null = null, fade: { from: Shown; t: number; d: number } | null = null, purr = 0;
  const st: { phase: string; x: number; dist: number; t: number; i: number } = { phase: 'in', x: G!.vw + 0.74 * G!.LH, dist: 0, t: 0, i: 0 };
  const stopX = () => G.X(P.stop), landX = () => G.X(P.land);
  const walkFrame = (d: number) => WALK[Math.floor((((d / G.stride) * 8) % 8) + 8) % 8];
  const ease = (k: number) => (k <= 0 ? 0 : k >= 1 ? 1 : k * k * (3 - 2 * k));
  const show = (fr: Fr, s: number, x: number, y: number, anchor: Shown['anchor'], fd = 0) => {
    if (fd && cur && cur.fr !== fr) fade = { from: cur, t: 0, d: fd };
    cur = { fr, s, x, y, anchor };
  };
  const put = (el: HTMLImageElement, c: Shown, op: number, wob = 0) => {
    const ax = (c.anchor === 'footL' ? c.fr.footL : c.fr.cx) * c.s, ay = (c.anchor === 'center' ? c.fr.cy : c.fr.bottom) * c.s;
    if (el.dataset.src !== c.fr.u) { el.src = c.fr.u; el.dataset.src = c.fr.u; }
    el.style.width = c.fr.w * c.s + 'px'; el.style.height = c.fr.h * c.s + 'px'; el.style.opacity = String(op);
    el.style.transform = `translate(${(c.x - ax + wob).toFixed(1)}px, ${(c.y - ay).toFixed(1)}px)`;
  };

  // 點貓：停下來呼嚕（身體輕輕抖）＋冒三顆愛心＋小標籤
  const pet = (e: Event) => {
    e.preventDefault(); e.stopPropagation();
    if (purr > 0 || st.phase === 'gone' || st.phase === 'fly') return;
    purr = 1.8;
    const c = cur!, w = c.fr.w * c.s, h = c.fr.h * c.s;
    const fx = c.x - (c.anchor === 'footL' ? c.fr.footL : c.fr.cx) * c.s, fy = c.y - (c.anchor === 'center' ? c.fr.cy : c.fr.bottom) * c.s;
    const fx0 = fx + w * 0.5, fy0 = fy + h * 0.15;
    for (let q = 0; q < 3; q++) {
      const hh = document.createElement('span'); hh.className = 'cat-heart'; hh.textContent = '♥';
      hh.style.left = fx0 + (q - 1) * w * 0.22 + 'px'; hh.style.top = fy0 + 'px'; hh.style.animationDelay = q * 0.22 + 's';
      stage.append(hh); setTimeout(() => hh.remove(), 2000);
    }
    const tag = document.createElement('span'); tag.className = 'cat-tag'; tag.textContent = purrText;
    tag.style.left = fx0 + 'px'; tag.style.top = fy - 4 + 'px';
    stage.append(tag); setTimeout(() => tag.remove(), 1900);
  };
  [A, B].forEach((el) => el.addEventListener('click', pet));

  let last = performance.now();
  const tick = (now: number) => {
    let dt = Math.max(0, Math.min(0.05, (now - last) / 1000)); last = now;
    if (purr > 0) { purr -= dt; dt = 0; }
    st.t += dt;
    const gy = G.ground;
    if (st.phase === 'in') {
      const remain = st.x - stopX(), v = Math.min(G.v, Math.max(G.v * 0.3, remain * 1.2));
      const dx = Math.min(v * dt, remain); st.x -= dx; st.dist += dx;
      show(walkFrame(st.dist), G.sW, st.x, gy, 'core');
      if (remain - dx < 0.5) { st.phase = 'ground'; st.i = 0; st.t = 0; }
    } else if (st.phase === 'ground') {
      const [f, d] = GROUND[st.i];
      show(SEQ[f], G.sQ, stopX(), gy, 'core', st.i === 0 ? 0.18 : 0.12);
      if (st.t > d) { st.i++; st.t = 0; if (st.i >= GROUND.length) st.phase = 'fly'; }
    } else if (st.phase === 'fly') {
      // 0.75 秒的弧線，最高點在「房」上方
      const k = Math.min(1, st.t / 0.75), s = G.sQ, f8 = SEQ[7], f12 = SEQ[11];
      const x0 = stopX(), y0 = gy - (f8.bottom - f8.cy) * s;
      const x1 = landX() + (f12.cx - f12.footL) * s, y1 = gy - (f12.bottom - f12.cy) * s;
      const ax = G.X(P.apex), ay = gy - 1.046 * G.LH;
      const cx = 2 * ax - (x0 + x1) / 2, cy = 2 * ay - (y0 + y1) / 2;
      const x = (1 - k) ** 2 * x0 + 2 * (1 - k) * k * cx + k * k * x1, y = (1 - k) ** 2 * y0 + 2 * (1 - k) * k * cy + k * k * y1;
      show(SEQ[k < 0.28 ? 8 : k < 0.66 ? 9 : 10], s, x, y, 'center');
      if (k >= 1) { st.phase = 'land'; st.i = 0; st.t = 0; }
    } else if (st.phase === 'land') {
      const [f, d] = LAND[st.i];
      show(SEQ[f], G.sQ, landX(), gy, 'footL', st.i ? 0.1 : 0);
      if (st.t > d) { st.i++; st.t = 0; if (st.i >= LAND.length) { st.phase = 'out'; const f14 = SEQ[13]; st.x = landX() + (f14.cx - f14.footL) * G.sQ; st.dist = 0; } }
    } else if (st.phase === 'out') {
      const v = Math.min(G.v, G.v * (0.35 + st.t * 1.3));
      st.x -= v * dt; st.dist += v * dt;
      show(walkFrame(st.dist), G.sW, st.x, gy, 'core', st.t < 0.25 ? 0.2 : 0);
      if (st.x < -0.8 * G.LH) { st.phase = 'gone'; stage.remove(); return; }
    }
    if (fade) { fade.t += dt; if (fade.t >= fade.d) fade = null; }
    const k = fade ? ease(fade.t / fade.d) : 1;
    const wob = purr > 0 ? Math.sin(now / 22) * Math.max(0.6, G.LH * 0.008) : 0;
    put(A, cur!, k, wob);
    if (fade) { put(B, fade.from, 1 - k, wob); B.style.display = ''; } else B.style.display = 'none';
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// 先把每一格的圖都載好，才開始演（不然走路時會閃）
export function startLogoCat() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const brand = document.querySelector<HTMLElement>('header .bar.home .brand');
  const box = brand?.querySelector<HTMLElement>('.logo-box');
  if (!brand || !box) return;
  const lang = document.documentElement.lang.startsWith('en') ? 'en' : 'zh';
  const urls = [...WALK, ...SEQ].map((f) => f.u);
  Promise.all(urls.map((u) => { const im = new Image(); im.src = u; return im.decode().catch(() => {}); }))
    .then(() => setTimeout(() => logoCat(box, lang, brand.dataset.purr || '♪'), 600));
}
