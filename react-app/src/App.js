import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import LogoCloud from './components/LogoCloud';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Features />
      <LogoCloud />
      <Testimonials />
      <Newsletter />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
