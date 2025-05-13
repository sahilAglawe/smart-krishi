import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AgriculturalDrones = () => {
  const [language, setLanguage] = useState<'english' | 'hindi'>('english');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <Button
            variant="outline"
            asChild
            className="mb-6"
          >
            <Link to="/modern-farming">
              {language === 'english' ? '← Back to Modern Techniques' : '← आधुनिक तकनीकों पर वापस जाएं'}
            </Link>
          </Button>

          <h1 className="text-4xl font-bold text-krishi-green mb-6">
            {language === 'english' ? 'Agricultural Drones' : 'कृषि ड्रोन'}
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              {language === 'english' 
                ? 'Agricultural drones are transforming the way farmers manage their fields. These high-tech flying machines are equipped with advanced cameras, sensors, and sprayers, offering farmers a bird\'s eye view of their crops and the ability to act with precision.'
                : 'कृषि ड्रोन किसानों के खेतों के प्रबंधन के तरीके को बदल रहे हैं। ये उच्च तकनीकी उड़ने वाली मशीनें उन्नत कैमरों, सेंसरों और स्प्रेयर से लैस हैं, जो किसानों को अपनी फसलों का पक्षी-दृष्टि दृश्य प्रदान करती हैं और सटीक कार्रवाई करने की क्षमता देती हैं।'}
            </p>

            <h2 className="text-2xl font-semibold text-krishi-green mt-8 mb-4">
              {language === 'english' ? 'Functions of Agricultural Drones:' : 'कृषि ड्रोन के कार्य:'}
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-krishi-green mb-3">
                  {language === 'english' ? 'Monitor Crop Health' : 'फसल स्वास्थ्य की निगरानी'}
                </h3>
                <p className="text-gray-700">
                  {language === 'english'
                    ? 'Drones equipped with multispectral or thermal sensors can detect issues like water stress, disease, or pest infestations before they\'re visible to the naked eye.'
                    : 'मल्टीस्पेक्ट्रल या थर्मल सेंसर से लैस ड्रोन नंगी आंखों से दिखाई देने से पहले पानी के तनाव, बीमारी या कीट संक्रमण जैसी समस्याओं का पता लगा सकते हैं।'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default AgriculturalDrones; 