import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { useLanguage } from '@/contexts/LanguageContext';

interface TechniqueFunction {
  title: string;
  description: string;
}

interface Technique {
  name: string;
  description: string;
  functions: TechniqueFunction[];
  benefits?: string[];
  videoUrl?: string;
}

const techniques: Record<string, Technique> = {
  agricultural_drones: {
    name: "Agricultural Drones",
    description: "Agricultural drones are transforming the way farmers manage their fields. These high-tech flying machines are equipped with advanced cameras, sensors, and sprayers, offering farmers a bird's eye view of their crops and the ability to act with precision.",
    functions: [
      {
        title: "Monitor Crop Health",
        description: "Drones equipped with multispectral or thermal sensors can detect issues like water stress, disease, or pest infestations before they're visible to the naked eye."
      },
      {
        title: "Precision Pesticide Spraying",
        description: "Drones can spray fertilizers, herbicides, and pesticides with high accuracy, reducing waste and minimizing environmental impact."
      },
      {
        title: "Field Analysis and Mapping",
        description: "Drones create detailed aerial maps of farmlands, helping with soil health analysis, crop growth tracking, and yield estimation."
      }
    ],
    benefits: [
      "Reduced Labor: Automates time-consuming tasks like scouting and spraying.",
      "Precision Application: Saves input costs by targeting only affected areas.",
      "Early Problem Detection: Helps take preventive action before small issues become big losses.",
      "Increased Productivity: Farmers can make data-driven decisions for better yields.",
      "Eco-Friendly: Reduces chemical overuse and runoff."
    ],
    videoUrl: "https://www.youtube.com/embed/Dn7Q4oIrP3I?si=iUlgSp0rxXvzYO41"
  },
  soil_sensors_iot: {
    name: "Soil Sensors & IoT",
    description: "Integrating IoT (Internet of Things) with soil sensors empowers farmers to make informed, real-time decisions for better crop management. These sensors continuously monitor soil parameters like moisture, nutrient levels, and pH, sending data to connected devices for analysis and action.",
    functions: [
      {
        title: "Real-Time Soil Moisture Monitoring",
        description: "Ensures crops get the right amount of water—no more, no less—boosting water efficiency."
      },
      {
        title: "Nutrient & pH Analysis",
        description: "Detects deficiencies or imbalances in soil nutrients and pH to recommend timely corrective measures."
      },
      {
        title: "Automated Irrigation & Fertilization",
        description: "Connects with smart irrigation systems that automatically adjust based on soil needs, saving time and resources."
      },
      {
        title: "Cloud Data Sync",
        description: "Stores data on the cloud for long-term analysis and predictive farming strategies."
      }
    ],
    benefits: [
      "Water Conservation: Prevents over-irrigation and reduces water usage.",
      "Optimized Fertilizer Use: Avoids wastage and ensures plants receive what they truly need.",
      "Data-Driven Decisions: Farmers can act on real-time insights instead of guesswork.",
      "Improved Yield Quality: Healthier soil leads to healthier crops and better harvests."
    ],
    videoUrl: "https://www.youtube.com/embed/hXC7vCcg2xo?si=gWFggoPrsHxj8f6F"
  },
  precision_irrigation: {
    name: "Precision Irrigation",
    description: "Precision irrigation is a modern farming technique that delivers the right amount of water at the right time directly to the roots of crops. It uses technologies like drip irrigation, sprinkler systems, and smart irrigation controllers to significantly boost water-use efficiency and crop productivity.",
    functions: [
      {
        title: "Drip Irrigation",
        description: "Delivers water drop by drop directly to plant roots through a network of tubes, saving water and reducing weed growth."
      },
      {
        title: "Sprinkler Systems",
        description: "Mimics natural rainfall and is ideal for a wide variety of crops and terrains."
      },
      {
        title: "Smart Irrigation Controllers",
        description: "Uses soil moisture sensors, weather data, and timers to automate watering schedules based on actual field needs."
      },
      {
        title: "IoT Integration",
        description: "Monitors water flow, pressure, and soil conditions in real-time to optimize irrigation dynamically."
      }
    ],
    benefits: [
      "Up to 60% Water Savings: Minimizes evaporation, runoff, and deep percolation losses.",
      "Reduced Labor: Automated systems cut down on the need for manual irrigation.",
      "Healthier Plants: Consistent and precise watering reduces crop stress and improves yield and quality.",
      "Environmental Benefits: Prevents overwatering and reduces waterlogging and nutrient leaching."
    ],
    videoUrl: "https://www.youtube.com/embed/Ulf8E1XnhgI?si=JmIK_h2AasEFX_TE"
  },
  vertical_farming: {
    name: "Vertical Farming",
    description: "Vertical farming is a revolutionary agricultural technique that involves growing crops in vertically stacked layers—often indoors, in climate-controlled environments. This method allows farming to thrive in urban spaces and non-arable regions, using advanced technologies like hydroponics, aeroponics, and artificial lighting.",
    functions: [
      {
        title: "Stacked Growing Units",
        description: "Uses shelves or tower structures to grow multiple layers of crops, maximizing output in limited horizontal space."
      },
      {
        title: "Controlled Environment Agriculture (CEA)",
        description: "Temperature, humidity, CO₂ levels, and light are precisely managed to create optimal growing conditions."
      },
      {
        title: "Soil-Free Systems",
        description: "Employs hydroponics (nutrient-rich water) or aeroponics (nutrient mist) instead of traditional soil."
      },
      {
        title: "Artificial Lighting",
        description: "Utilizes LED grow lights to simulate sunlight and support photosynthesis year-round."
      }
    ],
    benefits: [
      "Year-Round Production: Crops grow continuously, unaffected by seasons or weather.",
      "95% Less Water Usage: Recirculating water systems drastically reduce water consumption.",
      "No Pesticides Required: Clean, enclosed environments eliminate the need for harmful chemicals.",
      "Maximizes Limited Land: Perfect for cities, rooftops, and areas with minimal farmland.",
      "Fresher Produce: Crops can be grown closer to consumers, reducing transport time and preserving freshness."
    ],
    videoUrl: "https://www.youtube.com/embed/hCQHwimJFGM?si=Ab1kF8OwL31fYlvc"
  },
  ai_crop_disease_detection: {
    name: "AI Crop Disease Detection",
    description: "AI-based crop disease detection combines the power of machine learning and computer vision with the simplicity of smartphone cameras. This technology allows farmers to identify plant diseases and nutrient deficiencies on the spot, enabling quick action to protect their crops.",
    functions: [
      {
        title: "Image Capture via Smartphone",
        description: "Farmers take photos of affected leaves or plants using their smartphones."
      },
      {
        title: "AI Model Analysis",
        description: "The images are analyzed using trained machine learning models that can detect diseases such as blight, rust, powdery mildew, or nutrient deficiencies with high accuracy."
      },
      {
        title: "Instant Diagnosis",
        description: "The AI provides instant feedback along with recommended solutions like specific treatments, fertilizers, or pesticide use."
      },
      {
        title: "Data Collection for Trends",
        description: "Over time, the system gathers regional crop health data to detect outbreaks and suggest preventive steps."
      }
    ],
    benefits: [
      "Early Detection: Identifies issues before they become widespread, reducing crop loss.",
      "Accessible Technology: No expensive equipment needed—just a smartphone and an app.",
      "Minimizes Chemical Usage: Precise diagnosis helps avoid unnecessary spraying.",
      "Boosts Productivity: Healthy crops lead to better yields and more profit for farmers.",
      "Scalable: Works on small and large farms alike, especially helpful in rural areas."
    ],
    videoUrl: "https://www.youtube.com/embed/8Z-ne4L7SWI?si=0PX0Qh9KksqKgCR2"
  },
  weather_based_crop_insurance: {
    name: "Weather-Based Crop Insurance",
    description: "Weather-based crop insurance is a modern insurance model that uses real-time weather data and satellite monitoring to protect farmers against unpredictable environmental risks. Instead of depending on physical crop damage assessments, this system triggers payouts automatically when predefined weather thresholds—like drought, excess rainfall, or extreme temperature—are crossed.",
    functions: [
      {
        title: "Weather & Satellite Sensors",
        description: "Collect data on rainfall, temperature, wind speed, humidity, and other climatic factors in real-time."
      },
      {
        title: "Predefined Triggers",
        description: "Insurance contracts define thresholds (e.g., rainfall below 50mm over 30 days) that automatically initiate compensation."
      },
      {
        title: "No Manual Claims Required",
        description: "Farmers do not need to report damage. The system monitors conditions and disburses payments if criteria are met."
      },
      {
        title: "Automated Payouts",
        description: "Based on objective data from government-approved weather stations or satellites, reducing delays and disputes."
      },
      {
        title: "Mobile Access",
        description: "Many systems are connected to mobile apps or SMS notifications for policy status, updates, and payment tracking."
      }
    ],
    benefits: [
      "Faster Compensation: Instant payouts reduce the financial stress during crop failures or natural disasters.",
      "Objective Claims Processing: Removes bias, delays, and corruption in manual claim verification.",
      "Protects Farmer Income: Acts as a safety net against unpredictable weather events.",
      "Encourages Smart Farming: Farmers are more willing to invest in better inputs knowing their crops are insured.",
      "Reduces Risk for Small Farmers: Especially beneficial for marginal farmers who are most vulnerable to climate shocks."
    ]
  }
};

export default function MTechniquedetail() {
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
          <Button onClick={() => navigate('/modern-techniques')} className="mt-4">
            {language === 'english' ? 'Back to Modern Techniques' : 'आधुनिक तकनीकों पर वापस जाएं'}
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
            onClick={() => navigate('/modern-techniques')}
            className="mb-6"
          >
            {language === 'english' ? '← Back to Modern Techniques' : '← आधुनिक तकनीकों पर वापस जाएं'}
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

            {technique.benefits && (
              <>
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
              </>
            )}

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
