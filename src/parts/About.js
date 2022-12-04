import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function About() {
  const containerStyle = {
    width: '90%',
    height: '300px',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  const center = {
    lat: -6.2269976,
    lng: 106.7848748,
  };

  return (
    <section className="mt-10">
      <p className="text-[#466FC1] font-bold text-[15px] text-center ">
        About us
      </p>
      <p className="text-center mt-5 text-[20px] ">Pijatin Profile</p>
      <p className="mt-5 text-center">
        merupakan sebuah platform yang melayani jasa pijat yang dapat di pesan
        secara online <br /> atau daring dan melayani anda kapanpun dan
        dimanapun.
      </p>

      <div className="mt-10 mb-20">
        <LoadScript
          googleMapsApiKey={'AIzaSyDw6Rj1YiUjCpmgZvCt9qrJladyMcUdN5g'}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          />
        </LoadScript>
      </div>
    </section>
  );
}
