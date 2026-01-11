import React from 'react';
import PhoneFrame from './PhoneFrame';

export const CharacterSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
        {/* Avatars Strip */}
        <div className="flex justify-center gap-4 md:gap-12 opacity-80 mb-8 relative z-0">
             {/* Using styled divs to simulate 3D avatars since we lack assets */}
             {[1,2,3,4].map(i => (
                <div key={i} className={`w-32 md:w-48 h-64 md:h-96 bg-gradient-to-b from-gray-800 to-black rounded-full blur-sm opacity-50 transform ${i % 2 === 0 ? 'translate-y-12' : '-translate-y-6'}`}></div>
             ))}
             
             <div className="absolute inset-0 flex items-center justify-center z-10">
                <h2 className="text-4xl md:text-6xl font-medium text-center leading-tight drop-shadow-xl">
                    Crie<br />
                    seu personagem<br />
                    <span className="text-white font-bold">Omi™ único</span>
                </h2>
             </div>
        </div>
    </section>
  );
};

export const ExploreSection: React.FC = () => {
    return (
        <section className="py-32 px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-medium mb-4">
                <span className="text-white">Explore</span> cidades de<br/>
                uma <span className="text-gray-500">nova maneira</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-16 text-sm">
                Encontre suas notas que trarão histórias, missões e tesouros digitais para cada esquina.
            </p>
            
            {/* Abstract Cityscape */}
            <div className="relative max-w-5xl mx-auto h-64 md:h-96 w-full glass-panel rounded-3xl overflow-hidden flex items-end justify-center px-4">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                {/* Simulated Buildings */}
                <div className="flex items-end gap-2 md:gap-4 w-full justify-center opacity-60">
                    <div className="w-12 h-24 bg-gray-800 rounded-t-lg"></div>
                    <div className="w-16 h-48 bg-gray-700 rounded-t-lg relative">
                        <div className="absolute top-0 -mt-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_#A855F7]"></div>
                    </div>
                    <div className="w-20 h-32 bg-gray-800 rounded-t-lg"></div>
                    <div className="w-14 h-56 bg-gray-900 rounded-t-lg"></div>
                    <div className="w-24 h-40 bg-gray-800 rounded-t-lg"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_cyan]"></div>
                <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_10px_pink]"></div>
            </div>
        </section>
    )
}

export const ARSection: React.FC = () => {
    return (
        <section className="py-32 flex flex-col items-center justify-center text-center">
             <h2 className="text-4xl md:text-6xl font-medium mb-4">
                Dê uma nova olhada<br/>
                <span className="text-white">no mundo</span>
            </h2>
            <p className="text-gray-400 mb-16">Encontre, interaja, ative e progrida no jogo.</p>
            
            <PhoneFrame>
                <div className="w-full h-full relative">
                    {/* Background simulating camera feed */}
                    <img src="https://picsum.photos/400/800?city" className="w-full h-full object-cover grayscale opacity-60" alt="Street View" />
                    
                    {/* AR Overlay UI */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                        <div className="flex justify-between">
                            <div className="bg-black/50 backdrop-blur px-3 py-1 rounded-full text-xs font-mono border border-white/10">SCANNING...</div>
                        </div>
                        
                        <div className="relative">
                            {/* Target Reticle */}
                            <div className="w-24 h-24 border-2 border-white/50 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                            </div>
                        </div>

                        <button className="bg-white text-black py-3 rounded-full font-bold shadow-lg mx-8">
                            CAPTURAR
                        </button>
                    </div>
                </div>
            </PhoneFrame>
        </section>
    )
}