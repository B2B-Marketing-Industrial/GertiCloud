// src/components/Hero.jsx
import React from "react";
import heroImage from "../assets/hero-image.jpg";
import { Container, Row, Col, Button, Image as BootstrapImage } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { heroBulletsValue } from "../hooks/heroBullets";
import { ArrowRight, CheckCircleFill } from "react-bootstrap-icons";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=551139959564&text&type=phone_number&app_absent=0";

export default function Hero() {
  return (
    <section className="hero-section hero-section-text-aligned">
      <BootstrapImage src={heroImage} className="hero-background-image" alt="Arte digital com nuvem tecnológica no fundo" />
      <div className="hero-overlay" />
      <Container className="hero-content h-100">
        <Row className="align-items-center h-100">
          <Col xs={12} lg={7} className="text-lg-start hero-text-col">
            <h1 className="hero-title">A Nuvem que você não precisa gerenciar. Nós fazemos o trabalho pesado por você.</h1>
            <p className="hero-description">Alta performance no Brasil, sem surpresas no fim do mês e sem robôs no atendimento.</p>
            <ul className="list-unstyled mb-4 small text-white">
              {heroBulletsValue.map((value, i) => (
                <li key={i} className="mb-2 d-flex align-items-start align-items-md-center gap-2 text-md-nowrap">
                  <CheckCircleFill className="text-success flex-shrink-0 mt-1 mt-md-0" size={18} />
                  <span className="fw-bold">{value.primaryText}<span className="ms-1 fw-normal">{value.secondaryText}</span></span>
                </li>
              ))}
            </ul>
            <Button as="a" href={WHATSAPP_URL} className="btn-gerti-green" target="_blank" rel="noopener noreferrer">Falar com especialista Cloud <ArrowRight /></Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
