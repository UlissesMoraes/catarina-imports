"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/Reveal";
import { galleryImages } from "@/data/site";

export function Galeria() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const prev = () =>
    setActive((i) =>
      i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length
    );
  const next = () =>
    setActive((i) => (i === null ? null : (i + 1) % galleryImages.length));

  return (
    <section id="galeria" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Conheça a loja"
          title="Galeria Catarina Imports"
          description="Um ambiente pensado para você viver a experiência Apple antes mesmo de levar seu novo produto para casa."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 [grid-auto-flow:dense]">
          {galleryImages.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 0.05}
              className={`${img.span ?? ""}`}
            >
              <button
                onClick={() => setActive(i)}
                className="group relative block h-full w-full overflow-hidden rounded-2xl bg-muted"
                style={{ aspectRatio: img.span === "row-span-2" ? "3/4" : img.span === "col-span-2" ? "16/8" : "1/1" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[80vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[active].src}
                alt={galleryImages[active].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            <button
              aria-label="Fechar"
              onClick={close}
              className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              aria-label="Anterior"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              aria-label="Próximo"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
