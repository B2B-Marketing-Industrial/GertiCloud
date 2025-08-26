// src/components/SupportProcess.jsx
import React from "react";
import { Container } from "react-bootstrap";
import {
  FaBolt,
  FaFlag,
  FaUserTie,
  FaBusinessTime
} from "react-icons/fa";

const steps = [
  {
    icon: <FaBolt />,
    title: "Menos de 5 Minutos",
    text:
      'WhatsApp, telefone ou chat, especialista humano, problema resolvido. (Não bot, não ticket, não "aguarde de 5 a 7 dias úteis")'
  },
  {
    icon: <FaFlag />,
    title: "Em Português Claro",
    text:
      "Explicamos em linguagem simples, sem jargões. Entendemos o contexto do seu negócio brasileiro."
  },
  {
    icon: <FaUserTie />,
    title: " Especialistas, Não Atendentes",
    text:
      'Equipe que conhece cloud de verdade e resolve problemas complexos. Não precisamos "escalar para o técnico", já somos os técnicos.'
  },
  {
    icon: <FaBusinessTime />,
    title: "No Seu Horário Comercial",
    text:
      "Disponível quando você está trabalhando,nada de suporte só de madrugada."
  }
];

const SupportProcess = () => {
  return (
    <section id="suporte" className="support-process-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Como Funciona o Suporte da Gerti ?</h2>
          <p className="lead text-muted">(O Que Ninguém Mais Faz)</p>
        </div>

       {/* Desktop / Tablet: timeline horizontal */}
<div className="timeline timeline--horizontal d-none d-md-flex">
  {steps.map((step, i) => (
    <div className="timeline-step" key={i}>
      <div className="timeline-dot">{step.icon}</div>
      <h5 className="timeline-title">{step.title}</h5>
      <p className="timeline-text">{step.text}</p>
    </div>
  ))}
</div>

        {/* Mobile: timeline vertical */}
        <div className="timeline timeline--vertical d-md-none">
          {steps.map((step, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-icon">{step.icon}</div>
              <div className="timeline-content">
                <h5 className="mb-2">{step.title}</h5>
                <p className="mb-0">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SupportProcess;
