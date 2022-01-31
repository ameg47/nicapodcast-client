import React from 'react';
import './App.css';
import Footer from './footer/Footer';
import Home from './home/Home-container';
import Nav from './nav/Nav';

function App() {
  return (
    <div className="font-poppins">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
