import { motion } from 'framer-motion';
import { Shield, Check } from 'lucide-react';

const Message = ({ children, delay, isUser = false }) => (
  <motion.div
    initial={{ opacity: 0, x: isUser ? 20 : -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className={`${
      isUser ? 'bg-emerald-100 mr-auto' : 'bg-gray-100 ml-auto'
    } rounded-lg p-3 max-w-[80%] space-y-2`}
  >
    {children}
  </motion.div>
);

export default function WhatsAppDemo() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-sm mx-auto bg-white rounded-2xl shadow-xl p-4 space-y-4"
    >
      <div className="flex items-center space-x-2 border-b pb-2">
        <Shield className="w-6 h-6 text-emerald-500" />
        <span className="font-medium">Verificación de Identidad</span>
      </div>
      
      <Message delay={0.5}>
        Por favor, envía una foto de tu documento de identidad 📄
      </Message>

      <Message delay={1.5} isUser>
        <div className="space-y-2">
          <img 
            src="https://metalks.co/images/cedulafoto.jpg" 
            alt="DNI" 
            className="rounded-lg w-full"
          />
          <div className="text-sm text-gray-600">Documento de identidad</div>
        </div>
      </Message>

      <Message delay={2.5}>
        Gracias, ahora por favor envía una foto de tu rostro 📸
      </Message>

      <Message delay={3.5} isUser>
        <div className="space-y-2">
          <img 
            src="https://metalks.co/images/Imagenrostro.jpg" 
            alt="Rostro" 
            className="rounded-lg w-full"
          />
          <div className="text-sm text-gray-600">Foto de rostro</div>
        </div>
      </Message>

      <Message delay={4.5}>
        <div className="flex items-center space-x-2">
          <Check className="w-5 h-5 text-emerald-500" />
          <span>Documento verificado correctamente ✅</span>
        </div>
      </Message>
    </motion.div>
  );
}