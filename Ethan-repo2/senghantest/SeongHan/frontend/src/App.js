import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };
    window.addEventListener('resize', hideMenu);
    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route exact path='/' element={Home} />
        <Route exact path='/about' element={About} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
