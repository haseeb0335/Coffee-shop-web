import React from 'react';
import { Coffee, ArrowRight } from 'lucide-react';

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our Roastery Notes!');
  };

  return (
    <footer className="bg-coffee-darkest text-white border-t border-coffee-accent/10 pt-20 pb-8 relative overflow-hidden">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-coffee-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP BLOCK: NEWSLETTER & BRAND INTRO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-coffee-accent/5 items-start">
          
          {/* Brand Vision */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center space-x-2">
              <Coffee className="h-5 w-5 text-coffee-accent" />
              <span className="text-lg font-bold tracking-widest text-white uppercase font-serif">
                Murk<span className="text-coffee-accent">.</span>
              </span>
            </div>
            <p className="text-xs text-white/50 font-light leading-relaxed max-w-sm">
              Crafting premium roasting profiles and bringing an intentional, sensory coffee journey straight to your cup. 
            </p>
            
            {/* Social Icons Row (Using pure bulletproof SVGs to avoid Lucide brand export bugs) */}
            <div className="flex space-x-4 pt-2">
              {/* Instagram */}
              <a href="#instagram" className="p-2 bg-coffee-dark/30 hover:bg-coffee-accent text-white/60 hover:text-coffee-darkest rounded-full transition-all duration-300">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#facebook" className="p-2 bg-coffee-dark/30 hover:bg-coffee-accent text-white/60 hover:text-coffee-darkest rounded-full transition-all duration-300">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="#twitter" className="p-2 bg-coffee-dark/30 hover:bg-coffee-accent text-white/60 hover:text-coffee-darkest rounded-full transition-all duration-300">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter Input */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <h3 className="font-serif text-base text-white tracking-wide">Join the Roastery Notes</h3>
            <p className="text-xs text-white/40 font-light">
              Subscribe to unlock premium single-origin drops, secret brewing community events, and fresh artisan menus.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 pt-2">
              <input 
                type="email" 
                required
                placeholder="Enter your email address" 
                className="bg-coffee-dark/40 border border-coffee-accent/10 focus:border-coffee-accent text-white px-4 py-3 text-xs rounded-xl flex-1 focus:outline-none transition-colors"
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-coffee-accent hover:bg-coffee-accent/90 text-coffee-darkest text-xs font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center space-x-2 border-none cursor-pointer"
              >
                <span>Subscribe</span>
                <ArrowRight size={12} />
              </button>
            </form>
          </div>

        </div>

        {/* MIDDLE BLOCK: QUICK LINKS SECTIONS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-left text-xs">
          
          <div className="space-y-3">
            <h4 className="uppercase tracking-widest text-coffee-accent font-semibold text-[10px]">Explore</h4>
            <ul className="space-y-2 text-white/60 font-light list-none p-0 m-0">
              <li><a href="#home" className="hover:text-white transition-colors">Home Base</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Our Collections</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Espresso Menu</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Journal Entry</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="uppercase tracking-widest text-coffee-accent font-semibold text-[10px]">Sourcing</h4>
            <ul className="space-y-2 text-white/60 font-light list-none p-0 m-0">
              <li><a href="#beans" className="hover:text-white transition-colors">Single Origin Beans</a></li>
              <li><a href="#farms" className="hover:text-white transition-colors">Micro-Lot Farms</a></li>
              <li><a href="#roasting" className="hover:text-white transition-colors">Roast Profiles</a></li>
              <li><a href="#wholesale" className="hover:text-white transition-colors">Wholesale Supply</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="uppercase tracking-widest text-coffee-accent font-semibold text-[10px]">Resources</h4>
            <ul className="space-y-2 text-white/60 font-light list-none p-0 m-0">
              <li><a href="#brewing" className="hover:text-white transition-colors">Brewing Guides</a></li>
              <li><a href="#care" className="hover:text-white transition-colors">Equipment Care</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Help & Delivery FAQ</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Barista Careers</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="uppercase tracking-widest text-coffee-accent font-semibold text-[10px]">Lounge Info</h4>
            <div className="text-white/50 font-light space-y-1 leading-normal font-mono text-[11px]">
              <p>104 Espresso Blvd</p>
              <p>Ceramic District</p>
              <p className="pt-2 text-white/70">Open Daily: 7AM - 8PM</p>
            </div>
          </div>

        </div>

        {/* BOTTOM ATTRIBUTION BRAND FOOTER BAR */}
        <div className="pt-8 border-t border-coffee-accent/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/30 font-light space-y-4 sm:space-y-0">
          <p>© 2026 Murk Coffee Lounge. Crafted with deep rich crema guidelines.</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-coffee-accent transition-colors">Privacy Policy</a>
            <a href="#tracking" className="hover:text-coffee-accent transition-colors">Supply Tracking</a>
            <a href="#terms" className="hover:text-coffee-accent transition-colors">Terms of Roast</a>
          </div>
        </div>

      </div>
    </footer>
  );
}