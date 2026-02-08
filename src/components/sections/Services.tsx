"use client";

import { motion } from "framer-motion";
import { Video, Megaphone, MonitorPlay, Smartphone } from "lucide-react";

const services = [
  {
    icon: <MonitorPlay className="w-10 h-10 text-primary" />,
    title: "Vídeos Explicativos",
    description: "Simplifique ideias complexas e apresente seu produto de forma clara e envolvente.",
  },
  {
    icon: <Megaphone className="w-10 h-10 text-secondary" />,
    title: "Vídeos Publicitários",
    description: "Anúncios curtos e impactantes otimizados para conversão em redes sociais e YouTube.",
  },
  {
    icon: <Video className="w-10 h-10 text-primary" />,
    title: "Vídeos Institucionais",
    description: "Fortaleça a imagem da sua marca apresentando sua empresa, valores e infraestrutura.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-secondary" />,
    title: "Social Media",
    description: "Conteúdo dinâmico em formatos verticais (Reels/TikTok) para engajar sua audiência.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Soluções completas em vídeo
          </h2>
          <p className="text-gray-600">
            Do roteiro à animação final, criamos o vídeo ideal para cada objetivo do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="mb-6 bg-gray-50 w-16 h-16 rounded-lg flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
