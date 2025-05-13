
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  language: 'english' | 'hindi';
}

export function Hero({ language }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-krishi-green/10 to-transparent hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-krishi-green animate-fade-in">
              {language === 'english' 
                ? 'Best of Both Worlds: Natural + Modern Farming' 
                : 'दोनों दुनिया का सर्वश्रेष्ठ: प्राकृतिक + आधुनिक खेती'}
            </h1>
            
            <p className="mt-6 text-lg leading-7 text-gray-700">
              {language === 'english'
                ? 'Smart Krishi combines traditional wisdom with modern innovation to help you grow better crops sustainably and increase your income.'
                : 'स्मार्ट कृषि पारंपरिक ज्ञान और आधुनिक नवाचार को जोड़कर आपको टिकाऊ रूप से बेहतर फसलें उगाने और आपकी आय बढ़ाने में मदद करती है।'}
            </p>
            
            <div className="mt-8 flex justify-center gap-x-4">
              <Button asChild size="lg" className="bg-krishi-green hover:bg-krishi-green/90">
                <Link to="/farm-profile">
                  {language === 'english' ? 'Get Personalized Advice' : 'व्यक्तिगत सलाह प्राप्त करें'}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/natural-farming">
                  {language === 'english' ? 'Explore Techniques' : 'तकनीकों का अन्वेषण करें'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-krishi-wheat/20 blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-krishi-sky/20 blur-3xl"></div>
    </div>
  );
}
