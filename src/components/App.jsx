import React from 'react';
import './App.css';
import Home from './home/Home-container';
import Nav from './nav/Nav';

function App() {
  return (
    <div className="font-poppins">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
