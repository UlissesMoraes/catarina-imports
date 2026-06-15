"use client";

import { MapPin, Clock, Phone } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/Reveal";
import { company } from "@/data/site";

export function Mapa() {
  const mapsEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    company.mapsQuery
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    company.mapsQuery
  )}`;

  return (
    <section className="section-pad bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Visite-nos"
          title="Estamos em Vila Nova, Blumenau"
          description="Venha conhecer nosso espaço, experimentar os produtos e tirar suas dúvidas com nossa equipe."
        />

        <Reveal className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="overflow-hidden rounded-2xl lg:col-span-2">
            <iframe
              title="Localização Catarina Imports no Google Maps"
              src={mapsEmbedSrc}
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0, minHeight: 400 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-6 rounded-2xl bg-background p-8 ring-1 ring-border/60">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <p className="font-medium">Endereço</p>
                <p className="text-sm text-muted-foreground">
                  {company.address}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <p className="font-medium">Telefone / WhatsApp</p>
                <p className="text-sm text-muted-foreground">
                  {company.phone}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <p className="font-medium">Horário</p>
                <p className="text-sm text-muted-foreground">
                  Segunda a sábado · 9h às 18h
                </p>
              </div>
            </div>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90"
            >
              Abrir no Google Maps
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
