import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../parts/Footer';
import { Link } from 'react-router-dom';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

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

  const center = {
    lat: -6.2269976,
    lng: 106.7848748,
  };

  const containerStyle = {
    width: '90%',
    height: '300px',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  return (
    <>
      <Navbar />

      <div class="m-booking">
        <Link to="/" class="iconBack">
          <IconBack />
        </Link>

        <h1> Pilih Jenis Pijat </h1>
        <div class="select">
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
        <div class="pilihService">
          <div class="service">
            <Male />
            <p>Pria</p>
          </div>
          <div class="service">
            <Female />
            <p>Perempuan</p>
          </div>
        </div>

        <h1> Pilih Durasi </h1>
        <div class="pilihService">
          <div class="service">
            <p>
              30 Menit - <i>Rp. 60.000</i>{' '}
            </p>
          </div>
          <div class="service">
            <p>
              60 Menit - <i>Rp. 120.000</i>{' '}
            </p>
          </div>
          <div class="service">
            <p>
              90 Menit - <i>Rp. 180.000</i>{' '}
            </p>
          </div>
          <div class="service">
            <p>
              120 Menit - <i>Rp. 240.000</i>{' '}
            </p>
          </div>
        </div>

        <h1> Pilih Gender Terapis </h1>
        <div class="pilihService">
          <div class="service">
            <Male />
            <p>Pria</p>
          </div>
          <div class="service">
            <Female />
            <p>Perempuan</p>
          </div>
        </div>

        <h1> Pilih Waktu </h1>
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>

        <h1> Pilih Lokasi </h1>
        <LoadScript
          googleMapsApiKey={'AIzaSyDw6Rj1YiUjCpmgZvCt9qrJladyMcUdN5g'}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          />
        </LoadScript>

        <h2> Alamat Lengkap :</h2>
        <div class="alamatLengkap">
          <input placeholder="Provinsi, Kota, Kecamatan, Kode Pos"></input>
          <input placeholder="Nama Jalan, Gedung, No. Rumah"></input>
          <input placeholder="Detail Lainnya (Cth: Blok/Unit No., Patokan)"></input>
        </div>

        <Link to={'/payment'}>
          <button
            class="selanjutnya"
            style={{
              background: '#466FC1',
              color: '#fff',
              borderRadius: '0.5rem',
              padding: '1rem 5rem',
            }}>
            Selanjutnya
          </button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Booking;
