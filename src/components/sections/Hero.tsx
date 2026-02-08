"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Atendemos todo o Brasil
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
            Potencialize seu negócio com <span className="text-primary">vídeos animados</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Aumente suas vendas e engaje seu público com vídeos explicativos de alta conversão. Entregamos a primeira versão em <span className="font-bold text-gray-900">apenas 7 dias</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button 
              size="lg" 
              className="group"
              onClick={() => document.getElementById("orcamento")?.scrollIntoView({ behavior: "smooth" })}
            >
              Quero meu vídeo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Ver Portfólio
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span>Mais de 3.000 projetos</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span>Desde 2015 no mercado</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
             {/* Placeholder for video/image */}
             <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:opacity-100 transition-opacity" />
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg z-20 group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-primary border-b-[10px] border-b-transparent ml-1"></div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                  Video_Institucional_Final.mp4
                </div>
             </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
