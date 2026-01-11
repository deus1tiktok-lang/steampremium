import React from 'react';
import { FEATURES } from '../constants';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 bg-[#050505]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          🚀 Por que escolher <span className="text-cyan-400">esse sistema?</span>
        </h2>
        <p className="text-gray-400 text-lg">A melhor forma de ter acesso a centenas de jogos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
        {FEATURES.map((feature, idx) => (
          <div 
            key={idx} 
            className={`
              glass-panel rounded-3xl p-8 relative overflow-hidden group
              ${feature.size === 'tall' ? 'lg:row-span-2' : ''}
              ${feature.size === 'wide' ? 'lg:col-span-2' : ''}
              hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 bg-[#0f0f0f]
            `}
          >
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[160px]">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                    {feature.icon && <feature.icon size={24} />}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
            
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full -z-0"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;