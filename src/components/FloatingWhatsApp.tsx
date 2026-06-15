"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { whatsappLink } from "@/data/site";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappLink("Olá! Vim pelo site da Catarina Imports.")}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20"
    >
      <MessageCircle className="h-7 w-7" />
    </motion.a>
  );
}
