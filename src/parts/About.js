import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function About() {
  const containerStyle = {
    width: '75%',
    height: '300px',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '20px',
  };

  const center = {
    lat: -6.2269976,
    lng: 106.7848748,
  };

  return (
    <section id="about-us" className="mt-10">
      <p className="text-[#466FC1] font-bold text-[15px] text-center ">
        About us
      </p>
      <p className="text-center mt-5 text-[20px] ">Pijatin Profile</p>
      <p className="mt-5 text-center mx-3">
        Pijatin Menyediakan jasa pijat panggilan ke rumah atau tempat tinggal
        Anda baik di daerah <br /> Jakarta Timur, Pusat, Barat, Selatan, maupun
        Utara..
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
