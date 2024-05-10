import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const UserSignup = ({ handleSignup }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your signup logic here
    // Assuming handleSignup is a prop function that handles the signup logic
    const success = await handleSignup({ username, email, password });
    if (success) {
      // Redirect to profile page after successful signup
      navigate('/profile');
    }
  };

  return (
    <div className='container'>
          <h1>KANNECTI</h1>
      <h2 className='title'>Signup</h2>
      <form onSubmit={handleSubmit} className='login'>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        <br />
        <Link to="/login">Already have an account? Login</Link>
      </form>
    </div>
  );
};

export default UserSignup;
