"use client";

import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingInstagram() {
  return (
    <motion.a
      href="https://www.instagram.com/catarina.imports"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      aria-label="Instagram"
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg shadow-black/20"
      style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285aeb 90%)" }}
    >
      <Instagram className="h-7 w-7" />
    </motion.a>
  );
}
