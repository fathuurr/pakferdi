import React from 'react';
import Navbar from '../components/Navbar';
import Input from '../components/Forms/Input';
import Select from '../components/Forms/Select';

export default function UserProfile() {
  return (
    <>
      <Navbar />
      <section className="container mx-auto">
        <div className="mx-auto flex pt-12 pb-16 lg:pb-20 lg:px-24 md:px-16 sm:px-8 px-8 flex-col">
          <div className="flex items-center  w-6/12 sm:w-4/12">
            <img
              src="/user-profile.png"
              alt="user"
              className="shadow rounded-full max-w-full h-auto align-middle border-none"
            />
            <p className="text-2xl font-normal px-10">Jainudin</p>
          </div>
          <div className="flex input-user-profile">
            <div className="mt-10 px-2 w-full">
              <Input label={'Nama'} />
            </div>
            <div className="mt-10 px-2 w-full">
              <Input label={'Email'} />
            </div>
          </div>

          <div className="flex input-user-profile">
            <div className="mt-10 px-2 w-full">
              <Input label={'Username'} />
            </div>
            <div className="mt-10 px-2 w-full">
              <Input label={'Nomor Telepon'} />
            </div>
          </div>

          <div className="flex input-user-profile">
            <div className="mt-10 px-2 w-full">
              <Input label={'Lokasi'} />
            </div>
            <div className="mt-10 px-2 w-full">
              <Select label={'Jenis Kelamin'} />
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button
              type="submit"
              class="bg-[#466FC1] block w-1/2 px-4 py-3 mt-6 font-medium text-md text-white transition duration-500 ease-in-out transform rounded-md shadow-lg hover:shadow-2xl">
              Simpan Perubahan
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
