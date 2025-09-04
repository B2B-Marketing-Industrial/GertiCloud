// src/components/FinalCTA.jsx

import React from "react";
import { Container } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

const whatsappLink = `https://api.whatsapp.com/send/?phone=551139959564&text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20um%20especialista%20sobre%20as%20solu%C3%A7%C3%B5es%20Gerti%20Cloud.&type=phone_number&app_absent=0`;

export default function FinalCTA() {
  return (
    <section className="final-cta py-5">
      <Container className="text-center">
        <div className="cta-card">
          <span className="cta-eyebrow">Consultoria gratuita</span>
          
          {/* Título mais direto e impactante */}
          <h2 className="cta-title">Foque em crescer. Nós cuidamos do resto.</h2>
          
          {/* Subtítulo simplificado para maior clareza */}
          <p className="cta-subtitle">
            Otimize custos. Aumente a produtividade. Tenha tranquilidade para inovar.
          </p>

           <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gerti-green cta-btn"
          >
            {/* Alteração AQUI: Adicionado span com classe de visibilidade */}
            <span className="me-2 d-none d-md-inline-flex">
              <FaWhatsapp size={20} />
            </span>
            Agende sua consultoria gratuita de 15 minutos
          </a>

          <div className="w-100"></div> {/* Div invisível para quebrar a linha */}
          <p className="cta-footnote mt-2">
            Sem pressão, sem discurso de vendas. Apenas análise e orientação.
          </p>
        </div>
      </Container>
    </section>
  );
};