import React from 'react';
import { ReactComponent as Facebook } from '../assets/facebook.svg';
import { ReactComponent as Whatsapp } from '../assets/whatsapp.svg';
import { ReactComponent as Instagram } from '../assets/instagram.svg';

export default function Footer() {
  return (
    <>
      <footer class="relative bg-[#0F2B62] pt-10 pb-10 mt-10">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap text-left lg:text-left">
            <div class="w-full lg:w-6/12 px-4">
              <h4 class="text-3xl fonat-semibold text-blueGray-700">
                <img src="/footerpijatin.png" alt="" />
              </h4>
              <h5 class="text-lg mt-8 mb-2 text-white">
                Kebijakan Privasi | Syarat Penggunaan
              </h5>
            </div>
            <div class="w-full lg:w-6/12 mt-5">
              <div class="flex flex-wrap items-top mb-6">
                <div class="w-full lg:w-4/12 px-4 ml-auto">
                  <span class="block uppercase text-white text-sm font-semibold mb-2">
                    Hubungi Kami
                  </span>

                  <div className="flex -mx-4 ">
                    <div className="mx-3">
                      <Facebook />
                    </div>
                    <div className="mx-3">
                      <Whatsapp />
                    </div>
                    <div className="mx-3">
                      <Instagram />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
