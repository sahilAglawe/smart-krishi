import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';

interface SearchSuggestion {
  title: string;
  path: string;
  category: string;
}

const searchSuggestions: SearchSuggestion[] = [
  // Natural Farming suggestions
  { title: 'Natural Farming Basics', path: '/natural-farming', category: 'Natural Farming' },
  { title: 'Organic Pest Control', path: '/natural-farming', category: 'Natural Farming' },
  { title: 'Composting Methods', path: '/natural-farming', category: 'Natural Farming' },
  { title: 'Crop Rotation', path: '/natural-farming', category: 'Natural Farming' },
  
  // Modern Techniques suggestions
  { title: 'Agricultural Drones', path: '/modern-techniques/agricultural_drones', category: 'Modern Techniques' },
  { title: 'Soil Sensors & IoT', path: '/modern-techniques/soil_sensors_iot', category: 'Modern Techniques' },
  { title: 'Precision Irrigation', path: '/modern-techniques/precision_irrigation', category: 'Modern Techniques' },
  { title: 'Vertical Farming', path: '/modern-techniques/vertical_farming', category: 'Modern Techniques' },
  { title: 'AI Crop Disease Detection', path: '/modern-techniques/ai_crop_disease_detection', category: 'Modern Techniques' },
  { title: 'Weather-Based Crop Insurance', path: '/modern-techniques/weather_based_crop_insurance', category: 'Modern Techniques' },
];

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.length > 0) {
      const filtered = searchSuggestions.filter(suggestion =>
        suggestion.title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    navigate(suggestion.path);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder="Search farming techniques..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 w-[300px] bg-white/50 backdrop-blur-sm border-krishi-green/20 focus:border-krishi-green"
        />
      </div>
      
      {isOpen && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-md shadow-lg border border-krishi-green/20 max-h-96 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 hover:bg-krishi-green/10 cursor-pointer"
            >
              <div className="font-medium text-gray-900">{suggestion.title}</div>
              <div className="text-sm text-gray-500">{suggestion.category}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 