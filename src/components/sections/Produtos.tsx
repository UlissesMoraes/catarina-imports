"use client";

import Image from "next/image";
import { Check, MessageCircle } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/Reveal";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { products, whatsappLink } from "@/data/site";

export function Produtos() {
  return (
    <section id="produtos" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Linha completa"
          title="Produtos Apple originais"
          description="Selecionamos os principais modelos da Apple para você, com procedência garantida, suporte local e o melhor atendimento de Blumenau."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.08}>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="group block w-full text-left">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-2xl font-semibold text-white">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-white/80 underline-offset-4 group-hover:underline">
                          Ver detalhes
                        </p>
                      </div>
                    </div>
                  </button>
                </DialogTrigger>

                <DialogContent>
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <DialogTitle>{product.name}</DialogTitle>
                  <DialogDescription>{product.description}</DialogDescription>
                  <ul className="grid gap-2 text-sm">
                    {product.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="whatsapp" className="mt-2">
                    <a
                      href={whatsappLink(
                        `Olá! Quero saber mais sobre ${product.name} disponível na Catarina Imports.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Consultar disponibilidade
                    </a>
                  </Button>
                </DialogContent>
              </Dialog>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
