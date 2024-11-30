import React from 'react';
import Hero from './components/sections/Hero';
import WhyWhatsApp from './components/sections/WhyWhatsApp';
import Problems from './components/sections/Problems';
import Solutions from './components/sections/Solutions';
import OmniChannel from './components/sections/OmniChannel';
import Analytics from './components/sections/Analytics';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <WhyWhatsApp />
      <Problems />
      <Solutions />
      <OmniChannel />
      <Analytics />
    </div>
  );
}

export default App;