import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-krishi-green mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === 'english' ? 'Page Not Found' : 'पृष्ठ नहीं मिला'}
          </h2>
          <p className="text-gray-600 mb-8">
            {language === 'english'
              ? 'The page you are looking for might have been removed or is temporarily unavailable.'
              : 'आप जिस पृष्ठ की तलाश कर रहे हैं वह हटा दिया गया हो सकता है या अस्थायी रूप से अनुपलब्ध है।'}
          </p>
          <Link to="/">
            <Button className="bg-krishi-green hover:bg-krishi-green/90">
              {language === 'english' ? 'Go Back Home' : 'होम पर वापस जाएं'}
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
