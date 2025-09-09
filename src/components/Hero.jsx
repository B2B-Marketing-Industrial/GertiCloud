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
              Resolva em Minutos,<br/> não em Tickets.
            </h1>

            {/* Lista de benefícios (subtítulo substituído) */}
            <ul className="hero-benefits">
              <li>
                <FaCheckCircle aria-hidden="true" />
                <span>Suporte em minutos, não em horas.</span>
              </li>
              <li>
                <FaCheckCircle aria-hidden="true" />
                <span>Ganhe R$500 para testar por 7 dias.</span>
              </li>
              <li>
                <FaCheckCircle aria-hidden="true" />
                <span>Economize até 40% nos custos de Cloud.</span>
              </li>
            </ul>

            {/* CTA principal */}
            <Button
              as="a"
              href={WHATSAPP_URL}
              className="btn-gerti-green"
              target="_blank"
              rel="noopener noreferrer"
            >
              Converse com um Especialista
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
