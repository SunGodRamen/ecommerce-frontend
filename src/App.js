// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LandingPage from './components/landing/LandingPage';
import LoginPage from './components/login/LoginPage';
import HomePage from './components/home/HomePage';
import RegistrationForm from './components/registration/RegistrationForm';
import Navigation from './components/navigation/Navigation';
import PrivateRoute from './PrivateRoute'; // Import PrivateRoute component

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationForm />} />
          {/* Wrap the HomePage route with PrivateRoute to protect it */}
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          {/* Add more protected routes below, wrapped with PrivateRoute as needed */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
