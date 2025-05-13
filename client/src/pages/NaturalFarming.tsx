import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';

const NaturalFarming = () => {
  const { language } = useLanguage();

  const techniques = [
    {
      id: 1,
      name: language === 'english' ? 'Zero Budget Natural Farming' : 'जीरो बजट प्राकृतिक खेती',
      description: language === 'english'
        ? 'Learn about Subhash Palekar\'s revolutionary farming method that requires minimal external inputs.'
        : 'सुभाष पालेकर की क्रांतिकारी खेती पद्धति के बारे में जानें जिसमें न्यूनतम बाहरी इनपुट की आवश्यकता होती है।',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854',
      path: '/natural-farming/zero-budget',
      videoUrl: 'https://www.youtube.com/embed/8Z-ne4L7SWI?si=0PX0Qh9KksqKgCR2',
      functions: [
        {
          title: language === 'english' ? 'Beejamrit' : 'बीजामृत',
          description: language === 'english'
            ? 'Seed treatment using cow dung, cow urine, and lime to protect seeds from soil-borne diseases.'
            : 'बीजों को मिट्टी से होने वाली बीमारियों से बचाने के लिए गोबर, गोमूत्र और चूने का उपयोग।'
        },
        {
          title: language === 'english' ? 'Jeevamrit' : 'जीवामृत',
          description: language === 'english'
            ? 'Natural fertilizer made from cow dung, cow urine, jaggery, and pulse flour.'
            : 'गोबर, गोमूत्र, गुड़ और दाल के आटे से बना प्राकृतिक उर्वरक।'
        }
      ],
      benefits: [
        language === 'english' ? 'No chemical inputs required' : 'रासायनिक इनपुट की आवश्यकता नहीं',
        language === 'english' ? 'Cost-effective farming' : 'किफायती खेती',
        language === 'english' ? 'Sustainable agriculture' : 'टिकाऊ कृषि',
        language === 'english' ? 'Better soil health' : 'बेहतर मिट्टी स्वास्थ्य'
      ]
    },
    {
      id: 2,
      name: language === 'english' ? 'Permaculture' : 'परमाकल्चर',
      description: language === 'english'
        ? 'Discover how to create sustainable and self-sufficient agricultural ecosystems.'
        : 'टिकाऊ और आत्मनिर्भर कृषि पारिस्थितिकी तंत्र बनाने का तरीका जानें।',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119',
      path: '/natural-farming/permaculture',
      videoUrl: 'https://www.youtube.com/embed/hCQHwimJFGM?si=Ab1kF8OwL31fYlvc',
      functions: [
        {
          title: language === 'english' ? 'Design Principles' : 'डिजाइन सिद्धांत',
          description: language === 'english'
            ? 'Learn to design agricultural systems that mimic natural ecosystems.'
            : 'प्राकृतिक पारिस्थितिकी तंत्र की नकल करने वाले कृषि सिस्टम को डिजाइन करना सीखें।'
        },
        {
          title: language === 'english' ? 'Resource Management' : 'संसाधन प्रबंधन',
          description: language === 'english'
            ? 'Efficient use of water, energy, and other resources in farming.'
            : 'खेती में पानी, ऊर्जा और अन्य संसाधनों का कुशल उपयोग।'
        }
      ],
      benefits: [
        language === 'english' ? 'Self-sustaining systems' : 'आत्मनिर्भर प्रणालियां',
        language === 'english' ? 'Biodiversity conservation' : 'जैव विविधता संरक्षण',
        language === 'english' ? 'Reduced waste' : 'कम अपशिष्ट',
        language === 'english' ? 'Natural pest control' : 'प्राकृतिक कीट नियंत्रण'
      ]
    },
    {
      id: 3,
      name: language === 'english' ? 'Organic Farming' : 'जैविक खेती',
      description: language === 'english'
        ? 'Learn about certified organic farming practices that promote soil health and biodiversity.'
        : 'मिट्टी के स्वास्थ्य और जैव विविधता को बढ़ावा देने वाली प्रमाणित जैविक खेती प्रथाओं के बारे में जानें।',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
      path: '/natural-farming/organic',
      videoUrl: 'https://www.youtube.com/embed/Ulf8E1XnhgI?si=JmIK_h2AasEFX_TE',
      functions: [
        {
          title: language === 'english' ? 'Soil Management' : 'मिट्टी प्रबंधन',
          description: language === 'english'
            ? 'Techniques for maintaining soil fertility through natural means.'
            : 'प्राकृतिक तरीकों से मिट्टी की उर्वरता बनाए रखने की तकनीकें।'
        },
        {
          title: language === 'english' ? 'Pest Control' : 'कीट नियंत्रण',
          description: language === 'english'
            ? 'Natural methods for controlling pests and diseases.'
            : 'कीटों और बीमारियों को नियंत्रित करने के प्राकृतिक तरीके।'
        }
      ],
      benefits: [
        language === 'english' ? 'Chemical-free produce' : 'रसायन-मुक्त उत्पाद',
        language === 'english' ? 'Better nutrition' : 'बेहतर पोषण',
        language === 'english' ? 'Environmental protection' : 'पर्यावरण संरक्षण',
        language === 'english' ? 'Premium market value' : 'प्रीमियम बाजार मूल्य'
      ]
    },
    {
      id: 4,
      name: language === 'english' ? 'Biodynamic Farming' : 'बायोडायनामिक खेती',
      description: language === 'english'
        ? 'Explore the holistic approach to farming that considers cosmic rhythms and natural cycles.'
        : 'खेती के लिए समग्र दृष्टिकोण का अन्वेषण करें जो ब्रह्मांडीय लय और प्राकृतिक चक्रों को ध्यान में रखता है।',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399',
      path: '/natural-farming/biodynamic',
      videoUrl: 'https://www.youtube.com/embed/Dn7Q4oIrP3I?si=iUlgSp0rxXvzYO41',
      functions: [
        {
          title: language === 'english' ? 'Cosmic Influences' : 'ब्रह्मांडीय प्रभाव',
          description: language === 'english'
            ? 'Understanding and working with lunar and planetary cycles in farming.'
            : 'खेती में चंद्र और ग्रह चक्रों को समझना और उनके साथ काम करना।'
        },
        {
          title: language === 'english' ? 'Biodynamic Preparations' : 'बायोडायनामिक तैयारी',
          description: language === 'english'
            ? 'Special preparations made from herbs, minerals, and animal manures.'
            : 'जड़ी-बूटियों, खनिजों और पशु खाद से बनी विशेष तैयारी।'
        }
      ],
      benefits: [
        language === 'english' ? 'Enhanced soil vitality' : 'बढ़ी हुई मिट्टी की जीवन शक्ति',
        language === 'english' ? 'Better crop quality' : 'बेहतर फसल गुणवत्ता',
        language === 'english' ? 'Natural pest resistance' : 'प्राकृतिक कीट प्रतिरोध',
        language === 'english' ? 'Sustainable practices' : 'टिकाऊ प्रथाएं'
      ]
    },
    {
      id: 5,
      name: language === 'english' ? 'Vermicomposting' : 'वर्मीकम्पोस्टिंग',
      description: language === 'english'
        ? 'Learn how to convert organic waste into nutrient-rich compost using earthworms.'
        : 'केंचुओं का उपयोग करके जैविक अपशिष्ट को पोषक तत्वों से भरपूर खाद में बदलने का तरीका जानें।',
      image: 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9',
      path: '/natural-farming/vermicomposting',
      videoUrl: 'https://www.youtube.com/embed/8Z-ne4L7SWI?si=0PX0Qh9KksqKgCR2',
      functions: [
        {
          title: language === 'english' ? 'Worm Selection' : 'केंचुआ चयन',
          description: language === 'english'
            ? 'Choosing the right species of earthworms for efficient composting.'
            : 'कुशल कम्पोस्टिंग के लिए केंचुओं की सही प्रजाति का चयन।'
        },
        {
          title: language === 'english' ? 'Bedding Preparation' : 'बेडिंग तैयारी',
          description: language === 'english'
            ? 'Creating the ideal environment for worms to thrive and process organic waste.'
            : 'केंचुओं के लिए आदर्श वातावरण बनाना और जैविक अपशिष्ट को संसाधित करना।'
        }
      ],
      benefits: [
        language === 'english' ? 'Rich in nutrients' : 'पोषक तत्वों से भरपूर',
        language === 'english' ? 'Waste reduction' : 'अपशिष्ट में कमी',
        language === 'english' ? 'Soil improvement' : 'मिट्टी में सुधार',
        language === 'english' ? 'Cost-effective' : 'किफायती'
      ]
    },
    {
      id: 6,
      name: language === 'english' ? 'Natural Pest Management' : 'प्राकृतिक कीट प्रबंधन',
      description: language === 'english'
        ? 'Discover eco-friendly methods to control pests and diseases without using harmful chemicals.'
        : 'हानिकारक रसायनों का उपयोग किए बिना कीटों और बीमारियों को नियंत्रित करने के पर्यावरण के अनुकूल तरीके जानें।',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8',
      path: '/natural-farming/pest-management',
      videoUrl: 'https://www.youtube.com/embed/Ulf8E1XnhgI?si=JmIK_h2AasEFX_TE',
      functions: [
        {
          title: language === 'english' ? 'Biological Control' : 'जैविक नियंत्रण',
          description: language === 'english'
            ? 'Using beneficial insects and organisms to control pest populations.'
            : 'कीट आबादी को नियंत्रित करने के लिए लाभकारी कीड़ों और जीवों का उपयोग।'
        },
        {
          title: language === 'english' ? 'Botanical Pesticides' : 'वनस्पति कीटनाशक',
          description: language === 'english'
            ? 'Creating natural pesticides from plants and herbs.'
            : 'पौधों और जड़ी-बूटियों से प्राकृतिक कीटनाशक बनाना।'
        }
      ],
      benefits: [
        language === 'english' ? 'Chemical-free produce' : 'रसायन-मुक्त उत्पाद',
        language === 'english' ? 'Safe for environment' : 'पर्यावरण के लिए सुरक्षित',
        language === 'english' ? 'Cost-effective' : 'किफायती',
        language === 'english' ? 'Sustainable solution' : 'टिकाऊ समाधान'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-krishi-green">
            {language === 'english' ? 'Natural Farming Techniques' : 'प्राकृतिक खेती तकनीकें'}
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            {language === 'english'
              ? 'Discover traditional and sustainable farming methods that work in harmony with nature.'
              : 'प्रकृति के साथ सामंजस्य में काम करने वाली पारंपरिक और टिकाऊ खेती के तरीकों का अन्वेषण करें।'}
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

export default NaturalFarming;
