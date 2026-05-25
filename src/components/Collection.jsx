import React from 'react';

const COLLECTIONS = [
  {
    id: 'coll-1',
    category: 'Artisan Brews',
    title: 'Velvety Hot Espresso',
    description: 'Meticulously pulled single-origin shots finished with dense, golden micro-foam.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600&h=800'
  },
  {
    id: 'coll-2',
    category: 'Fresh Patisserie',
    title: 'Signature Pastries',
    description: 'Flaky baked treats infused with rich cocoa, hazelnut creams, and local grains.',
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=600&h=800'
  },
  {
    id: 'coll-3',
    category: 'House Blends',
    title: 'Classic Latte Art',
    description: 'Perfectly balanced ristretto blends paired with velvety textured organic milk.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600&h=800'
  }
];

export default function Collection() {
  return (
    <section id="collection" className="py-24 bg-coffee-darkest relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER DESIGN */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-coffee-accent font-medium block">Curated Selection</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-wide">Our Premium Collections</h2>
          <p className="text-xs text-white/50 font-light max-w-md mx-auto leading-relaxed">
            Explore a refined menu meticulously crafted by our champion baristas to offer an unmatched taste experience.
          </p>
          <div className="w-12 h-[1px] bg-coffee-accent/30 mx-auto mt-4"></div>
        </div>

        {/* THREE-COLUMN GRID MOCKUP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COLLECTIONS.map((item) => (
            <div 
              key={item.id} 
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-coffee-dark to-coffee-darkest border border-coffee-accent/5 hover:border-coffee-accent/20 shadow-xl transition-all duration-300 flex flex-col h-[480px]"
            >
              {/* Image Container Wrapper */}
              <div className="h-[65%] w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-darkest via-transparent to-transparent z-10 opacity-60"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                <span className="absolute top-4 left-4 z-20 bg-coffee-darkest/70 backdrop-blur-md border border-coffee-accent/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-coffee-cream">
                  {item.category}
                </span>
              </div>

              {/* Text Card Body content */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left relative bg-coffee-dark/30">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl text-white group-hover:text-coffee-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-coffee-accent/5 flex items-center justify-between">
                  <a href="#menu" className="text-[10px] uppercase tracking-widest text-coffee-accent font-semibold group-hover:underline">
                    View Details →
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}