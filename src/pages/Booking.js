import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

import Navbar from '../components/Navbar';
import Footer from '../parts/Footer';
import { Link } from 'react-router-dom';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import { ReactComponent as Male } from '../assets/male.svg';
import { ReactComponent as Female } from '../assets/female.svg';
import { ReactComponent as IconBack } from '../assets/icon-back.svg';

import Select from 'react-select';

const selectService = [
  { value: 'Pijat Aroma Terapi', label: 'Pijat Aroma Terapi' },
  { value: 'Pijat Batu Panas', label: 'Pijat Batu Panas' },
  { value: 'Pijat Thai', label: 'Pijat Thai' },
  { value: 'Pijat Refleksi', label: 'Pijat Refleksi' },
  { value: 'Pijat Olahraga', label: 'Pijat Olahraga' },
  { value: 'Pijat Lulur', label: 'Pijat Lulur' },
];

const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDw6Rj1YiUjCpmgZvCt9qrJladyMcUdN5g',
    libraries: ['geometry', 'drawing'],
  });

  const center = {
    lat: -6.2269976,
    lng: 106.7848748,
  };

  const containerStyle = {
    width: '75%',
    height: '300px',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '20px',
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Navbar />

      {loading ? (
        <ReactLoading
          className="absolute top-1/2 left-1/2"
          type={'spin'}
          color={'blue'}
          height={64}
          width={64}
        />
      ) : (
        <>
          <div className="m-booking">
            <Link to="/" className="iconBack">
              <IconBack />
            </Link>

            <h1> Pilih Jenis Pijat </h1>
            <div className="select">
              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: 'white',
                  }),
                }}
                placeholder="Pilih Jenis Pijat"
                options={selectService}
              />
            </div>

            <h1> Pilih Gender Anda </h1>
            <div className="pilihService mt-10">
              <input type="radio" name="groupA" id="T35" />
              <label
                class="ButtonBook"
                for="T35"
                onClick="() => UpdateTheChart(11)">
                <Male />
                <p>Pria</p>
              </label>
              <input type="radio" name="groupA" id="T36"></input>
              <label
                class="ButtonBook"
                for="T36"
                onClick="() => UpdateTheChart(12)">
                <Female />
                <p>Perempuan</p>
              </label>
            </div>

            <h1> Pilih Durasi </h1>
            <div className="pilihService mt-10">
              <input type="radio" name="groupB" id="T41" />
              <label
                class="ButtonBook"
                for="T41"
                onClick="() => UpdateTheChart(21)">
                <p>
                  30 Menit - <i>Rp. 60.000</i>{' '}
                </p>
              </label>
              <input type="radio" name="groupB" id="T42" />
              <label
                class="ButtonBook"
                for="T42"
                onClick="() => UpdateTheChart(22)">
                <p>
                  60 Menit - <i>Rp. 120.000</i>{' '}
                </p>
              </label>
              <input type="radio" name="groupB" id="T43" />
              <label
                class="ButtonBook"
                for="T43"
                onClick="() => UpdateTheChart(23)">
                <p>
                  90 Menit - <i>Rp. 180.000</i>{' '}
                </p>
              </label>
              <input type="radio" name="groupB" id="T44" />
              <label
                class="ButtonBook"
                for="T44"
                onClick="() => UpdateTheChart(24)">
                <p>
                  120 Menit - <i>Rp. 240.000</i>{' '}
                </p>
              </label>
            </div>

            <h1> Pilih Gender Terapis </h1>
            <div className="pilihService mt-10">
              <input type="radio" name="groupC" id="T51" />
              <label
                class="ButtonBook"
                for="T51"
                onClick="() => UpdateTheChart(31)">
                <Male />
                <p>Pria</p>
              </label>
              <input type="radio" name="groupC" id="T52" />
              <label
                class="ButtonBook"
                for="T52"
                onClick="() => UpdateTheChart(32)">
                <Female />
                <p>Perempuan</p>
              </label>
            </div>

            <h1> Pilih Tanggal & Waktu </h1>
            <div className="calendar-container mt-10">
              <Calendar onChange={setDate} value={date} />
              <input
                className="flex mx-auto mt-10 w-full focus-within:outline-none text-base font-light"
                type="time"
                value={'00:00'}
              />
            </div>

            <h1> Pilih Lokasi </h1>

            {isLoaded && (
              <GoogleMap
                mapContainerClassName="mt-8"
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
              />
            )}

            <h2> Alamat Lengkap :</h2>
            <div className="alamatLengkap mt-10">
              <input placeholder="Provinsi, Kota, Kecamatan, Kode Pos"></input>
              <input placeholder="Nama Jalan, Gedung, No. Rumah"></input>
              <input placeholder="Detail Lainnya (Cth: Blok/Unit No., Patokan)"></input>
            </div>

            <Link
              className="flex justify-center mx-auto mt-10 w-full bg-[#466FC1] text-white rounded-lg py-4 max-sm:w-1/2 text-sm"
              to={'/payment'}>
              Selanjutnya
            </Link>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default Booking;
