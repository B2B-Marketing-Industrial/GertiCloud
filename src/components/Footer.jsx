// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logoFooter from "../assets/logo-gerti-footer.png";

const whatsappLink = `https://api.whatsapp.com/send/?phone=551139959564&text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20um%20especialista%20sobre%20as%20solu%C3%A7%C3%B5es%20Gerti%20Cloud.&type=phone_number&app_absent=0`;

const quickLinks = [
  { href: "#planos", text: "Planos" },
  { href: "#beneficios", text: "Diferenciais" },
  { href: "#faq", text: "FAQ" },
];

const legalLinks = [
  {
    href: "https://suporte.gerti.com.br/r/termos-legais-cloud-computing-public/externals/knowledges/show/34529/d553ffa9-bd54-4ec0-a89f-d47918c3b2bd/11610",
    text: "Termos de Uso"
  },
  {
    href: "https://suporte.gerti.com.br/r/politica-de-uso-e-privacidade-cloud-computing-public/externals/knowledges/show/34530/7e575c8b-06a7-4f81-9f22-4f7c2bd0cf32/11610",
    text: "Política de Privacidade"
  },
];

function scrollIntoSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-gerti text-white pt-5 pb-4">
      <Container>
        <Row className="gy-4">
          <Col xs={12} md={5} lg={3} className="text-center text-md-start">
            <img
              src={logoFooter}
              alt="Logo Gerti Cloud"
              className="footer-logo footer-logo-raised"
              onClick={() => scrollIntoSection("sobre")}
            />
            <p className="footer-description">Especialistas em soluções de computação em nuvem, oferecendo servidores de alta performance e segurança inabalável.</p>
            <div className="d-flex flex-row flex-wrap justify-content-center align-content-center justify-content-md-start mt-3">
              <iframe
                className="ssc-badge"
                src="https://scores.securityscorecard.io/security-rating/badge/gerti.com.br"
                width="256"
                height="100"
                frameBorder="0"
                title="Security Scorecard Badge"
              />
            </div>
          </Col>

          {/* 2. Coluna 2: Links Rápidos */}
          <Col md={3} lg={3} className="text-center text-md-center">
            <h6 className="text-uppercase fw-bold footer-title-green">Links Rápidos</h6>
            <hr className="footer-underline" />
            <Nav className="flex-column">
              {quickLinks.map((link) => (
                <a onClick={e => { e.preventDefault(), scrollIntoSection(link.href.replace("#", "")) }} key={link.text} href={link.href} className="footer-link p-0 mb-2">
                  {link.text}
                </a>
              ))}
            </Nav>
          </Col>

          {/* 3. Coluna 3: Links Legais */}
          <Col md={4} lg={3} className="text-center text-md-center">
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

          {/* 4. Coluna 4: Contato */}
          <Col md={5} lg={3} className="text-center text-md-center">
            <h6 className="text-uppercase fw-bold footer-title-green">Contato</h6>
            <hr className="footer-underline" />
            <p className="mb-1">
              R. Jurubatuba, 292 — Centro, <br />São Bernardo do Campo - SP
            </p>
            <p className="mb-1">
              <a href="mailto:comercial@gerti.com.br" className="footer-link">comercial@gerti.com.br</a>
            </p>
            <p className="mb-0">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="footer-link">
                (11) 3995-9564
              </a>
            </p>
            {/* Adicionando os ícones sociais aqui */}
            <div className="d-flex justify-content-center justify-content-md-center gap-3 mt-3">
              <a href="https://www.facebook.com/gertisolucoes" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                <FaFacebook size={18} />
              </a>
              <a href="https://www.instagram.com/gertisolucoes/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/gertisolucoes" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
            </div>
          </Col>
        </Row>

        {/* Base do rodapé com ícones sociais e texto de direitos autorais */}
        <Row className="footer-base pt-3 mt-4 align-items-center">
          <Col md={6}>
          </Col>
          <Col md={6} className=" text-md-end">
            <small className="footer-copy">
              © {year} Gerti Cloud. Todos os direitos reservados.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};