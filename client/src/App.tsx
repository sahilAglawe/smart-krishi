import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from '@/contexts/LanguageContext';
import Index from './pages/Index';
import NaturalFarming from './pages/NaturalFarming';
import ModernTechniques from './pages/ModernTechniques';
import Community from './pages/Community';
import FarmProfile from './pages/FarmProfile';
import MTechniquedetail from './pages/MTechniquedetail';
import TechniqueDetail from './pages/TechniqueDetail';
import NotFound from './pages/NotFound';
import Predict from './components/Predict';
import RequestAdvice from './pages/RequestAdvice';
import React from "react";
import FarmingChatbot from "./pages/chatbot";
import Chatbot from "./pages/chatbot";
import Login from "./pages/login";
import Signup from "./pages/Signup";

const queryClient = new QueryClient();

// Separate page layout for Predict
const PredictPage = () => (
  <div className="min-h-screen bg-green-50 flex items-center justify-center">
    <div className="p-8 bg-white shadow-xl rounded-xl">
      <h1 className="text-2xl font-bold text-green-700 mb-4">Smart Krishi - Disease Detector</h1>
      <Predict />
    </div>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <LanguageProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/predict" element={<PredictPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/natural-farming" element={<NaturalFarming />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/natural-farming/:slug" element={<TechniqueDetail />} />
              <Route path="/modern-techniques" element={<ModernTechniques />} />
              <Route path="/modern-techniques/:slug" element={<MTechniquedetail />} />
              <Route path="/community" element={<Community />} />
              <Route path="/farm-profile" element={<FarmProfile />} />
              <Route path="/request-advice" element={<RequestAdvice />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;