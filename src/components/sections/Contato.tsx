"use client";

import { useState } from "react";
import { MessageCircle, Send, Phone } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { company, whatsappLink } from "@/data/site";

export function Contato() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, meu nome é ${name || "[seu nome]"}. ${message}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="section-pad bg-surface-dark text-surface-dark-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Fale com a gente"
          title="Vamos conversar?"
          description="Tire suas dúvidas, consulte disponibilidade de produtos ou agende sua assistência técnica em poucos cliques."
          light
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <div>
                <label htmlFor="name" className="text-sm font-medium text-white/80">
                  Nome
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent-gold"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-white/80">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent-gold"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <Button type="submit" variant="whatsapp" size="lg" className="w-full">
                <Send className="h-4 w-4" />
                Enviar via WhatsApp
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <p className="eyebrow text-accent-gold">Atendimento rápido</p>
              <h3 className="mt-3 text-2xl font-semibold">
                Prefere falar agora?
              </h3>
              <p className="mt-2 text-white/65">
                Nossa equipe responde rapidamente pelo WhatsApp, de segunda a
                sábado.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="whatsapp" size="lg">
                  <a
                    href={whatsappLink(
                      "Olá! Vim pelo site e gostaria de falar com a equipe Catarina Imports."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href={`tel:+${company.phoneRaw}`}>
                    <Phone className="h-5 w-5" />
                    {company.phone}
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <p className="eyebrow text-accent-gold">Endereço</p>
              <p className="mt-3 text-lg">{company.address}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
