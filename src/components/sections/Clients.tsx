"use client";

import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Placeholder data since we don't have real logo images
const clients = [
  { name: "IndenizAero", logo: "/logos/indenizaero.png" },
  { name: "ALISIOS", logo: "/logos/alisios.png" },
  { name: "cliksys", logo: "/logos/cliksys.png" },
  { name: "COEVO", logo: "/logos/coevo.png" },
  { name: "Inventory", logo: "/logos/inventory.png" },
];

const testimonials = [
  {
    name: "Augusto Silveira",
    text: "Fiz uma excelente escolha, o trabalho é de alta qualidade. A comunicação com o atendimento é totalmente eficaz!",
    avatarColor: "bg-red-500",
    gender: "male"
  },
  {
    name: "Carlos Alexandre",
    text: "São especialistas na produção de vídeos, todo o processo é estruturado, do passo a passo do desenvolvimento dos vídeos e cronograma do projeto.",
    avatarColor: "bg-green-600",
    gender: "male"
  },
  {
    name: "Aline Silva",
    text: "Agradeço todo o empenho da em atender as nossas necessidades. O material produzido ficou excelente. Obrigado pela parceria.",
    avatarColor: "bg-blue-400",
    gender: "female"
  },
  {
    name: "Luiza Xavier",
    text: "Fomos de 15 clientes novos por mês para mais de 300 clientes por mês com a ajuda da INTERAGE VÍDEOS, e esse número continua aumentando! Incrível!",
    avatarColor: "bg-yellow-500",
    gender: "female"
  }
];

// Simple Avatar Component
const Avatar = ({ gender, className }: { gender: string, className?: string }) => {
  return (
    <div className={`rounded-full overflow-hidden flex items-center justify-center ${className}`}>
       <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white opacity-90">
          {gender === 'male' ? (
             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          ) : (
             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          )}
       </svg>
    </div>
  );
};

const Clients = () => {
  return (
    <section id="clientes" className="py-20 bg-white">
      <div className="container">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Play className="w-8 h-8 text-primary fill-transparent stroke-[1.5]" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nossos Clientes
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Atendemos clientes em todo o Brasil, confira algumas empresas que confiam e aprovam nosso trabalho.
          </p>
        </div>

        {/* Logos Carousel (Simulated) */}
        <div className="relative mb-20 px-4 md:px-12">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-primary transition-colors hidden md:block">
                <ChevronLeft size={32} />
            </button>
            
            <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Simulated Text Logos since we don't have images */}
                <div className="font-bold text-xl text-gray-700 flex items-center gap-2"><span className="text-primary text-2xl">⚡</span>IndenizAero</div>
                <div className="font-bold text-xl text-gray-700 flex items-center gap-2"><span className="text-blue-500 text-2xl">✇</span>ALISIOS</div>
                <div className="font-bold text-xl text-gray-700 flex items-center gap-2"><span className="text-cyan-500 text-2xl">●</span>cliksys</div>
                <div className="font-bold text-xl text-gray-700 flex items-center gap-2"><span className="text-green-600 text-2xl">⌂</span>COEVO</div>
                <div className="font-bold text-xl text-gray-700 flex items-center gap-2"><span className="text-orange-500 text-2xl">📦</span>Inventory</div>
            </div>

            <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-primary transition-colors hidden md:block">
                <ChevronRight size={32} />
            </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
                >
                    {/* Avatar */}
                    <div className={`w-20 h-20 ${item.avatarColor} rounded-full mb-6 p-2 shadow-md`}>
                        <Avatar gender={item.gender} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <p className="text-gray-600 italic text-sm mb-6 leading-relaxed">
                            "{item.text}"
                        </p>
                    </div>

                    {/* Name */}
                    <h4 className="font-bold text-gray-900 mt-auto">
                        {item.name}
                    </h4>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;
