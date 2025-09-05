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
}
