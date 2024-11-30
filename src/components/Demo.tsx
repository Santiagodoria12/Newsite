import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

export default function Demo() {
  return (
    <div className="bg-emerald-900 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Phone className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Customer Experience?
        </h2>
        <p className="text-xl text-emerald-100 mb-8">
          Schedule a demo and see how we can help you leverage WhatsApp for your
          business
        </p>
        <button className="inline-flex items-center bg-white text-emerald-900 font-semibold py-3 px-8 rounded-lg hover:bg-emerald-50 transition-colors">
          Request Demo
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
}