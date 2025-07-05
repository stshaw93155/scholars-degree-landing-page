import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const StickyCallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-4 shadow-lg z-50 transform transition-transform duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-bold text-lg">Ready to Begin Your Journey?</p>
          <p className="text-blue-100">Join thousands of successful graduates</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            Apply Now <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Request Callback
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyCallToAction;