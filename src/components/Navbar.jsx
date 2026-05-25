import React from 'react';
import { Coffee, ShoppingBag, ShieldAlert } from 'lucide-react';

export default function Navbar({ cartCount, onCartOpen, onAdminOpen }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-coffee-darkest/80 backdrop-blur-md border-b border-coffee-accent/5 py-4 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* BRAND IDENTITY */}
        <div className="flex items-center space-x-2">
          <Coffee className="h-5 w-5 text-coffee-accent" />
          <span className="text-base font-bold tracking-widest uppercase font-serif">
            Murk<span className="text-coffee-accent">.</span>
          </span>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-light">
          <a href="#home" className="hover:text-coffee-accent transition-colors">Home</a>
          <a href="#collection" className="hover:text-coffee-accent transition-colors">Collections</a>
          <a href="#menu" className="hover:text-coffee-accent transition-colors">Menu</a>
          <a href="#blog" className="hover:text-coffee-accent transition-colors">Journal</a>
          <a href="#contact" className="hover:text-coffee-accent transition-colors">Contact</a>
        </div>

        {/* INTERACTION ACTION CONTROLS */}
        <div className="flex items-center space-x-4">
          
          {/* NEW: ADMIN PORTAL LINK */}
          <button 
            onClick={onAdminOpen}
            title="Barista Panel Access"
            className="p-2 text-white/60 hover:text-coffee-accent transition-colors relative bg-transparent border-none cursor-pointer group"
          >
            <ShieldAlert size={18} />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-coffee-dark border border-coffee-accent/10 px-2 py-0.5 rounded text-[9px] uppercase tracking-wider text-coffee-cream opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Staff Portal
            </span>
          </button>

          {/* TRAY SHOPPING ICON */}
          <button 
            onClick={onCartOpen}
            className="p-2 text-white hover:text-coffee-accent transition-all relative bg-transparent border-none cursor-pointer"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-coffee-accent text-coffee-darkest font-mono text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

        </div>

      </div>
    </nav>
  );
}