import miea_logo_hr_green from "../assets/images/miea_logo_hr_green.png";
import {
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { API_CONFIG } from "../config/api";
import http from "../services/http";
import { Link, useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const location = useLocation();
  const [footerLogoUrl, setFooterLogoUrl] = useState<string | null>(null);
  const [copyrightText, setCopyrightText] = useState<string>(
    `© ${new Date().getFullYear()} MIEA School | All Rights Reserved`
  );
  const [description, setDescription] = useState<string | null>(null);
  const [isLoadingFooter, setIsLoadingFooter] = useState<boolean>(true);
  const [contactEmail, setContactEmail] = useState<string | null>(null);
  const [contactPhone1, setContactPhone1] = useState<string | null>(null);
  const [contactPhone2, setContactPhone2] = useState<string | null>(null);
  const [contactAddress, setContactAddress] = useState<string | null>(null);
  const DISABLE_FALLBACK =
    String(
      (import.meta as any).env?.VITE_DISABLE_FALLBACK || "false"
    ).toLowerCase() === "true";

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        setIsLoadingFooter(true);
        const { data: json } = await http.get(`/site-settings/footer-info`);
        const data = json?.data;
        const assetBase = API_CONFIG.BASE_URL.replace(/\/api\/?$/, "");
        if (data?.logo) setFooterLogoUrl(`${assetBase}${data.logo}`);
        if (data?.description) setDescription(String(data.description));
        if (data?.copyright_text) setCopyrightText(String(data.copyright_text));

        // Contact Information
        const { data: contactJson } = await http.get(
          `/site-settings/contact-info`
        );
        const c = contactJson?.data;
        if (c) {
          if (c.email) setContactEmail(String(c.email));
          if (c.phone_1) setContactPhone1(String(c.phone_1));
          if (c.phone_2) setContactPhone2(String(c.phone_2));
          if (c.address) setContactAddress(String(c.address));
        }
      } catch (e) {
        // ignore
      } finally {
        setIsLoadingFooter(false);
      }
    };
    fetchFooter();
  }, []);

  return (
    <footer className="relative z-10">
      {location.pathname !== "/contact" && (
        <div className="w-full bg-green px-5 py-14 sm:p-14 dark:bg-yellow dark:text-dark">
          <div className="container mx-auto flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-5 flex lg:mb-0">
                <div className="mr-4 flex items-center h-full">
                  <FaEnvelope className="text-white text-3xl dark:text-dark" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white dark:text-dark">
                    Email
                  </h5>
                  <p className="text-base text-white/70 hover:text-white dark:text-dark dark:hover:text-white">
                    {isLoadingFooter ? (
                      <span className="animate-pulse">Loading...</span>
                    ) : contactEmail ? (
                      <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                    ) : (
                      <span>info@miea.school</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-5 flex lg:mb-0">
                <div className="mr-4 flex items-center h-full">
                  <FaPhone className="text-white text-3xl dark:text-dark" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white dark:text-dark">
                    Phone Numbers
                  </h5>
                  <p className="text-base text-white/70 dark:text-dark">
                    {isLoadingFooter ? (
                      <span className="animate-pulse">Loading...</span>
                    ) : (
                      contactPhone1 ?? "09 9585 94545"
                    )}
                  </p>
                  <p className="text-base text-white/70 dark:text-dark">
                    {isLoadingFooter ? (
                      <span className="animate-pulse">Loading...</span>
                    ) : (
                      contactPhone2 ?? "09 7767 94545"
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-5 flex lg:mb-0">
                <div className="mr-4 flex items-center h-full">
                  <FaMapMarkerAlt className="text-white text-3xl dark:text-dark" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white dark:text-dark">
                    School Address
                  </h5>
                  <p className="text-base text-white/70 dark:text-dark">
                    {isLoadingFooter ? (
                      <span className="animate-pulse">Loading...</span>
                    ) : contactAddress ? (
                      <span>{contactAddress}</span>
                    ) : (
                      <>
                        No. (2A,520-C3), <br />
                        Shwe Taung Gone Yeik Thar St, <br />
                        Shwe Gone Taing, Bahan Township, Yangon
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="py-3 bg-[#005e16]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-center lg:justify-start">
            <div className="w-full px-4 lg:w-3/12 xl:w-1/3">
              <div className="w-30 py-3 text-center lg:text-left">
                <Link to="/" className="inline-block max-w-[260px]">
                  {isLoadingFooter ? (
                    <div className="h-8 w-40 rounded bg-white/30 dark:bg-dark-2 animate-pulse" />
                  ) : (
                    <img
                      src={
                        footerLogoUrl ??
                        (DISABLE_FALLBACK ? "" : miea_logo_hr_green)
                      }
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!DISABLE_FALLBACK) target.src = miea_logo_hr_green;
                        else target.style.display = "none";
                      }}
                      alt="logo"
                      className="w-[65%] mx-auto lg:mx-0"
                    />
                  )}
                </Link>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-5/12 xl:w-1/3">
              <div className="py-3 text-center">
                <p className="text-base text-white">{copyrightText}</p>
                {description && (
                  <p className="mt-1 text-sm text-white/80">{description}</p>
                )}
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-1/3">
              <div className="w-full py-3">
                <div className="-mx-3 flex items-center justify-center lg:justify-end">
                  <a
                    href="https://www.facebook.com/mieaschool"
                    className="px-3"
                  >
                    <FaFacebook className="text-white text-4xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
