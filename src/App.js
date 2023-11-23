import React from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import MainContent from './Components/MainContent/MainContent';
import './App.css'
import SidebarRight from './Components/SidebarRight/SidebarRight';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <MainContent />
        <SidebarRight/>
      </div>
    </div>
  );
};

export default App;
