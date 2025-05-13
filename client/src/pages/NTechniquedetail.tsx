import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from '@/contexts/LanguageContext';

interface TechniqueFunction {
  title: string;
  description: string;
}

interface Technique {
  name: string;
  description: string;
  functions: TechniqueFunction[];
  benefits: string[];
  videoUrl?: string;
}

const techniques: Record<string, Technique> = {
  'zero-budget': {
    name: "Zero Budget Natural Farming",
    description: "Zero Budget Natural Farming (ZBNF) is a revolutionary farming method developed by Subhash Palekar. It requires minimal external inputs and focuses on using natural resources available on the farm. This method has gained popularity for its cost-effectiveness and sustainability.",
    functions: [
      {
        title: "Beejamrit",
        description: "A seed treatment solution made from cow dung, cow urine, and lime. It protects seeds from soil-borne diseases and promotes healthy germination."
      },
      {
        title: "Jeevamrit",
        description: "A natural fertilizer made by fermenting cow dung, cow urine, jaggery, and pulse flour. It enhances soil microbial activity and provides essential nutrients to plants."
      },
      {
        title: "Mulching",
        description: "Using crop residues and other organic matter to cover the soil surface. This helps retain moisture, control weeds, and improve soil structure."
      },
      {
        title: "Waaphasa",
        description: "A technique that ensures proper aeration of soil, allowing roots to breathe and absorb nutrients effectively."
      }
    ],
    benefits: [
      "No chemical inputs required, reducing farming costs",
      "Improves soil health and fertility naturally",
      "Produces chemical-free, nutritious food",
      "Sustainable and environmentally friendly",
      "Suitable for small and marginal farmers"
    ],
    videoUrl: "https://www.youtube.com/embed/8Z-ne4L7SWI?si=0PX0Qh9KksqKgCR2"
  },
  'permaculture': {
    name: "Permaculture",
    description: "Permaculture is a design system for creating sustainable and self-sufficient agricultural ecosystems. It mimics natural patterns and relationships to create productive and resilient farming systems.",
    functions: [
      {
        title: "Design Principles",
        description: "Creating agricultural systems that work with nature rather than against it, using patterns observed in natural ecosystems."
      },
      {
        title: "Resource Management",
        description: "Efficient use of water, energy, and other resources through careful planning and design."
      },
      {
        title: "Polyculture",
        description: "Growing multiple crops together to create beneficial relationships and increase biodiversity."
      },
      {
        title: "Natural Building",
        description: "Using local, natural materials to create farm infrastructure that harmonizes with the environment."
      }
    ],
    benefits: [
      "Creates self-sustaining agricultural systems",
      "Conserves biodiversity and natural resources",
      "Reduces waste through efficient resource use",
      "Builds resilience against climate change",
      "Promotes community and local food systems"
    ],
    videoUrl: "https://www.youtube.com/embed/hCQHwimJFGM?si=Ab1kF8OwL31fYlvc"
  },
  'organic': {
    name: "Organic Farming",
    description: "Organic farming is a holistic production management system that promotes and enhances agro-ecosystem health, including biodiversity, biological cycles, and soil biological activity.",
    functions: [
      {
        title: "Soil Management",
        description: "Maintaining soil fertility through natural means like composting, green manuring, and crop rotation."
      },
      {
        title: "Pest Control",
        description: "Using natural methods like biological control, crop rotation, and resistant varieties to manage pests and diseases."
      },
      {
        title: "Weed Management",
        description: "Controlling weeds through mechanical methods, mulching, and crop competition."
      },
      {
        title: "Certification",
        description: "Following strict standards and maintaining records to achieve organic certification."
      }
    ],
    benefits: [
      "Produces chemical-free, nutritious food",
      "Protects soil health and water quality",
      "Supports biodiversity and ecosystem health",
      "Commands premium market prices",
      "Reduces environmental pollution"
    ],
    videoUrl: "https://www.youtube.com/embed/Ulf8E1XnhgI?si=JmIK_h2AasEFX_TE"
  },
  'biodynamic': {
    name: "Biodynamic Farming",
    description: "Biodynamic farming is a holistic approach that considers cosmic rhythms and natural cycles in agricultural practices. It combines organic farming principles with spiritual and mystical concepts.",
    functions: [
      {
        title: "Cosmic Influences",
        description: "Working with lunar and planetary cycles to determine optimal times for planting, cultivating, and harvesting."
      },
      {
        title: "Biodynamic Preparations",
        description: "Using special preparations made from herbs, minerals, and animal manures to enhance soil and plant health."
      },
      {
        title: "Compost Management",
        description: "Creating and applying compost with specific biodynamic preparations to improve soil fertility."
      },
      {
        title: "Farm Organism",
        description: "Treating the farm as a self-contained organism with its own unique character and needs."
      }
    ],
    benefits: [
      "Enhances soil vitality and structure",
      "Produces high-quality, flavorful crops",
      "Creates balanced farm ecosystems",
      "Builds resilience to climate change",
      "Promotes sustainable agriculture"
    ],
    videoUrl: "https://www.youtube.com/embed/Dn7Q4oIrP3I?si=iUlgSp0rxXvzYO41"
  },
  'vermicomposting': {
    name: "Vermicomposting",
    description: "Vermicomposting is a natural process of composting that uses earthworms to convert organic waste into nutrient-rich compost. This method is highly efficient and produces superior quality compost compared to traditional methods.",
    functions: [
      {
        title: "Worm Selection",
        description: "Choosing appropriate earthworm species like Eisenia fetida (red wiggler) or Lumbricus rubellus that are efficient in processing organic waste."
      },
      {
        title: "Bedding Preparation",
        description: "Creating an optimal environment with proper moisture, temperature, and pH levels for worms to thrive and process waste effectively."
      },
      {
        title: "Waste Management",
        description: "Properly preparing and adding organic waste materials in layers to maintain the right carbon-to-nitrogen ratio for efficient decomposition."
      },
      {
        title: "Harvesting",
        description: "Collecting the finished vermicompost while ensuring minimal disturbance to the worm population."
      }
    ],
    benefits: [
      "Produces nutrient-rich, high-quality compost",
      "Reduces organic waste going to landfills",
      "Improves soil structure and water retention",
      "Enhances plant growth and disease resistance",
      "Environmentally friendly waste management"
    ],
    videoUrl: "https://www.youtube.com/embed/8Z-ne4L7SWI?si=0PX0Qh9KksqKgCR2"
  },
  'pest-management': {
    name: "Natural Pest Management",
    description: "Natural pest management focuses on controlling pests and diseases using ecological methods that maintain the balance of nature. This approach avoids synthetic chemicals and promotes sustainable farming practices.",
    functions: [
      {
        title: "Biological Control",
        description: "Using beneficial insects, birds, and microorganisms to control pest populations naturally. This includes introducing predators, parasites, and pathogens that target specific pests."
      },
      {
        title: "Botanical Pesticides",
        description: "Creating natural pesticides from plants like neem, garlic, and chili that have natural pest-repelling properties. These are safe for beneficial insects and the environment."
      },
      {
        title: "Cultural Practices",
        description: "Implementing farming practices like crop rotation, intercropping, and proper spacing to prevent pest infestations and disease spread."
      },
      {
        title: "Physical Barriers",
        description: "Using nets, traps, and other physical methods to protect crops from pests without using chemicals."
      }
    ],
    benefits: [
      "Produces chemical-free, safe food",
      "Protects beneficial insects and biodiversity",
      "Reduces environmental pollution",
      "Cost-effective in the long term",
      "Builds soil and ecosystem health"
    ],
    videoUrl: "https://www.youtube.com/embed/Ulf8E1XnhgI?si=JmIK_h2AasEFX_TE"
  }
};

export default function NTechniquedetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const technique = techniques[slug as keyof typeof techniques];

  if (!technique) {
    return (
      <div>
        <Navbar />
        <div className="max-w-4xl mx-auto p-4 mt-6">
          <h1 className="text-2xl font-bold text-red-600">
            {language === 'english' ? 'Technique not found' : 'तकनीक नहीं मिली'}
          </h1>
          <Button onClick={() => navigate('/natural-farming')} className="mt-4">
            {language === 'english' ? 'Back to Natural Farming' : 'प्राकृतिक खेती पर वापस जाएं'}
          </Button>
        </div>
        <Footer language={language} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => navigate('/natural-farming')}
            className="mb-6"
          >
            {language === 'english' ? '← Back to Natural Farming' : '← प्राकृतिक खेती पर वापस जाएं'}
          </Button>

          <h1 className="text-4xl font-bold text-krishi-green mb-6">
            {technique.name}
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              {technique.description}
            </p>

            <h2 className="text-2xl font-semibold text-krishi-green mt-8 mb-4">
              {language === 'english' ? 'Key Functions:' : 'प्रमुख कार्य:'}
            </h2>

            <div className="space-y-4">
              {technique.functions.map((func, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-krishi-green mb-3">
                    {func.title}
                  </h3>
                  <p className="text-gray-700">
                    {func.description}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-krishi-green mt-8 mb-4">
              {language === 'english' ? 'Key Benefits:' : 'प्रमुख लाभ:'}
            </h2>
            <div className="space-y-2">
              {technique.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-krishi-green mr-2">✅</span>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            {technique.videoUrl && (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-krishi-green mb-4">
                  {language === 'english' ? 'Watch How It Works:' : 'देखें कैसे काम करता है:'}
                </h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    width="100%"
                    height="315"
                    src={technique.videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
} 