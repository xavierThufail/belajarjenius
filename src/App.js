import React from 'react';
import './App.css';
import Routes from './routes/routes';
import Navbar from './components/navbar';

export default function App() {

  return (
    <div style={{display: 'flex'}}>
      <Navbar />
      <div style={{ marginLeft: '150px', width: "100%" }}>
        <Routes />
      </div>
    </div>
  );
}
