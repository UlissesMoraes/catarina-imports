# Catarina Imports — Site Premium

Site institucional da **Catarina Imports**, especialista Apple em Blumenau (SC), construído com Next.js 15, TypeScript, Tailwind CSS, Framer Motion e componentes no estilo Shadcn UI. Design inspirado na Apple (hero em tela cheia, parallax, tipografia grande, seções claras/escuras, galeria com lightbox).

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (parallax, scroll reveal, fade/zoom)
- Componentes UI (Button, Dialog) no padrão Shadcn UI / Radix UI
- SEO local (metadata + JSON-LD `ElectronicsStore`) com foco em "iPhone Blumenau", "Apple Blumenau", "MacBook Blumenau", "AirPods Blumenau", "Assistência Apple Blumenau"

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## ⚠️ Substituindo as imagens placeholder pelas fotos reais da loja

Todas as imagens em `public/images/**` são **placeholders gerados** (gradientes com texto indicativo), pois ainda não foi possível anexar as fotos reais da loja a este repositório. Para finalizar o site, substitua os arquivos abaixo pelas fotos reais **mantendo os mesmos nomes** (pode trocar a extensão para `.jpg`/`.webp`, só ajuste o caminho em `src/data/site.ts` se mudar a extensão):

| Arquivo placeholder | Substituir por |
| --- | --- |
| `public/images/hero/hero-loja.svg` | Foto do balcão de vidro com iPhones e o logo "catarina IMPORTS" (hero da home) |
| `public/images/loja/balcao-iphones.svg` | Mesma foto do balcão/vitrine (galeria) |
| `public/images/loja/interior-ambiente.svg` | Foto do ambiente interno (parede verde, piso de madeira, LED) |
| `public/images/loja/parede-produtos.svg` | Foto da parede de produtos/acessórios em grid |
| `public/images/loja/lounge.svg` | Foto da área de espera/lounge com o logo na parede |
| `public/images/sobre/sobre-1.svg` | Foto do ambiente interno (seção "Sobre") |
| `public/images/sobre/sobre-2.svg` | Foto da equipe / atendimento |
| `public/images/assistencia/bancada-1.svg` | Foto da bancada de assistência técnica |
| `public/images/assistencia/bancada-2.svg` | Foto de ferramentas/diagnóstico |
| `public/images/produtos/iphone.svg` | Foto real de iPhone disponível na loja |
| `public/images/produtos/macbook.svg` | Foto real de MacBook |
| `public/images/produtos/ipad.svg` | Foto real de iPad |
| `public/images/produtos/airpods.svg` | Foto real de AirPods |
| `public/images/produtos/apple-watch.svg` | Foto real de Apple Watch |
| `public/images/logo/logo.svg` | Logo "catarina IMPORTS" em alta resolução |

Os caminhos das imagens estão centralizados em `src/data/site.ts` (`images`, `products`, `galleryImages`), facilitando a troca.

## Conteúdo e dados da empresa

Todos os textos institucionais, produtos, serviços, depoimentos e dados de contato (endereço, WhatsApp, avaliações) estão centralizados em `src/data/site.ts`.

## Deploy na Vercel

```bash
npm run build
```

Basta importar o repositório no [Vercel](https://vercel.com/new) — não é necessária nenhuma configuração extra.
