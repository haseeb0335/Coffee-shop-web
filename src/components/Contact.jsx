import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple frontend placeholder handler
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-coffee-dark border-t border-coffee-accent/5 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE: LOUNGE DETAILS & HOURS */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-coffee-accent font-medium block">Visit Our Space</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-wide">The Murk Lounge</h2>
              <div className="w-12 h-[1px] bg-coffee-accent/30 mt-3"></div>
            </div>

            <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
              Step into an atmospheric environment designed for focus, specialty coffee appreciation, and fresh daily baking. We welcome remote creators and espresso lovers alike.
            </p>

            {/* DIRECT TOUCHPOINTS */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3 text-xs text-white/70">
                <MapPin size={16} className="text-coffee-accent shrink-0 mt-0.5" />
                <span className="font-light leading-relaxed">104 Espresso Blvd, Ceramic District, Suite 40</span>
              </div>
              
              <div className="flex items-center space-x-3 text-xs text-white/70">
                <Phone size={16} className="text-coffee-accent shrink-0" />
                <span className="font-mono font-light">+1 (555) 234-7890</span>
              </div>

              <div className="flex items-center space-x-3 text-xs text-white/70">
                <Mail size={16} className="text-coffee-accent shrink-0" />
                <span className="font-light">hello@murkcoffeelounge.com</span>
              </div>
            </div>

            {/* OPENING SCHEDULE */}
            <div className="p-5 bg-coffee-darkest/40 border border-coffee-accent/5 rounded-xl space-y-3">
              <div className="flex items-center space-x-2 text-xs font-serif text-coffee-cream">
                <Clock size={14} className="text-coffee-accent" />
                <span>Weekly Hours</span>
              </div>
              <div className="space-y-1.5 text-[11px] font-mono text-white/50">
                <div className="flex justify-between"><span>Monday - Friday:</span> <span className="text-white/80">07:00 AM - 08:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday:</span> <span className="text-white/80">08:00 AM - 09:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday Close:</span> <span className="text-coffee-accent/70">Roastery Maintenance</span></div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: EDITORIAL CLEAN CONTACT FORM */}
          <div className="lg:col-span-7 bg-coffee-darkest/30 p-8 sm:p-10 rounded-2xl border border-coffee-accent/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 block font-semibold">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="E.g., Alex" 
                    className="w-full bg-coffee-darkest/60 border border-coffee-accent/10 focus:border-coffee-accent text-white px-4 py-3 text-xs rounded-lg transition-colors focus:outline-none"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 block font-semibold">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder="alex@example.com" 
                    className="w-full bg-coffee-darkest/60 border border-coffee-accent/10 focus:border-coffee-accent text-white px-4 py-3 text-xs rounded-lg transition-colors focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 block font-semibold">Your Message or Inquiry</label>
                <textarea 
                  rows="4" 
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder="Tell us about your preferences or ask a question..." 
                  className="w-full bg-coffee-darkest/60 border border-coffee-accent/10 focus:border-coffee-accent text-white p-4 text-xs rounded-lg transition-colors focus:outline-none resize-none leading-relaxed"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 bg-coffee-accent hover:bg-coffee-accent/90 text-coffee-darkest font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-xl flex items-center justify-center space-x-2 cursor-pointer border-none"
              >
                <span>{submitted ? 'Message Transmitted!' : 'Send Lounge Inquiry'}</span>
                <Send size={12} className={submitted ? 'animate-ping' : ''} />
              </button>

              {submitted && (
                <p className="text-[11px] text-coffee-cream text-center animate-pulse">
                  Thank you! Our head team will reach out to your inbox shortly.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* BOTTOM ATTRIBUTION BRAND FOOTER BAR */}
        <div className="mt-24 pt-8 border-t border-coffee-accent/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/30 font-light space-y-4 sm:space-y-0">
          <p>© 2026 Murk Coffee Lounge. All rights reserved across all roastery nodes.</p>
          <div className="flex space-x-6">
            <a href="#home" className="hover:text-coffee-accent transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-coffee-accent transition-colors">Supply Tracking</a>
            <a href="#home" className="hover:text-coffee-accent transition-colors">Terms of Roast</a>
          </div>
        </div>

      </div>
    </section>
  );
}