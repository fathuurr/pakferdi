import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import ConfirmPayment from './pages/ConfirmPayment';
import DetailBooking from './pages/DetailBooking';
import UserProfile from './pages/UserProfile';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/sign-in" element={<LogIn />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirm-payment" element={<ConfirmPayment />} />
          <Route path="/detail-booking" element={<DetailBooking />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
