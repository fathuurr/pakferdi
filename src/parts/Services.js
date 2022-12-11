import React from 'react';
import Card from '../components/Card';

import { data } from '../constant/data';

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

      <div
        id="services"
        style={{ maxWidth: 896 }}
        className="container mx-auto flex flex-row flex-wrap justify-center mt-10">
        {data.map((item) => {
          return <Card data={item} key={item.id} />;
        })}
      </div>
    </>
  );
}
