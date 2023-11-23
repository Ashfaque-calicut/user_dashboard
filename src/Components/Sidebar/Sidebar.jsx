import React from 'react';
import './Sidebar.css';
import logo3 from '../../Assets/images/logo3.png';
import { HouseDoor, Gift, Puzzle, QuestionDiamond, HandThumbsUp, BoxArrowRight } from 'react-bootstrap-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo3} alt="Logo" />
      </div>
      <div className="user-info">
        <h3>Ashfaque</h3>
        <p>abc@gmail.com</p>
      </div>
      <div className="nav-links">
        <div className="nav-item dash">
          <HouseDoor color="#007bff" size={20} />
          <p>Dashboard</p>
        </div>
        <div className="nav-item">
          <Gift color="#007bff" size={20} />
          <p>Perks</p>
        </div>
        <div className="nav-item">
          <Puzzle color="#007bff" size={20} />
          <p>Addons</p>
        </div>
        <div className="nav-item">
          <QuestionDiamond color="#007bff" size={20} />
          <p>FAQ</p>
        </div>
        <div className="nav-item">
          <HandThumbsUp color="#007bff" size={20} />
          <p>Support</p>
        </div>
        <div className="nav-item logout">
          <BoxArrowRight color="#007bff" size={20} />
          <p >Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
