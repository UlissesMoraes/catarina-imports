"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images, whatsappLink } from "@/data/site";

const links = [
  { href: "#produtos", label: "Produtos" },
  { href: "#assistencia", label: "Assistência" },
  { href: "#galeria", label: "Galeria" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#home" className="flex items-center gap-2">
          <Image
            src={images.logo}
            alt="Catarina Imports"
            width={160}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            variant="whatsapp"
            size="sm"
            className="rounded-full"
          >
            <a href={whatsappLink("Olá! Vim pelo site da Catarina Imports.")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        <button
          aria-label="Abrir menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col gap-4 px-6 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="whatsapp" className="mt-2 w-full rounded-full">
              <a href={whatsappLink("Olá! Vim pelo site da Catarina Imports.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
