// src/App.jsx

import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
       <main style={{paddingTop: '76px' }}>
       <h1>Página da GertiCloud</h1>
      </main>
       <Footer />
     </>
  )
}

export default App;