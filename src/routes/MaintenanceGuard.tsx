import React, { useEffect, useState } from "react";
import http from "../services/http";
import { API_CONFIG } from "../config/api";
import MaintenancePage from "../pages/MaintenancePage";

interface Props {
  children: React.ReactNode;
}

const MaintenanceGuard: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isMaintenance, setIsMaintenance] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    const fetchFlag = async () => {
      try {
        setLoading(true);
        const { data: json } = await http.get(`/site-settings/homepage`);
        const d = json?.data || {};
        if (isMounted) setIsMaintenance(Boolean(d.maintenance_mode));
      } catch (_e) {
        // On API failure, do not block the app; assume not maintenance
        if (isMounted) setIsMaintenance(false);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchFlag();
    return () => {
      isMounted = false;
    };
  }, []);

  // Optional env override still respected if present
  const ENV_FORCE =
    String(
      (import.meta as any).env?.VITE_MAINTENANCE_MODE || "false"
    ).toLowerCase() === "true";
  const showMaintenance = ENV_FORCE || isMaintenance;

  if (loading) {
    return (
      <section className="relative z-10 overflow-hidden bg-white dark:bg-dark">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap items-center justify-center py-24 md:py-32 lg:py-40">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[650px] text-center">
                <div className="mx-auto h-6 w-48 animate-pulse rounded bg-gray-200 dark:bg-dark-2" />
                <div className="mx-auto mt-4 h-4 w-96 animate-pulse rounded bg-gray-200 dark:bg-dark-2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (showMaintenance) {
    return <MaintenancePage />;
  }

  return <>{children}</>;
};

export default MaintenanceGuard;
