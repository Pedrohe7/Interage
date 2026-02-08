"use client";

import { motion } from "framer-motion";
import { FileText, PenTool, Mic, Clapperboard } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <FileText className="w-6 h-6" />,
    title: "Briefing",
    description: "Coletamos as informações essenciais sobre seu negócio e objetivo.",
  },
  {
    id: 2,
    icon: <PenTool className="w-6 h-6" />,
    title: "Roteiro",
    description: "Criamos a narrativa persuasiva que será a base do seu vídeo.",
  },
  {
    id: 3,
    icon: <Mic className="w-6 h-6" />,
    title: "Narração",
    description: "Locução profissional com o tom de voz ideal para sua marca.",
  },
  {
    id: 4,
    icon: <Clapperboard className="w-6 h-6" />,
    title: "Animação",
    description: "Damos vida ao roteiro com design e movimento de alta qualidade.",
  },
];

const Process = () => {
  return (
    <section id="processo" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Como funciona nosso processo
          </h2>
          <p className="text-gray-600">
            Metodologia ágil e transparente para entregar seu vídeo em 7 dias.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-primary/20 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-white text-xs rounded-full flex items-center justify-center font-bold border-2 border-white">
                    {step.id}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
