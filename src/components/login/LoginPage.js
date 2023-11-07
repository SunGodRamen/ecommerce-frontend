import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Link } from 'react-router-dom';

function LoginPage({ onLoginSuccess }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem('token', data.token); // Store the token
        // onLoginSuccess(data); // Perform any additional login success actions
        navigate('/home'); // Navigate to the home page
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Login failed. Please try again later.');
    }
  };
  
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            name="username"
            type="text"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
