export const company = {
  name: "Catarina Imports",
  segment: "Especialista Apple",
  phone: "(47) 99742-0175",
  phoneRaw: "5547997420175",
  address: "Rua Almirante Barroso, 909, Sala 804, Vila Nova, Blumenau - SC",
  mapsQuery: "Rua Almirante Barroso, 909, Sala 804, Vila Nova, Blumenau - SC",
  rating: 5,
  reviewsLabel: "Mais de 340 avaliações",
};

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${company.phoneRaw}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const images = {
  logo: "/images/logo/logo.png",
  hero: "/images/hero/hero-loja.jpg",
  sobre: ["/images/sobre/sobre-1.jpg", "/images/sobre/sobre-2.jpg"],
  assistencia: ["/images/loja/balcao-iphones.jpg", "/images/sobre/sobre-2.jpg"],
};

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  highlights: string[];
};

export const products: Product[] = [
  {
    id: "iphone",
    name: "iPhone",
    description:
      "Os modelos mais recentes de iPhone, com procedência garantida e garantia Catarina Imports.",
    image: "/images/produtos/iphone.webp",
    highlights: [
      "Linhas iPhone 15 e 16",
      "Aparelhos novos e seminovos selecionados",
      "Garantia e suporte local",
      "Aceitamos seu usado na troca",
    ],
  },
  {
    id: "macbook",
    name: "MacBook",
    description:
      "MacBook Air e MacBook Pro com chips Apple Silicon para performance e portabilidade premium.",
    image: "/images/produtos/macbook.jpg",
    highlights: [
      "MacBook Air e MacBook Pro",
      "Chips M-series Apple Silicon",
      "Configurações sob consulta",
      "Acessórios e cases originais",
    ],
  },
  {
    id: "ipad",
    name: "iPad",
    description:
      "iPad, iPad Air e iPad Pro para criar, estudar e trabalhar com a fluidez do ecossistema Apple.",
    image: "/images/produtos/ipad.jpg",
    highlights: [
      "iPad, Air e Pro",
      "Compatível com Apple Pencil",
      "Capas e teclados disponíveis",
      "Configuração inicial inclusa",
    ],
  },
  {
    id: "airpods",
    name: "AirPods",
    description:
      "AirPods, AirPods Pro e AirPods Max com áudio espacial e cancelamento de ruído.",
    image: "/images/produtos/airpods.jpg",
    highlights: [
      "AirPods, Pro e Max",
      "Áudio espacial",
      "Cancelamento ativo de ruído",
      "Originais com garantia",
    ],
  },
  {
    id: "apple-watch",
    name: "Apple Watch",
    description:
      "Apple Watch Series e Ultra para saúde, treino e conectividade no seu pulso.",
    image: "/images/produtos/apple-watch.png",
    highlights: [
      "Series e Ultra",
      "Pulseiras e acessórios",
      "Monitoramento de saúde",
      "Pareamento e configuração no local",
    ],
  },
];

export type Service = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "troca-tela",
    name: "Troca de Tela",
    description:
      "Substituição de telas originais e de alta qualidade para iPhone, iPad e MacBook, com agilidade e garantia.",
    icon: "smartphone",
  },
  {
    id: "troca-bateria",
    name: "Troca de Bateria",
    description:
      "Recupere a autonomia do seu aparelho com baterias de procedência testadas e instaladas por técnicos especializados.",
    icon: "battery-charging",
  },
  {
    id: "reparo-avancado",
    name: "Reparo Avançado",
    description:
      "Manutenção em placas e componentes internos, com diagnóstico microscópico e solda de precisão.",
    icon: "cpu",
  },
  {
    id: "diagnostico",
    name: "Diagnóstico",
    description:
      "Avaliação completa e gratuita do seu dispositivo Apple para identificar o problema com precisão antes do reparo.",
    icon: "search-check",
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Ótimos produtos, atendimento excelente, melhor preço do mercado.",
    author: "Cliente Google",
  },
  {
    id: "t2",
    quote: "Ambiente aconchegante e aparelhos de ótima procedência.",
    author: "Cliente Google",
  },
  {
    id: "t3",
    quote:
      "Vendedores atenciosos antes, durante e também no pós venda.",
    author: "Cliente Google",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  category: "fachada" | "interior" | "produtos" | "equipe" | "assistencia";
  span?: "row-span-2" | "col-span-2";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/loja/balcao-iphones.jpg",
    alt: "Balcão de vidro com iPhones em exposição e logo Catarina Imports",
    category: "fachada",
    span: "row-span-2",
  },
  {
    src: "/images/loja/interior-ambiente.jpg",
    alt: "Ambiente interno da loja com piso de madeira, parede verde e iluminação LED",
    category: "interior",
    span: "col-span-2",
  },
  {
    src: "/images/produtos/iphone.webp",
    alt: "iPhone em exposição na Catarina Imports",
    category: "produtos",
  },
  {
    src: "/images/sobre/sobre-1.jpg",
    alt: "Área de espera com logo Catarina Imports e parede de tijolinhos",
    category: "interior",
  },
  {
    src: "/images/sobre/sobre-2.jpg",
    alt: "Balcão de produtos Catarina Imports",
    category: "assistencia",
  },
  {
    src: "/images/hero/hero-loja.jpg",
    alt: "Fachada e interior da Catarina Imports",
    category: "equipe",
  },
];

export const seo = {
  title: "Catarina Imports | Apple Premium Experience em Blumenau, SC",
  description:
    "Catarina Imports é a especialista Apple em Blumenau: iPhone, MacBook, iPad, AirPods e Apple Watch com procedência garantida, além de assistência técnica especializada — troca de tela, troca de bateria e diagnóstico.",
  keywords: [
    "iPhone Blumenau",
    "Apple Blumenau",
    "MacBook Blumenau",
    "AirPods Blumenau",
    "Assistência Apple Blumenau",
    "iPad Blumenau",
    "Apple Watch Blumenau",
    "loja Apple Blumenau",
  ],
};
