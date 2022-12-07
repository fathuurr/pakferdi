import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as IconBack } from '../assets/icon-back.svg';

import Input from '../components/Forms/Input';
import Footer from '../parts/Footer';

const LogIn = () => {
  return (
    <>
      <div className="flex justify-around items-center mx-10 my-10">
        <Link to={'/'}>
          <IconBack />
        </Link>
        <img src="/pijatin.png" alt="icon" style={{ margin: '0 auto' }} />
      </div>
      <div class="content-3-5">
        <div class="flex flex-col items-center h-full lg:flex-row">
          <div class="relative hidden lg:block h-full width-left">
            <img
              class="absolute object-fill centered"
              src="/pijatin-illustration.png"
              alt=""
            />
          </div>
          <div class="flex w-full h-full px-8 width-right sm:px-16 py-32 lg:mx-0 mx-auto items-left justify-left bg-medium-white">
            <div class="w-full sm:w-7/12 md:w-8/12 lg:w-9/12 xl:w-7/12 mx-auto lg:mx-0">
              <h3 class="text-3xl font-semibold mb-3">Masuk ke Pijatin</h3>
              <form class="mt-6" action="#" method="POST">
                <div class="mb-7">
                  <Input type={'text'} placeholder={'Username'} />
                </div>
                <div class="mt-4">
                  <Input type={'password'} placeholder={'Password'} />
                </div>

                <div class="mt-5">
                  <Link to={'/'} class=" text-sm italic">
                    Lupa password ?
                  </Link>
                </div>
                <button
                  type="submit"
                  class="bg-[#466FC1] block w-full px-4 py-3 mt-6 font-medium text-md text-white transition duration-500 ease-in-out transform rounded-md shadow-lg hover:shadow-2xl">
                  Masuk
                </button>
              </form>
              <p class="mt-8 text-center text-sm text-foot">
                Belum punya akun?
                <Link
                  to={'/sign-up'}
                  className="ml-2 font-medium hover:underline ">
                  Daftar Sekarang
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LogIn;
