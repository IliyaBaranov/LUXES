
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocale } from '../context/LocaleContext';

const About = () => {
  const { t } = useLocale();
  
  useEffect(() => {
    document.title = 'LUXE$ | About';
  }, []);

  return (
    <div className="min-h-screen bg-[#2C2C2C] font-['Rubik']">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70" 
        style={{ backgroundImage: 'url("/public/images/brand.png")' }}
      ></div>
      
      <Header />
      
      <div className="pt-28 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">{t('about.title')} <span className="text-brand-pink">LUXE$</span></h1>
          
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 mx-auto">
              <div className="bg-[#333333] p-6 md:p-8 rounded-lg">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {t('about.history.p1')}
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {t('about.history.p2')}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {t('about.history.p3')}
                </p>
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

export default About;
