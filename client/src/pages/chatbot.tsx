import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isExpanded?: boolean;
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Namaste! I'm KrishiBot, your farming assistant. Ask me about crops, soil, weather, or farming techniques. I can provide detailed answers to help you with your agricultural needs.",
      sender: 'bot',
      timestamp: new Date(),
      isExpanded: true
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchBotResponse = async (prompt: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:1818/api/v1/ai/airesult?prompt=${encodeURIComponent(prompt)}`
      );
      
      return response.data || "I couldn't understand that. Could you please rephrase your question about farming?";
    } catch (error) {
      console.error('Error fetching bot response:', error);
      return "Sorry, I'm having trouble connecting to the knowledge base. Please try again later with your farming question.";
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Get bot response from API
    const botResponse = await fetchBotResponse(inputValue);
    
    const botMessage: Message = {
      id: messages.length + 2,
      text: botResponse,
      sender: 'bot',
      timestamp: new Date(),
      isExpanded: false // Initially collapsed for long responses
    };
    setMessages(prev => [...prev, botMessage]);
  };

  const toggleMessageExpand = (id: number) => {
    setMessages(prev => prev.map(msg => 
      msg.id === id ? { ...msg, isExpanded: !msg.isExpanded } : msg
    ));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Function to determine if a message should be collapsible
  const isLongMessage = (text: string) => {
    return text.length > 200 || text.split('\n').length > 3;
  };

  // Function to format long text with paragraphs
  const formatLongText = (text: string) => {
    return text.split('\n').map((paragraph, i) => (
      <p key={i} className="mb-2 last:mb-0">{paragraph}</p>
    ));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-full max-w-xs sm:max-w-md bg-white rounded-lg shadow-xl border border-green-200 flex flex-col h-[500px]">
          {/* Chat header */}
          <div className="bg-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold">KrishiBot Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-green-200"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Messages container */}
          <div className="flex-1 p-4 overflow-y-auto bg-green-50">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs sm:max-w-md rounded-lg px-4 py-2 ${message.sender === 'user' 
                    ? 'bg-green-600 text-white rounded-br-none' 
                    : 'bg-white text-gray-800 border border-green-200 rounded-bl-none'}`}
                >
                  <div className="text-sm">
                    {isLongMessage(message.text) && message.sender === 'bot' ? (
                      <>
                        <div className={message.isExpanded ? '' : 'line-clamp-3'}>
                          {formatLongText(message.text)}
                        </div>
                        <button 
                          onClick={() => toggleMessageExpand(message.id)}
                          className="text-green-600 text-xs mt-1 hover:underline focus:outline-none"
                        >
                          {message.isExpanded ? 'Show less' : 'Show more'}
                        </button>
                      </>
                    ) : (
                      message.text
                    )}
                  </div>
                  <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-green-200' : 'text-gray-500'}`}>
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-white text-gray-800 border border-green-200 rounded-lg rounded-bl-none px-4 py-2 max-w-xs sm:max-w-md">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <span className="text-xs text-gray-500">KrishiBot is typing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="p-4 border-t border-green-200 bg-white">
            <div className="flex">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about crops, soil, pests..."
                className="flex-1 border border-green-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-16"
                disabled={isLoading}
                rows={1}
              />
              <button
                onClick={handleSendMessage}
                disabled={inputValue.trim() === '' || isLoading}
                className={`bg-green-600 text-white px-4 py-2 rounded-r-lg flex items-center justify-center ${
                  inputValue.trim() === '' || isLoading 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-green-700'
                }`}
                style={{ minHeight: '64px' }}
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              Try: "Best organic fertilizers for tomatoes" or "How to prepare soil for wheat cultivation"
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 text-white rounded-full p-4 shadow-lg hover:bg-green-700 transition-all flex items-center justify-center relative"
          aria-label="Open farming assistant chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          {messages.length > 1 && (
            <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center text-white animate-pulse">
              {messages.length - 1}
            </span>
          )}
        </button>
      )}
    </div>
  );
};

export default Chatbot;