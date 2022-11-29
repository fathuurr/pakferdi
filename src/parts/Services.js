import React from 'react';
import CardImage from '../components/CardImage';

export default function Services() {
  return (
    <>
      <div className="text-center">
        <p className="text-[#466FC1] font-bold text-[15px] leading-[30px]">
          Services
        </p>
        <p className="font-normal text-[20px] leading-[30px]">
          Jenis Pijat yang tersedia
        </p>
      </div>

      <div className="flex flex-wrap justify-center container mx-auto mt-5 ">
        <CardImage />
      </div>
    </>
  );
}
