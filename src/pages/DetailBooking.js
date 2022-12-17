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
          <div className="container mx-auto px-8 mt-10 max-md:text-xs">
            <h1> Detail Booking </h1>
            <div className="divpay">
              <img className="checkpayment" src="check.svg" alt="" />

              <table className="tableConfirm">
                <tr>
                  <td className="xs:flex block px-4" style={{ width: 'max-content' }}>Nama </td>
                  <td> : Jainudin</td>
                </tr>
                <tr>
                  <td className="xs:flex block px-4" style={{ width: 'max-content' }}>Layanan</td>
                  <td> : Pijat Aromaterapi</td>
                </tr>
                <tr>
                  <td className="xs:flex block px-4" style={{ width: 'max-content' }}>Durasi </td>
                  <td> : 60 Menit</td>
                </tr>

                <tr>
                  <td className="xs:flex block px-4" style={{ width: 'max-content' }}>Waktu </td>
                  <td> : 12:00 pm</td>
                </tr>

                <tr>
                  <td className="xs:flex block px-4" style={{ width: 'max-content' }}>Lokasi </td>
                  <td>: Jl. Kencana, No. 55, Jakarta Timur, Dki Jakarta</td>
                </tr>

                <tr>
                  <td className="xs:flex block px-4" style={{ width: 'max-content' }}>Gender Terapis</td>
                  <td> : Pria</td>
                </tr>

                <tr>
                  <td className="xs:flex block px-4" style={{ width: 'max-content' }}>Status Pembayaran </td>
                  <td>
                    :
                    <label>
                      <b>
                        <u> Berhasil </u>
                      </b>
                    </label>
                  </td>
                </tr>

                <tr className="mt-5">
                  <td colSpan='100'>
                    <hr />
                  </td>
                </tr>

                <tr>
                  <td className="xs:flex block px-4 text-[#466FC1] max-md:w-full ">
                    Nama Terapis
                  </td>
                  <td>: Afifudin</td>
                </tr>

                <tr>
                  <td className="xs:flex block px-4 text-[#466FC1]">Gender Terapis</td>
                  <td>: Pria</td>
                </tr>

                <tr>
                  <td className="xs:flex block px-4 text-[#466FC1]">No. Telepon</td>
                  <td>
                    :
                    <label>
                      <b> +(62) 896-3456-634 </b>
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
