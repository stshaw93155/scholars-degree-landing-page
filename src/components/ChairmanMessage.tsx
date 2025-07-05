import React from 'react';
import { Quote, Crown, Star } from 'lucide-react';

const ChairmanMessage = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400/5 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-400/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-amber-400/5 to-transparent rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-amber-400/50"></div>
            <Crown className="w-8 h-8 text-amber-400 mx-4" />
            <div className="w-16 h-px bg-amber-400/50"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8 tracking-wide">
            <span className="font-extralight">CHAIRMAN'S</span>
            <br />
            <span className="font-bold text-amber-400">MESSAGE</span>
          </h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Chairman's Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg transform rotate-1"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg"></div>
              
              {/* Chairman Photo */}
              <div className="relative bg-white p-2 rounded-lg shadow-2xl">
                <img
                  src="/public/1736745241_chairmain.png"
                  alt="Chairman - Scholars Degree College"
                  className="w-full h-auto rounded-md"
                />
              </div>
              
              {/* Academic Credentials Badge */}
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-4 rounded-full shadow-xl border-4 border-slate-800">
                <Star className="w-8 h-8" />
              </div>
            </div>
          </div>
          
          {/* Chairman's Message */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-amber-400" />
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 lg:p-12 rounded-lg shadow-2xl">
                <div className="space-y-6 text-slate-200 leading-relaxed">
                  <p className="text-lg lg:text-xl font-light">
                    <span className="text-amber-400 font-semibold">Dear Students and Parents,</span>
                  </p>
                  
                  <p className="text-lg lg:text-xl font-light">
                    Welcome to <span className="text-amber-400 font-semibold">Scholars Degree College</span>, 
                    where we believe that education is not just about acquiring knowledge, but about 
                    transforming lives and shaping futures.
                  </p>
                  
                  <p className="text-lg lg:text-xl font-light">
                    Our institution stands as a beacon of academic excellence, committed to providing 
                    quality education that is both <span className="text-amber-400">affordable and accessible</span>. 
                    We understand that every student has unique potential, and our dedicated faculty 
                    works tirelessly to nurture that potential.
                  </p>
                  
                  <p className="text-lg lg:text-xl font-light">
                    At Scholars Degree College, we don't just prepare students for examinations; 
                    we prepare them for <span className="text-amber-400 font-semibold">life</span>. 
                    Our comprehensive approach to education ensures that our graduates are not only 
                    academically sound but also possess the values, skills, and confidence needed 
                    to excel in their chosen careers.
                  </p>
                  
                  <p className="text-lg lg:text-xl font-light">
                    As we continue to grow and evolve, our commitment remains unwavering: to provide 
                    an educational experience that is transformative, empowering, and truly 
                    <span className="text-amber-400 font-semibold"> life-changing</span>.
                  </p>
                  
                  <div className="pt-6 border-t border-slate-600">
                    <p className="text-lg font-light text-slate-300">
                      Join us in this journey of academic excellence and personal growth.
                    </p>
                  </div>
                </div>
                
                {/* Chairman's Signature Area */}
                <div className="mt-8 pt-6 border-t border-slate-600">
                  <div className="text-right">
                    <p className="text-xl font-bold text-amber-400 mb-1">Chairman</p>
                    <p className="text-lg text-slate-300 font-light">Scholars Group of Education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-amber-600/10 backdrop-blur-sm border border-amber-400/30 py-8 px-12 rounded-lg inline-block">
            <p className="text-xl text-amber-200 mb-4 font-light">
              Experience the difference at Scholars Degree College
            </p>
            <a
  href="https://scholarsdegreecollegeedu.in/contact-us"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-10 rounded-none transition-all duration-300 transform hover:scale-105 shadow-xl tracking-wide inline-block"
>
  BEGIN YOUR JOURNEY
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;