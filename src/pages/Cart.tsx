
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { useLocale } from '../context/LocaleContext';
import { useCart } from '../context/CartContext';
import { Trash, Plus, Minus } from 'lucide-react';

const Cart = () => {
  const { t } = useLocale();
  const { cartItems, removeFromCart, updateQuantity, calculateTotal } = useCart();
  
  useEffect(() => {
    document.title = 'LUXE$ | Cart';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#2C2C2C] font-['Rubik']">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70" 
        style={{ backgroundImage: 'url("/public/images/order.png")' }}
      ></div>
      
      <Header />
      
      <div className="flex-grow pt-28 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="bg-brand-pink text-white px-8 py-3 rounded-full text-xl font-semibold">
              {t('cart.title')}
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {cartItems.length === 0 ? (
              <div className="bg-[#333333] p-6 rounded-lg text-center">
                <h2 className="text-xl mb-4">{t('cart.empty')}</h2>
                <Button to="/catalog" className="cursor-pointer">{t('cart.goto.catalog')}</Button>
              </div>
            ) : (
              <div className="bg-[#333333] p-6 rounded-lg">
                <div className="space-y-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-center space-x-4 border-b border-gray-700 pb-4">
                      <div className="w-20 h-20 bg-white rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <p className="text-brand-pink font-bold">${item.price}</p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded bg-[#444] flex items-center justify-center cursor-pointer"
                        >
                          <Minus size={16} />
                        </button>
                        
                        <span className="w-8 text-center">{item.quantity}</span>
                        
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded bg-[#444] flex items-center justify-center cursor-pointer"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <div className="w-24 text-right">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-white transition-colors p-2 cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <p className="text-lg">{t('cart.total')} <span className="font-bold text-brand-pink">${calculateTotal().toFixed(2)}</span></p>
                  </div>
                  
                  <div className="mt-4 md:mt-0">
                    <Button className="cursor-pointer">{t('cart.checkout')}</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
