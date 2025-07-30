// src/App.jsx

import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header /> 
       <main style={{paddingTop: '76px' }}>
       <h1>Página da GertiCloud</h1>
      </main>
       <Footer />
     </>
  )
}

export default App;