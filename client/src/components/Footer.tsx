import { useLanguage } from '@/contexts/LanguageContext';
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  language?: 'english' | 'hindi';
}

export const Footer = ({ language: propLanguage }: FooterProps) => {
  const { language: contextLanguage } = useLanguage();
  const language = propLanguage || contextLanguage;

  return (
    <footer className="bg-krishi-green text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'english' ? 'About Us' : 'हमारे बारे में'}
            </h3>
            <p className="text-sm">
              {language === 'english'
                ? 'Krishi Sathi Gyan is dedicated to empowering farmers with knowledge and modern farming techniques.'
                : 'कृषि साथी ज्ञान किसानों को ज्ञान और आधुनिक खेती तकनीकों से सशक्त बनाने के लिए समर्पित है।'}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'english' ? 'Quick Links' : 'त्वरित लिंक'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/natural-farming" className="hover:text-krishi-green/80">
                  {language === 'english' ? 'Natural Farming' : 'प्राकृतिक खेती'}
                </a>
              </li>
              <li>
                <a href="/modern-techniques" className="hover:text-krishi-green/80">
                  {language === 'english' ? 'Modern Techniques' : 'आधुनिक तकनीकें'}
                </a>
              </li>
              <li>
                <a href="/community" className="hover:text-krishi-green/80">
                  {language === 'english' ? 'Community' : 'समुदाय'}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'english' ? 'Contact' : 'संपर्क'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                {language === 'english' ? 'Email: info@krishisathi.com' : 'ईमेल: info@krishisathi.com'}
              </li>
              <li>
                {language === 'english' ? 'Phone: +91 1234567890' : 'फोन: +91 1234567890'}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-krishi-green/20 text-center text-sm">
          <p>
            {language === 'english'
              ? '© 2024 Krishi Sathi Gyan. All rights reserved.'
              : '© 2024 कृषि साथी ज्ञान। सर्वाधिकार सुरक्षित।'}
          </p>
        </div>
      </div>
    </footer>
  );
};
