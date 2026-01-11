import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Gamepad2 className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tighter text-white">STEAM<span className="text-cyan-400">PREMIUM</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 text-sm font-medium text-gray-300">
            {NAV_LINKS.map(link => (
              <a key={link.label} href={link.href} className="hover:text-white hover:scale-105 transition-all">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl">
           {NAV_LINKS.map(link => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors block py-3 border-b border-white/5 last:border-0"
              >
                {link.label}
              </a>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;