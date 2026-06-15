"use client";

import { Quote, Star } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/Reveal";
import { company, testimonials } from "@/data/site";

export function Depoimentos() {
  return (
    <section className="section-pad bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Avaliações"
          title="Quem já visitou, recomenda"
          description={`Nota máxima no Google, com ${company.reviewsLabel.toLowerCase()}.`}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.1}>
              <figure className="flex h-full flex-col justify-between rounded-2xl bg-background p-8 shadow-sm ring-1 ring-border/60">
                <div>
                  <Quote className="h-8 w-8 text-brand/30" />
                  <blockquote className="mt-4 text-lg leading-relaxed text-foreground">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-1 text-accent-gold">
                  {Array.from({ length: company.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
