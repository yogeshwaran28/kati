import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfile from './UserProfile';
import UserSignup from './UserSignup';
import Profile from './Profile';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<UserProfile />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<UserProfile />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
