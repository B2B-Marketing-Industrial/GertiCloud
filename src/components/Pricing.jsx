// src/components/Pricing.jsx
import { useEffect, useMemo, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Spinner,
  Alert,
  Modal,
  Table,
} from "react-bootstrap";

// --- Hooks e Serviços Customizados ---
import { useZones } from "@/hooks/useZones";
import { useComputePlans } from "@/hooks/useComputePlans";
import { listComputeCategories } from "@/services/costEstimate";

// --- Dependências para o Carrossel ---
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// --- Constantes e Funções Utilitárias ---
const HOURS_IN_MONTH = 730;
// URL DA PÁGINA DE CADASTRO
const SIGNUP_URL = "https://cloud.gerti.com.br/signup";
// NÚMERO DO WHATSAPP
const WHATSAPP_NUMBER = "551139959564"; 

const brl = (n) =>
  typeof n === "number"
    ? n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    : "-";

// Função para normalizar os dados da API. (Sem alterações)
function normalizePlan(p) {
  const id = p.uuid || p.id || p.name;
  const name = p.name || id;
  const vcpu = p.core ?? p.vcpu ?? p.cpu;
  const memGb =
    typeof p.memory === "number"
      ? p.memory
      : typeof p.memoryInMb === "number"
      ? p.memoryInMb / 1024
      : undefined;
  const hour =
    [p.pricePerHour, p.hourPrice, p.runningCostHour]
      .map((x) => Number(x))
      .find(Number.isFinite) ??
    (Number(p.instanceRunningCostVcpu || 0) +
      Number(p.instanceRunningCostMemory || 0) || null);
  const month = hour ? hour * HOURS_IN_MONTH : null;
  return { id, name, vcpu, memGb, hour, month, clockSpeed: p.clockSpeed, isCustom: p.isCustom, costVcpu: p.instanceRunningCostVcpu, costMem: p.instanceRunningCostMemory, setup: p.setupCost, raw: p };
}

// --- Componente Principal ---
export default function Pricing() {

  // Estados para controlar os filtros (zonas, tipo de oferta, categorias)
  const { zones, loading: zonesLoading, error: zonesError } = useZones();
  const [zoneUuid, setZoneUuid] = useState("");
  const [offering, setOffering] = useState("PAY_AS_YOU_GO");
  const [categories, setCategories] = useState([]);
  const [categoryUuid, setCategoryUuid] = useState("");
  const [loadingCats, setLoadingCats] = useState(false);
  const [errorCats, setErrorCats] = useState(null);

  // Efeitos para carregar dados (zonas, categorias) - Sem alterações
  useEffect(() => {
    if (!zoneUuid && zones.length) {
      const sp02 = zones.find((z) => z.name === "SP02")?.uuid;
      setZoneUuid(sp02 || zones[0].uuid);
    }
  }, [zones, zoneUuid]);

  useEffect(() => {
    if (offering !== "BUNDLE") {
      setCategories([]);
      setCategoryUuid("");
      setLoadingCats(false);
      setErrorCats(null);
      return;
    }
    let alive = true;
    setLoadingCats(true);
    setErrorCats(null);
    listComputeCategories()
      .then((json) => {
        if (!alive) return;
        const list = Array.isArray(json?.computeCategoryResponse) ? json.computeCategoryResponse : Array.isArray(json?.items) ? json.items : Array.isArray(json) ? json : [];
        const mapped = list.map((c) => ({ uuid: c.uuid || c.id, name: c.name || c.description || "Categoria" }));
        setCategories(mapped);
        setCategoryUuid((prev) => prev || mapped[0]?.uuid || "");
        setLoadingCats(false);
      })
      .catch((err) => {
        if (!alive) return;
        setErrorCats(err);
        setLoadingCats(false);
      });
    return () => { alive = false; };
  }, [offering]);

  // Hook que busca os planos da API com base nos filtros.
  const { data, error, loading } = useComputePlans({ zoneUuid, computeOfferingType: offering, categoryUuid: offering === "BUNDLE" ? categoryUuid : undefined });

  // Memoriza a lista de planos normalizados.
  const plans = useMemo(() => {
    let arr = [];
    if (Array.isArray(data)) arr = data;
    else if (Array.isArray(data?.payAsYouGoOfferingCost)) arr = data.payAsYouGoOfferingCost;
    else if (Array.isArray(data?.bundleOfferingCost)) arr = data.bundleOfferingCost;
    else if (Array.isArray(data?.items)) arr = data.items;
    else if (Array.isArray(data?.results)) arr = data.results;
    return arr.map(normalizePlan);
  }, [data]);

  // Estados para controlar o modal de detalhes.
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);
  const openDetails = (plan) => {
    setSelected(plan);
    setShow(true);
  };
  const closeDetails = () => setShow(false);

  // --- FUNÇÃO ATUALIZADA PARA GERAR O LINK DO WHATSAPP ---

  // Agora ela recebe o objeto do plano como argumento para ser reutilizável.
  const  handleContactSpecialist = (plan) => {
    // 1. Garante que o plano foi passado como argumento.
    if (!plan) return;

    // 2. Monta a mensagem padrão, usando o nome do plano recebido.
    const message = `Olá, tenho interesse em assinar o plano ${plan.name}.`;

    // 3. Codifica a mensagem para ser segura para uso em uma URL.
    const encodedMessage = encodeURIComponent(message);

    // 4. Cria a URL final da API do WhatsApp.
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;

    // 5. Abre o link em uma nova aba.
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };


  // --- Renderização do Componente ---
  return (
    <section id="planos" className="pricing-section position-relative">
      <Container>
        {/* Título e Filtros (sem alterações) */}
        <Row className="text-center mb-4">
          <Col>
            <h2 className="section-title">Planos Flexíveis para o Seu Negócio</h2>
            <p className="lead text-muted">Orçamento em tempo real. Selecione a zona e o modelo.</p>
          </Col>
        </Row>
        <Row className="mb-4 justify-content-center">
            <Col lg={{ span: 10, offset: 1 }}>
                <Form className="d-flex gap-2 flex-wrap justify-content-center">
                    <Row className="g-2 align-items-stretch">
                        <Col xs={12} sm="auto" className="d-flex justify-content-center">
                            <Form.Select value={offering} onChange={(e) => setOffering(e.target.value)} aria-label="Tipo de oferta" className="w-100">
                                <option value="PAY_AS_YOU_GO">PAY AS YOU GO</option>
                                <option value="BUNDLE">RESERVED</option>
                            </Form.Select>
                        </Col>
                        <Col xs={12} sm="auto" className="d-flex justify-content-center">

                            <Form.Select value={zoneUuid} onChange={(e) => setZoneUuid(e.target.value)} aria-label="Zona" disabled={zonesLoading || !!zonesError} className="w-100 w-sm-auto">
                                {zonesLoading && <option>Carregando zonas…</option>}
                                {zonesError && <option disabled>Erro ao carregar zonas</option>}

                                {!zonesLoading && !zonesError && zones.map((z) => (
                                  <option key={z.uuid} value={z.uuid}>
                                 {z.displayLabel ?? `${z.name}${z.countryName ? ` — ${z.countryName}` : ""}`}
                                 </option>
                                  ))}
                                </Form.Select>

                        </Col>
                        {offering === "BUNDLE" && (
                            <Col xs={12} lg={4}>
                                <Form.Select value={categoryUuid} onChange={(e) => setCategoryUuid(e.target.value)} aria-label="Categoria" disabled={loadingCats || !!errorCats} className="w-100">
                                    {loadingCats && <option>Carregando categorias…</option>}
                                    {errorCats && <option disabled>Erro ao carregar categorias</option>}
                                    {!loadingCats && !errorCats && categories.map((c) => (<option key={c.uuid} value={c.uuid}>{c.name}</option>))}
                                </Form.Select>
                            </Col>
                        )}
                    </Row>
                </Form>
            </Col>
        </Row>

        {/* Indicadores de Estado (sem alterações) */}
        {loading && ( <div className="d-flex justify-content-center mb-3"> <Spinner className="me-2" /> Carregando planos… </div> )}
        {error && ( <Alert variant={offering === "BUNDLE" ? "warning" : "danger"} className="text-center"> {offering === "BUNDLE" ? "Não foi possível carregar os planos RESERVED para essa combinação (zona/categoria). Tente outra categoria ou zona." : `Falha ao consultar preços: ${error.message}`} </Alert> )}
        {!loading && !error && plans.length === 0 && ( <Alert variant="warning" className="text-center"> Nenhum plano retornado para esta zona. </Alert> )}

       {/* Carrossel de Planos */}
{!loading && !error && plans.length > 0 && (
  <div className="pricing-swiper-outer">
    <button className="swiper-nav pricing-prev" aria-label="Anterior" />
    <button className="swiper-nav pricing-next" aria-label="Próximo" />

    <Swiper
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      centeredSlides={false}
      loop={false}
      watchOverflow={true}
      spaceBetween={30}
      breakpoints={{
        576:  { slidesPerView: 1, spaceBetween: 20 },
        768:  { slidesPerView: 2, spaceBetween: 30 },
        992:  { slidesPerView: 3, spaceBetween: 30 },
        1200: { slidesPerView: 4, spaceBetween: 30 },
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation = {
          ...(swiper.params.navigation || {}),
          prevEl: '.pricing-prev',
          nextEl: '.pricing-next',
        };
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      className="py-4 pricing-swiper"
    >
      {plans.map((p) => (
        <SwiperSlide key={p.id} className="h-100">
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column">
              <h3 className="fw-bold">{p.name}</h3>
              <div className="text-muted mb-2">
                {p.vcpu != null && <span className="me-3">{p.vcpu} vCPU</span>}
                {Number.isFinite(p.memGb) && (<span>{Number(p.memGb).toFixed(1)} GB RAM</span>)}
              </div>
              <div className="my-2">
                {Number.isFinite(p.hour) ? (
                  <>
                    <div className="fs-1 fw-bold">
                      {brl(p.hour)} <span className="fs-6 text-muted">/h</span>
                    </div>
                    <div className="text-muted">≈ {brl(p.month)} / mês</div>
                  </>
                ) : (
                  <div className="text-muted">Preço por hora não informado</div>
                )}
              </div>
              <div className="text-start mt-2 mb-3">
                <span className="details-link" onClick={() => openDetails(p)} role="button" tabIndex={0}>
                  Detalhes do plano
                </span>
              </div>
              <div className="mt-auto d-flex gap-2">
                <Button
                  as="a"
                  href={SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-100"
                  disabled={!Number.isFinite(p.hour)}
                >
                  Começar Agora!
                </Button>
                <Button variant="outline-secondary" className="w-100" onClick={() => handleContactSpecialist(p)}>
                  Falar com Especialista
                </Button>
              </div>
            </Card.Body>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)}
        
        {/* Modal de Detalhes do Plano */}
        <Modal 
          show={show} 
          onHide={closeDetails} 
          size="lg" 
          centered 
          style={{ zIndex: 9999 }}
        >
            <Modal.Header closeButton>
                <Modal.Title>Detalhes do Plano</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {!selected ? ( <Alert variant="secondary" className="mb-0"> Carregando… </Alert> ) : (
                    <>
                        {/* O conteúdo do corpo do modal permanece o mesmo */}
                        <h5 className="mb-3">{selected.name}</h5>
                        <Row className="mb-3">
                            <Col md={4}><div><strong>vCPU:</strong><br />{selected.vcpu ?? "-"}</div></Col>
                            <Col md={4}><div><strong>RAM:</strong><br />{Number.isFinite(selected.memGb) ? `${Number(selected.memGb).toFixed(1)} GB` : "-"}</div></Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={4}><div><strong>Clock (MHz):</strong><br />{selected.clockSpeed ?? "-"}</div></Col>
                            <Col md={4}><div><strong>Customizável:</strong><br />{selected.isCustom ? "Sim" : "Não"}</div></Col>
                        </Row>
                        <Table bordered hover size="sm" className="mb-0">
                            <tbody>
                                <tr><td style={{ width: 220 }}><strong>Preço por hora</strong></td><td>{selected.hour != null ? `${brl(selected.hour)} /h` : "-"}</td></tr>
                                <tr><td><strong>Previsão mensal</strong></td><td>{selected.month != null ? `${brl(selected.month)} /mês` : "-"}</td></tr>
                                {(selected.costVcpu != null || selected.costMem != null || selected.setup != null) && (
                                    <>
                                        <tr><td colSpan={2}><strong>Componentes de custo</strong></td></tr>
                                        {selected.costVcpu != null && (<tr><td>vCPU (hora)</td><td>{brl(selected.costVcpu)}</td></tr>)}
                                        {selected.costMem != null && (<tr><td>Memória (hora)</td><td>{brl(selected.costMem)}</td></tr>)}
                                        {selected.setup != null && selected.setup > 0 && (<tr><td>Setup (único)</td><td>{brl(selected.setup)}</td></tr>)}
                                    </>
                                )}
                            </tbody>
                        </Table>
                    </>
                )}
            </Modal.Body>
            <Modal.Footer
  className="d-flex justify-content-end align-items-center gap-2 flex-nowrap" // garante linha única
>
  <Button
    variant="secondary"
    onClick={closeDetails}
    className="btn-cta btn-outline-gerti-blue" // padroniza estilo com header
  >
    Fechar
  </Button>

  <Button
    as="a"
    href={SIGNUP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-cta btn-solid-primary" // sólido azul + mesmo hover
    aria-label="Começar Agora!"
  >
    Começar 
    Agora!
  </Button>
</Modal.Footer>
        </Modal>

      </Container>
    </section>
  );
}