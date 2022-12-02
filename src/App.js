import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';
import Booking from './pages/Booking';


import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/sign-in" element={<LogIn />} />
          <Route exact path="/booking" element={<Booking />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
