import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Menu from './components/Menu';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import AdminDashboard from './components/AdminDashboard';
import { CheckCircle2, X } from 'lucide-react';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  
  // Custom non-blocking modal notice state configuration
  const [successNotice, setSuccessNotice] = useState({ show: false, token: '' });
  
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('lounge_orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem('lounge_orders', JSON.stringify(orders));
  }, [orders]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleRemoveItem = (targetIndex) => {
    setCart((prevCart) => prevCart.filter((_, idx) => idx !== targetIndex));
  };

  const handleProceedToSettlement = () => {
    if (cart.length === 0) return;

    const subtotal = cart.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0);
    const orderToken = 'ORD-' + Math.random().toString(36).substr(2, 6).toUpperCase();

    const newOrder = {
      id: orderToken,
      items: [...cart],
      total: subtotal,
      status: 'Pending Barista',
      timestamp: new Date().toLocaleTimeString()
    };

    setOrders((prevOrders) => [newOrder, ...prevOrders]);
    setCart([]); 
    setIsCartOpen(false); 

    // Open custom aesthetic notice instead of the image_fe3ca4.png alert prompt
    setSuccessNotice({ show: true, token: orderToken.slice(-6) });
  };

  const handleUpdateOrderStatus = (orderId) => {
    setOrders((prevOrders) => 
      prevOrders.map((order) => 
        order.id === orderId ? { ...order, status: 'Completed' } : order
      )
    );
  };

  const handleClearAllHistory = () => {
    if(window.confirm("Purge pipeline system dashboard indexes entirely?")) {
      setOrders([]);
    }
  };

  return (
    <div className="min-h-screen bg-coffee-darkest font-sans antialiased text-white selection:bg-coffee-accent selection:text-coffee-darkest">
      
      {/* Mounted the new handler parameter inside the Navbar */}
      <Navbar 
        cartCount={cart.length} 
        onCartOpen={() => setIsCartOpen(true)} 
        onAdminOpen={() => setIsAdminOpen(true)} 
      />
      
      <Hero />
      <Collection />
      <Menu onAddToCart={handleAddToCart} />
      <Blog />
      <Contact />
      <Footer />
      
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleProceedToSettlement}
      />

      <AdminDashboard 
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        orders={orders}
        onUpdateStatus={handleUpdateOrderStatus}
        clearAllOrders={handleClearAllHistory}
      />

      {/* NEW CUSTOM PREMIUM POPUP MODAL (REPLACES NATIVE ALERT PROMPT) */}
      {successNotice.show && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-coffee-dark border border-coffee-accent/20 rounded-2xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl relative">
            <button 
              onClick={() => setSuccessNotice({ show: false, token: '' })}
              className="absolute top-3 right-3 text-white/40 hover:text-white border-none bg-transparent cursor-pointer"
            >
              <X size={16} />
            </button>

            <CheckCircle2 size={40} className="text-coffee-accent mx-auto" />
            
            <div className="space-y-1">
              <h3 className="font-serif text-lg tracking-wide text-white">Order Transmitted!</h3>
              <p className="text-xs text-white/50 font-light">Your items have been forwarded to the kitchen.</p>
            </div>

            <div className="p-3 bg-coffee-darkest/60 border border-coffee-accent/10 rounded-xl">
              <span className="text-[10px] text-white/40 uppercase block tracking-widest font-semibold">Allocation Token</span>
              <span className="font-mono text-base font-bold text-coffee-cream">#{successNotice.token}</span>
            </div>

            <p className="text-[10px] text-white/40 font-light leading-normal">
              Click the <span className="text-coffee-accent font-medium">Staff Portal (Shield Icon)</span> up top in the menu bar to preview or execute this transaction sequence inside the live system pipeline.
            </p>

            <button 
              onClick={() => setSuccessNotice({ show: false, token: '' })}
              className="w-full py-2 bg-coffee-accent hover:bg-coffee-accent/90 text-coffee-darkest font-bold text-xs uppercase tracking-widest rounded-xl transition-all border-none cursor-pointer"
            >
              Acknowledge
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;