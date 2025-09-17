// src/components/Header.jsx
import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logoGerti from "../assets/logo-gerti.png";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  const closeIfMobile = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="header-gerti"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand href="#home" onClick={closeIfMobile} style={{ cursor: "pointer" }}>
          <img src={logoGerti} height="40" className="d-inline-block align-top" alt="Logo Gerti" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-center">
            <Nav.Link href="#planos" onClick={closeIfMobile}>Planos</Nav.Link>
            <Nav.Link href="#beneficios" onClick={closeIfMobile}>Diferenciais</Nav.Link>
            <Nav.Link href="#faq" onClick={closeIfMobile}>FAQ</Nav.Link>
          </Nav>
           <div className="d-flex align-items-center gap-2">
          <Button
         href="https://cloud.gerti.com.br/login"
         variant="btn-cta btn-outline-gerti-blue" 
         className="btn-cta"
         target="_blank"
          rel="noopener noreferrer"
>         Entrar no console
        </Button>

         <Button
         href="https://cloud.gerti.com.br/signup"
         variant="btn-cta btn-solid-primary"
         className="btn-cta"
         target="_blank"
          rel="noopener noreferrer"
>         Crie sua conta gratuita!
        </Button>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
