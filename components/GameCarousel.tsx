import React from 'react';
import { CAROUSEL_GAMES } from '../constants';

const GameCarousel: React.FC = () => {
  return (
    <div className="w-full overflow-hidden relative mt-16 select-none">
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black via-transparent to-black"></div>
      
      <div className="flex w-max animate-scroll hover:pause">
        {/* Quadruple the list to ensure smooth infinite loop for wider screens since we removed the phone */}
        {[...CAROUSEL_GAMES, ...CAROUSEL_GAMES, ...CAROUSEL_GAMES, ...CAROUSEL_GAMES].map((game, idx) => (
          <div 
            key={`${game.name}-${idx}`} 
            className="w-[160px] md:w-[200px] aspect-[2/3] mx-3 relative group rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900 transform hover:scale-105 transition-all duration-300"
          >
            <img 
              src={game.image} 
              alt={game.name} 
              loading="lazy"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-4">
              <span className="text-white font-bold text-xs md:text-sm drop-shadow-md opacity-80 group-hover:opacity-100">{game.name}</span>
            </div>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default GameCarousel;