import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#160f0b] relative overflow-hidden flex items-center min-h-[90vh]">
      {/* Soft Ambient Light Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-coffee-accent/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-coffee-dark/40 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Bold Editorial Typography */}
          <div className="lg:col-span-6 space-y-6 text-left z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-coffee-dark/60 border border-coffee-accent/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-coffee-accent animate-ping"></span>
              <span className="text-[10px] text-coffee-cream uppercase tracking-[0.3em] font-medium">
                Premium Coffee Roast
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-white tracking-wide leading-[1.15]">
              Discover Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-accent via-coffee-cream to-white italic">
                New Collections
              </span>
            </h1>
            
            <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed max-w-lg">
              Indulge in a premium sensory journey where freshly baked artisan pastries meet meticulously sourced single-origin espresso formulas. Crafted for the true connoisseur.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <button className="px-8 py-3.5 bg-coffee-accent hover:bg-coffee-accent/90 text-coffee-darkest font-bold text-xs uppercase tracking-widest rounded-sm shadow-xl transition-all cursor-pointer">
                Explore Flavors
              </button>
              <button className="px-8 py-3.5 bg-transparent border border-white/20 hover:border-coffee-accent text-white hover:text-coffee-accent font-bold text-xs uppercase tracking-widest rounded-sm transition-all cursor-pointer">
                Our Story
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Layered Centerpiece Visual Display */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] rounded-full p-4 bg-gradient-to-b from-coffee-dark to-transparent border border-coffee-accent/10 shadow-2xl flex items-center justify-center">
              
              {/* Dynamic floating design background disk */}
              <div className="absolute inset-8 rounded-full bg-coffee-darkest/40 border border-dashed border-coffee-accent/20 animate-[spin_100s_linear_infinite]"></div>
              
              {/* Main Focus Image Placeholder (Mimicking the visual style of image_fcc53e.jpg) */}
              <img 
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600&h=600" 
                alt="Premium Coffee and Dessert" 
                className="w-[85%] h-[85%] object-cover rounded-full shadow-2xl transform hover:rotate-3 transition-transform duration-500 z-10"
              />

              {/* Decorative floating coffee elements */}
              <div className="absolute -top-4 right-10 bg-coffee-dark/80 border border-coffee-accent/30 p-2 rounded-xl shadow-lg transform rotate-12 z-20 hidden sm:block animate-bounce">
                <span className="text-xs text-coffee-accent">☕ Rich Crema</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-coffee-dark/80 border border-coffee-accent/30 p-2.5 rounded-xl shadow-lg transform -rotate-12 z-20 hidden sm:block">
                <span className="text-xs text-coffee-cream">✨ Fresh Baked</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* WAVE CUT CURVE BOTTOM SEPARATOR */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] fill-coffee-darkest">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35C25.32,45,61.12,57.19,92.83,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}