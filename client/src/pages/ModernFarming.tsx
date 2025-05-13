import { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ModernFarming = () => {
  const [language, setLanguage] = useState<'english' | 'hindi'>('english');

  const technologies = [
    {
      id: 1,
      name: language === 'english' ? 'Agricultural Drones' : 'कृषि ड्रोन',
      description: language === 'english' 
        ? 'Monitor crop health, spray pesticides precisely, and analyze field conditions from above.' 
        : 'फसल के स्वास्थ्य की निगरानी करें, कीटनाशकों को सटीक रूप से छिड़कें, और ऊपर से खेत की स्थिति का विश्लेषण करें।',
      path: '/modern-techniques/agricultural_drones'
    },
    {
      id: 2,
      name: language === 'english' ? 'Smart Sensors & IoT' : 'स्मार्ट सेंसर और IoT',
      description: language === 'english' 
        ? 'Real-time monitoring of soil conditions, weather, and crop health using connected sensors.' 
        : 'कनेक्टेड सेंसर का उपयोग करके मिट्टी की स्थिति, मौसम और फसल के स्वास्थ्य की वास्तविक समय निगरानी।',
      path: '/modern-techniques/soil_sensors_iot'
    },
    {
      id: 3,
      name: language === 'english' ? 'Precision Irrigation' : 'सटीक सिंचाई',
      description: language === 'english' 
        ? 'Smart irrigation systems that deliver the right amount of water at the right time.' 
        : 'सही समय पर सही मात्रा में पानी देने वाली स्मार्ट सिंचाई प्रणालियां।',
      path: '/modern-techniques/precision_irrigation'
    },
    {
      id: 4,
      name: language === 'english' ? 'Vertical Farming' : 'ऊर्ध्वाधर खेती',
      description: language === 'english' 
        ? 'Space-efficient farming using stacked layers and controlled environments for year-round crop production.' 
        : 'साल भर फसल उत्पादन के लिए स्टैक्ड लेयर्स और नियंत्रित वातावरण का उपयोग करके स्पेस-एफिशिएंट खेती।',
      path: '/modern-techniques/vertical_farming'
    },
    {
      id: 5,
      name: language === 'english' ? 'AI Crop Analysis' : 'एआई फसल विश्लेषण',
      description: language === 'english' 
        ? 'Artificial intelligence systems for disease detection, yield prediction, and crop health monitoring.' 
        : 'रोग पहचान, उपज पूर्वानुमान और फसल स्वास्थ्य निगरानी के लिए आर्टिफिशियल इंटेलिजेंस सिस्टम।',
      path: '/modern-techniques/ai_crop_disease_detection'
    },
    {
      id: 6,
      name: language === 'english' ? 'Smart Insurance' : 'स्मार्ट बीमा',
      description: language === 'english' 
        ? 'Weather-based crop insurance using real-time data and satellite monitoring for automated risk management.' 
        : 'स्वचालित जोखिम प्रबंधन के लिए वास्तविक समय डेटा और उपग्रह निगरानी का उपयोग करके मौसम-आधारित फसल बीमा।',
      path: '/modern-techniques/weather_based_crop_insurance'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-krishi-green">
            {language === 'english' ? 'Modern Farming Technologies' : 'आधुनिक खेती तकनीक'}
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            {language === 'english'
              ? 'Discover how modern tools and technologies can help you farm more efficiently, save resources, and increase yields.'
              : 'जानें कि आधुनिक उपकरण और प्रौद्योगिकियां आपको अधिक कुशलता से खेती करने, संसाधनों को बचाने और उपज बढ़ाने में कैसे मदद कर सकती हैं।'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((technology) => (
            <Card key={technology.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{technology.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{technology.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-krishi-green hover:bg-krishi-green/90">
                  <Link to={technology.path}>
                    {language === 'english' ? 'Learn More' : 'और जानें'}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default ModernFarming; 