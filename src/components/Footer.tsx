import miea_logo_hr_green from "../assets/images/miea_logo_hr_green.png";
import miea_logo_hr_white from "../assets/images/miea_logo_hr_white.png";
import {
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-white pt-20 dark:bg-dark">
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
                  <a href="mailto:info@miea.school">info@miea.school</a>
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
                  09 9585 94545
                </p>
                <p className="text-base text-white/70 dark:text-dark">
                  09 7767 94545
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
                  No. (2A,520-C3), <br />
                  Shwe Taung Gone Yeik Thar St, <br />
                  Shwe Gone Taing, Bahan Township, Yangon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 bg-[#005e16]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-center lg:justify-start">
            <div className="w-full px-4 lg:w-3/12 xl:w-1/3">
              <div className="w-30 py-3 text-center lg:text-left">
                <a href="" className="inline-block max-w-[260px]">
                  <img
                    src={miea_logo_hr_green}
                    alt="logo"
                    className="w-[65%] mx-auto lg:mx-0"
                  />
                </a>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-5/12 xl:w-1/3">
              <div className="py-3 text-center">
                <p className="text-base text-white">
                  © {new Date().getFullYear()} MIEA School | All Rights Reserved
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-1/3">
              <div className="w-full py-3">
                <div className="-mx-3 flex items-center justify-center lg:justify-end">
                  <a
                    href="https://www.facebook.com/mieaschool"
                    className="px-3"
                  >
                    <FaFacebook className="text-white text-4xl hover:text-blue" />
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
