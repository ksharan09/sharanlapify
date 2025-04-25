import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div>
        {/* Simple Navigation Bar */}
        <nav style={navStyle}>
          <Link style={linkStyle} to="/">Home</Link>
          <Link style={linkStyle} to="/about">About Us</Link>
          <Link style={linkStyle} to="/contact">Contact Us</Link>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

// Home Page Component
const Home = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <h1>Welcome to Lapify</h1>
    <p>Your trusted platform to buy quality second-hand laptops.</p>
  </div>
);

// Styles
const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  padding: '20px',
  backgroundColor: '#f0f0f0',
  fontSize: '1.1rem',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#2980b9',
  fontWeight: 'bold',
};

export default App;
