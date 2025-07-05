import React from 'react';
import { GraduationCap, Users, Briefcase, Building, BookOpen, Trophy, Shield, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "University Affiliation",
      description: "Proudly affiliated with Purnea University, ensuring academic excellence and recognition"
    },
    {
      icon: Users,
      title: "Distinguished Faculty",
      description: "Renowned scholars and industry leaders committed to academic excellence"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Rigorous curriculum designed to cultivate critical thinking and leadership"
    },
    {
      icon: Building,
      title: "Historic Campus",
      description: "State-of-the-art facilities in a setting that inspires learning and growth"
    },
    {
      icon: BookOpen,
      title: "Research & Innovation",
      description: "Cutting-edge research facilities and comprehensive academic resources"
    },
    {
      icon: Trophy,
      title: "Legacy of Success",
      description: "Decades of producing leaders, innovators, and distinguished alumni"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* University-Style Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-slate-300"></div>
            <GraduationCap className="w-8 h-8 text-amber-600 mx-4" />
            <div className="w-16 h-px bg-slate-300"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 mb-8 tracking-wide">
            <span className="font-extralight">ABOUT THE</span>
            <br />
            <span className="font-bold">INSTITUTION</span>
          </h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
          
          <p className="text-xl sm:text-2xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-light">
            Established in the heart of Barhara Kothi, Purnea, Bihar, Scholars Degree College stands as a beacon 
            of academic excellence. As a distinguished institution affiliated with Purnea University, we uphold 
            the highest standards of education while fostering intellectual curiosity, moral integrity, and 
            leadership development.
          </p>
        </div>
        
        {/* Academic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-t-4 border-amber-600"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-slate-100 group-hover:bg-amber-50 transition-colors duration-300 mb-8 mx-auto">
                <item.icon className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center tracking-wide">
                {item.title}
              </h3>
              <p className="text-slate-600 text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* University Values */}
        <div className="bg-slate-900 text-white py-16 px-8 shadow-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl font-light mb-8 tracking-wide">
              <span className="font-extralight">OUR</span> <span className="font-bold text-amber-400">MISSION</span>
            </h3>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>
            <p className="text-xl leading-relaxed text-slate-300 font-light">
              To cultivate intellectual excellence, foster critical thinking, and develop ethical leaders 
              who will contribute meaningfully to society. We are committed to providing transformative 
              educational experiences that prepare our students for the challenges and opportunities of 
              the modern world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;