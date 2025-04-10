
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocale } from '../context/LocaleContext';

const Delivery = () => {
  const { t } = useLocale();
  
  useEffect(() => {
    document.title = 'LUXE$ | Delivery';
  }, []);

  return (
    <div className="min-h-screen bg-[#2C2C2C] font-['Rubik']">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70" 
        style={{ backgroundImage: 'url("/public/images/delivery.png")' }}
      ></div>
      
      <Header />
      
      <div className="pt-28 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="bg-brand-pink text-white px-8 py-3 rounded-full text-xl font-semibold">
              {t('delivery.title')}
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#333333] p-6 md:p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-brand-pink">{t('delivery.pickup.title')}</h2>
                  <p className="text-gray-300 mb-4">
                    {t('delivery.pickup.description')}
                  </p>
                  <p className="text-gray-300 mb-4">
                    {t('delivery.pickup.hours')}
                  </p>
                  <p className="text-gray-300">
                    {t('delivery.pickup.cost')}
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-brand-pink">{t('delivery.cdek.title')}</h2>
                  <p className="text-gray-300 mb-4">
                    {t('delivery.cdek.description')}
                  </p>
                  <p className="text-gray-300 mb-4">
                    {t('delivery.cdek.time')}
                  </p>
                  <p className="text-gray-300">
                    {t('delivery.cdek.cost')}
                  </p>
                </div>
              </div>
              
              <div className="w-full h-px bg-gray-700 my-8"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-brand-pink">{t('delivery.post.title')}</h2>
                  <p className="text-gray-300 mb-4">
                    {t('delivery.post.description')}
                  </p>
                  <p className="text-gray-300 mb-4">
                    {t('delivery.post.time')}
                  </p>
                  <p className="text-gray-300">
                    {t('delivery.post.cost')}
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-brand-pink">{t('delivery.worldwide.title')}</h2>
                  <p className="text-gray-300 mb-4">
                    {t('delivery.worldwide.description')}
                  </p>
                  <p className="text-gray-300 mb-4">
                    {t('delivery.worldwide.time')}
                  </p>
                  <p className="text-gray-300">
                    {t('delivery.worldwide.cost')}
                  </p>
                </div>
              </div>
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

export default Delivery;
