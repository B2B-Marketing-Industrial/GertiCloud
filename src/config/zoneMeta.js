export const ZONE_META = {
  SP01: { city: "Santana de Parnaíba", state: "SP" },
  SP02: { city: "Osasco",              state: "SP" }, // ou "São Paulo" se preferir
  FTZ01:{ city: "Fortaleza",           state: "CE" },
};

export function formatZoneLabel(z) {
  const meta = ZONE_META[z.name];
 if (meta) return `${z.name} — ${meta.city} — ${meta.state}`; // sem "|"
  return `${z.name}${z.countryName ? ` — ${z.countryName}` : ""}`;
}