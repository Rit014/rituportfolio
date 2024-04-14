import React from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Project from './Component/Project';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import './Component/style.css';

function App() {
  return (
   <>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
   </>
  );
}

export default App;
