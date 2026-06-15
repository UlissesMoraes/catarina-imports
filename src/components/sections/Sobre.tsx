"use client";

import Image from "next/image";
import { MapPin, Award, Users } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/Reveal";
import { company, images } from "@/data/site";

export function Sobre() {
  return (
    <section id="sobre" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nossa história"
          title={`${company.name}, especialista Apple em Blumenau`}
          description="Mais do que uma loja, um espaço pensado para você experimentar o ecossistema Apple com conforto, confiança e atendimento de verdade."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src={images.sobre[0]}
                alt="Ambiente interno Catarina Imports com parede verde e iluminação ambiente"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={images.sobre[1]}
                alt="Equipe Catarina Imports"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Localizada na Rua Almirante Barroso, no coração de Vila Nova, a
              Catarina Imports nasceu com um propósito simples: trazer a
              experiência premium da Apple para Blumenau, com produtos de
              procedência garantida e um ambiente acolhedor, com parede
              verde, marcenaria sob medida e iluminação que valoriza cada
              detalhe — assim como uma Apple Store.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Hoje somos referência em iPhone, MacBook, iPad, AirPods e Apple
              Watch na região, com uma equipe pronta para te ajudar a escolher
              o produto certo e, quando necessário, devolver a vida ao seu
              aparelho com nossa assistência técnica especializada.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="flex flex-col gap-2">
                <Award className="h-6 w-6 text-brand" />
                <p className="text-2xl font-semibold">340+</p>
                <p className="text-sm text-muted-foreground">
                  Avaliações 5 estrelas no Google
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Users className="h-6 w-6 text-brand" />
                <p className="text-2xl font-semibold">{company.segment}</p>
                <p className="text-sm text-muted-foreground">
                  Foco total no ecossistema Apple
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <MapPin className="h-6 w-6 text-brand" />
                <p className="text-2xl font-semibold">Blumenau</p>
                <p className="text-sm text-muted-foreground">{company.address}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
