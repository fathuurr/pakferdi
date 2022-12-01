import React from 'react';
import Navbar from '../components/Navbar';
import About from '../parts/About';
import Hero from '../parts/Hero';
import Review from '../parts/Review';
import Services from '../parts/Services';

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Review />
      <About />
    </>
  );
}

export default LandingPage;
