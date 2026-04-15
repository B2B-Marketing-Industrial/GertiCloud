import { Button, Card, } from "react-bootstrap";
import { ArrowRight, CheckCircleFill } from "react-bootstrap-icons";

function CardAudience({ item }) {
    const phoneNumber = "551139959564";

    const message = `Olá! Tenho interesse no combo "${item.title}". Gostaria de mais informações.`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <Card className="border-1 p-3 d-flex flex-column h-100 card-audience position-relative">
            <Card.Header className="bg-transparent border-0 p-0">
                <Card.Title className="fw-semibold mb-2">{item.title}</Card.Title>
                <Card.Text className="text-muted small mb-0">{item.description}</Card.Text>
            </Card.Header>
            <Card.Body className="d-flex flex-column p-0">
                <Card.Subtitle className="my-3">
                    <span className="badge bg-light text-primary fw-semibold">{item.subtitle}</span>
                </Card.Subtitle>
                <ul className="list-unstyled mb-4 small">
                    {item.listItems.map((info, i) => (
                        <li key={i} className="mb-2 d-flex align-items-center gap-2"><CheckCircleFill className="text-success flex-shrink-0" size={18} /><span>{info}</span></li>
                    ))}
                </ul>
                <Button variant="primary" className="mt-auto d-flex align-items-center justify-content-center gap-2 w-100" href={whatsappLink} target="_blank">{item.cta}<ArrowRight size={16} /></Button>
            </Card.Body>
        </Card>
    );
}

export default CardAudience;