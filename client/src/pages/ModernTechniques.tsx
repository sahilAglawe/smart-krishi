import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';

const ModernTechniques = () => {
  const { language } = useLanguage();

  const techniques = [
    {
      id: 1,
      name: language === 'english' ? 'Agricultural Drones' : 'कृषि ड्रोन',
      description: language === 'english' 
        ? 'Learn how drones are revolutionizing farming with aerial monitoring, spraying, and data collection.' 
        : 'ड्रोन कैसे हवाई निगरानी, छिड़काव और डेटा संग्रह के साथ खेती में क्रांति ला रहे हैं, यह जानें।',
      image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31',
      path: '/modern-techniques/agricultural_drones',
      videoUrl: 'https://www.youtube.com/embed/Dn7Q4oIrP3I?si=iUlgSp0rxXvzYO41',
      functions: [
        {
          title: language === 'english' ? 'Monitor Crop Health' : 'फसल स्वास्थ्य की निगरानी',
          description: language === 'english'
            ? 'Drones equipped with multispectral or thermal sensors can detect issues like water stress, disease, or pest infestations before they\'re visible to the naked eye.'
            : 'मल्टीस्पेक्ट्रल या थर्मल सेंसर से लैस ड्रोन पानी के तनाव, बीमारी या कीट संक्रमण जैसी समस्याओं को नग्न आंखों से दिखाई देने से पहले ही पहचान सकते हैं।'
        },
        {
          title: language === 'english' ? 'Precision Pesticide Spraying' : 'सटीक कीटनाशक छिड़काव',
          description: language === 'english'
            ? 'Drones can spray fertilizers, herbicides, and pesticides with high accuracy, reducing waste and minimizing environmental impact.'
            : 'ड्रोन उर्वरकों, खरपतवारनाशकों और कीटनाशकों को उच्च सटीकता के साथ छिड़क सकते हैं, जिससे बर्बादी कम होती है और पर्यावरणीय प्रभाव कम होता है।'
        }
      ]
    },
    {
      id: 2,
      name: language === 'english' ? 'Smart Sensors & IoT' : 'स्मार्ट सेंसर और IoT',
      description: language === 'english' 
        ? 'Discover how IoT devices and smart sensors help monitor soil conditions, weather, and crop health in real-time.' 
        : 'IoT उपकरण और स्मार्ट सेंसर कैसे मिट्टी की स्थिति, मौसम और फसल स्वास्थ्य की रीयल-टाइम निगरानी में मदद करते हैं, यह जानें।',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      path: '/modern-techniques/soil_sensors_iot',
      videoUrl: 'https://www.youtube.com/embed/hXC7vCcg2xo?si=gWFggoPrsHxj8f6F',
      functions: [
        {
          title: language === 'english' ? 'Real-Time Soil Monitoring' : 'रीयल-टाइम मिट्टी निगरानी',
          description: language === 'english'
            ? 'Continuous monitoring of soil moisture, nutrients, and pH levels for optimal crop growth.'
            : 'इष्टतम फसल विकास के लिए मिट्टी की नमी, पोषक तत्वों और पीएच स्तर की निरंतर निगरानी।'
        },
        {
          title: language === 'english' ? 'Weather Integration' : 'मौसम एकीकरण',
          description: language === 'english'
            ? 'Smart sensors integrate weather data to provide comprehensive farm management insights.'
            : 'स्मार्ट सेंसर व्यापक फार्म प्रबंधन अंतर्दृष्टि प्रदान करने के लिए मौसम डेटा को एकीकृत करते हैं।'
        }
      ]
    },
    {
      id: 3,
      name: language === 'english' ? 'Precision Irrigation' : 'सटीक सिंचाई',
      description: language === 'english' 
        ? 'Learn about automated irrigation systems that optimize water usage based on crop needs and soil conditions.' 
        : 'फसल की जरूरतों और मिट्टी की स्थिति के आधार पर पानी के उपयोग को अनुकूलित करने वाले स्वचालित सिंचाई सिस्टम के बारे में जानें।',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119',
      path: '/modern-techniques/precision_irrigation',
      videoUrl: 'https://www.youtube.com/embed/Ulf8E1XnhgI?si=JmIK_h2AasEFX_TE',
      functions: [
        {
          title: language === 'english' ? 'Automated Watering' : 'स्वचालित पानी',
          description: language === 'english'
            ? 'Smart systems that automatically adjust water delivery based on real-time conditions.'
            : 'रीयल-टाइम स्थितियों के आधार पर पानी की डिलीवरी को स्वचालित रूप से समायोजित करने वाले स्मार्ट सिस्टम।'
        },
        {
          title: language === 'english' ? 'Water Conservation' : 'जल संरक्षण',
          description: language === 'english'
            ? 'Advanced systems that minimize water waste while maximizing crop health.'
            : 'उन्नत सिस्टम जो फसल स्वास्थ्य को अधिकतम करते हुए पानी की बर्बादी को कम करते हैं।'
        }
      ]
    },
    {
      id: 4,
      name: language === 'english' ? 'Vertical Farming' : 'वर्टिकल फार्मिंग',
      description: language === 'english' 
        ? 'Explore innovative vertical farming techniques that maximize space and resource efficiency.' 
        : 'अंतरिक्ष और संसाधन दक्षता को अधिकतम करने वाली नवीन वर्टिकल फार्मिंग तकनीकों का अन्वेषण करें।',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
      path: '/modern-techniques/vertical_farming',
      videoUrl: 'https://www.youtube.com/embed/hCQHwimJFGM?si=Ab1kF8OwL31fYlvc',
      functions: [
        {
          title: language === 'english' ? 'Space Optimization' : 'अंतरिक्ष अनुकूलन',
          description: language === 'english'
            ? 'Maximize growing space by utilizing vertical structures and controlled environments.'
            : 'लंबवत संरचनाओं और नियंत्रित वातावरण का उपयोग करके बढ़ते स्थान को अधिकतम करें।'
        },
        {
          title: language === 'english' ? 'Resource Efficiency' : 'संसाधन दक्षता',
          description: language === 'english'
            ? 'Advanced systems that optimize water, nutrients, and energy usage.'
            : 'पानी, पोषक तत्वों और ऊर्जा के उपयोग को अनुकूलित करने वाले उन्नत सिस्टम।'
        }
      ]
    },
    {
      id: 5,
      name: language === 'english' ? 'AI Crop Analysis' : 'एआई फसल विश्लेषण',
      description: language === 'english' 
        ? 'Understand how artificial intelligence helps in crop monitoring, disease detection, and yield prediction.' 
        : 'कृत्रिम बुद्धिमत्ता कैसे फसल निगरानी, रोग पहचान और उपज पूर्वानुमान में मदद करती है, यह समझें।',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854',
      path: '/modern-techniques/ai_crop_disease_detection',
      videoUrl: 'https://www.youtube.com/embed/8Z-ne4L7SWI?si=0PX0Qh9KksqKgCR2',
      functions: [
        {
          title: language === 'english' ? 'Disease Detection' : 'रोग पहचान',
          description: language === 'english'
            ? 'AI-powered systems that can identify plant diseases and pests early.'
            : 'एआई-संचालित सिस्टम जो पौधों के रोगों और कीटों की शुरुआती पहचान कर सकते हैं।'
        },
        {
          title: language === 'english' ? 'Yield Prediction' : 'उपज पूर्वानुमान',
          description: language === 'english'
            ? 'Advanced algorithms that predict crop yields based on various factors.'
            : 'विभिन्न कारकों के आधार पर फसल उपज का पूर्वानुमान लगाने वाले उन्नत एल्गोरिथम।'
        }
      ]
    },
    {
      id: 6,
      name: language === 'english' ? 'Smart Insurance' : 'स्मार्ट बीमा',
      description: language === 'english' 
        ? 'Learn about weather-based crop insurance and smart risk management solutions for farmers.' 
        : 'किसानों के लिए मौसम-आधारित फसल बीमा और स्मार्ट जोखिम प्रबंधन समाधानों के बारे में जानें।',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119',
      path: '/modern-techniques/weather_based_crop_insurance',
      functions: [
        {
          title: language === 'english' ? 'Weather Monitoring' : 'मौसम निगरानी',
          description: language === 'english'
            ? 'Real-time weather tracking for accurate risk assessment and insurance claims.'
            : 'सटीक जोखिम मूल्यांकन और बीमा दावों के लिए रीयल-टाइम मौसम ट्रैकिंग।'
        },
        {
          title: language === 'english' ? 'Risk Management' : 'जोखिम प्रबंधन',
          description: language === 'english'
            ? 'Smart systems that help farmers manage and mitigate agricultural risks.'
            : 'स्मार्ट सिस्टम जो किसानों को कृषि जोखिमों का प्रबंधन और कम करने में मदद करते हैं।'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-krishi-green">
            {language === 'english' ? 'Modern Farming Techniques' : 'आधुनिक खेती तकनीकें'}
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            {language === 'english'
              ? 'Discover cutting-edge technologies and innovative methods that are transforming agriculture for better efficiency and sustainability.'
              : 'बेहतर दक्षता और स्थिरता के लिए कृषि को बदल रही अत्याधुनिक तकनीकों और नवीन तरीकों का अन्वेषण करें।'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techniques.map((technique) => (
            <Card key={technique.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <img
                  src={technique.image}
                  alt={technique.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{technique.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{technique.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-krishi-green hover:bg-krishi-green/90">
                  <Link to={technique.path}>
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

export default ModernTechniques;
