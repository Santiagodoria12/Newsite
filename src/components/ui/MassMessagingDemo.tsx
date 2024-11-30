import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Send, Users, BarChart } from 'lucide-react';

const Message = ({ children, isUser = false }) => (
  <div className={`${
    isUser ? 'bg-emerald-100 ml-auto' : 'bg-gray-100 mr-auto'
  } rounded-lg p-3 max-w-[80%] space-y-2 mb-4`}>
    {children}
  </div>
);

const campaigns = [
  {
    title: "Campaña de Seguros",
    messages: [
      "¡Hola María! 👋 Hemos notado que tu seguro de vida está próximo a vencer. ¿Te gustaría conocer nuestras nuevas opciones de renovación?",
      "Sí, me interesa conocer las opciones",
      "¡Excelente! 🌟 Basado en tu perfil, te recomendamos nuestro plan Premium Plus con:\n\n✅ Cobertura ampliada\n✅ Asistencia 24/7\n✅ Beneficios exclusivos\n\nPrecio especial por renovación anticipada: $299/mes"
    ]
  },
  {
    title: "Campaña Crediticia",
    messages: [
      "Hola Juan! 🎉 Felicidades! Has sido pre-aprobado para un crédito personal de hasta $50,000 con tasa preferencial.",
      "¿Cuál es la tasa de interés?",
      "Tu tasa pre-aprobada es de solo 12% anual 💫\n\nBeneficios exclusivos:\n✅ Sin comisión por apertura\n✅ Aprobación en 24 horas\n✅ Plazo flexible hasta 48 meses"
    ]
  }
];

export default function MassMessagingDemo() {
  const [currentCampaign, setCurrentCampaign] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCampaign(prev => (prev + 1) % campaigns.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4">
      <div className="flex items-center justify-between border-b pb-2 mb-4">
        <div className="flex items-center space-x-2">
          <Send className="w-6 h-6 text-emerald-500" />
          <span className="font-medium">Campañas Masivas</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Users className="w-4 h-4" />
          <span>10,000+ alcance</span>
          <BarChart className="w-4 h-4 ml-2" />
          <span>98% apertura</span>
        </div>
      </div>
      
      <div className="h-[500px] overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCampaign}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {campaigns[currentCampaign].messages.map((message, index) => (
              <Message key={index} isUser={index === 1}>
                {message}
              </Message>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}