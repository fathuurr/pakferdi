import React from 'react';
import Navbar from '../components/Navbar';
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
    </>
  );
}

export default LandingPage;
