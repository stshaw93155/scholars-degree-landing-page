import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Building } from 'lucide-react';

const Location = () => {
  const googleMapsUrl = "https://www.google.com/maps/place/SCHOLARS+DEGREE+COLLEGE,+B.KOTHI,+PURNIA/@25.7738652,87.0956464,822m/data=!3m2!1e3!4b1!4m14!1m7!3m6!1s0x390cfb5a95210b21:0xd1ae89190816c0f1!2sScholars+Group+of+Education.+A+premier,+most+reputed+and+committed+group+of+institutions+in+India+--+Established+in+2001!8m2!3d28.6436129!4d77.2969459!16s%2Fg%2F11ry988v9j!3m5!1s0x39efdb001b1387cb:0xfacc82c57371c3ac!8m2!3d25.7738604!4d87.0982213!16s%2Fg%2F11whx8nkhg?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* University-Style Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-slate-300"></div>
            <Building className="w-8 h-8 text-amber-600 mx-4" />
            <div className="w-16 h-px bg-slate-300"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 mb-8 tracking-wide">
            <span className="font-extralight">VISIT OUR</span>
            <br />
            <span className="font-bold">CAMPUS</span>
          </h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
          
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Located in the heart of Barhara Kothi, Purnea, our distinguished campus provides 
            an inspiring environment for academic excellence and intellectual growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-10 shadow-xl border-t-4 border-amber-600">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 tracking-wide">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full flex-shrink-0">
                    <MapPin className="w-8 h-8 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Campus Address</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Scholars Degree College<br />
                      Barhara Kothi, Purnea – 854204<br />
                      Bihar, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full flex-shrink-0">
                    <Phone className="w-8 h-8 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Phone</h4>
                    <a href="tel:+919905978900" className="text-slate-600 hover:text-amber-600 transition-colors duration-300">
                      +91-9905978900
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full flex-shrink-0">
                    <Mail className="w-8 h-8 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Email</h4>
                    <a href="mailto:scholarsdegreecollege@gmail.com" className="text-slate-600 hover:text-amber-600 transition-colors duration-300">
                      scholarsdegreecollege@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full flex-shrink-0">
                    <Clock className="w-8 h-8 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Office Hours</h4>
                    <div className="text-slate-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Action Buttons */}
            <div className="space-y-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 transition-all duration-300 transform hover:scale-105 shadow-xl tracking-wide flex items-center justify-center gap-3"
              >
                <MapPin className="w-6 h-6" />
                VIEW ON GOOGLE MAPS
              </a>
              
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold py-4 px-8 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Navigation className="w-6 h-6" />
                GET DIRECTIONS
              </a>
            </div>
          </div>
          
          {/* Campus Information */}
          <div className="space-y-8">
            <div className="bg-slate-900 text-white p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-amber-400 mb-8 tracking-wide">Campus Accessibility</h3>
              
              <div className="space-y-6 text-slate-200">
                <div>
                  <h4 className="font-bold text-amber-200 mb-2">Transportation</h4>
                  <p className="leading-relaxed font-light">
                    Easily accessible via NH-27 and well-connected by public transport. 
                    Regular bus services and auto-rickshaws available from Purnea city center.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-amber-200 mb-2">Nearby Landmarks</h4>
                  <ul className="space-y-1 font-light">
                    <li>• Barhara Kothi Market - 2 minutes walk</li>
                    <li>• Purnea Railway Station - 15 minutes drive</li>
                    <li>• Purnea Airport - 20 minutes drive</li>
                    <li>• District Collectorate - 10 minutes drive</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-amber-200 mb-2">Campus Facilities</h4>
                  <ul className="space-y-1 font-light">
                    <li>• Parking available for students and visitors</li>
                    <li>• Wheelchair accessible entrances</li>
                    <li>• Modern library and computer labs</li>
                    <li>• Cafeteria and recreational areas</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Interactive Map Placeholder */}
            <div className="bg-white p-8 shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-wide">Campus Location</h3>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg flex items-center justify-center border-2 border-amber-200">
                  <div className="text-center text-amber-800">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-amber-600" />
                    <p className="text-lg font-bold mb-2">Scholars Degree College</p>
                    <p className="text-sm mb-4">Barhara Kothi, Purnea, Bihar</p>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                    >
                      <MapPin className="w-4 h-4" />
                      Open in Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Visit Campus Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white p-12 shadow-2xl text-center">
          <h3 className="text-3xl sm:text-4xl font-light mb-6 tracking-wide">
            <span className="font-extralight">PLAN YOUR</span> <span className="font-bold">VISIT</span>
          </h3>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
          <p className="text-xl mb-8 font-light max-w-3xl mx-auto">
            Experience our campus firsthand. Schedule a visit to explore our facilities, 
            meet our faculty, and discover why Scholars Degree College is the right choice for your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 hover:bg-slate-100 font-bold py-4 px-8 transition-all duration-300 transform hover:scale-105 tracking-wide">
              SCHEDULE CAMPUS TOUR
            </button>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-bold py-4 px-8 transition-all duration-300 transform hover:scale-105 tracking-wide inline-flex items-center justify-center gap-2"
            >
              <Navigation className="w-5 h-5" />
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;