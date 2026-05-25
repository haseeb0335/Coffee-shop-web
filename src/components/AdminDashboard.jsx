import React, { useState } from 'react';
import { ShieldCheck, Coffee, Package, CheckCircle, X, LogOut, ClipboardList } from 'lucide-react';

export default function AdminDashboard({ isOpen, onClose, orders, onUpdateStatus, clearAllOrders }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Default preview credentials
    if (credentials.username === 'admin' && credentials.password === 'coffee2026') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid master administrator credentials.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCredentials({ username: '', password: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-coffee-darkest border border-coffee-accent/20 w-full max-w-4xl h-[85vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl text-white relative">
        
        {/* CLOSE BUTTON */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white/50 hover:text-white bg-transparent border-none cursor-pointer p-2 rounded-full hover:bg-coffee-dark"
        >
          <X size={20} />
        </button>

        {/* AUTHENTICATION LAYER */}
        {!isAuthenticated ? (
          <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full p-6 space-y-6">
            <div className="text-center space-y-2">
              <ShieldCheck size={44} className="text-coffee-accent mx-auto animate-pulse" />
              <h2 className="font-serif text-2xl tracking-wide">Lounge Gatekeeper</h2>
              <p className="text-xs text-white/40 font-light">Preview client order queues in real-time.</p>
              <div className="bg-coffee-dark/60 text-[11px] px-3 py-1.5 rounded-lg border border-coffee-accent/10 mt-2 text-coffee-cream font-mono">
                Hint: <span className="text-white">admin</span> / <span className="text-white">coffee2026</span>
              </div>
            </div>

            <form onSubmit={handleLogin} className="w-full space-y-4 text-left">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-white/40 block">User Handle</label>
                <input 
                  type="text"
                  required
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  className="w-full bg-coffee-dark border border-coffee-accent/10 focus:border-coffee-accent text-white px-4 py-2.5 text-xs rounded-lg focus:outline-none"
                  placeholder="admin"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-white/40 block">Master Password</label>
                <input 
                  type="password"
                  required
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="w-full bg-coffee-dark border border-coffee-accent/10 focus:border-coffee-accent text-white px-4 py-2.5 text-xs rounded-lg focus:outline-none"
                  placeholder="••••••••"
                />
              </div>

              {error && <p className="text-[11px] text-red-400 font-light text-center">{error}</p>}

              <button type="submit" className="w-full py-2.5 bg-coffee-accent hover:bg-coffee-accent/90 text-coffee-darkest font-bold text-xs uppercase tracking-widest rounded-lg border-none cursor-pointer transition-colors">
                Verify Identity
              </button>
            </form>
          </div>
        ) : (
          
          /* ADMINISTRATIVE ACTIVE VIEW */
          <>
            {/* PANEL HEADER */}
            <div className="p-6 border-b border-coffee-accent/10 bg-coffee-dark/30 flex items-center justify-between">
              <div className="flex items-center space-x-3 text-left">
                <ClipboardList className="text-coffee-accent" size={22} />
                <div>
                  <h2 className="font-serif text-lg tracking-wide">Live Barista Pipeline</h2>
                  <p className="text-[11px] text-white/40 font-light font-mono">System Status: Active Monitoring</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 mr-8">
                {orders.length > 0 && (
                  <button 
                    onClick={clearAllOrders}
                    className="text-[10px] uppercase tracking-widest px-3 py-1.5 border border-red-500/20 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors bg-transparent cursor-pointer"
                  >
                    Clear History
                  </button>
                )}
                <button 
                  onClick={handleLogout}
                  className="p-2 text-white/50 hover:text-white flex items-center space-x-1 text-xs bg-transparent border-none cursor-pointer hover:bg-coffee-dark rounded-lg"
                >
                  <LogOut size={14} />
                  <span>Exit</span>
                </button>
              </div>
            </div>

            {/* ORDERS MANAGER CONTAINER */}
            <div className="p-6 flex-1 overflow-y-auto space-y-4 custom-scrollbar">
              {orders.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 opacity-30 space-y-2">
                  <Package size={48} className="stroke-1 text-coffee-cream" />
                  <p className="text-xs uppercase tracking-widest font-light">No client orders placed yet</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {orders.map((order) => (
                    <div 
                      key={order.id} 
                      className={`p-5 rounded-xl border transition-all text-left flex flex-col justify-between h-[210px] ${
                        order.status === 'Completed' 
                          ? 'bg-coffee-dark/20 border-emerald-500/20 opacity-70' 
                          : 'bg-coffee-dark/50 border-coffee-accent/10'
                      }`}
                    >
                      <div>
                        {/* Meta Identity Row */}
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[10px] font-mono text-coffee-accent uppercase tracking-wider">
                            Order #{order.id.slice(-6)}
                          </span>
                          <span className={`text-[9px] uppercase tracking-widest font-mono px-2 py-0.5 rounded-full font-bold ${
                            order.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                          }`}>
                            {order.status}
                          </span>
                        </div>

                        {/* Order Payload List */}
                        <div className="space-y-1 overflow-y-auto max-h-[70px] pr-1 custom-scrollbar">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between text-xs font-light text-white/80">
                              <span className="flex items-center space-x-1.5">
                                <Coffee size={10} className="text-coffee-cream" />
                                <span className="truncate max-w-[200px]">{item.title}</span>
                              </span>
                              <span className="font-mono text-white/40">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer Totals + Processing Handlers */}
                      <div className="pt-3 border-t border-coffee-accent/5 flex items-center justify-between mt-3">
                        <div className="text-left">
                          <span className="text-[10px] text-white/40 block">Settled Volume:</span>
                          <span className="font-mono text-sm text-coffee-cream font-medium">${order.total.toFixed(2)}</span>
                        </div>

                        {order.status !== 'Completed' && (
                          <button 
                            onClick={() => onUpdateStatus(order.id)}
                            className="flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-coffee-darkest text-[10px] uppercase tracking-widest font-bold rounded-lg border-none cursor-pointer transition-colors"
                          >
                            <CheckCircle size={12} />
                            <span>Serve Cup</span>
                          </button>
                        )}
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}