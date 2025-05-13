import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from "sonner";

const RequestAdvice = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    category: '',
    problem: '',
    contact: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      category: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Here you would typically make an API call to your backend
      // For now, we'll just simulate a successful submission
      console.log('Form submitted:', formData);
      
      // Show success message
      toast.success(
        language === 'english' 
          ? 'Your request has been submitted successfully!' 
          : 'आपका अनुरोध सफलतापूर्वक जमा कर दिया गया है!'
      );
      
      // Reset form
      setFormData({
        name: '',
        location: '',
        category: '',
        problem: '',
        contact: '',
        email: ''
      });
    } catch (error) {
      toast.error(
        language === 'english'
          ? 'Failed to submit request. Please try again.'
          : 'अनुरोध जमा करने में विफल। कृपया पुनः प्रयास करें।'
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <Label htmlFor="category">
                    {language === 'english' ? 'Category' : 'श्रेणी'}
                  </Label>
                  <Select onValueChange={handleSelectChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder={language === 'english' ? 'Select a category' : 'श्रेणी चुनें'} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="crop-selection">
                        {language === 'english' ? 'Crop Selection' : 'फसल चयन'}
                      </SelectItem>
                      <SelectItem value="soil-management">
                        {language === 'english' ? 'Soil Management' : 'मिट्टी प्रबंधन'}
                      </SelectItem>
                      <SelectItem value="pest-control">
                        {language === 'english' ? 'Pest Control' : 'कीट नियंत्रण'}
                      </SelectItem>
                      <SelectItem value="irrigation">
                        {language === 'english' ? 'Irrigation' : 'सिंचाई'}
                      </SelectItem>
                      <SelectItem value="other">
                        {language === 'english' ? 'Other' : 'अन्य'}
                      </SelectItem>
                    </SelectContent>
                  </Select>
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

                <div className="space-y-2">
                  <Label htmlFor="email">
                    {language === 'english' ? 'Email Address' : 'ईमेल पता'}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
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
      </main>
      
      <Footer />
    </div>
  );
};

export default RequestAdvice; 