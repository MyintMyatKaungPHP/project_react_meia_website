import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import under from "../assets/images/under.gif";
import http from "../services/http";

interface UnderConstructionPageProps {
  showGoHomeButton?: boolean;
}

const UnderConstructionPage: React.FC<UnderConstructionPageProps> = ({
  showGoHomeButton = true,
}) => {
  const [maintenanceMessage, setMaintenanceMessage] = useState<string>(
    "We're working hard to bring you this content. Please check back later."
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMaintenanceMessage = async () => {
      try {
        const { data: json } = await http.get(`/site-settings/homepage`);
        const message = json?.data?.under_maintenance_message;
        if (message) {
          setMaintenanceMessage(message);
        }
      } catch (error) {
        console.error("Failed to fetch maintenance message:", error);
        // Keep default message on error
      } finally {
        setLoading(false);
      }
    };

    fetchMaintenanceMessage();
  }, []);

  return (
    <section className="relative z-10 overflow-hidden bg-white dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap items-center justify-center py-24 md:py-32 lg:py-40">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[650px] text-center">
              <span className="mb-3 inline-block rounded bg-yellow px-3 py-1 text-sm font-medium text-dark">
                Under Construction
              </span>
              <h1 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-5xl">
                This page is coming soon
              </h1>
              <p className="mx-auto mb-8 max-w-[520px] text-base text-body-color dark:text-dark-6">
                {loading ? (
                  <span className="inline-block h-4 w-64 animate-pulse rounded bg-gray-200 dark:bg-dark-2" />
                ) : (
                  maintenanceMessage
                )}
              </p>

              <div className="flex items-center justify-center">
                <img src={under} alt="under construction" className="w-[50%]" />
              </div>

              {showGoHomeButton && (
                <div className="flex items-center justify-center gap-3 py-10">
                  <Link
                    to="/"
                    className="rounded-md bg-green px-6 py-3 text-base font-medium text-white hover:bg-yellow hover:text-dark"
                  >
                    Home Page
                  </Link>
                </div>
              )}

              <div className="flex items-center justify-center gap-3 py-10">
                <Link
                  to="https://www.facebook.com/miea.school"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-green px-6 py-3 text-base font-medium text-white hover:bg-yellow hover:text-dark"
                >
                  Facebook Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderConstructionPage;
