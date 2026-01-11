import React from 'react';
import { ROADMAP_ITEMS } from '../constants';

const Roadmap: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-6 text-center mb-20">
            <h2 className="text-4xl md:text-6xl">
                Visão para o <span className="font-bold">crescimento futuro</span>
            </h2>
        </div>

        <div className="max-w-3xl mx-auto px-6 relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

            <div className="space-y-12">
                {ROADMAP_ITEMS.map((item, idx) => (
                    <div key={idx} className={`flex flex-col md:flex-row gap-8 items-start relative ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                         {/* Year Label */}
                         <div className={`md:w-1/2 flex ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                            <span className="text-yellow-400 font-mono text-xl bg-black px-4 py-1 border border-white/10 rounded ml-10 md:ml-0 z-10">
                                {item.year}
                            </span>
                         </div>
                         
                         {/* Dot */}
                         <div className="absolute left-6 md:left-1/2 -translate-x-[5px] w-2.5 h-2.5 bg-yellow-400 rounded-full shadow-[0_0_10px_orange] mt-4 z-20"></div>

                         {/* Content */}
                         <div className="md:w-1/2 pl-12 md:pl-0">
                            <div className={`glass-panel p-6 rounded-xl hover:border-yellow-400/50 transition-colors ${idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                         </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Roadmap;