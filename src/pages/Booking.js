import React, {useState} from "react"

import Navbar from "../components/Navbar";
import Footer from '../parts/Footer';
import { Link } from 'react-router-dom';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { GoogleMap, LoadScript } from "@react-google-maps/api";

import { ReactComponent as Male } from '../assets/male.svg';
import { ReactComponent as Female } from '../assets/female.svg';

import Select from 'react-select'
const selectService = [
    { value: 'Pijat Aroma Terapi', label: 'Pijat Aroma Terapi' },
    { value: 'Pijat Batu Panas', label: 'Pijat Batu Panas' },
    { value: 'Pijat Thai', label: 'Pijat Thai' },
    { value: 'Pijat Refleksi', label: 'Pijat Refleksi' },
    { value: 'Pijat Olahraga', label: 'Pijat Olahraga' },
    { value: 'Pijat Lulur', label: 'Pijat Lulur' }
  ]





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
                <Link to='/' class="iconBack">
                    <svg width="15" height="38" viewBox="0 0 15 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5077 37.5102C12.1876 37.5115 11.8713 37.425 11.5821 37.2571C11.2929 37.0892 11.0381 36.8441 10.8365 36.5399L0.487428 20.8056C0.172283 20.3364 0 19.7478 0 19.1404C0 18.533 0.172283 17.9444 0.487428 17.4752L11.2007 1.74092C11.5644 1.20539 12.087 0.868609 12.6536 0.804676C13.2202 0.740743 13.7843 0.954891 14.2218 1.40001C14.6594 1.84513 14.9346 2.48476 14.9868 3.17818C15.0391 3.87161 14.8641 4.56203 14.5004 5.09757L4.92272 19.1535L14.179 33.2095C14.441 33.5944 14.6074 34.0631 14.6586 34.5602C14.7098 35.0573 14.6435 35.5619 14.4677 36.0143C14.2919 36.4667 14.0139 36.8481 13.6665 37.1132C13.3192 37.3783 12.917 37.516 12.5077 37.5102Z" fill="#466FC1"/>
                    </svg>
                </Link>

                <h1> Pilih Jenis Pijat </h1>
                <div class="select">
                    <Select
                        styles={{
                            control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: 'white',
                            }),
                        }} placeholder="Pilih Jenis Pijat" options={selectService}
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
                            <p>30 Menit - <i>Rp. 60.000</i> </p>
                        </div>
                        <div class="service">
                            <p>60 Menit - <i>Rp. 120.000</i> </p>
                        </div>
                        <div class="service">
                            <p>90 Menit - <i>Rp. 180.000</i> </p>
                        </div>
                        <div class="service">
                            <p>120 Menit - <i>Rp. 240.000</i> </p>
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
                <div className='calendar-container'>
                    <Calendar onChange={setDate} value={date} />
                </div>
                
                <h1> Pilih Lokasi </h1>
                <LoadScript googleMapsApiKey={"AIzaSyDw6Rj1YiUjCpmgZvCt9qrJladyMcUdN5g"}>
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
                    <button class="selanjutnya" style={{ background: '#466FC1', color: '#fff', borderRadius: '0.5rem', padding: '1rem 5rem', }} >
                        Selanjutnya
                    </button>
                </Link>
  
            </div>

            <Footer />
        </>
    )
}


export default Booking 