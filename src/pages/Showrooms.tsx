
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Map from '../components/Map';
import { useLocale } from '../context/LocaleContext';

const Showrooms = () => {
  const { t } = useLocale();
  
  useEffect(() => {
    document.title = 'LUXE$ | Showrooms';
  }, []);

  return (
    <div className="min-h-screen bg-[#2C2C2C] font-['Rubik']">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70" 
        style={{ backgroundImage: 'url("/public/images/bg2.png")' }}
      ></div>
      
      <Header />
      
      <div className="pt-28 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="bg-brand-pink text-white px-8 py-3 rounded-full text-xl font-semibold">
              {t('showrooms.title')}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <div className="bg-[#333333] p-6 md:p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">{t('showrooms.visit')}</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('showrooms.address.title')}</h3>
                  <p className="text-white text-lg mb-4">{t('showrooms.address.value')}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('showrooms.hours.title')}</h3>
                  <p className="text-white text-lg mb-2">{t('showrooms.hours.value')}</p>
                  <p className="text-gray-400 text-sm italic">{t('showrooms.hours.note')}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('showrooms.contact.title')}</h3>
                  <p className="text-white text-lg">+7 (123) 456-7890</p>
                  <p className="text-white text-lg">info@luxesbrand.com</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <Map />
            </div>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 z-20">
        <Footer />
      </div>
    </div>
  );
};

export default Showrooms;
