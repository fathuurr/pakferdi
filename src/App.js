import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import ConfirmPayment from './pages/ConfirmPayment';
import DetailBooking from './pages/DetailBooking';



import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/sign-in" element={<LogIn />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/confirm-payment" element={<ConfirmPayment />} />
          <Route exact path="/detail-booking" element={<DetailBooking />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
