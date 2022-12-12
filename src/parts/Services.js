import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import LoadingCard from '../components/Loading/LoadingCard';

import { data } from '../constant/data';

export default function Services() {
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2300);
  }, []);

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
          return Loading ? <LoadingCard /> : <Card data={item} key={item.id} />;
        })}
      </div>
    </>
  );
}
