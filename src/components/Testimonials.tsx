import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: "Ankita S.",
      course: "B.A. (Hons)",
      text: "Scholars Degree College helped me prepare for competitive exams while pursuing my degree! The faculty support is exceptional.",
      rating: 5
    },
    {
      name: "Rohit Kumar",
      course: "B.Com (Hons)",
      text: "The practical approach to learning and experienced faculty made my commerce education truly valuable. Highly recommend!",
      rating: 5
    },
    {
      name: "Priya Singh",
      course: "B.Sc (General)",
      text: "Amazing lab facilities and dedicated teachers. The college environment is perfect for focused learning.",
      rating: 5
    },
    {
      name: "Arjun Raj",
      course: "B.A. (General)",
      text: "The career guidance and placement support helped me secure a good job right after graduation. Thank you SDC!",
      rating: 5
    }
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Students Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from our graduates who have built successful careers
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-6">
                      <Quote className="w-12 h-12 text-blue-600" />
                    </div>
                    
                    <p className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-600 font-semibold">
                        {testimonial.course}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;