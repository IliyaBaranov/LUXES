
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocale } from '../context/LocaleContext';
import LanguageSwitch from './LanguageSwitch';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

interface HeaderProps {
  isLoginPage?: boolean;
}

const Header = ({ isLoginPage = false }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLocale();
  const { cartItems } = useCart();
  
  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#2C2C2C]/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {!isLoginPage && <Link to="/home" className="text-2xl font-bold text-white">LUXE$</Link>}
          {isLoginPage && <div className="text-2xl font-bold text-white opacity-0">LUXE$</div>}
          
          {!isLoginPage ? (
            <>
              <nav className="hidden md:flex space-x-8">
                <Link to="/home" className="text-white hover:text-brand-pink transition-colors">{t('nav.home')}</Link>
                <Link to="/catalog" className="text-white hover:text-brand-pink transition-colors">{t('nav.catalog')}</Link>
                <Link to="/about" className="text-white hover:text-brand-pink transition-colors">{t('nav.about')}</Link>
                <Link to="/showrooms" className="text-white hover:text-brand-pink transition-colors">{t('nav.showrooms')}</Link>
                <Link to="/delivery" className="text-white hover:text-brand-pink transition-colors">{t('nav.delivery')}</Link>
                <Link to="/cart" className="text-white hover:text-brand-pink transition-colors relative">
                  {t('nav.cart')}
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-brand-pink text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
                <LanguageSwitch />
              </nav>
              <div className="md:hidden flex items-center space-x-4">
                <Link to="/cart" className="text-white relative">
                  <ShoppingCart size={20} />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-brand-pink text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
                <LanguageSwitch />
                <button className="text-white">
                  {t('nav.menu')}
                </button>
              </div>
            </>
          ) : (
            <LanguageSwitch />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
