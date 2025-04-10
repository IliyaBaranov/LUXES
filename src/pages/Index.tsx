
import { useEffect } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IntroAnimation from '../components/IntroAnimation';
import { useLocale } from '../context/LocaleContext';

const Index = () => {
  const { t, locale } = useLocale();
  
  useEffect(() => {
    document.title = 'LUXE$ | Home';
  }, []);

  return (
    <>
      <IntroAnimation />
      <div className="min-h-screen bg-[#2C2C2C] font-['Rubik'] flex flex-col">
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70" 
          style={{ backgroundImage: 'url("/public/images/mainbg.png")' }}
        ></div>
        
        <Header />
        
        <section className="h-screen flex items-center relative overflow-hidden">
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-down" style={{ animationDelay: '2s' }}>
                <span className="text-brand-pink">LUXE$</span>
                <br />
                <span className="text-white">{t('home.title')}</span>
              </h1>
              <p className="text-white text-xl mb-8 animate-fade-in" style={{ animationDelay: '2.2s' }}>
                {t('home.subtitle')}
              </p>
              <div className="flex space-x-4 animate-fade-in" style={{ animationDelay: '2.4s' }}>
                <Button to="/catalog">{t('nav.catalog')}</Button>
                <Button to="/showrooms" variant="secondary">{t('nav.showrooms')}</Button>
              </div>
            </div>
          </div>
        </section>
        
        <section 
          className="relative z-10 min-h-[500px] flex items-center"
          style={{
            background: `
              linear-gradient(rgba(44, 44, 44, 0.85), rgba(44, 44, 44, 0.85)),
              url('/images/bg3.png')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '6rem 0'
          }}
        >
          <div className="container mx-auto px-4 w-full">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('home.brand.title')}</h2>
                <p className="text-gray-300 mb-8">{t('home.brand.description')}</p>
                <Button to="/catalog">{t('nav.catalog')}</Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-24 bg-[#222222] relative z-10">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70" 
            style={{ backgroundImage: 'url("/public/images/showrooms.png")' }}
          ></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">{t('home.showrooms.title')}</h2>
            
            <div className="bg-[#333333]/90 backdrop-blur-sm rounded-lg p-6 md:p-10 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-2">{t('showrooms.address.title')}</h3>
              <p className="text-white text-lg mb-4">{t('showrooms.address.value')}</p>
              
              <h3 className="text-xl font-semibold mb-2">{t('showrooms.hours.title')}</h3>
              <p className="text-white text-lg mb-2">{t('showrooms.hours.value')}</p>
              <p className="text-gray-400 text-sm italic">{t('showrooms.hours.note')}</p>
              
              <div className="mt-8">
                <Button to="/showrooms">VIEW MAP</Button>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
