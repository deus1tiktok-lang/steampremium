import React from 'react';
import { Check, ArrowRight, Shield, AlertTriangle, XCircle, CheckCircle2, Crown } from 'lucide-react';
import { HOW_IT_WORKS } from '../constants';
import { Reveal } from './Reveal';

// 1. Impact Subtitle Section - PRICE COMPARISON
export const ImpactSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black -z-10"></div>
            
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 flex flex-col items-center">
                    {/* Reveal removed for instant visibility */}
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Vamos fazer uma <span className="text-red-500">conta rápida?</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Veja a diferença brutal entre comprar individualmente e adquirir nosso acesso.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                    
                    {/* The Old Way (Expensive) - Reveal removed */}
                    <div className="bg-red-950/10 border border-red-900/30 rounded-3xl p-8 relative overflow-hidden group h-full opacity-100 transition-opacity">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none"></div>
                        <div className="flex items-center gap-3 mb-6">
                            <XCircle className="text-red-500" size={32} />
                            <h3 className="text-2xl font-bold text-red-200">Comprando na Loja</h3>
                        </div>
                        
                        <div className="space-y-4 mb-8 text-gray-400">
                            <div className="flex justify-between border-b border-red-500/10 pb-2">
                                <span>Spider-Man 2</span>
                                <span className="text-red-400 font-mono">R$ 299,90</span>
                            </div>
                            <div className="flex justify-between border-b border-red-500/10 pb-2">
                                <span>Elden Ring</span>
                                <span className="text-red-400 font-mono">R$ 229,90</span>
                            </div>
                            <div className="flex justify-between border-b border-red-500/10 pb-2">
                                <span>Call of Duty MW3</span>
                                <span className="text-red-400 font-mono">R$ 299,00</span>
                            </div>
                            <div className="flex justify-between border-b border-red-500/10 pb-2">
                                <span>God of War</span>
                                <span className="text-red-400 font-mono">R$ 199,90</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-end">
                            <span className="text-sm text-red-300/60 uppercase font-bold tracking-wider">Total gasto</span>
                            <span className="text-4xl font-bold text-red-500">R$ 1.028,70</span>
                        </div>
                    </div>

                    {/* The New Way (Cheap / Premium / Golden Container with Green Price) - Reveal removed */}
                    <div className="bg-gradient-to-br from-yellow-900/20 via-[#1a1500] to-black border border-yellow-500/40 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_60px_rgba(234,179,8,0.15)] transform md:scale-105 z-10 h-full ring-1 ring-yellow-500/20">
                        {/* Inner Golden Glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent pointer-events-none"></div>
                        
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <div className="bg-yellow-500/20 p-2 rounded-full border border-yellow-500/30">
                                <Crown className="text-yellow-400" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Com SteamPremium</h3>
                        </div>

                        <div className="space-y-6 mb-8 relative z-10">
                                <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 shrink-0 border border-yellow-500/20">
                                    <span className="font-bold text-xl">∞</span>
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg">Pacote Completo</p>
                                    <div className="text-sm text-gray-300 mt-2">
                                        Todos os lançamentos ao lado <br/>
                                        <span className="block mt-1.5 text-yellow-400 font-black text-lg tracking-wide uppercase drop-shadow-sm border-l-2 border-yellow-500 pl-2">
                                            + 800 JOGOS BÔNUS
                                        </span>
                                    </div>
                                </div>
                                </div>
                        </div>

                        <div className="flex justify-between items-end border-t border-yellow-500/20 pt-6 relative z-10">
                            <span className="text-sm text-yellow-200/50 uppercase font-bold tracking-wider">Pagamento Único</span>
                            <div className="text-right flex flex-col items-end">
                                {/* Old Price in RED */}
                                <span className="block text-sm text-red-500 font-bold line-through mb-1 opacity-90">de R$ 297,00</span>
                                
                                {/* New Price in GREEN (Profit/Advantage) */}
                                <span className="text-5xl font-bold text-green-400 drop-shadow-[0_2px_15px_rgba(74,222,128,0.4)]">R$ 49,90</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// 2. What you get Section - SIDE BY SIDE LAYOUT (No Image)
export const WhatYouGetSection: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16 flex flex-col items-center">
                 <Reveal>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        🧠 O que você vai <span className="text-cyan-400">receber</span>
                    </h2>
                 </Reveal>
                 <Reveal delay={200}>
                    <p className="text-gray-400">Tudo o que você precisa para começar a jogar em 5 minutos.</p>
                 </Reveal>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Biblioteca Massiva", desc: "Conta Steam com +800 jogos disponíveis para download.", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
                    { title: "Títulos AAA", desc: "Acesso aos lançamentos mais caros e cobiçados do mercado.", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                    { title: "Pronto para Jogar", desc: "Sem configurações complexas. Entrou, baixou, jogou.", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
                    { title: "Economia Real", desc: "O valor de um lanche por uma vida inteira de diversão.", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" }
                ].map((item, i) => (
                    <Reveal key={i} delay={i * 100}>
                        <div className={`p-6 rounded-2xl ${item.bg} border ${item.border} hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center h-full`}>
                            <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center mb-4 border border-white/5`}>
                                <Check size={20} className={item.color} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

// 3. How It Works Section
export const HowItWorksSection: React.FC = () => {
    return (
        <section id="como-funciona" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex justify-center">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                        ⚙️ Como funciona? <span className="text-gray-500">(Simples e rápido)</span>
                    </h2>
                </Reveal>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
                 {/* Connector Line (Desktop) */}
                 <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-900 to-transparent z-0"></div>

                {HOW_IT_WORKS.map((step, i) => (
                    <Reveal key={i} delay={i * 150}>
                        <div className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                                <step.icon size={32} />
                            </div>
                            <div className="bg-cyan-500/10 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full mb-3">PASSO {i+1}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-400">{step.description}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
            
            <Reveal delay={600}>
                <p className="text-center text-gray-500 mt-12 text-lg">Sem complicação. Sem burocracia.</p>
            </Reveal>
        </section>
    );
};

// 4. Final CTA Section (Checkout)
export const FinalCTASection: React.FC = () => {
    return (
        <section id="checkout" className="py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 via-black to-black"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
                <Reveal>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        🎯 Está pronto para jogar <br/><span className="text-cyan-400">sem limites?</span>
                    </h2>
                </Reveal>
                <Reveal delay={200}>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        Não perca tempo nem dinheiro comprando jogos um por um.
                        Tenha agora acesso a uma biblioteca gigantesca na Steam.
                    </p>
                </Reveal>

                <Reveal delay={400} width="100%">
                    <div className="bg-[#111] p-8 md:p-12 rounded-3xl border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.1)] inline-block w-full max-w-lg">
                         <p className="text-sm text-gray-400 mb-2">Oferta exclusiva por tempo limitado</p>
                         <div className="flex items-center justify-center gap-3 mb-8">
                             <span className="text-gray-500 line-through text-2xl">R$ 297,00</span>
                             <span className="text-6xl font-bold text-white">R$ 49,90</span>
                         </div>

                         <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white text-xl font-bold py-6 rounded-xl shadow-lg hover:shadow-orange-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mb-6 animate-pulse">
                            🔥 COMEÇAR A JOGAR AGORA
                         </button>
                         
                         <div className="flex flex-col gap-2 items-center text-xs text-gray-500">
                            <div className="flex items-center gap-1"><Shield size={14} /> Compra 100% Segura</div>
                            <div>Acesso vitalício • Suporte incluso</div>
                         </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};