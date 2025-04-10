
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary',
  className = '',
  type = 'button'
}) => {
  const baseClasses = "px-6 py-3 font-medium rounded-full transition-all duration-300 font-['Rubik'] cursor-pointer";
  const variantClasses = {
    primary: "bg-[#D06F9C] text-white hover:bg-opacity-90",
    secondary: "bg-transparent border-2 border-[#D06F9C] text-white hover:bg-[#D06F9C]/10"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      type={type}
      onClick={onClick} 
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;
