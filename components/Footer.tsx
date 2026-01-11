import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <footer className="pt-20 pb-12 bg-black border-t border-white/5">
        
        {/* FAQ */}
        <div className="max-w-3xl mx-auto px-6 mb-20">
            <h3 className="text-2xl font-bold text-center mb-8">Dúvidas Frequentes</h3>
            {FAQ_ITEMS.map((item, idx) => (
                <div key={idx} className="border-b border-white/10 last:border-0">
                    <button 
                        onClick={() => toggleFaq(idx)}
                        className="w-full py-5 flex items-center justify-between text-left hover:text-cyan-400 transition-colors"
                    >
                        <span className="text-sm md:text-base font-medium text-gray-200">{item.question}</span>
                        {openFaq === idx ? <Minus size={16} /> : <Plus size={16} />}
                    </button>
                    {openFaq === idx && (
                        <div className="pb-6 text-gray-400 text-sm leading-relaxed animate-in slide-in-from-top-2 duration-200">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>

        {/* Bottom Links */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-gray-600 border-t border-white/5 pt-8">
             <div className="flex items-center gap-2">
                <span className="font-bold text-white">STEAM<span className="text-cyan-500">PREMIUM</span></span>
                <span>© 2024</span>
             </div>

             {/* Social links removed as requested */}
             
             <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
             </div>
        </div>
    </footer>
  );
};

export default Footer;