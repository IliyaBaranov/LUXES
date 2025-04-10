
import { Plus } from 'lucide-react';
import Button from './Button';
import { useLocale } from '../context/LocaleContext';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, name, price, image }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden font-['Rubik']">
      <div className="aspect-square w-full relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3 bg-[#333333] flex items-center justify-between">
        <div>
          <p className="text-sm text-white">{name}</p>
          <p className="text-[#D06F9C] font-bold">${price}</p>
        </div>
        <button 
          onClick={handleAddToCart}
          className="w-8 h-8 rounded-full bg-[#D06F9C] flex items-center justify-center text-white hover:bg-opacity-90 transition-all"
        >
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
