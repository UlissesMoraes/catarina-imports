"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/Reveal";

type Reel = {
  src: string;
  poster?: string;
  link: string;
};

const reels: Reel[] = [
  { src: "/videos/reel-1.mp4", poster: "/images/instagram/reel-1.jpg", link: "https://www.instagram.com/p/DW4lgMIP0qn/" },
  { src: "/videos/reel-2.mp4", poster: "/images/instagram/reel-2.jpg", link: "https://www.instagram.com/p/DX4XlWWhj8a/" },
  { src: "/videos/reel-3.mp4", poster: "/images/instagram/reel-3.jpg", link: "https://www.instagram.com/p/DXh1nWOGfs3/" },
];

function ReelCard({ reel }: { reel: Reel }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  return (
    <a
      href={reel.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[9/16] w-full overflow-hidden rounded-2xl bg-muted"
    >
      <video
        ref={videoRef}
        src={reel.src}
        poster={reel.poster}
        autoPlay
        loop
        muted={muted}
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <button
        aria-label={muted ? "Ativar som" : "Mutar"}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setMuted((m) => !m);
        }}
        className="absolute bottom-3 right-3 z-10 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
    </a>
  );
}

export function Instagram() {
  return (
    <section id="instagram" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Acompanhe de perto"
          title="Catarina Imports no Instagram"
          description="Veja os bastidores, lançamentos e atendimentos direto do nosso perfil. @catarina.imports"
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {reels.map((reel, i) => (
            <Reveal key={reel.link} delay={(i % 4) * 0.05}>
              <ReelCard reel={reel} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
