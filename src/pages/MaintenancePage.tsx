import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../services/http";
import under from "../assets/images/under.gif";
import miea_logo_hr from "../assets/images/miea_logo_hr.png";
import miea_logo_hr_white from "../assets/images/miea_logo_hr_white.png";

const MaintenancePage: React.FC = () => {
  const [siteName, setSiteName] = useState<string>("MIEA School");
  const [message, setMessage] = useState<string>(
    "MIEA School website is currently undergoing scheduled maintenance. We appreciate your patience."
  );
  const [fading, setFading] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;
    const fetchBasicInfo = async () => {
      try {
        const { data: json } = await http.get(`/site-settings/basic-info`);
        const d = json?.data || {};
        if (!mounted) return;
        if (d?.site_name) setSiteName(String(d.site_name));
        if (d?.maintenance_message) {
          setMessage(String(d.maintenance_message));
        }
      } catch (_e) {
        // ignore; use defaults
      }
    };
    fetchBasicInfo();
    return () => {
      mounted = false;
    };
  }, []);

  // Auto toggle theme every 3 seconds while on this page (without ThemeProvider dependency)
  useEffect(() => {
    const id = setInterval(() => {
      try {
        setFading(true);
        setTimeout(() => {
          const root = document.documentElement;
          if (root) {
            root.classList.toggle("dark");
          }
          setFading(false);
        }, 300);
      } catch {}
    }, 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative z-10 overflow-hidden bg-white dark:bg-dark h-screen">
      <div className="container mx-auto px-4">
        <div
          className={`-mx-4 flex flex-wrap items-center justify-center py-24 md:py-32 lg:py-40 transition-opacity duration-700 ${
            fading ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="w-full px-4 pt-10">
            <div className="flex items-center justify-center mb-10">
              <img
                src={miea_logo_hr}
                alt="logo"
                className="w-[50%] dark:hidden"
              />
              <img
                src={miea_logo_hr_white}
                alt="logo"
                className="w-[50%] hidden dark:block"
              />
            </div>

            <div className="mx-auto max-w-[650px] text-center">
              <span className="mb-3 inline-block rounded bg-yellow px-3 py-1 text-sm font-medium text-dark">
                Maintenance Mode
              </span>
              <h1 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-5xl">
                We’ll be back soon
              </h1>
              <p className="mx-auto mb-8 max-w-[520px] text-base text-body-color dark:text-dark-6">
                {message}
              </p>

              <div className="flex items-center justify-center">
                <img
                  src={under}
                  alt="under construction"
                  className="h-[300px]"
                />
              </div>

              <div className="flex items-center justify-center gap-3 py-5">
                <Link
                  to="https://www.facebook.com/miea.school"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-green px-6 py-3 text-base font-medium text-white hover:bg-yellow hover:text-dark"
                >
                  Go Facebook Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenancePage;
