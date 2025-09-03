// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logoFooter from "../assets/logo-gerti-footer.png"; 

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
        {/* Grid superior com 4 colunas para o logo, links rápidos, legal e contato */}
        <Row className="gy-4">
          
          {/* Coluna 1: Logo e Descrição */}
          <Col xs={12} md={5} lg={3} className="text-center text-md-start">
            <img
              src={logoFooter}
              alt="Logo Gerti Cloud"
              className="footer-logo mb-3"
            />
            <p className="footer-description">
              Especialistas em soluções de computação em nuvem, oferecendo servidores de alta performance e segurança inabalável.
            </p>
          </Col>

          {/* Coluna 2: Links Rápidos (com offset para alinhar o grid) */}
          <Col md={3} lg={3} className="text-center text-md-start">
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

          {/* Coluna 3: Links Legais */}
          <Col md={4} lg={3} className="text-center text-md-start">
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

          {/* Coluna 4: Contato */}
          <Col md={5} lg={3} className="text-center text-md-start">
            <h6 className="text-uppercase fw-bold footer-title-green">Contato</h6>
            <hr className="footer-underline" />
            <p className="mb-1">
              R. Jurubatuba, 292 — Centro, <br />São Bernardo do Campo - SP
            </p>
            <p className="mb-1">
              <a href="mailto:comercial@gerti.com.br" className="footer-link">comercial@gerti.com.br</a>
            </p>
            <p className="mb-0">
              <a href="tel:+551139959564" className="footer-link">(11) 3995-9564</a>
            </p>
          </Col>
        </Row>

        {/* Base do rodapé com ícones sociais e texto de direitos autorais */}
        <Row className="footer-base pt-3 mt-4 align-items-center">
          <Col md={6} className="footer-base pt-3 mt-4 align-items-center">
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