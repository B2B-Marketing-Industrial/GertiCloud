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
import { useZones } from "@/hooks/useZones";
import { useComputePlans } from "@/hooks/useComputePlans";
// NOVO: vamos buscar categorias quando o usuário escolher RESERVED/BUNDLE
import { listComputeCategories } from "@/services/costEstimate";

const HOURS_IN_MONTH = 730;
const brl = (n) =>
  typeof n === "number"
    ? n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    : "-";

// adapta cada item retornado pela API para o card
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

  // tenta campos comuns de preço/hora; fallback para soma de custos de vCPU+Mem
  const hour =
    [p.pricePerHour, p.hourPrice, p.runningCostHour]
      .map((x) => Number(x))
      .find(Number.isFinite) ??
    (Number(p.instanceRunningCostVcpu || 0) +
      Number(p.instanceRunningCostMemory || 0) || null);

  const month = hour ? hour * HOURS_IN_MONTH : null;

  return {
    id,
    name,
    vcpu,
    memGb,
    hour,
    month,
    // extras úteis pro modal
    clockSpeed: p.clockSpeed,
    isCustom: p.isCustom,
    costVcpu: p.instanceRunningCostVcpu,
    costMem: p.instanceRunningCostMemory,
    setup: p.setupCost,
    raw: p, // mantemos o bruto pra debugging opcional
  };
}

export default function Pricing() {
  // 1) zonas para o dropdown
  const { zones, loading: zonesLoading, error: zonesError } = useZones();
  const [zoneUuid, setZoneUuid] = useState("");
   // tipo de oferta (PAYG ou RESERVED/BUNDLE)
  const [offering, setOffering] = useState("PAY_AS_YOU_GO");
  // NOVO: estado para categorias (usado apenas quando offering === "BUNDLE")
  const [categories, setCategories] = useState([]);
  const [categoryUuid, setCategoryUuid] = useState("");
  const [loadingCats, setLoadingCats] = useState(false);
  const [errorCats, setErrorCats] = useState(null);

  // define um default (prioriza SP02; se não existir, pega a primeira)
  useEffect(() => {
    if (!zoneUuid && zones.length) {
      const sp02 = zones.find((z) => z.name === "SP02")?.uuid;
      setZoneUuid(sp02 || zones[0].uuid);
    }
  }, [zones, zoneUuid]);

  // 👇 NOVO: quando o usuário selecionar RESERVED (BUNDLE), carregamos as categorias
  useEffect(() => {
    if (offering !== "BUNDLE") {
      // limpamos quando volta para PAYG
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

        // mapeia a resposta possível do backend (ajuste se a sua chave for outra)
        const list = Array.isArray(json?.computeCategoryResponse)
          ? json.computeCategoryResponse
          : Array.isArray(json?.items)
          ? json.items
          : Array.isArray(json)
          ? json
          : [];

        const mapped = list.map((c) => ({
          uuid: c.uuid || c.id,
          name: c.name || c.description || "Categoria",
        }));

        setCategories(mapped);
        // seleciona automaticamente a primeira categoria, se houver
        setCategoryUuid((prev) => prev || mapped[0]?.uuid || "");
        setLoadingCats(false);
      })
      .catch((err) => {
        if (!alive) return;
        setErrorCats(err);
        setLoadingCats(false);
      });

    return () => {
      alive = false;
    };
  }, [offering]);

  // 2) preços para a zona selecionada
  const { data, error, loading } = useComputePlans({
    zoneUuid,
    computeOfferingType: offering, // aqui vai "PAY_AS_YOU_GO" ou "BUNDLE"
     categoryUuid: offering === "BUNDLE" ? categoryUuid : undefined, // NOVO
  });

  // 3) normaliza resposta para lista de planos
  const plans = useMemo(() => {
    let arr = [];
    if (Array.isArray(data)) arr = data;
    else if (Array.isArray(data?.payAsYouGoOfferingCost)) arr = data.payAsYouGoOfferingCost;
    else if (Array.isArray(data?.bundleOfferingCost)) arr = data.bundleOfferingCost;
    else if (Array.isArray(data?.items)) arr = data.items;
    else if (Array.isArray(data?.results)) arr = data.results;
    return arr.map(normalizePlan);
  }, [data]);

  // 4) Modal de detalhes
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);
  const openDetails = (plan) => {
    setSelected(plan);
    setShow(true);
  };
  const closeDetails = () => setShow(false);

  return (
    <section className="pricing-section py-5 bg-light">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="section-title">Planos Flexíveis para o Seu Negócio</h2>
            <p className="lead text-muted">
              Orçamento em tempo real. Selecione a zona e o modelo.
            </p>
          </Col>
        </Row>

        {/* Filtros */}
       <Row className="mb-4 justify-content-center">
        
  {/* Container dos selects centralizado. Em telas ≥lg vai ocupar 10 colunas e ficar no centro */}
  <Col lg={{ span: 10, offset: 1 }}>
    <Form className="d-flex gap-2 flex-wrap justify-content-center">

      {/* Grid com 2–3 colunas: lado a lado no desktop (lg) e empilhadas no mobile */}
      <Row className="g-2 align-items-stretch">

        {/* 1) Tipo de oferta (PAYG / RESERVED) */}
        <Col xs={12} sm="auto" className="d-flex justify-content-center">
          <Form.Select
            value={offering}
            onChange={(e) => setOffering(e.target.value)}
            aria-label="Tipo de oferta"
            className="w-100"
          >
            <option value="PAY_AS_YOU_GO">PAY AS YOU GO</option>
            <option value="BUNDLE">RESERVED</option>
          </Form.Select>
        </Col>

        {/* 2) Zona */}
        <Col xs={12} sm="auto" className="d-flex justify-content-center">
          <Form.Select
            value={zoneUuid}
            onChange={(e) => setZoneUuid(e.target.value)}
            aria-label="Zona"
            disabled={zonesLoading || !!zonesError}
             className="w-100 w-sm-auto"
          >
            {zonesLoading && <option>Carregando zonas…</option>}
            {zonesError && <option disabled>Erro ao carregar zonas</option>}
            {!zonesLoading &&
              !zonesError &&
              zones.map((z) => (
                <option key={z.uuid} value={z.uuid}>
                  {z.name} — {z.countryName}
                </option>
              ))}
          </Form.Select>
        </Col>

        {/* 3) Categoria (apenas quando for RESERVED/BUNDLE) */}
        {offering === "BUNDLE" && (
          <Col xs={12} lg={4}>
            <Form.Select
              value={categoryUuid}
              onChange={(e) => setCategoryUuid(e.target.value)}
              aria-label="Categoria"
              disabled={loadingCats || !!errorCats}
              className="w-100"
            >
              {loadingCats && <option>Carregando categorias…</option>}
              {errorCats && <option disabled>Erro ao carregar categorias</option>}
              {!loadingCats &&
                !errorCats &&
                categories.map((c) => (
                  <option key={c.uuid} value={c.uuid}>
                    {c.name}
                  </option>
                ))}
            </Form.Select>
          </Col>
        )}
      </Row>
    </Form>
  </Col>
</Row>

          {/* Estados */}
        {loading && (
          <div className="d-flex justify-content-center mb-3">
            <Spinner className="me-2" /> Carregando planos…
          </div>
        )}

        {/* mensagem de erro mais amigável quando for RESERVED */}
        {error && (
          <Alert
            variant={offering === "BUNDLE" ? "warning" : "danger"}
            className="text-center"
          >
            {offering === "BUNDLE"
              ? "Não foi possível carregar os planos RESERVED para essa combinação (zona/categoria). Tente outra categoria ou zona."
              : `Falha ao consultar preços: ${error.message}`}
          </Alert>
        )}

        {!loading && !error && plans.length === 0 && (
          <Alert variant="warning" className="text-center">
            Nenhum plano retornado para esta zona.
          </Alert>
        )}

        {/* Cards – 4 por linha no desktop (lg=3) */}
        <Row className="g-4">
          {plans.map((p) => (
            <Col xs={12} sm={6} md={4} lg={3} key={p.id}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <div className="text-uppercase small text-muted">{p.id}</div>
                  <h3 className="fw-bold">{p.name}</h3>

                  <div className="text-muted mb-2">
                    {p.vcpu != null && <span className="me-3">{p.vcpu} vCPU</span>}
                    {Number.isFinite(p.memGb) && (
                      <span>{Number(p.memGb).toFixed(1)} GB RAM</span>
                    )}
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

                  <div className="mt-auto d-flex gap-2">
                    <Button className="w-100">Assinar</Button>
                    <Button
                      variant="outline-secondary"
                      className="w-100"
                      onClick={() => openDetails(p)}
                    >
                      Detalhes
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Modal de Detalhes */}
        <Modal show={show} onHide={closeDetails} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Detalhes do Plano</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {!selected ? (
              <Alert variant="secondary" className="mb-0">
                Carregando…
              </Alert>
            ) : (
              <>
                <h5 className="mb-3">{selected.name}</h5>

                <Row className="mb-3">
                  <Col md={4}>
                    <div>
                      <strong>ID:</strong>
                      <br />
                      {selected.id}
                    </div>
                  </Col>
                  <Col md={4}>
                    <div>
                      <strong>vCPU:</strong>
                      <br />
                      {selected.vcpu ?? "-"}
                    </div>
                  </Col>
                  <Col md={4}>
                    <div>
                      <strong>RAM:</strong>
                      <br />
                      {Number.isFinite(selected.memGb)
                        ? `${Number(selected.memGb).toFixed(1)} GB`
                        : "-"}
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={4}>
                    <div>
                      <strong>Clock (MHz):</strong>
                      <br />
                      {selected.clockSpeed ?? "-"}
                    </div>
                  </Col>
                  <Col md={4}>
                    <div>
                      <strong>Customizável:</strong>
                      <br />
                      {selected.isCustom ? "Sim" : "Não"}
                    </div>
                  </Col>
                </Row>

                <Table bordered hover size="sm" className="mb-0">
                  <tbody>
                    <tr>
                      <td style={{ width: 220 }}>
                        <strong>Preço por hora</strong>
                      </td>
                      <td>{selected.hour != null ? `${brl(selected.hour)} /h` : "-"}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Previsão mensal</strong>
                      </td>
                      <td>
                        {selected.month != null ? `${brl(selected.month)} /mês` : "-"}
                      </td>
                    </tr>

                    {(selected.costVcpu != null ||
                      selected.costMem != null ||
                      selected.setup != null) && (
                      <>
                        <tr>
                          <td colSpan={2}>
                            <strong>Componentes de custo</strong>
                          </td>
                        </tr>
                        {selected.costVcpu != null && (
                          <tr>
                            <td>vCPU (hora)</td>
                            <td>{brl(selected.costVcpu)}</td>
                          </tr>
                        )}
                        {selected.costMem != null && (
                          <tr>
                            <td>Memória (hora)</td>
                            <td>{brl(selected.costMem)}</td>
                          </tr>
                        )}
                        {selected.setup != null && selected.setup > 0 && (
                          <tr>
                            <td>Setup (único)</td>
                            <td>{brl(selected.setup)}</td>
                          </tr>
                        )}
                      </>
                    )}
                  </tbody>
                </Table>
              </>
            )}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={closeDetails}>
              Fechar
            </Button>
            <Button variant="primary">Assinar</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
}