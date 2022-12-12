import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

import Navbar from '../components/Navbar';
import Hero from '../parts/Hero';
import Services from '../parts/Services';
import Review from '../parts/Review';
import About from '../parts/About';
import Footer from '../parts/Footer';

function LandingPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <ReactLoading
          className="absolute top-1/2 left-1/2"
          type={'spin'}
          color={'blue'}
          height={64}
          width={64}
        />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Services />
          <Review />
          <About />
          <Footer />
        </>
      )}
    </>
  );
}

export default LandingPage;
