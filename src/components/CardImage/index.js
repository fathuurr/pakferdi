import React from 'react';
import { data } from '../Image';

export default function CardImage() {
  return (
    <>
      {data.map((item) => {
        return (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm mr-4 mt-5">
            <img
              className="object-cover w-full h-48 rounded-md"
              src={item.image}
              alt="gambar"
            />
            <div className="p-4">
              <h4 className="text-xl font-light tracking-tight text-blue-600">
                {item.title}
              </h4>
            </div>
          </div>
        );
      })}
    </>
  );
}
