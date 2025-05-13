import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { SearchBar } from './SearchBar';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  
  const navItems = [
    { 
      name: language === 'english' ? 'Natural Farming' : 'प्राकृतिक खेती', 
      path: '/natural-farming' 
    },
    { 
      name: language === 'english' ? 'Modern Techniques' : 'आधुनिक तकनीक', 
      path: '/modern-techniques' 
    },
    { 
      name: language === 'english' ? 'Community' : 'समुदाय', 
      path: '/community' 
    },
    { 
      name: language === 'english' ? 'Get Advice' : 'सलाह लें', 
      path: '/farm-profile' 
    },
    { 
      name: language === 'english' ? 'Farming Chatbot' : 'खेती चैटबॉट', 
      path: '/chatbot' 
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-krishi-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-krishi-green animate-float" />
              <span className="font-heading text-xl font-bold text-krishi-green">
                {language === 'english' ? 'Smart Krishi' : 'स्मार्ट कृषि'}
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <SearchBar />
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-krishi-green hover:underline decoration-krishi-green/30 underline-offset-4 px-2 py-1 rounded-md text-sm font-medium transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage}
              className="ml-4 border border-krishi-green/20 hover:bg-krishi-green/10"
            >
              {language === 'english' ? 'हिंदी' : 'English'}
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-krishi-green/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-3 py-2">
              <SearchBar />
            </div>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 text-gray-700 hover:bg-krishi-green/10 hover:text-krishi-green rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage}
              className="w-full mt-4 border border-krishi-green/20 hover:bg-krishi-green/10"
            >
              {language === 'english' ? 'हिंदी' : 'English'}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
