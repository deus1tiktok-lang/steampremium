import React from 'react';
import Hero from './components/Hero';
import { 
  ImpactSection, 
  WhatYouGetSection, 
  HowItWorksSection, 
  FinalCTASection 
} from './components/InfoSections';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500 selection:text-black">
      <Hero />
      <ImpactSection />
      <WhatYouGetSection />
      <HowItWorksSection />
      {/* BentoGrid and GamesList removed as requested */}
      <Testimonials />
      <FinalCTASection />
      <Footer />
    </main>
  );
}

export default App;