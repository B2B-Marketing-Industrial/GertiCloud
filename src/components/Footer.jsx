// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    
    <footer className="footer-gerti text-white pt-5 pb-4">
      <Container>
        <Row>
          {/* Coluna da Marca */}
          <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">GERTI Cloud</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#0df3aa', height: '2px' }} />
            <p>
              Especialistas em soluções de computação em nuvem, oferecendo servidores de alta performance e segurança inabalável.
            </p>
          </Col>

          {/* Coluna de Links Rápidos */}
          <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Links Rápidos</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#0df3aa', height: '2px' }} />
            <Nav className="flex-column">
              <Nav.Link href="#planos" className="footer-link">Planos</Nav.Link>
              <Nav.Link href="#diferenciais" className="footer-link">Diferenciais</Nav.Link>
              <Nav.Link href="#faq" className="footer-link">FAQ</Nav.Link>
            </Nav>
          </Col>

          {/* Coluna de Contato */}
          <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Contatos</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#0df3aa', height: '2px' }} />
            <p>R. Jurubatuba, 292 - Centro, São Bernardo do Campo - SP </p>
            <p>comercial@gerti.com.br</p>
            <p>(11) 3995-9564 </p>
          </Col>
        </Row>
        
        {/* Seção de Copyright e Redes Sociais */}
        <Row className="d-flex align-items-center">
            <Col md={7} lg={8}>
                <p className="text-center text-md-start">© 2025 Gerti Cloud. [cite_start]Todos os direitos reservados. [cite: 136, 137]</p>
            </Col>
            <Col md={5} lg={4} className="text-center text-md-end">
                 <a href="https://www.facebook.com/gertisolucoes" target="_blank" rel="noopener noreferrer" className="text-white me-4"><FaFacebook size={22}/></a>
                <a href="https://www.instagram.com/gertisolucoes/" target="_blank" rel="noopener noreferrer" className="text-white me-4"><FaInstagram size={22}/></a>
                <a href="https://www.linkedin.com/company/gertisolucoes" target="_blank" rel="noopener noreferrer" className="text-white me-4"><FaLinkedin size={22}/></a>
            </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

