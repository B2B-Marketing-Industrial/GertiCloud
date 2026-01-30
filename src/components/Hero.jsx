// src/components/Hero.jsx
import React from "react";
import heroImage from "../assets/hero-image.jpg";
import { Container, Row, Col, Button, Image as BootstrapImage } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=551139959564&text&type=phone_number&app_absent=0";

export default function Hero() {
  return (
    <section className="hero-section hero-section-text-aligned"> 
      {/* Fundo da hero */}
      <BootstrapImage
        src={heroImage}
        className="hero-background-image"
        alt="Arte digital com nuvem tecnológica no fundo"
      />
      {/* Overlay/gradiente por cima do fundo para contraste do texto */}
      <div className="hero-overlay" />

      {/* Conteúdo */}
      <Container className="hero-content h-100">
       <Row className="align-items-center h-100"> 
          <Col xs={12} lg={7} className="text-lg-start hero-text-col">
            <h1 className="hero-title">
              Sua Nuvem em Reais e <br />
              Configurada por Especialistas
            </h1>

            <p className="hero-description">
              {/* NOVO: descrição para explicar a promessa e reduzir dúvida (especialmente B2B) */}
              Chega de faturas imprevisíveis em Dólar. Na GERTI, migramos e gerenciamos sua
              infraestrutura com suporte humano no Brasil. Conformidade LGPD e economia de até 30%.
              </p>

            {/* CTA principal */}
            <Button
              as="a"
              href={WHATSAPP_URL}
              className="btn-gerti-green"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero Meu Time de Cloud
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
