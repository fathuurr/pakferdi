import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../parts/Hero';
import Services from '../parts/Services';
import Review from '../parts/Review';
import About from '../parts/About';
import Footer from '../parts/Footer';

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Review />
      <About />
      <Footer />
    </>
  );
}

export default LandingPage;
