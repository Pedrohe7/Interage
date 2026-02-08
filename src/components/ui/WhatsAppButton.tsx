"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      setShowBubble(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
          {/* Speech Bubble */}
          <AnimatePresence>
            {showBubble && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="relative bg-white text-gray-800 px-4 py-3 rounded-xl shadow-xl border border-gray-100 max-w-[200px]"
              >
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowBubble(false);
                  }}
                  className="absolute -top-2 -right-2 bg-gray-200 rounded-full p-1 text-gray-500 hover:bg-gray-300 transition-colors"
                >
                  <X size={12} />
                </button>
                <p className="font-bold text-sm leading-tight text-center">
                  Solicite seu <span className="text-green-600">orçamento agora!</span>
                </p>
                {/* Bubble Tail */}
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/5511999999999" // Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-green-500/30 transition-shadow flex items-center justify-center relative group"
          >
            <MessageCircle size={32} fill="currentColor" className="text-white" />
            
            {/* Ping Animation */}
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
            </span>
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
