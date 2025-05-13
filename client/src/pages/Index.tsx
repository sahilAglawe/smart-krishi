import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();

  const features = [
    {
      id: 1,
      title: language === 'english' ? 'Natural Farming' : 'प्राकृतिक खेती',
      description: language === 'english'
        ? 'Learn traditional and sustainable farming methods that work in harmony with nature.'
        : 'प्रकृति के साथ सामंजस्य में काम करने वाली पारंपरिक और टिकाऊ खेती के तरीकों के बारे में जानें।',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854',
      path: '/natural-farming'
    },
    {
      id: 2,
      title: language === 'english' ? 'Modern Techniques' : 'आधुनिक तकनीकें',
      description: language === 'english'
        ? 'Discover innovative farming technologies and methods to increase productivity.'
        : 'उत्पादकता बढ़ाने के लिए नवीन खेती प्रौद्योगिकियों और तरीकों का पता लगाएं।',
      image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31',
      path: '/modern-techniques'
    },
    {
      id: 3,
      title: language === 'english' ? 'Community' : 'समुदाय',
      description: language === 'english'
        ? 'Connect with fellow farmers, share experiences, and learn from each other.'
        : 'साथी किसानों के साथ जुड़ें, अनुभव साझा करें, और एक-दूसरे से सीखें।',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
      path: '/community'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-krishi-green/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-krishi-green mb-6">
                {language === 'english' ? 'Welcome to Krishi Sathi Gyan' : 'कृषि साथी ज्ञान में आपका स्वागत है'}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {language === 'english'
                  ? 'Your trusted companion in the journey of sustainable and modern farming.'
                  : 'टिकाऊ और आधुनिक खेती की यात्रा में आपका विश्वसनीय साथी।'}
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-krishi-green text-center mb-12">
              {language === 'english' ? 'Explore Our Features' : 'हमारी विशेषताओं का अन्वेषण करें'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <Card key={feature.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48 w-full">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link to={feature.path} className="w-full">
                      <Button className="w-full bg-krishi-green hover:bg-krishi-green/90">
                        {language === 'english' ? 'Learn More' : 'और जानें'}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-krishi-green/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-krishi-green mb-6">
              {language === 'english' ? 'Ready to Start Your Journey?' : 'अपनी यात्रा शुरू करने के लिए तैयार हैं?'}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {language === 'english'
                ? 'Join our community of farmers and start learning today.'
                : 'हमारे किसान समुदाय में शामिल हों और आज ही सीखना शुरू करें।'}
            </p>
            <Link to="/farm-profile">
              <Button className="bg-krishi-green hover:bg-krishi-green/90 text-lg px-8 py-6">
                {language === 'english' ? 'Get Started' : 'शुरू करें'}
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
