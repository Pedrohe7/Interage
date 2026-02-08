"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Play, CheckSquare, Square } from "lucide-react";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ddd: "",
    phone: "",
    comments: "",
    isHuman: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Obrigado! Sua solicitação foi enviada. Entraremos em contato em breve.");
  };

  return (
    <section id="orcamento" className="py-20 bg-gray-50">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Play className="w-8 h-8 text-primary fill-transparent stroke-[1.5]" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Solicite um Orçamento
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entre em contato conosco! Utilize o <span className="font-bold text-gray-900">formulário</span> abaixo ou fale direto via <span className="font-bold text-gray-900">WhatsApp</span> com nossos Consultores.
          </p>
        </div>

        {/* Form Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-100 rounded-2xl p-6 md:p-10 shadow-sm border border-gray-200"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Seu Nome <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                placeholder=""
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail Corporativo <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                placeholder=""
              />
            </div>

            {/* Phone Row */}
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-3 md:col-span-2">
                <label htmlFor="ddd" className="block text-sm font-medium text-gray-700 mb-1">
                  DDD <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="ddd"
                  name="ddd"
                  required
                  maxLength={2}
                  value={formData.ddd}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white text-center"
                  placeholder="11"
                />
              </div>
              <div className="col-span-9 md:col-span-10">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                  placeholder="99999-9999"
                />
              </div>
            </div>

            {/* Comments */}
            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                Comentários <span className="text-red-500">*</span>
              </label>
              <textarea
                id="comments"
                name="comments"
                required
                rows={4}
                value={formData.comments}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white resize-none"
              />
            </div>

            {/* Fake Captcha */}
            <div className="bg-white border border-gray-300 rounded p-3 flex items-center justify-between max-w-[250px]">
              <div className="flex items-center gap-3">
                 <button 
                   type="button"
                   onClick={() => setFormData(prev => ({...prev, isHuman: !prev.isHuman}))}
                   className="focus:outline-none"
                 >
                    {formData.isHuman ? (
                      <CheckSquare className="w-6 h-6 text-green-600" />
                    ) : (
                      <Square className="w-6 h-6 text-gray-300" />
                    )}
                 </button>
                 <span className="text-sm text-gray-600">I am human</span>
              </div>
              <div className="flex flex-col items-center opacity-70">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Recaptcha_Logo.svg/1200px-Recaptcha_Logo.svg.png" className="w-8 h-8 object-contain" alt="captcha" />
                <span className="text-[8px] text-gray-400">Privacy - Terms</span>
              </div>
            </div>

            {/* Submit */}
            <Button 
              type="submit" 
              size="lg" 
              className="w-32 bg-[#334155] hover:bg-[#1e293b] text-white rounded-lg shadow-none"
              disabled={!formData.isHuman}
            >
              Enviar
            </Button>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Quote;
