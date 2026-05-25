import React, { useState, useEffect } from 'react';
import { ShoppingBag, Coffee, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount, onCartOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-coffee-darkest/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* LOGO SELECTION */}
            <div className="flex-shrink-0 flex items-center space-x-2">
              <Coffee className="h-6 w-6 text-coffee-accent animate-pulse" />
              <span className="text-xl font-bold tracking-widest text-[#fff] uppercase font-serif">
                Murk<span className="text-coffee-accent">.</span>
              </span>
            </div>

            {/* DESKTOP NAVIGATION LINKS */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-xs uppercase tracking-[0.2em] text-white/90 hover:text-coffee-accent transition-colors">Home</a>
              <a href="#collection" className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-coffee-accent transition-colors">Collection</a>
              <a href="#menu" className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-coffee-accent transition-colors">Menu</a>
              <a href="#blog" className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-coffee-accent transition-colors">Blog</a>
              <a href="#contact" className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-coffee-accent transition-colors">Contact</a>
            </div>

            {/* ACTION TRIGGERS */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={onCartOpen}
                className="p-2 text-white/80 hover:text-coffee-accent transition-colors relative bg-transparent border-none cursor-pointer"
              >
                <ShoppingBag size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-coffee-accent text-coffee-darkest text-[9px] font-bold flex items-center justify-center rounded-full animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="px-5 py-2.5 bg-coffee-accent hover:bg-coffee-accent/90 text-coffee-darkest text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer">
                Order Online
              </button>
            </div>

            {/* MOBILE INTERFACE TRIGGER */}
            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={onCartOpen}
                className="p-2 text-white/80 hover:text-coffee-accent relative bg-transparent border-none cursor-pointer"
              >
                <ShoppingBag size={18} />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 w-2 h-2 bg-coffee-accent rounded-full"></span>
                )}
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-white p-1 bg-transparent border-none cursor-pointer">
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE PANEL DRAWER */}
      <div className={`fixed inset-0 w-full h-screen bg-coffee-darkest/98 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <a href="#home" onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-widest text-white">Home</a>
        <a href="#collection" onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-widest text-white/70">Collection</a>
        <a href="#menu" onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-widest text-white/70">Menu</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-widest text-white/70">Contact</a>
        <button className="px-8 py-3 bg-coffee-accent text-coffee-darkest text-sm font-bold uppercase tracking-wider rounded-full">
          Order Online
        </button>
      </div>
    </>
  );
}