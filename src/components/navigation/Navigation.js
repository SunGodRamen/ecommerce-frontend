// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'

function Navigation() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!isLoggedIn && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            {/* When this button is clicked, call the logout function from the AuthContext */}
            <button onClick={logout}>Logout</button>
          </li>
        )}
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navigation;
