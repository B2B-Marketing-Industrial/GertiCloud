// src/components/Header.jsx

import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logoGerti from '../assets/logo-gerti.png';

const Header = () => {
  return (
       <Navbar expand="lg" fixed="top" className="header-gerti">
      <Container>
        {/* Logo da Marca */}
        <Navbar.Brand href="#home">
          <img
            src={logoGerti}
            height="30" // Ajuste a altura conforme necessário
            className="d-inline-block align-top"
            alt="Logo Gerti"
          />
        </Navbar.Brand>

        {/* Botão "Hambúrguer" que aparece em telas pequenas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Este Nav agora ocupa o espaço à esquerda */}

          <Nav className="w-100 justify-content-center">
            <Nav.Link href="#planos">Planos</Nav.Link>
            <Nav.Link href="#diferenciais">Diferenciais</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
          </Nav>
          
          {/* O botão fica fora do Nav, permitindo que o me-auto o empurre para a direita */}
          <Button href="#contato" className="btn-cta">Fale com um Especialista</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;