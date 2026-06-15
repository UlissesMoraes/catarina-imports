"use client";

import Image from "next/image";
import {
  Smartphone,
  BatteryCharging,
  Cpu,
  SearchCheck,
  MessageCircle,
} from "lucide-react";
import { Reveal, SectionHeader } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { services, images, whatsappLink } from "@/data/site";

const icons = {
  smartphone: Smartphone,
  "battery-charging": BatteryCharging,
  cpu: Cpu,
  "search-check": SearchCheck,
};

export function Assistencia() {
  return (
    <section id="assistencia" className="section-pad bg-surface-dark text-surface-dark-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Suporte especializado"
          title="Assistência Técnica Apple"
          description="Equipe certificada e ferramentas de precisão para devolver a performance original do seu dispositivo Apple."
          light
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src={images.assistencia[0]}
                alt="Bancada de assistência técnica Catarina Imports"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={images.assistencia[1]}
                alt="Diagnóstico de precisão Catarina Imports"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-white/5 p-6 flex flex-col justify-center">
              <p className="text-4xl font-semibold text-accent-gold">100%</p>
              <p className="mt-2 text-sm text-white/70">
                Diagnóstico transparente antes de qualquer reparo, sem
                surpresas no orçamento.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service, i) => {
              const Icon = icons[service.icon as keyof typeof icons];
              return (
                <Reveal key={service.id} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/15 text-accent-gold">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm text-white/65">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button asChild variant="whatsapp" size="lg">
            <a
              href={whatsappLink(
                "Olá! Gostaria de agendar um diagnóstico na Catarina Imports."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar diagnóstico gratuito
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
