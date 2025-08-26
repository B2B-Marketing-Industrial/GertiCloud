// src/hooks/useComputePlans.js
import { useEffect, useState } from "react";
import { listComputeOfferingCost } from "@/services/costEstimate";

export function useComputePlans({ zoneUuid, computeOfferingType = "PAY_AS_YOU_GO", categoryUuid } = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!zoneUuid) return;
    let alive = true;
    setLoading(true);
    setError(null);

    listComputeOfferingCost({ zoneUuid, computeOfferingType, categoryUuid })
      .then(json => { if (alive) console.debug("listComputeOfferingCost JSON:", json);
        { setData(json); setLoading(false); } })
      .catch(err => { if (alive) { setError(err); setLoading(false); } });

    return () => { alive = false; };
  }, [zoneUuid, computeOfferingType, categoryUuid]); // ← deps explícitas

  return { data, error, loading };
}
