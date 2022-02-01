import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMenu, getPosts } from '../Controllers/actions';
import './App.css';
import Footer from './footer/Footer';
import Home from './home/Home-container';
import Nav from './nav/Nav';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenu());
    dispatch(getPosts());
  }, []);

  return (
    <div className="font-poppins">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
