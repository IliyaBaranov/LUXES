
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocale } from '../context/LocaleContext';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import { toast } from '@/components/ui/use-toast';

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const { t } = useLocale();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  
  useEffect(() => {
    document.title = 'LUXE$ | Login';
  }, []);

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    
    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false);
      
      // In a real app, you would validate credentials here
      // For now, we'll just mock a successful login
      toast({
        title: t('login.messagetittle'),
        description: t('login.messagedescription'),
      });
      
      navigate('/home');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#2C2C2C] font-['Rubik']">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70" 
        style={{ backgroundImage: 'url("/public/images/login.png")' }}
      ></div>
      
      <Header isLoginPage={true} />
      
      <div className="pt-28 pb-16 relative z-10 flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="bg-brand-pink text-white px-8 py-3 rounded-full text-xl font-semibold">
              LUXE$
            </div>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="bg-[#333333] p-6 rounded-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">{t('login.email')}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="email@example.com" 
                            {...field} 
                            className="bg-[#444] border-[#555] text-white"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">{t('login.password')}</FormLabel>
                        <FormControl>
                          <Input 
                            type="password" 
                            placeholder="••••••••" 
                            {...field} 
                            className="bg-[#444] border-[#555] text-white"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div>
                    <Button 
                      type="submit" 
                      className={isLoading ? 'opacity-70' : ''}
                      onClick={isLoading ? undefined : () => {}}
                    >
                      {isLoading ? 'Logging in...' : 'Log In'}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer hideOnLoginPage={false} />
    </div>
  );
};

export default Login;
