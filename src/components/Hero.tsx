import React from 'react';
import { GraduationCap, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Sophisticated Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/public/1748869313_scholars.png"
          alt="Scholars Degree College Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-800/80 to-slate-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-blue-900/20"></div>
      </div>
      
      {/* Elegant Logo in Top Left Corner */}
      <div className="absolute top-0 left-0 z-20 p-6">
        <img
          src="/DEGREE COLLEGE (2).png"
          alt="Scholars Degree College Logo"
          className="w-56 sm:w-64 lg:w-72 xl:w-80 h-auto drop-shadow-2xl opacity-95"
        />
      </div>
      
      {/* Academic Excellence Badge */}
      <div className="absolute top-8 right-8 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
        <div className="flex items-center gap-2 text-white">
          <GraduationCap className="w-5 h-5 text-amber-400" />
          <span className="text-sm font-medium">Est. Excellence in Education</span>
        </div>
      </div>
      
      {/* Main Content - University Style */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-16 sm:mt-20 lg:mt-24">
        {/* University Crest/Shield */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
            <GraduationCap className="w-12 h-12 text-slate-900" />
          </div>
        </div>
        
        {/* University Name - Oxford/Stanford Style */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-light mb-4 leading-tight tracking-wide">
          <span className="font-extralight text-slate-100">SCHOLARS</span>
          <br />
          <span className="font-bold text-white">DEGREE COLLEGE</span>
        </h1>
        
        {/* Latin Motto Style */}
        <div className="mb-6">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl lg:text-2xl font-light text-amber-200 tracking-widest uppercase">
            Scientia • Virtus • Excellentia
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4"></div>
        </div>
        
        {/* Tagline */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-4 text-slate-200 max-w-4xl mx-auto leading-relaxed">
          Cultivating Minds, Shaping Futures
        </p>
        
        <p className="text-lg sm:text-xl mb-12 text-slate-300 max-w-3xl mx-auto font-light">
          A distinguished institution of higher learning, affiliated with Purnea University
        </p>
        
        {/* Refined Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
        <a
  href="https://scholarsdegreecollegeedu.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="group bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-10 rounded-none border-2 border-amber-600 hover:border-amber-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl"
>
  <span className="tracking-wide">APPLY FOR ADMISSION</span>
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</a>
          <button className="group border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-10 rounded-none transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl">
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="tracking-wide">ACADEMIC PROSPECTUS</span>
          </button>
        </div>
        
        {/* Academic Year Notice */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 py-4 px-8 rounded-none inline-block shadow-xl">
          <div className="flex items-center justify-center gap-3">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span className="font-medium tracking-wide text-slate-100">ACADEMIC YEAR 2025 • ADMISSIONS NOW OPEN</span>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-4 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-1 h-32 bg-gradient-to-b from-transparent via-amber-400/30 to-transparent"></div>
      <div className="absolute top-1/4 right-8 w-1 h-32 bg-gradient-to-b from-transparent via-amber-400/30 to-transparent"></div>
    </section>
  );
};

export default Hero;