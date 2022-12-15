import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../parts/Footer';

const ConfirmPayment = () => {
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
          <div className="container mx-auto px-8 mt-10">
            <Link to={'/booking'} className="iconBack">
              <svg
                width="15"
                height="38"
                viewBox="0 0 15 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.5077 37.5102C12.1876 37.5115 11.8713 37.425 11.5821 37.2571C11.2929 37.0892 11.0381 36.8441 10.8365 36.5399L0.487428 20.8056C0.172283 20.3364 0 19.7478 0 19.1404C0 18.533 0.172283 17.9444 0.487428 17.4752L11.2007 1.74092C11.5644 1.20539 12.087 0.868609 12.6536 0.804676C13.2202 0.740743 13.7843 0.954891 14.2218 1.40001C14.6594 1.84513 14.9346 2.48476 14.9868 3.17818C15.0391 3.87161 14.8641 4.56203 14.5004 5.09757L4.92272 19.1535L14.179 33.2095C14.441 33.5944 14.6074 34.0631 14.6586 34.5602C14.7098 35.0573 14.6435 35.5619 14.4677 36.0143C14.2919 36.4667 14.0139 36.8481 13.6665 37.1132C13.3192 37.3783 12.917 37.516 12.5077 37.5102Z"
                  fill="#466FC1"
                />
              </svg>
            </Link>

            <h1 className="mt-10"> Konfirmasi Pembayaran </h1>
            <div className="divpay">
              <table className="tableConfirm">
                <tr>
                  <td>Nama &nbsp;</td>
                  <td> : Jainudin</td>
                </tr>

                <tr>
                  <td>Layanan</td>
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
                  <td>Lokasi</td>
                  <td>: Jl. Kencana, No. 55, Jakarta Timur, Dki Jakarta</td>
                </tr>

                <tr>
                  <td>Gender Terapis &nbsp;</td>
                  <td> : Pria</td>
                </tr>

                <tr>
                  <td>
                    <hr />
                  </td>
                  <td>
                    <hr />
                  </td>
                  <td style={{ width: '55%' }}>
                    <hr />
                  </td>
                </tr>

                <p className="font-semibold text-base mt-5 mb-7">
                  Rincian Harga
                </p>

                <tr>
                  <td className="uppercase text-[#466FC1] max-md:w-full ">
                    Total Pembayaran
                  </td>
                  <td>
                    :
                    <label>
                      <b> Rp. 122.000</b>
                    </label>
                  </td>
                </tr>

                <tr>
                  <td className="text-[#466FC1] ">No Virtual &nbsp; Account</td>
                  <td>
                    : <b className="text-[#466FC1]"> 1171236285123455</b>
                  </td>
                </tr>

                <tr>
                  <td className="text-[#466FC1]">Status Pembayaran</td>
                  <td>
                    :
                    <label>
                      <b>
                        <u> Belum Dibayar </u>
                      </b>
                    </label>
                  </td>
                </tr>
              </table>
            </div>

            <Link
              className="flex justify-center mx-auto mt-10 w-full bg-[#466FC1] text-white rounded-lg py-4 max-sm:w-1/2 text-sm"
              to={'/detail-booking'}>
              Saya Sudah Bayar
            </Link>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default ConfirmPayment;
