import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import GameCarousel from './GameCarousel';
// Reveal import removed to ensure immediate loading

const Hero: React.FC = () => {
  // Generate random particles for the "snow/rising sparks" effect
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${6 + Math.random() * 6}s`,
    size: Math.random() * 2 + 1
  }));

  return (
    <section id="inicio" className="relative min-h-screen pt-32 pb-12 flex flex-col items-center justify-center overflow-hidden">
      
      <style>{`
        @keyframes float-up {
          0% { transform: translateY(100vh) scale(0); opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { transform: translateY(-20vh) scale(1); opacity: 0; }
        }
        @keyframes siren-pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        /* Simple entry animation that runs immediately on load */
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-enter {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        /* Gentle pulse animation for the badge */
        @keyframes pulse-gentle {
            0%, 100% { transform: scale(1); box-shadow: 0 0 15px rgba(239,68,68,0.2); border-color: rgba(239,68,68,0.3); }
            50% { transform: scale(1.05); box-shadow: 0 0 25px rgba(239,68,68,0.5); border-color: rgba(239,68,68,0.6); }
        }
        .animate-pulse-gentle {
            animation: pulse-gentle 2s infinite ease-in-out;
        }
      `}</style>

      {/* Background Gradients (The "Slow Siren" Effect) */}
      <div className="absolute inset-0 overflow-hidden -z-20">
         {/* Cyan Light */}
         <div 
           className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[120px]"
           style={{ animation: 'siren-pulse 8s ease-in-out infinite' }}
         ></div>
         
         {/* Lilac/Purple Light */}
         <div 
           className="absolute top-[10%] right-[-10%] w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[120px]"
           style={{ animation: 'siren-pulse 10s ease-in-out infinite 2s' }} // 2s delay for offset pulsing
         ></div>
      </div>

      {/* Particles ("Snow/Sparks" Effect) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {particles.map((p, i) => (
          <div 
            key={i}
            className="absolute bottom-0 bg-white rounded-full opacity-0"
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `float-up ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>

      {/* Center Content - No Scroll Reveal here, standard visibility with CSS animation */}
      <div className="text-center z-10 max-w-4xl mx-auto px-6 mb-8 relative flex flex-col items-center animate-enter">
        
        {/* Urgency Badge with Gentle Pulse */}
        <div className="inline-flex glass-panel px-4 py-1.5 rounded-full items-center gap-3 mb-8 bg-red-900/10 animate-pulse-gentle transition-all duration-300">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
          </div>
          <span className="text-xs font-bold text-red-200 tracking-wide uppercase drop-shadow-sm">Oferta por tempo limitado</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight mb-8 drop-shadow-2xl">
          Acesso a Mais de <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent filter drop-shadow-lg">800 Jogos na Steam</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
          Jogue os maiores sucessos do PC sem precisar comprar jogo por jogo. Economize milhares de reais hoje.
        </p>

        {/* Benefits Row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-gray-400">
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <CheckCircle2 size={18} className="text-cyan-400" /> Acesso Vitalício
            </span>
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <CheckCircle2 size={18} className="text-cyan-400" /> Entrega Automática
            </span>
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <CheckCircle2 size={18} className="text-cyan-400" /> Sem Mensalidades
            </span>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#checkout" className="bg-cyan-500 hover:bg-cyan-400 text-black px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                COMEÇAR A JOGAR AGORA <ArrowRight size={24} />
            </a>
        </div>
      </div>

      {/* Full Width Carousel embedded in Hero - Immediate load */}
      <div className="w-full animate-enter" style={{ animationDelay: '0.2s' }}>
        <GameCarousel />
      </div>

    </section>
  );
};

export default Hero;