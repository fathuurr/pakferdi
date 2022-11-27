import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';

import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exace path="/home" element={<Home />} />
          <Route exact path="/sign-in" element={<LogIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
