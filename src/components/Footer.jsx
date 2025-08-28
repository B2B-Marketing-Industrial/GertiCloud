// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const quickLinks = [
  { href: "#planos", text: "Planos" },
  { href: "#diferenciais", text: "Diferenciais" },
  { href: "#faq", text: "FAQ" },
];

const legalLinks = [
  { href: "/termos", text: "Termos de Uso" },
  { href: "/privacidade", text: "Política de Privacidade" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-gerti text-white pt-5 pb-4">
      <Container>
        {/* GRID SUPERIOR COM ALINHAMENTO SIMÉTRICO (4-4-4) */}
        <Row className="gy-4 justify-content-center">
          
          {/* Coluna 1: Marca e Descrição */}
          <Col md={4} lg={3}>
            <h6 className="text-uppercase fw-bold footer-title-green">GERTI Cloud</h6>
            <hr className="footer-underline" />
            <p style={{ opacity: 0.9 }}>
              Especialistas em soluções de  <br />computação
              em nuvem, oferecendo   <br />servidores de alta performance  <br /> e segurança
              inabalável.
            </p>
          </Col>

          {/* Coluna 2: Links Agrupados */}
          <Col md={4} lg={3}>
            <Row>
              <Col xs={7} lg={7}>
                <h6 className="text-uppercase fw-bold footer-title-green">Links Rápidos</h6>
                <hr className="footer-underline" />
                <Nav className="flex-column">
                  {quickLinks.map((link) => (
                    <Nav.Link key={link.text} href={link.href} className="footer-link p-0 mb-2">
                      {link.text}
                    </Nav.Link>
                  ))}
                </Nav>
              </Col>
              <Col xs={4} lg={4}>
                <h6 className="text-uppercase fw-bold footer-title-green">Legal</h6>
                <hr className="footer-underline" />
                <Nav className="flex-column">
                  {legalLinks.map((link) => (
                    <Nav.Link key={link.text} href={link.href} className="footer-link p-0 mb-2">
                      {link.text}
                    </Nav.Link>
                  ))}
                </Nav>
              </Col>
            </Row>
          </Col>

          {/* Coluna 3: Contato */}
          <Col md={4} lg={4}>
            <h6 className="text-uppercase fw-bold footer-title-green">Contato</h6>
            <hr className="footer-underline" />
            <p className="mb-1">
              R. Jurubatuba, 292 — Centro, <br />São Bernardo 
              do Campo – SP
            </p>
            <p className="mb-1">
              <a href="mailto:comercial@gerti.com.br" className="footer-link">
                comercial@gerti.com.br
              </a>
            </p>
            <p className="mb-0">
              <a href="tel:+551139959564" className="footer-link">
                (11) 3995-9564
              </a>
            </p>
          </Col>
        </Row>

        {/* BASE DO RODAPÉ */}
        <Row className="footer-base pt-3 mt-4 align-items-center">
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <a href="https://www.facebook.com/gertisolucoes" target="_blank" rel="noopener noreferrer" className="footer-social-link me-2" aria-label="Facebook">
              <FaFacebook size={18} />
            </a>
            <a href="https://www.instagram.com/gertisolucoes/" target="_blank" rel="noopener noreferrer" className="footer-social-link me-2" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.linkedin.com/company/gertisolucoes" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <small className="footer-copy">
              © {year} Gerti Cloud. Todos os direitos reservados.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};