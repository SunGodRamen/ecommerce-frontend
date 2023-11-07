import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import LoginPage from './components/login/LoginPage';
import HomePage from './components/home/HomePage';
import RegistrationForm from './components/registration/RegistrationForm'; // Import RegistrationForm
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationForm />} /> {/* Add this route */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
