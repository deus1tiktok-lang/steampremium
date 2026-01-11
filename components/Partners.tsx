import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="py-32 text-center">
        <h2 className="text-2xl md:text-3xl mb-12">
            Colaborando <span className="font-bold">apenas com os melhores</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto px-6">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-24 h-24 md:w-32 md:h-32 rounded-full glass-panel flex items-center justify-center overflow-hidden relative group">
                     {/* Placeholder for Logos */}
                     <img 
                        src={`https://picsum.photos/150/150?random=${i}&blur=2`} 
                        alt="Partner" 
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity grayscale group-hover:grayscale-0" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-4">
                        <span className="text-xs font-bold">Partner {i}</span>
                     </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Partners;