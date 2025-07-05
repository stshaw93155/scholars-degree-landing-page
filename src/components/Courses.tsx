import React from 'react';
import { BookOpen, Clock, Users, Award, Scroll, Crown, Star } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "Bachelor of Arts",
      subtitle: "(General & Honours)",
      duration: "Three Years",
      eligibility: "Higher Secondary Certificate",
      subjects: "Literature • History • Political Science • Economics • Philosophy",
      icon: Scroll,
      color: "from-blue-600 to-blue-800",
      link: "https://scholarsdegreecollegeedu.in/courseDetails/B.A./1"
    },
    {
      title: "Bachelor of Science",
      subtitle: "(General & Honours)",
      duration: "Three Years",
      eligibility: "Higher Secondary (Science Stream)",
      subjects: "Physics • Chemistry • Mathematics • Biology • Research Methods",
      icon: Award,
      color: "from-emerald-600 to-emerald-800",
      link: "https://scholarsdegreecollegeedu.in/courseDetails/B.Sc/3"
    },
    {
      title: "Bachelor of Commerce",
      subtitle: "(General & Honours)",
      duration: "Three Years",
      eligibility: "Higher Secondary Certificate",
      subjects: "Commerce • Accounting • Business Studies • Economics • Finance",
      icon: Crown,
      color: "from-amber-600 to-amber-800",
      link: "https://scholarsdegreecollegeedu.in/courseDetails/B.Com/2"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Academic Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-slate-300"></div>
            <BookOpen className="w-8 h-8 text-amber-600 mx-4" />
            <div className="w-16 h-px bg-slate-300"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 mb-8 tracking-wide">
            <span className="font-extralight">ACADEMIC</span>
            <br />
            <span className="font-bold">PROGRAMMES</span>
          </h2>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>

          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Rigorous undergraduate programmes designed to cultivate intellectual excellence and prepare 
            distinguished graduates for leadership in their chosen fields
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-slate-200 overflow-hidden"
            >
              {/* Course Header */}
              <div className={`bg-gradient-to-r ${course.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <course.icon className="w-12 h-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2 tracking-wide">{course.title}</h3>
                  <p className="text-lg font-light text-white/90">{course.subtitle}</p>
                </div>
              </div>

              {/* Course Details */}
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <span className="text-slate-700 font-medium">Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Users className="w-5 h-5 text-amber-600" />
                    <span className="text-slate-700 font-medium">Eligibility: {course.eligibility}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-slate-900 mb-3 tracking-wide">CORE SUBJECTS</h4>
                  <p className="text-slate-600 leading-relaxed">{course.subjects}</p>
                </div>

                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-slate-900 hover:bg-amber-600 text-white text-center font-semibold py-4 px-6 transition-all duration-300 transform hover:scale-105 tracking-wide"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Tuition Information */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 border-2 border-amber-200 p-12 text-center shadow-xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-light text-amber-900 mb-6 tracking-wide">
              <span className="font-extralight">ACCESSIBLE</span> <span className="font-bold">EXCELLENCE</span>
            </h3>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-amber-800 mb-8 font-light leading-relaxed">
              Quality education with competitive tuition fees and flexible payment options, 
              ensuring that academic excellence remains accessible to deserving students
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-10 transition-all duration-300 transform hover:scale-105 shadow-lg tracking-wide">
              VIEW TUITION STRUCTURE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
