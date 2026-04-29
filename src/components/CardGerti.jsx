import porqueGerti from "../assets/porque-gerti.png";
import { Card } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";

function CardGerti() {
    return (
        <Card className="p-4 card-audience border-1 overflow-hidden position-relative h-100"
            style={{ minHeight: '400px', maxWidth: "400px" }}>
            <div className="h-100 d-flex flex-column align-items-center justify-content-center p-3">
                <img src={porqueGerti} alt="Ilustração 3D de Suporte Humano e Servidor Cloud" className="img-fluid mb-4" style={{ maxWidth: '400px' }} />
                <ul className="list-unstyled mb-0 d-flex flex-wrap gap-2 justify-content-center w-100 mt-auto">
                    <li className="badge rounded-pill bg-light text-success fw-semibold p-2 px-3 border border-success-subtle d-flex align-items-center gap-2">
                        <CheckCircleFill size={14} /> Migração Assistida e Gratuita
                    </li>
                    <li className="badge rounded-pill bg-light text-primary fw-semibold p-2 px-3 border border-primary-subtle d-flex align-items-center gap-2">
                        <CheckCircleFill size={14} /> Atendimento 24/7 sem Bots
                    </li>
                    <li className="badge rounded-pill bg-light text-muted fw-semibold p-2 px-3 border d-flex align-items-center gap-2">
                        <CheckCircleFill size={14} /> Infraestrutura TIER III no Brasil
                    </li>
                </ul>
            </div>
        </Card>
    )
}

export default CardGerti;