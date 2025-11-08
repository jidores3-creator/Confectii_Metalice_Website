import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;