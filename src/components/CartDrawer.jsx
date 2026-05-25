import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onRemoveItem, onCheckout }) {
  // Calculates cumulative sum values
  const totalPrice = cartItems.reduce((acc, item) => {
    const numericalPrice = parseFloat(item.price.replace('$', ''));
    return acc + numericalPrice;
  }, 0);

  return (
    <>
      {/* BACKGROUND DIAL DIM BACKDROP MASK */}
      <div 
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* FLYOUT PANEL DRAWER SHELL */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-coffee-darkest/95 border-l border-coffee-accent/10 shadow-2xl z-50 transition-transform duration-300 ease-in-out transform flex flex-col justify-between ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* PANEL HEADER */}
        <div className="p-6 border-b border-coffee-accent/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag size={18} className="text-coffee-accent" />
            <h2 className="font-serif text-lg text-white font-medium tracking-wide">Your Order Tray</h2>
            <span className="bg-coffee-dark px-2 py-0.5 rounded-full text-[10px] text-coffee-cream font-bold">
              {cartItems.length}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-coffee-dark text-white/70 hover:text-white rounded-full transition-colors cursor-pointer focus:outline-none border-none bg-transparent"
          >
            <X size={20} />
          </button>
        </div>

        {/* CONTAINER LOOP BODY LISTING */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 custom-scrollbar">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-20 opacity-40">
              <ShoppingBag size={48} className="stroke-1 text-coffee-cream" />
              <p className="text-xs tracking-wide uppercase font-light text-white">Your tray is empty</p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                className="flex items-center justify-between p-3 bg-coffee-dark/40 border border-coffee-accent/5 rounded-xl group hover:border-coffee-accent/10 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-12 h-12 object-cover rounded-lg shadow-md"
                  />
                  <div className="text-left">
                    <h4 className="text-xs font-medium text-white font-serif tracking-wide">{item.title}</h4>
                    <span className="text-[11px] text-coffee-accent font-mono">{item.price}</span>
                  </div>
                </div>

                <button 
                  onClick={() => onRemoveItem(index)}
                  className="p-2 text-white/40 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all border-none bg-transparent cursor-pointer"
                  title="Remove Item"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* FOOTER TOTAL CHECKOUT CALCULATION */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-coffee-accent/10 bg-coffee-dark/20 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60 font-light">Subtotal Amount:</span>
              <span className="font-serif font-medium text-lg text-coffee-cream font-mono">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            
            <p className="text-[10px] text-white/40 text-left leading-normal font-light">
              Taxes and shipping fees calculated at settlement step entry parameters.
            </p>

            <button 
              onClick={onCheckout}
              className="w-full py-3 bg-coffee-accent hover:bg-coffee-accent/90 text-coffee-darkest font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg cursor-pointer border-none focus:outline-none"
            >
              Proceed To Settlement
            </button>
          </div>
        )}

      </div>
    </>
  );
}