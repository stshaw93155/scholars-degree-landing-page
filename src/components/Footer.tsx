import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, Clock, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400/5 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-400/5 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* College Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-amber-400" />
                <h3 className="text-2xl font-bold text-amber-400">Scholars Degree College</h3>
              </div>
              <p className="text-slate-300 leading-relaxed font-light">
                Your gateway to a promising career with quality education, experienced faculty, and a commitment to academic excellence.
              </p>
              <div className="pt-4">
                <p className="text-amber-200 font-semibold mb-2">Follow Us</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-amber-400 tracking-wide">Quick Links</h3>
              <div className="w-12 h-px bg-amber-400"></div>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-light">Home</a></li>
                <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-light">About Us</a></li>
                <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-light">Chairman's Message</a></li>
                <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-light">Courses Offered</a></li>
                <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-light">Faculty</a></li>
                <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-light">Admissions</a></li>
                <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-light">Campus Life</a></li>
                <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-light">Gallery</a></li>
                <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-light">Contact Us</a></li>
              </ul>
            </div>
            
            {/* Academic Programs */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-amber-400 tracking-wide">Academic Programs</h3>
              <div className="w-12 h-px bg-amber-400"></div>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-light">Bachelor of Arts (B.A.)</a></li>
                <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-light">Bachelor of Science (B.Sc.)</a></li>
                <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-light">Bachelor of Commerce (B.Com)</a></li>
                <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-light">Honours Programs</a></li>
                <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-light">General Programs</a></li>
              </ul>
              
              <div className="pt-4">
                <h4 className="text-lg font-semibold text-amber-200 mb-3">Scholars Group</h4>
                <ul className="space-y-2 text-slate-300 font-light">
                  <li>Scholars International School</li>
                  <li>Scholars College of Education</li>
                  <li>Scholars Corporate Office, Delhi</li>
                  <li>Scholars Patna Centre</li>
                </ul>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-amber-400 tracking-wide">Contact Information</h3>
              <div className="w-12 h-px bg-amber-400"></div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 font-light leading-relaxed">
                      Scholars Degree College<br />
                      Barhara Kothi, Purnea – 854204<br />
                      Bihar, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <a href="tel:+919905978900" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-light">
                    +91-9905978900
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <a href="mailto:scholarsdegreecollege@gmail.com" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-light">
                    scholarsdegreecollege@gmail.com
                  </a>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div className="text-slate-300 font-light">
                    <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <a 
                  href="https://www.google.com/maps/place/SCHOLARS+DEGREE+COLLEGE,+B.KOTHI,+PURNIA/@25.7738652,87.0956464,822m/data=!3m2!1e3!4b1!4m14!1m7!3m6!1s0x390cfb5a95210b21:0xd1ae89190816c0f1!2sScholars+Group+of+Education.+A+premier,+most+reputed+and+committed+group+of+institutions+in+India+--+Established+in+2001!8m2!3d28.6436129!4d77.2969459!16s%2Fg%2F11ry988v9j!3m5!1s0x39efdb001b1387cb:0xfacc82c57371c3ac!8m2!3d25.7738604!4d87.0982213!16s%2Fg%2F11whx8nkhg?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-none transition-all duration-300 transform hover:scale-105 shadow-lg tracking-wide inline-flex items-center gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  VIEW ON GOOGLE MAPS
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* University Affiliation Banner */}
        <div className="border-t border-slate-700 py-8">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 p-6 rounded-lg text-center">
            <p className="text-amber-200 font-semibold text-lg mb-2">
              Affiliated with Purnea University
            </p>
            <p className="text-slate-300 font-light">
              Recognized by the Government of Bihar • UGC Approved Programs
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-700 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <p className="text-slate-400 text-sm font-light">
                © 2025 Scholars Group of Education. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Empowering minds, shaping futures since our establishment
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-300 font-light">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-300 font-light">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-300 font-light">Academic Calendar</a>
              <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-300 font-light">Student Portal</a>
              <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-300 font-light">Alumni Network</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;