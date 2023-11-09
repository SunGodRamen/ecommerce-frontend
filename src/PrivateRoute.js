// PrivateRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const token = sessionStorage.getItem('token');

  if (!token) {
    // User is not logged in, redirect them to the landing page with the current location
    // You could redirect to the login page as well by replacing '/' with '/login'
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children; // If the user is logged in, render the children components
};

export default PrivateRoute;
