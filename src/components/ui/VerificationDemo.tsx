import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Shield, FileText, Check } from 'lucide-react';

const Message = ({ children, isUser = false }) => (
  <div className={`${
    isUser ? 'bg-emerald-100 ml-auto' : 'bg-gray-100 mr-auto'
  } rounded-lg p-3 max-w-[80%] space-y-2 mb-4`}>
    {children}
  </div>
);

const IdentityVerification = () => (
  <>
    <Message>Por favor, envía una foto de tu documento de identidad 📄</Message>
    <Message isUser>
      <div className="space-y-2">
        <img 
          src="https://metalks.co/images/cedulafoto.jpg" 
          alt="DNI" 
          className="rounded-lg w-full"
        />
        <div className="text-sm text-gray-600">Documento de identidad</div>
      </div>
    </Message>
    <Message>Gracias, ahora por favor envía una foto de tu rostro 📸</Message>
    <Message isUser>
      <div className="space-y-2">
        <img 
          src="https://metalks.co/images/Imagenrostro.jpg" 
          alt="Rostro" 
          className="rounded-lg w-full"
        />
        <div className="text-sm text-gray-600">Foto de rostro</div>
      </div>
    </Message>
    <Message>
      <div className="flex items-center space-x-2">
        <Check className="w-5 h-5 text-emerald-500" />
        <span>Documento verificado correctamente ✅</span>
      </div>
    </Message>
  </>
);

const RegistrationDemo = () => (
  <>
    <Message>Perfecto vamos a iniciar con el registro. Por favor compartenos el contrato firmado y diligenciado. 📝</Message>
    <Message isUser>
      <div className="space-y-2">
        <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-3">
          <FileText className="w-8 h-8 text-blue-500" />
          <div>
            <div className="font-medium">Contrato firmado.pdf</div>
            <div className="text-sm text-gray-500">PDF Document</div>
          </div>
        </div>
      </div>
    </Message>
    <Message>Excelente ahora compartenos los extractos bancarios de los últimos 30 días 📊</Message>
    <Message isUser>
      <div className="space-y-2">
        <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-3">
          <FileText className="w-8 h-8 text-blue-500" />
          <div>
            <div className="font-medium">Extracto agosto.pdf</div>
            <div className="text-sm text-gray-500">PDF Document</div>
          </div>
        </div>
      </div>
    </Message>
  </>
);

export default function VerificationDemo() {
  const [showIdentity, setShowIdentity] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowIdentity(prev => !prev);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4">
      <div className="flex items-center space-x-2 border-b pb-2 mb-4">
        <Shield className="w-6 h-6 text-emerald-500" />
        <span className="font-medium">
          {showIdentity ? 'Verificación de Identidad' : 'Registro Digital'}
        </span>
      </div>
      
      <div className="h-[500px] overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={showIdentity ? 'identity' : 'registration'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {showIdentity ? <IdentityVerification /> : <RegistrationDemo />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}