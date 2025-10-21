import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import http from "../services/http";
import MaintenancePage from "../pages/MaintenancePage";

const MaintenanceOnlyRoute: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      try {
        setLoading(true);
        // Env override still allows access
        const envForce =
          String(
            (import.meta as any).env?.VITE_MAINTENANCE_MODE || "false"
          ).toLowerCase() === "true";
        if (envForce) {
          if (mounted) setAllowed(true);
          return;
        }
        const { data: json } = await http.get(`/site-settings/basic-info`);
        const d = json?.data || {};
        if (mounted) setAllowed(Boolean(d.maintenance_mode));
      } catch (_e) {
        // On error, do not allow
        if (mounted) setAllowed(false);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    run();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return null;

  return allowed ? <MaintenancePage /> : <Navigate to="/" replace />;
};

export default MaintenanceOnlyRoute;
