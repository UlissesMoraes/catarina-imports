"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, images, whatsappLink } from "@/data/site";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-[100vh] min-h-[640px] w-full overflow-hidden bg-surface-dark"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-parallax"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md"
        >
          <div className="flex items-center gap-0.5 text-accent-gold">
            {Array.from({ length: company.rating }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>
          <span className="text-xs font-medium tracking-wide text-white/90">
            {company.reviewsLabel}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="display-1 mt-6 max-w-4xl"
        >
          Apple Premium
          <br />
          Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl"
        >
          iPhone, MacBook, iPad e assistência especializada com atendimento
          nota máxima.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button
            asChild
            variant="whatsapp"
            size="lg"
            className="shadow-lg shadow-black/20"
          >
            <a
              href={whatsappLink("Olá! Vim pelo site da Catarina Imports e gostaria de mais informações.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </Button>
          <Button asChild variant="light" size="lg">
            <a href="#produtos">
              Ver Produtos
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/60">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-5 rounded-full border border-white/40 p-1"
        >
          <div className="h-2 w-1 rounded-full bg-white/80" />
        </motion.div>
      </div>
    </section>
  );
}
