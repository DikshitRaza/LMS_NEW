// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Registration from './components/Registration'; // Import your Dashboard component
import ForgotPassword from './components/ForgotPassword';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Navbar" element={<Navbar />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
