
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FarmProfileFormProps {
  language: 'english' | 'hindi';
}

export function FarmProfileForm({ language }: FarmProfileFormProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send this data to the backend
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };
  
  const soilTypes = language === 'english' 
    ? ["Sandy", "Clay", "Loamy", "Silt", "Peaty", "Chalky", "Don't know"] 
    : ["बलुई", "चिकनी मिट्टी", "दोमट", "गाद", "पीटी", "चूना", "पता नहीं"];
  
  const crops = language === 'english'
    ? ["Rice", "Wheat", "Cotton", "Sugarcane", "Pulses", "Vegetables", "Fruits", "Other"]
    : ["चावल", "गेहूँ", "कपास", "गन्ना", "दालें", "सब्जियां", "फल", "अन्य"];
  
  const irrigationTypes = language === 'english'
    ? ["Flood irrigation", "Drip irrigation", "Sprinkler", "Rain-fed", "Other", "None"]
    : ["बाढ़ सिंचाई", "ड्रिप सिंचाई", "स्प्रिंकलर", "वर्षा-आधारित", "अन्य", "कोई नहीं"];

  if (formSubmitted) {
    return (
      <Card className="w-full max-w-xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl text-center text-krishi-green">
            {language === 'english' ? 'Thank You!' : 'धन्यवाद!'}
          </CardTitle>
          <CardDescription className="text-center">
            {language === 'english' 
              ? 'Your farm profile has been received. We will analyze your information and provide personalized recommendations soon.' 
              : 'आपकी फार्म प्रोफाइल प्राप्त हो गई है। हम आपकी जानकारी का विश्लेषण करेंगे और जल्द ही व्यक्तिगत सिफारिशें प्रदान करेंगे।'}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button 
            onClick={() => setFormSubmitted(false)}
            className="mt-4 bg-krishi-green hover:bg-krishi-green/90"
          >
            {language === 'english' ? 'Submit Another Profile' : 'एक और प्रोफ़ाइल जमा करें'}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-krishi-green">
            {language === 'english' ? 'Your Farm Details' : 'आपके खेत का विवरण'}
          </CardTitle>
          <CardDescription>
            {language === 'english' 
              ? 'Fill in details to get personalized farming recommendations' 
              : 'व्यक्तिगत कृषि सिफारिशें प्राप्त करने के लिए विवरण भरें'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                {language === 'english' ? 'Name' : 'नाम'}
              </Label>
              <Input id="name" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">
                {language === 'english' ? 'Village/Town' : 'गांव/शहर'}
              </Label>
              <Input id="location" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="district">
                {language === 'english' ? 'District' : 'जिला'}
              </Label>
              <Input id="district" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="state">
                {language === 'english' ? 'State' : 'राज्य'}
              </Label>
              <Input id="state" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="farm-size">
                {language === 'english' ? 'Farm Size (acres)' : 'खेत का आकार (एकड़)'}
              </Label>
              <Input id="farm-size" type="number" required min="0" step="0.5" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="soil-type">
                {language === 'english' ? 'Soil Type' : 'मिट्टी का प्रकार'}
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={language === 'english' ? 'Select soil type' : 'मिट्टी का प्रकार चुनें'} />
                </SelectTrigger>
                <SelectContent>
                  {soilTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="main-crop">
                {language === 'english' ? 'Main Crop' : 'मुख्य फसल'}
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={language === 'english' ? 'Select main crop' : 'मुख्य फसल चुनें'} />
                </SelectTrigger>
                <SelectContent>
                  {crops.map((crop) => (
                    <SelectItem key={crop} value={crop}>
                      {crop}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="irrigation">
                {language === 'english' ? 'Irrigation Type' : 'सिंचाई प्रकार'}
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={language === 'english' ? 'Select irrigation type' : 'सिंचाई प्रकार चुनें'} />
                </SelectTrigger>
                <SelectContent>
                  {irrigationTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="concerns">
                {language === 'english' ? 'Current Farming Challenges' : 'वर्तमान खेती की चुनौतियाँ'}
              </Label>
              <Textarea 
                id="concerns" 
                placeholder={language === 'english' 
                  ? "Describe any issues you're facing..."
                  : "आप जिन समस्याओं का सामना कर रहे हैं उनका वर्णन करें..."
                } 
                rows={3}
              />
            </div>
            
            <Button type="submit" className="w-full mt-4 bg-krishi-green hover:bg-krishi-green/90">
              {language === 'english' ? 'Get Personalized Recommendations' : 'व्यक्तिगत सिफारिशें प्राप्त करें'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
