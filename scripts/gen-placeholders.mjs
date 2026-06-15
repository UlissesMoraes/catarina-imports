import fs from "node:fs";
import path from "node:path";

const root = path.join(process.cwd(), "public", "images");

const palette = [
  ["#0c4a3a", "#1f6f4a"],
  ["#1d1d1f", "#3a3a3c"],
  ["#0c4a3a", "#c8a45c"],
  ["#3a3a3c", "#0c4a3a"],
  ["#c8a45c", "#1d1d1f"],
];

function svg(label, sub, w, h, colors) {
  const [c1, c2] = colors;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <g fill="#ffffff" opacity="0.92" font-family="Helvetica, Arial, sans-serif" text-anchor="middle">
    <text x="${w / 2}" y="${h / 2 - 10}" font-size="${Math.max(28, w / 22)}" font-weight="600" letter-spacing="2">${label}</text>
    <text x="${w / 2}" y="${h / 2 + 28}" font-size="${Math.max(14, w / 55)}" opacity="0.75" letter-spacing="4">${sub}</text>
  </g>
</svg>`;
}

const images = [
  { p: "hero/hero-loja.svg", label: "CATARINA IMPORTS", sub: "FOTO REAL DA FACHADA / BALCAO", w: 1920, h: 1280, c: 0 },
  { p: "produtos/iphone.svg", label: "iPhone", sub: "FOTO REAL DO PRODUTO", w: 1200, h: 1200, c: 2 },
  { p: "produtos/macbook.svg", label: "MacBook", sub: "FOTO REAL DO PRODUTO", w: 1200, h: 1200, c: 1 },
  { p: "produtos/ipad.svg", label: "iPad", sub: "FOTO REAL DO PRODUTO", w: 1200, h: 1200, c: 2 },
  { p: "produtos/airpods.svg", label: "AirPods", sub: "FOTO REAL DO PRODUTO", w: 1200, h: 1200, c: 4 },
  { p: "produtos/apple-watch.svg", label: "Apple Watch", sub: "FOTO REAL DO PRODUTO", w: 1200, h: 1200, c: 1 },
  { p: "loja/balcao-iphones.svg", label: "Balcao com iPhones", sub: "FACHADA / VITRINE", w: 1400, h: 1800, c: 0 },
  { p: "loja/interior-ambiente.svg", label: "Ambiente Interno", sub: "PAREDE VERDE + MADEIRA", w: 2000, h: 1200, c: 3 },
  { p: "loja/parede-produtos.svg", label: "Parede de Produtos", sub: "ACESSORIOS EM GRID", w: 1400, h: 1400, c: 4 },
  { p: "loja/lounge.svg", label: "Lounge", sub: "LOGO + TIJOLINHOS", w: 1400, h: 1400, c: 2 },
  { p: "assistencia/bancada-1.svg", label: "Assistencia Tecnica", sub: "BANCADA DE REPARO", w: 1600, h: 1200, c: 1 },
  { p: "assistencia/bancada-2.svg", label: "Diagnostico", sub: "FERRAMENTAS DE PRECISAO", w: 1600, h: 1200, c: 3 },
  { p: "sobre/sobre-1.svg", label: "Nossa Historia", sub: "AMBIENTE CATARINA IMPORTS", w: 1600, h: 1200, c: 0 },
  { p: "sobre/sobre-2.svg", label: "Atendimento", sub: "EQUIPE CATARINA IMPORTS", w: 1600, h: 1200, c: 4 },
  { p: "logo/logo.svg", label: "catarina IMPORTS", sub: "LOGO", w: 800, h: 400, c: 0 },
];

for (const img of images) {
  const full = path.join(root, img.p);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, svg(img.label, img.sub, img.w, img.h, palette[img.c]));
  console.log("wrote", img.p);
}
