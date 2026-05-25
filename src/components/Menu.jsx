import React from 'react';
import { Plus } from 'lucide-react';

const MENU_ITEMS = [
  {
    id: 'item-1',
    title: 'Pistachio Iced Latte',
    price: '$5.50',
    description: 'Double shot espresso combined with organic creamy oat milk and sweet premium roasted pistachio syrup.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=500&h=500'
  },
  {
    id: 'item-2',
    title: 'Whipped Macchiato Cream',
    price: '$5.25',
    description: 'Smooth, slow-steeped cold brew base crowned with a decadent, velvety hand-whipped vanilla cloud foam.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=500&h=500'
  },
  {
    id: 'item-3',
    title: 'Chocolate Hazelnut Gateau',
    price: '$6.50',
    description: 'A rich layered slice of dark espresso sponge drenched in warm artisan hazelnut ganache chocolate.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=500&h=500'
  }
];

export default function Menu({ onAddToCart }) {
  return (
    <section id="menu" className="py-24 bg-coffee-lightbg text-coffee-darkest relative">
      
      {/* SECTION TOP WAVE INTEGRATION COUPLING */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] fill-coffee-darkest">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35C25.32,45,61.12,57.19,92.83,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* HEADER BLOCK */}
        <div className="text-left space-y-2 mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-coffee-accent font-semibold block">Fresh Everyday</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-coffee-darkest font-medium tracking-wide">Sweet Treats & Coffee Cups</h2>
          <div className="w-12 h-[2px] bg-coffee-accent mt-3"></div>
        </div>

        {/* PRICING MENU CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MENU_ITEMS.map((dish) => (
            <div 
              key={dish.id} 
              className="bg-[#f2eae1] rounded-2xl p-5 border border-coffee-darkest/5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group hover:-translate-y-1"
            >
              <div>
                {/* Floating Price Circle Tag Badge */}
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-[#e2d5c7] text-coffee-darkest font-serif font-medium px-3.5 py-1.5 rounded-full text-sm shadow-inner">
                    {dish.price}
                  </div>
                  
                  {/* Miniature Interactive Plus Button */}
                  <button 
                    onClick={() => onAddToCart(dish)}
                    className="p-2 bg-coffee-accent text-coffee-darkest rounded-full hover:bg-coffee-dark hover:text-white transition-colors duration-300 cursor-pointer shadow-sm border-none focus:outline-none"
                  >
                    <Plus size={14} strokeWidth={3} />
                  </button>
                </div>

                {/* Centered Image Showcase */}
                <div className="w-40 h-40 mx-auto mb-6 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-coffee-darkest/5 rounded-full blur-md transform scale-95 group-hover:scale-105 transition-transform"></div>
                  <img 
                    src={dish.image} 
                    alt={dish.title} 
                    className="w-full h-full object-cover rounded-full shadow-lg transform group-hover:rotate-6 transition-transform duration-500"
                  />
                </div>

                {/* Description details */}
                <h3 className="font-serif text-lg text-coffee-darkest font-semibold tracking-wide mb-2">
                  {dish.title}
                </h3>
                <p className="text-xs text-coffee-darkest/70 font-light leading-relaxed">
                  {dish.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-coffee-darkest/5">
                <button 
                  onClick={() => onAddToCart(dish)}
                  className="w-full py-2.5 bg-transparent border border-coffee-darkest/20 hover:border-coffee-accent text-coffee-darkest hover:text-coffee-accent text-[10px] uppercase tracking-widest font-bold rounded-xl transition-colors duration-300 cursor-pointer"
                >
                  Quick Add to Tray
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}