import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative w-[300px] h-[600px] rounded-[3rem] border-8 border-[#1a1a1a] bg-black shadow-2xl overflow-hidden ${className}`}>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-2xl z-20 flex justify-center items-end pb-1">
        <div className="w-16 h-1 bg-black/50 rounded-full"></div>
      </div>
      {/* Screen Content */}
      <div className="w-full h-full relative z-10">
        {children}
      </div>
      {/* Reflections */}
      <div className="absolute inset-0 pointer-events-none z-30 rounded-[2.5rem] ring-1 ring-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"></div>
    </div>
  );
};

export default PhoneFrame;