import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const words = ['Banca', 'Fintech', 'Seguros'];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center min-w-[140px] h-[1.2em] relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 text-[#42b6f5] whitespace-nowrap flex items-center"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}