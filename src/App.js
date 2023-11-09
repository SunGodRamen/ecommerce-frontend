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
import StorePage from './components/store/StorePage'; // Import the StorePage component
import ProductPage from './components/products/ProductPage'; // Make sure to import ProductPage

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/store" element={<StorePage />} /> {/* Route for StorePage */}
          <Route path="/home" element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          } />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
