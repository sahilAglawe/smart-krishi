import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from '@/contexts/LanguageContext';
import { Textarea } from "@/components/ui/textarea";

const FarmProfile = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    farmSize: '',
    currentCrops: '',
    soilType: '',
    problem: '',
    contact: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const adviceCategories = [
    {
      id: 1,
      title: language === 'english' ? 'Crop Selection' : 'फसल चयन',
      description: language === 'english'
        ? 'Get personalized recommendations for crop selection based on your soil type, climate, and market demand.'
        : 'अपनी मिट्टी के प्रकार, जलवायु और बाजार की मांग के आधार पर फसल चयन के लिए व्यक्तिगत सिफारिशें प्राप्त करें।',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854'
    },
    {
      id: 2,
      title: language === 'english' ? 'Soil Management' : 'मिट्टी प्रबंधन',
      description: language === 'english'
        ? 'Learn about soil health improvement, nutrient management, and sustainable soil practices.'
        : 'मिट्टी के स्वास्थ्य में सुधार, पोषक तत्व प्रबंधन और टिकाऊ मिट्टी प्रथाओं के बारे में जानें।',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119'
    },
    {
      id: 3,
      title: language === 'english' ? 'Pest Control' : 'कीट नियंत्रण',
      description: language === 'english'
        ? 'Get advice on natural and chemical-free pest control methods for your crops.'
        : 'अपनी फसलों के लिए प्राकृतिक और रसायन-मुक्त कीट नियंत्रण विधियों पर सलाह प्राप्त करें।',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-krishi-green">
            {language === 'english' ? 'Get Expert Advice' : 'विशेषज्ञ सलाह प्राप्त करें'}
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            {language === 'english'
              ? 'Connect with agricultural experts and get personalized advice for your farming needs.'
              : 'कृषि विशेषज्ञों के साथ जुड़ें और अपनी खेती की जरूरतों के लिए व्यक्तिगत सलाह प्राप्त करें।'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="grid grid-cols-1 gap-6">
              {adviceCategories.map((category) => (
                <Card key={category.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex">
                    <div className="relative h-32 w-32">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-krishi-green">
                  {language === 'english' ? 'Request Advice' : 'सलाह का अनुरोध करें'}
                </CardTitle>
                <CardDescription>
                  {language === 'english'
                    ? 'Fill in your details and describe your farming needs'
                    : 'अपना विवरण भरें और अपनी खेती की जरूरतों का वर्णन करें'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      {language === 'english' ? 'Full Name' : 'पूरा नाम'}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">
                      {language === 'english' ? 'Location' : 'स्थान'}
                    </Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="farmSize">
                      {language === 'english' ? 'Farm Size (Acres)' : 'खेत का आकार (एकड़)'}
                    </Label>
                    <Input
                      id="farmSize"
                      name="farmSize"
                      type="number"
                      value={formData.farmSize}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentCrops">
                      {language === 'english' ? 'Current Crops' : 'वर्तमान फसलें'}
                    </Label>
                    <Input
                      id="currentCrops"
                      name="currentCrops"
                      value={formData.currentCrops}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="soilType">
                      {language === 'english' ? 'Soil Type' : 'मिट्टी का प्रकार'}
                    </Label>
                    <Input
                      id="soilType"
                      name="soilType"
                      value={formData.soilType}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="problem">
                      {language === 'english' ? 'Describe Your Problem/Query' : 'अपनी समस्या/प्रश्न का वर्णन करें'}
                    </Label>
                    <Textarea
                      id="problem"
                      name="problem"
                      value={formData.problem}
                      onChange={handleInputChange}
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact">
                      {language === 'english' ? 'Contact Number' : 'संपर्क नंबर'}
                    </Label>
                    <Input
                      id="contact"
                      name="contact"
                      type="tel"
                      value={formData.contact}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-krishi-green hover:bg-krishi-green/90">
                    {language === 'english' ? 'Submit Request' : 'अनुरोध जमा करें'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 bg-krishi-green/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-krishi-green mb-6">
            {language === 'english' ? 'How It Works' : 'यह कैसे काम करता है'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-krishi-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-krishi-green font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">
                {language === 'english' ? 'Create Profile' : 'प्रोफाइल बनाएं'}
              </h3>
              <p className="text-gray-600">
                {language === 'english'
                  ? 'Tell us about your farm and farming practices'
                  : 'अपने खेत और खेती प्रथाओं के बारे में बताएं'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-krishi-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-krishi-green font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">
                {language === 'english' ? 'Get Matched' : 'मिलान प्राप्त करें'}
              </h3>
              <p className="text-gray-600">
                {language === 'english'
                  ? 'We connect you with relevant experts'
                  : 'हम आपको प्रासंगिक विशेषज्ञों से जोड़ते हैं'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-krishi-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-krishi-green font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">
                {language === 'english' ? 'Receive Advice' : 'सलाह प्राप्त करें'}
              </h3>
              <p className="text-gray-600">
                {language === 'english'
                  ? 'Get personalized recommendations'
                  : 'व्यक्तिगत सिफारिशें प्राप्त करें'}
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default FarmProfile;
