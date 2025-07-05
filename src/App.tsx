import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ChairmanMessage from './components/ChairmanMessage';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import StickyCallToAction from './components/StickyCallToAction';

function App() {
  return (
    <div className="font-sans antialiased">
      <Hero />
      <About />
      <ChairmanMessage />
      <Courses />
      <Faculty />
      <Location />
      <Testimonials />
      <Footer />
      <StickyCallToAction />
    </div>
  );
}

export default App;