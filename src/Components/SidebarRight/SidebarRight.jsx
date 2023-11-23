import React from 'react';
import { Bell, Plus } from 'react-bootstrap-icons';
import './SiderbarRight.css';

const SidebarRight = () => {
  return (
    <div className="sidebar-right">
      <div className="notification-box">
        <Bell color="#007bff" size={20} />
      </div>
      <div className="add-box">
        <Plus color="#663399" size={20} />
      </div>
    </div>
  );
}

export default SidebarRight;
