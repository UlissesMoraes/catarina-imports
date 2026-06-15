"use client";

import { useEffect } from "react";
import Script from "next/script";
import { Reveal, SectionHeader } from "@/components/Reveal";

const posts = [
  "https://www.instagram.com/p/DW4lgMIP0qn/",
  "https://www.instagram.com/p/DX4XlWWhj8a/",
  "https://www.instagram.com/p/DXh1nWOGfs3/",
  "https://www.instagram.com/p/DVzHgDokRS4/",
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export function Instagram() {
  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, []);

  return (
    <section id="instagram" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Acompanhe de perto"
          title="Catarina Imports no Instagram"
          description="Veja os bastidores, lançamentos e atendimentos direto do nosso perfil."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((url, i) => (
            <Reveal key={url} delay={(i % 4) * 0.05}>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{ margin: "0 auto", maxWidth: 540, minWidth: 280, width: "100%" }}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
      />
    </section>
  );
}
