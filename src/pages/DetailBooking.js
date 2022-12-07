import Navbar from '../components/Navbar';
import Footer from '../parts/Footer';
import { Link } from 'react-router-dom';

const DetailBooking = () => {
  return (
    <>
      <Navbar />

      <div class="m-booking">
        <h1> Detail Booking </h1>
        <div class="divpay">
          <img class="checkpayment" src="check.svg" alt="" />

          <table class="tableConfirm">
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
                {' '}
                :{' '}
                <label>
                  {' '}
                  <b>
                    <u> Berhasil </u>
                  </b>{' '}
                </label>{' '}
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
  );
};

export default DetailBooking;
