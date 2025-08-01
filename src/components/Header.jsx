// src/components/Header.jsx

import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logoGerti from '../assets/logo-gerti.png';

function Header (props){
  return (
    <Navbar expand="lg" fixed="top" className="header-gerti">
      <Container>
        {/* MUDANÇA AQUI: Trocamos o href por onClick */}
        <Navbar.Brand 
          onClick={() => {props.ref_home.current.scrollIntoView({behavior: "smooth"})}}
          style={{ cursor: 'pointer' }} // Adiciona a "mãozinha" do mouse
        >
          <img
            src={logoGerti}
            height="40"
            className="d-inline-block align-top"
            alt="Logo Gerti"
          />
        </Navbar.Brand>

        {/* O resto do seu Header continua igual */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-center">
            <Nav.Link onClick={() => {props.ref_planos.current.scrollIntoView({behavior: "smooth"})}}>Planos</Nav.Link>
            <Nav.Link onClick={() => {props.ref_diferenciais.current.scrollIntoView({behavior: "smooth"})}}>Diferenciais</Nav.Link>
            <Nav.Link onClick={() => {props.ref_faq.current.scrollIntoView({behavior: "smooth"})}}>FAQ</Nav.Link>
          </Nav>
          <Button 
            href="https://api.whatsapp.com/send/?phone=551139959564&text&type=phone_number&app_absent=0" 
            variant="outline-primary"
            className="btn-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Converse com um Especialista
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;