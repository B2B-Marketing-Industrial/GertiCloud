// src/services/costEstimate.js
const RAW_BASE = import.meta.env.VITE_API_BASE_URL || "";
const BASE = RAW_BASE.replace(/\/+$/, ""); // remove barras finais

// monta a base absoluta quando BASE é relativo (/api)
function baseForURL() {
  return BASE.startsWith("http") ? BASE : window.location.origin + BASE;
}

async function fetchJSON(url, options = {}) {
  const res = await fetch(url, options);
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
  const apikey    = import.meta.env.VITE_PRICE_API_KEY;
  const secretkey = import.meta.env.VITE_PRICE_SEC_KEY;
  if (!apikey || !secretkey) {
    throw new Error("Defina VITE_PRICE_API_KEY e VITE_PRICE_SEC_KEY no .env.*");
  }

  const url = new URL(`${baseForURL()}/restapi/costestimate/zone-list`);
  console.debug("GET", url.toString());

  return fetchJSON(url.toString(), {
    method: "GET",
    headers: {
      Accept: "application/json",
      apikey,
      secretkey,
      seckey: secretkey, // compat (opcional)
    },
  });
}

/* =========================
   CATEGORIAS DE COMPUTE
   (necessárias para RESERVED/BUNDLE)
   >>> ESTE É O BLOCO NOVO <<<
   ========================= */
export async function listComputeCategories() {
  const apikey    = import.meta.env.VITE_PRICE_API_KEY;
  const secretkey = import.meta.env.VITE_PRICE_SEC_KEY;
  if (!apikey || !secretkey) {
    throw new Error("Defina VITE_PRICE_API_KEY e VITE_PRICE_SEC_KEY no .env.*");
  }

  const url = new URL(`${baseForURL()}/restapi/costestimate/compute-category-list`);
  console.debug("GET", url.toString());

  return fetchJSON(url.toString(), {
    method: "GET",
    headers: {
      Accept: "application/json",
      apikey,
      secretkey,
      seckey: secretkey, // compat (opcional)
    },
  });
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

  const apikey    = import.meta.env.VITE_PRICE_API_KEY;
  const secretkey = import.meta.env.VITE_PRICE_SEC_KEY;
  if (!apikey || !secretkey) {
    throw new Error("Defina VITE_PRICE_API_KEY e VITE_PRICE_SEC_KEY no .env.*");
  }

  // normaliza o tipo para o que a API entende
  const type = String(computeOfferingType || "").trim().toUpperCase();
  const apiType = type === "RESERVED" ? "BUNDLE" : (type || "PAY_AS_YOU_GO");

  const url = new URL(`${baseForURL()}/restapi/costestimate/compute-plan-list`);
  url.searchParams.set("zoneUuid", zoneUuid);
  url.searchParams.set("computeOfferingType", apiType);
  if (categoryUuid) url.searchParams.set("categoryUuid", categoryUuid);

  console.debug("GET", url.toString());

  return fetchJSON(url.toString(), {
    method: "GET",
    headers: {
      Accept: "application/json",
      apikey,
      secretkey,
      seckey: secretkey, // compat (opcional)
    },
  });
}
