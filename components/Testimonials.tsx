import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { Reveal } from './Reveal';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 flex flex-col items-center">
                <Reveal>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Star className="text-yellow-400 fill-yellow-400" size={20} />
                        <Star className="text-yellow-400 fill-yellow-400" size={20} />
                        <Star className="text-yellow-400 fill-yellow-400" size={20} />
                        <Star className="text-yellow-400 fill-yellow-400" size={20} />
                        <Star className="text-yellow-400 fill-yellow-400" size={20} />
                    </div>
                </Reveal>
                <Reveal delay={100}>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Quem comprou, <span className="text-cyan-400">aprovou</span>
                    </h2>
                </Reveal>
                <Reveal delay={200}>
                    <p className="text-gray-400">Junte-se a mais de 5.000 jogadores satisfeitos.</p>
                </Reveal>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t, idx) => (
                    <Reveal key={idx} delay={idx * 150}>
                        <div className="glass-panel p-8 rounded-2xl border border-white/5 relative group hover:border-cyan-500/30 transition-colors h-full">
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#111] border border-white/10 rounded-full flex items-center justify-center z-10 shadow-lg">
                                <span className="text-2xl">❝</span>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-cyan-500/20" />
                                <div>
                                    <h4 className="font-bold text-white">{t.name}</h4>
                                    <div className="flex items-center gap-1 text-xs text-green-400">
                                        <ShieldCheck size={12} />
                                        <span>{t.role}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[1,2,3,4,5].map(star => (
                                    <Star key={star} size={14} className="text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed italic opacity-90">
                                "{t.content}"
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Testimonials;