"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1.500+", label: "Clientes Atendidos" },
  { value: "3.000+", label: "Projetos Entregues" },
  { value: "7 Dias", label: "Prazo Médio de Entrega" },
  { value: "98%", label: "Satisfação dos Clientes" },
];

const Stats = () => {
  return (
    <section className="py-12 bg-gray-900 text-white border-y border-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 text-accent">{stat.value}</div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
