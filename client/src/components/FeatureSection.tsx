
import { Book, Globe, Leaf, MessageSquare, Settings, Tractor } from "lucide-react";

interface FeatureSectionProps {
  language: 'english' | 'hindi';
}

export function FeatureSection({ language }: FeatureSectionProps) {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-krishi-green" />,
      title: language === 'english' ? 'Natural Farming Guide' : 'प्राकृतिक खेती गाइड',
      description: language === 'english' 
        ? 'Recipes for natural fertilizers, pesticides, and organic techniques.' 
        : 'प्राकृतिक उर्वरक, कीटनाशक और जैविक तकनीकों के लिए नुस्खे।'
    },
    {
      icon: <Tractor className="h-8 w-8 text-krishi-green" />,
      title: language === 'english' ? 'Modern Machinery' : 'आधुनिक मशीनरी',
      description: language === 'english' 
        ? 'Latest tech (drones, IoT sensors, soil scanners) awareness.' 
        : 'नवीनतम तकनीक (ड्रोन, IoT सेंसर, मिट्टी स्कैनर) जागरूकता।'
    },
    {
      icon: <Settings className="h-8 w-8 text-krishi-green" />,
      title: language === 'english' ? 'ML Custom Suggestions' : 'ML कस्टम सुझाव',
      description: language === 'english' 
        ? 'Best-fit techniques based on your farm data.' 
        : 'आपके खेत के डेटा के आधार पर सर्वोत्तम तकनीकें।'
    },
    {
      icon: <Book className="h-8 w-8 text-krishi-green" />,
      title: language === 'english' ? 'Localized Content' : 'स्थानीय सामग्री',
      description: language === 'english' 
        ? 'Short videos, graphics — easy to understand.' 
        : 'छोटे वीडियो, ग्राफिक्स - समझने में आसान।'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-krishi-green" />,
      title: language === 'english' ? 'Farmer Community' : 'किसान समुदाय',
      description: language === 'english' 
        ? 'Peer learning and real-time help.' 
        : 'सहकर्मी शिक्षा और वास्तविक समय की मदद।'
    },
    {
      icon: <Globe className="h-8 w-8 text-krishi-green" />,
      title: language === 'english' ? 'Multilingual Support' : 'बहुभाषी समर्थन',
      description: language === 'english' 
        ? 'Hindi and regional languages support.' 
        : 'हिंदी और क्षेत्रीय भाषा समर्थन।'
    },
  ];

  return (
    <section className="py-16 bg-white leaf-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-krishi-green">
            {language === 'english' ? 'Core Features' : 'मुख्य विशेषताएं'}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {language === 'english'
              ? 'Smart Krishi provides everything you need to succeed with sustainable and innovative farming techniques.'
              : 'स्मार्ट कृषि टिकाऊ और नवीन खेती तकनीकों के साथ सफल होने के लिए आपको सब कुछ प्रदान करता है।'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-krishi-green/10 hover:shadow-lg hover:border-krishi-green/30 transition-all duration-300"
            >
              <div className="p-3 bg-krishi-green/10 inline-block rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
