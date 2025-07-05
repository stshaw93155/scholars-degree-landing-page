import React from 'react';
import { User, ArrowRight } from 'lucide-react';

const Faculty = () => {
  const faculty = [
    {
      name: "Prof. Rakesh Kumar",
      designation: "HOD, Commerce",
      experience: "15+ Years",
      expertise: "Business Management, Finance"
    },
    {
      name: "Dr. Nisha Singh",
      designation: "Faculty, Science",
      experience: "12+ Years",
      expertise: "Chemistry, Research Methodology"
    },
    {
      name: "Prof. Amit Raj",
      designation: "Dean, Student Affairs",
      experience: "18+ Years",
      expertise: "Student Development, Career Guidance"
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Faculty, Arts",
      experience: "10+ Years",
      expertise: "Literature, Cultural Studies"
    },
    {
      name: "Prof. Manoj Kumar",
      designation: "Faculty, Mathematics",
      experience: "14+ Years",
      expertise: "Applied Mathematics, Statistics"
    },
    {
      name: "Dr. Sunita Devi",
      designation: "Faculty, English",
      experience: "16+ Years",
      expertise: "English Literature, Communication"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Distinguished Faculty
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from experienced educators who are passionate about your success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <User className="w-10 h-10 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              
              <p className="text-blue-600 font-semibold mb-3">
                {member.designation}
              </p>
              
              <div className="space-y-2 mb-4">
                <p className="text-gray-600">
                  <span className="font-medium">Experience:</span> {member.experience}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Expertise:</span> {member.expertise}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto">
            Meet Our Faculty <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faculty;