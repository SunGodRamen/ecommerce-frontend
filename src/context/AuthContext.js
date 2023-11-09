// AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Set the initial login status based on the token's presence
    const token = sessionStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const login = (token) => {
    sessionStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  // The value object includes everything that you want to provide through the context
  const value = {
    isLoggedIn,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
