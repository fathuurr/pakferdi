import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../parts/Footer';

const DetailBooking = () => {
  const [loading, setLoading] = useState(false);

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
            <h1> Detail Booking </h1>
            <div className="divpay">
              <img className="checkpayment" src="check.svg" alt="" />

              <table className="tableConfirm">
                <tr>
                  <td>Nama &nbsp;</td>
                  <td> : Jainudin</td>
                </tr>
                <tr>
                  <td>Jenis Layanan Pijat &nbsp;</td>
                  <td> : Pijat Aromaterapi</td>
                </tr>
                <tr>
                  <td>Durasi &nbsp;</td>
                  <td> : 60 Menit</td>
                </tr>
                <tr>
                  <td>Gender Terapis &nbsp;</td>
                  <td> : Pria</td>
                </tr>
                <tr>
                  <td>Waktu &nbsp;</td>
                  <td> : 12:00 pm</td>
                </tr>
                <tr>
                  <td>Lokasi &nbsp;</td>
                  <td> : Jakarta</td>
                </tr>
                <tr>
                  <td>Status Pembayaran &nbsp;</td>
                  <td>
                    :
                    <label>
                      <b>
                        <u> Berhasil </u>
                      </b>
                    </label>
                  </td>
                </tr>
              </table>
            </div>

            <Link
              className="flex justify-center mx-auto mt-10 w-full bg-[#466FC1] text-white rounded-lg py-4 max-sm:w-1/2 text-sm"
              to={'/'}>
              Kembali ke Beranda
            </Link>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default DetailBooking;
