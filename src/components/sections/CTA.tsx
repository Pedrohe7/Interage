"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pronto para impulsionar seu negócio?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Solicite um orçamento agora e receba seu vídeo animado em até 7 dias.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-10 shadow-xl hover:shadow-2xl"
            onClick={() => document.getElementById("orcamento")?.scrollIntoView({ behavior: "smooth" })}
          >
            Solicitar Orçamento Grátis
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
