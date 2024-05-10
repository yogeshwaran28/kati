import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
const UserProfile = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    // For simplicity, let's just log the credentials
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add your login logic here
    // For example, call a function passed as a prop to handle the login
  };

  return (
    <div className='container'>
        <h1>KANNECTI</h1>
      <h2 className='title'>Login</h2>
      <form onSubmit={handleSubmit} className='login'>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <br />
        <Link to="/signup">Don't have an account? Sign Up</Link>
      </form>
    </div>
  );
};

export default UserProfile;
