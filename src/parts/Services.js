import React from 'react';
import CardImage from '../components/CardImage';

export default function Services() {
  return (
    <>
      <div className="text-center">
        <p className="text-[#466FC1] font-bold text-[20px] leading-[30px]">
          Services
        </p>
        <p className="font-normal text-[25px] leading-[30px]">
          Jenis Pijat yang tersedia
        </p>
      </div>

      <div className="flex flex-nowrap overflow-x-auto justify-center items-center pl-[50px]">
        <CardImage />
      </div>
    </>
  );
}
