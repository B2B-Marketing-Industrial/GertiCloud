// src/App.jsx

import React from 'react';
import Header from './components/Header.jsx'; // 1. Importe o novo componente
import './App.css';

function App() {
  return (
    <>
      <Header /> {/* 2. Use o componente aqui */}
      
      <main>
        {/* O resto do nosso conteúdo virá aqui depois */}
        <h1>Página da GertiCloud</h1>
      </main>
    </>
  )
}

export default App;