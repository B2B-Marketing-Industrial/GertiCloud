// src/App.jsx

import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
       <main><Features />
       </main>
       <Footer />
     </>
  )
}

export default App;