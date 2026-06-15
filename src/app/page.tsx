import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { Produtos } from "@/components/sections/Produtos";
import { Assistencia } from "@/components/sections/Assistencia";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Galeria } from "@/components/sections/Galeria";
import { Sobre } from "@/components/sections/Sobre";
import { Mapa } from "@/components/sections/Mapa";
import { Contato } from "@/components/sections/Contato";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Produtos />
        <Assistencia />
        <Depoimentos />
        <Galeria />
        <Sobre />
        <Mapa />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
