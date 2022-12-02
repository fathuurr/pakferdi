import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div>
      <div className="mx-auto flex pt-12 pb-16 lg:pb-20 lg:px-24 md:px-16 sm:px-8 px-8 lg:flex-row flex-col">
        <div className="lg:flex-grow lg:w-1/2 flex flex-col lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0 items-center text-center">
          <p className="small-text mb-8 leading-relaxed font-semibold text-sm">
            <div className="border-solid bg-blue-100 rounded-[35px]">
              <p className="p-2 font-light text-[#466FC1]">
                <span className="dot"></span> Promo pijat Spesial Tahun Baru
              </p>
            </div>
          </p>
          <h1 className="title-font sm:text-[50px] lg:text-[50px] text-4xl mb-8 font-thin sm:leading-tight">
            Professional <br /> massages services in
            <span className="text-[#466FC1] underline ml-2 font-normal">
              Jakarta
            </span>
          </h1>

          <p className="font-light text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt utlab.
          </p>

          <div className="inline-block items-center mt-5 mx-auto lg:mx-0 lg:flex justify-center lg:space-x-8 md:space-x-2 sm:space-x-3 space-x-0">
            <Link to={'/booking'}>
              <button className="bg-[#466FC1] inline-flex font-semibold text-white text-base py-4 px-6 rounded-xl mb-4 lg:mb-0 md:mb-0 focus:outline-none hover:shadow-lg">
                Pesan Sekarang
              </button>
            </Link>

          </div>
        </div>
        <div className="w-full md:w-1/2 text-center justify-center flex pr-0">
          <img id="hero" src="hero.png" alt="" />
        </div>
      </div>
    </div>
  );
}
