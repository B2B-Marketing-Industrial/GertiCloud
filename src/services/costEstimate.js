// src/services/costEstimate.js

// Base vinda do .env.* (em produção: URL do Worker)
const RAW_BASE = import.meta.env.VITE_API_BASE_URL || "";
const BASE = RAW_BASE.replace(/\/+$/, ""); // remove barra final

// Resolve base absoluta quando BASE for relativo (/api)
function baseForURL() {
  return BASE.startsWith("http") ? BASE : window.location.origin + BASE;
}

// Monta headers automaticamente:
// - Sempre Accept: JSON
// - Injeta apikey/secretkey SOMENTE se existirem no .env (dev)
//   Em produção não precisamos delas (o Worker injeta).
function makeHeaders() {
  const apikey = import.meta.env.VITE_PRICE_API_KEY;
  const secretkey = import.meta.env.VITE_PRICE_SEC_KEY;

  const h = { Accept: "application/json" };
  if (apikey && secretkey) {
    h.apikey = apikey;
    h.secretkey = secretkey;
    h.seckey = secretkey; // compat
  }
  return h;
}

// Fetch com tratamento de erro + headers padrão
async function fetchJSON(url, init = {}) {
  const headers = { ...makeHeaders(), ...(init.headers || {}) };

  const res = await fetch(url, { ...init, headers });
  const text = await res.text();

  let json = null;
  try { json = text ? JSON.parse(text) : null; } catch {}

  if (!res.ok) {
    const msg = json?.message || text || res.statusText;
    throw new Error(`Erro HTTP ${res.status}: ${msg}`);
  }
  return json;
}

/* =========================
   ZONAS
   ========================= */
export async function listZones() {
  const url = new URL(`${baseForURL()}/restapi/costestimate/zone-list`);
  return fetchJSON(url.toString(), { method: "GET" });
}

/* =========================
   CATEGORIAS DE COMPUTE
   (necessárias para RESERVED/BUNDLE)
   ========================= */
export async function listComputeCategories() {
  const url = new URL(`${baseForURL()}/restapi/costestimate/compute-category-list`);
  return fetchJSON(url.toString(), { method: "GET" });
}

/* =========================
   PLANOS (compute-plan-list)
   ========================= */
export async function listComputeOfferingCost({
  zoneUuid,
  computeOfferingType = "PAY_AS_YOU_GO",
  categoryUuid,
} = {}) {
  if (!zoneUuid) throw new Error("zoneUuid é obrigatório");

  // "RESERVED" na UI vira "BUNDLE" na API
  const type = String(computeOfferingType || "").trim().toUpperCase();
  const apiType = type === "RESERVED" ? "BUNDLE" : (type || "PAY_AS_YOU_GO");

  const url = new URL(`${baseForURL()}/restapi/costestimate/compute-plan-list`);
  url.searchParams.set("zoneUuid", zoneUuid);
  url.searchParams.set("computeOfferingType", apiType);
  if (categoryUuid) url.searchParams.set("categoryUuid", categoryUuid);

  return fetchJSON(url.toString(), { method: "GET" });
}
