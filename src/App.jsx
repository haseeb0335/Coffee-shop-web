import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Menu from './components/Menu';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer'; // 1. Import the Footer file block right here!
import CartDrawer from './components/CartDrawer';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleRemoveItem = (targetIndex) => {
    setCart((prevCart) => prevCart.filter((_, idx) => idx !== targetIndex));
  };

  return (
    <div className="min-h-screen bg-coffee-darkest font-sans antialiased text-white selection:bg-coffee-accent selection:text-coffee-darkest">
      <Navbar cartCount={cart.length} onCartOpen={() => setIsCartOpen(true)} />
      <Hero />
      <Collection />
      <Menu onAddToCart={handleAddToCart} />
      <Blog />
      <Contact />
      
      <Footer /> {/* 2. Add the Footer component right here at the bottom */}
      
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default App;