// Navigation.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Make sure the path is correct

function Navigation() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    logout(); // Call logout from AuthContext to clear the session
    navigate('/'); // Navigate to the home page after logging out
  };

  return (
    <nav>
      <ul>
        <li>
          {/* If the user is logged in, the Home link goes to /home, otherwise it goes to / */}
          <Link to={isLoggedIn ? "/home" : "/"}>Home</Link>
        </li>
        {!isLoggedIn && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navigation;
