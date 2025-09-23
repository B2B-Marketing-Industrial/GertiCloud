// src/hooks/useZones.js
import { useEffect, useState } from "react";
import { listZones } from "@/services/costEstimate";
import { formatZoneLabel } from "@/config/zoneMeta";

export function useZones() {
  const [data, setData] = useState(null);
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(null);

    listZones()
      .then((json) => {
        if (!alive) return;
        setData(json);
        const list = Array.isArray(json?.listZoneResponse) ? json.listZoneResponse : [];
        setZones(list.map(z => {
          const base = {
          uuid: z.uuid || z.id,
          name: z.name,
          countryName: z.countryName,
          isActive: z.isActive,
         imageFlag: z.imageFlag,
         };
         return { ...base, displayLabel: formatZoneLabel(base) };
       }));
        setLoading(false);
      })
      .catch((err) => {
        if (!alive) return;
        setError(err);
        setLoading(false);
      });

    return () => { alive = false; };
  }, []);

  return { zones, data, loading, error };
}
