
import { Link, useLocation } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';

interface FooterProps {
  hideOnLoginPage?: boolean;
}

const Footer = ({ hideOnLoginPage = false }: FooterProps) => {
  const { t } = useLocale();
  const location = useLocation();

  return (
    <footer className="bg-[#232323] py-8 font-['Rubik'] w-full mt-auto relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white text-sm">{t('footer.copyright')}</p>
          </div>
          {!hideOnLoginPage && location.pathname !== "/login" && (
            <div className="flex space-x-6">
              <Link 
                to="/about" 
                className="text-white hover:text-brand-pink text-sm transition-colors cursor-pointer pointer-events-auto"
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/catalog" 
                className="text-white hover:text-brand-pink text-sm transition-colors cursor-pointer pointer-events-auto"
              >
                {t('nav.catalog')}
              </Link>
              <Link 
                to="/showrooms" 
                className="text-white hover:text-brand-pink text-sm transition-colors cursor-pointer pointer-events-auto"
              >
                {t('nav.showrooms')}
              </Link>
              <Link 
                to="/delivery" 
                className="text-white hover:text-brand-pink text-sm transition-colors cursor-pointer pointer-events-auto"
              >
                {t('nav.delivery')}
              </Link>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
