
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useLocale } from "../context/LocaleContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLocale();

  useEffect(() => {
    document.title = 'LUXE$ | Page Not Found';
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#2C2C2C] graffiti-bg font-['Rubik']">
      <Header />
      
      <div className="pt-28 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-bold mb-4 text-brand-pink">{t('404.title')}</h1>
          <p className="text-xl text-white mb-8">{t('404.message')}</p>
          <Button to="/">{t('404.button')}</Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
