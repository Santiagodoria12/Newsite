import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

interface CTAButtonProps {
  text: string;
  href?: string; // Nuevo prop para el enlace
  className?: string;
}

export default function CTAButton({ text, href, className = '' }: CTAButtonProps) {
  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target="_blank" // Abre el enlace en una nueva pestaña
        rel="noopener noreferrer" // Mejora seguridad
        className={`inline-flex items-center space-x-2 bg-[#42b6f5] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#42b6f5] transition-colors ${className}`}
      >
        <MessageSquare className="w-5 h-5" />
        <span>{text}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center space-x-2 bg-[#42b6f5] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#42b6f5] transition-colors ${className}`}
    >
      <MessageSquare className="w-5 h-5" />
      <span>{text}</span>
    </motion.button>
  );
}
