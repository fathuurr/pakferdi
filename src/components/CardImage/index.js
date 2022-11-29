import React from 'react';
import { data } from '../Image';

export default function CardImage() {
  return (
    <>
      {data.map((item, key) => {
        return (
          <div
            key={key}
            className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-200 mt-10 mx-4 cursor-pointer">
            <img
              className="rounded-t-lg object-fill"
              src={item.image}
              alt="Img"
              width={item.width}
              height={item.height}
            />

            <div className="p-5">
              <h5 className="mb-2 text-base font-light tracking-tight text-[#466FC1]">
                {item.title}
              </h5>
            </div>
          </div>
        );
      })}
    </>
  );
}
