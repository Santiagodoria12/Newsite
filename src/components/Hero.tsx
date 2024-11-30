import { MessageCircle } from 'lucide-react';
import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-900 to-gray-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264337-e8a93017fe92?auto=format&fit=crop&q=80&w=2070')] opacity-10 bg-cover bg-center" />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <div className="flex justify-center mb-8">
          <MessageCircle className="w-20 h-20 text-emerald-400" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Transform Customer Experience with{' '}
          <span className="text-emerald-400">WhatsApp</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Empower your financial institution with intelligent WhatsApp solutions
        </p>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
          Discover More
        </button>
      </div>
    </div>
  );
}