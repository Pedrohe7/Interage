"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const projects = [
  { id: 1, title: "App Delivery", category: "Explicativo" },
  { id: 2, title: "Fintech Solutions", category: "Institucional" },
  { id: 3, title: "Educação Online", category: "Motion Graphics" },
  { id: 4, title: "Startup Pitch", category: "Pitch" },
  { id: 5, title: "Clínica Saúde", category: "Redes Sociais" },
  { id: 6, title: "E-commerce Moda", category: "Publicitário" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Nossos trabalhos recentes
          </h2>
          <p className="text-gray-600">
            Confira alguns dos vídeos que produzimos para clientes de todo o Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-video bg-gray-200 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
            >
              <div className="absolute inset-0 bg-gray-800/20 group-hover:bg-gray-800/40 transition-colors" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-primary fill-current" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
