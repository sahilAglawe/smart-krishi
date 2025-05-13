import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const TechniqueDetail = () => {
  const { slug } = useParams();
  const { language } = useLanguage();

  // This would typically come from an API or data store
  const technique = {
    id: 1,
    name: language === 'english' ? 'Natural Farming Basics' : 'प्राकृतिक खेती के मूल सिद्धांत',
    description: language === 'english'
      ? 'Learn the fundamental principles of natural farming and how to implement them in your farm.'
      : 'प्राकृतिक खेती के मूल सिद्धांतों को सीखें और अपने खेत में उन्हें कैसे लागू करें।',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854',
    content: {
      principles: [
        {
          title: language === 'english' ? 'Soil Health' : 'मिट्टी का स्वास्थ्य',
          description: language === 'english'
            ? 'Maintain soil fertility through natural means like composting and crop rotation.'
            : 'कम्पोस्टिंग और फसल चक्र जैसे प्राकृतिक तरीकों से मिट्टी की उर्वरता बनाए रखें।'
        },
        {
          title: language === 'english' ? 'Biodiversity' : 'जैव विविधता',
          description: language === 'english'
            ? 'Promote diverse plant and animal life in your farming system.'
            : 'अपनी खेती प्रणाली में विविध पौधों और जानवरों के जीवन को बढ़ावा दें।'
        },
        {
          title: language === 'english' ? 'Natural Inputs' : 'प्राकृतिक इनपुट',
          description: language === 'english'
            ? 'Use only natural and organic inputs for farming.'
            : 'खेती के लिए केवल प्राकृतिक और जैविक इनपुट का उपयोग करें।'
        }
      ],
      benefits: [
        language === 'english' ? 'Sustainable farming practices' : 'टिकाऊ खेती प्रथाएं',
        language === 'english' ? 'Better soil health' : 'बेहतर मिट्टी स्वास्थ्य',
        language === 'english' ? 'Reduced input costs' : 'कम इनपुट लागत',
        language === 'english' ? 'Chemical-free produce' : 'रसायन-मुक्त उत्पाद'
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl font-bold text-krishi-green mb-6">
              {technique.name}
            </h1>
            <p className="text-gray-600 mb-8">
              {technique.description}
            </p>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-krishi-green mb-4">
                  {language === 'english' ? 'Key Principles' : 'मुख्य सिद्धांत'}
                </h2>
                <div className="space-y-4">
                  {technique.content.principles.map((principle, index) => (
                    <div key={index} className="bg-krishi-green/5 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">{principle.title}</h3>
                      <p className="text-gray-600">{principle.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-krishi-green mb-4">
                  {language === 'english' ? 'Benefits' : 'लाभ'}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {technique.content.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img
              src={technique.image}
              alt={technique.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default TechniqueDetail;
