import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from '@/contexts/LanguageContext';

const Predict = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to your prediction service
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-krishi-green">
              {language === 'english' ? 'Crop Recommendation' : 'फसल सिफारिश'}
            </CardTitle>
            <CardDescription>
              {language === 'english'
                ? 'Enter soil and weather conditions to get crop recommendations.'
                : 'फसल सिफारिशें प्राप्त करने के लिए मिट्टी और मौसम की स्थिति दर्ज करें।'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nitrogen">
                    {language === 'english' ? 'Nitrogen (N)' : 'नाइट्रोजन (N)'}
                  </Label>
                  <Input
                    id="nitrogen"
                    name="nitrogen"
                    type="number"
                    value={formData.nitrogen}
                    onChange={handleInputChange}
                    placeholder="0-140"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phosphorus">
                    {language === 'english' ? 'Phosphorus (P)' : 'फॉस्फोरस (P)'}
                  </Label>
                  <Input
                    id="phosphorus"
                    name="phosphorus"
                    type="number"
                    value={formData.phosphorus}
                    onChange={handleInputChange}
                    placeholder="5-145"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="potassium">
                    {language === 'english' ? 'Potassium (K)' : 'पोटेशियम (K)'}
                  </Label>
                  <Input
                    id="potassium"
                    name="potassium"
                    type="number"
                    value={formData.potassium}
                    onChange={handleInputChange}
                    placeholder="5-205"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="temperature">
                    {language === 'english' ? 'Temperature (°C)' : 'तापमान (°C)'}
                  </Label>
                  <Input
                    id="temperature"
                    name="temperature"
                    type="number"
                    value={formData.temperature}
                    onChange={handleInputChange}
                    placeholder="8-44"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="humidity">
                    {language === 'english' ? 'Humidity (%)' : 'आर्द्रता (%)'}
                  </Label>
                  <Input
                    id="humidity"
                    name="humidity"
                    type="number"
                    value={formData.humidity}
                    onChange={handleInputChange}
                    placeholder="14-100"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ph">
                    {language === 'english' ? 'pH' : 'पीएच'}
                  </Label>
                  <Input
                    id="ph"
                    name="ph"
                    type="number"
                    value={formData.ph}
                    onChange={handleInputChange}
                    placeholder="3.5-10"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rainfall">
                    {language === 'english' ? 'Rainfall (mm)' : 'वर्षा (मिमी)'}
                  </Label>
                  <Input
                    id="rainfall"
                    name="rainfall"
                    type="number"
                    value={formData.rainfall}
                    onChange={handleInputChange}
                    placeholder="20-300"
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full bg-krishi-green hover:bg-krishi-green/90">
                {language === 'english' ? 'Get Recommendation' : 'सिफारिश प्राप्त करें'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Predict; 