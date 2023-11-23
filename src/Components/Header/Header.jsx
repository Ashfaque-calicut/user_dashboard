import React from 'react';
import './Header.css'; 
import logo from '../../Assets/images/logo.jpg'
import logo2 from '../../Assets/images/logo2.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="company-info-container">
        <div className="company-info">
          <img src={logo2} alt="Company Logo" className="company-logo" />
          <p className="company-name">Company Name</p>
        </div>
      </div>
      
      <div className="arrow-box">
        <p>↓</p>
      </div>
    </header>
  );
};

export default Header;
