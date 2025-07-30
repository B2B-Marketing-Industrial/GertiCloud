// src/components/Header.jsx

import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logoGerti from '../assets/logo-gerti.png';

const Header = () => {
  return (
    // expand="lg" faz o menu virar "hambúrguer" em telas médias e pequenas
    // bg="light" define o fundo claro 
    // fixed="top" mantém a navbar sempre visível no topo da página
    // className="shadow-sm" adiciona uma sombra sutil para dar profundidade
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        {/* Logo da Marca */}
        <Navbar.Brand href="#home">
          <img
            src={logoGerti}
            height="30" // Ajuste a altura conforme necessário
            className="d-inline-block align-top"
            alt="Logo Gerti - Gestão de TI Inteligente"
          />
        </Navbar.Brand>

        {/* Botão "Hambúrguer" que aparece em telas pequenas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Conteúdo do Menu que será colapsado */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* ms-auto alinha os links à direita */}
          <Nav className="ms-auto">
            <Nav.Link href="#planos">Planos</Nav.Link>
            <Nav.Link href="#diferenciais">Diferenciais</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            {/*  componente Button para dar destaque ao CTA */}
            <Button variant="primary" href="#contato">Fale com um Especialista</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;