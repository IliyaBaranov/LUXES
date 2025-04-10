import React from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocale } from '../context/LocaleContext';
import { useCart } from '../context/CartContext';

interface CheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ open, onOpenChange }) => {
  const navigate = useNavigate();
  const { t } = useLocale();
  const { clearCart } = useCart();

  const handleContinueShopping = () => {
    clearCart(); // Clear the cart
    onOpenChange(false);
    navigate('/catalog'); // Redirect to catalog
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-md border-0" style={{ 
        backgroundImage: 'url(/images/order.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
        }}>
        <DialogHeader className="flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <DialogTitle className="text-2xl font-semibold text-center">{t('cart.notification.title')}</DialogTitle>
          <DialogDescription className="text-center mt-2 text-white">
            {t('cart.notification.description')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-6 space-y-4">
            <p className="text-sm text-white-600 mb-2">{t('cart.notification.confirmation')}</p>
            <p className="text-sm text-white-600">{t('cart.notification.process')}</p>
        </div>
        
        <DialogFooter className="flex justify-center sm:justify-center gap-2">
          <Button 
            onClick={handleContinueShopping}
            className="w-full bg-neutral-800 hover:bg-neutral-900 text-white transition-colors"
            >
            {t('cart.notification.continueButton')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
