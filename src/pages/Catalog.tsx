
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { useLocale } from '../context/LocaleContext';

// Sample product data
const products = [
  { id: 1, name: 'T-Shirt Basic', price: 49.99, image: '/public/images/39e489ff-5f13-4dcd-ac3e-7bb0ebd0f256.png' },
  { id: 2, name: 'Hoodie Black', price: 89.99, image: '/public/images/39e489ff-5f13-4dcd-ac3e-7bb0ebd0f256.png' },
  { id: 3, name: 'Pants Classic', price: 69.99, image: '/public/images/39e489ff-5f13-4dcd-ac3e-7bb0ebd0f256.png' },
  { id: 4, name: 'Jacket Urban', price: 129.99, image: '/public/images/39e489ff-5f13-4dcd-ac3e-7bb0ebd0f256.png' },
  { id: 5, name: 'Cap Streetwear', price: 34.99, image: '/public/images/39e489ff-5f13-4dcd-ac3e-7bb0ebd0f256.png' },
  { id: 6, name: 'Sneakers Pro', price: 119.99, image: '/public/images/39e489ff-5f13-4dcd-ac3e-7bb0ebd0f256.png' },
  { id: 7, name: 'Backpack Daily', price: 79.99, image: '/public/images/39e489ff-5f13-4dcd-ac3e-7bb0ebd0f256.png' },
  { id: 8, name: 'Beanie Winter', price: 29.99, image: '/public/images/39e489ff-5f13-4dcd-ac3e-7bb0ebd0f256.png' },
];

const Catalog = () => {
  const { t } = useLocale();
  
  useEffect(() => {
    document.title = 'LUXE$ | Catalog';
  }, []);

  return (
    <div className="min-h-screen bg-[#2C2C2C] font-['Rubik'] flex flex-col">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70" 
        style={{ backgroundImage: 'url("/public/images/bg1.png")' }}
      ></div>
      
      <Header />
      
      <div className="pt-28 pb-16 relative z-10 flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="bg-brand-pink text-white px-8 py-3 rounded-full text-xl font-semibold">
              {t('catalog.title')}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Catalog;
