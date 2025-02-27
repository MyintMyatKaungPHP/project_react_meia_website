import miea_logo_hr from "../assets/images/miea_logo_hr.png";
import miea_logo_hr_white from "../assets/images/miea_logo_hr_white.png";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-20 dark:bg-dark">
      <div className="container mx-auto">
        {/* <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-green">
              Contact Details
            </span>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
              Warmly welcome to contact us
            </h2>
          </div>
        </div> */}
        <div className="-mx-4 mb-16 flex flex-wrap bg-green px-5 py-14 sm:p-14">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-5 flex lg:mb-0">
              <div className="mr-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 4.7998H4.00001C2.30001 4.7998 0.850006 6.1998 0.850006 7.9498V24.1498C0.850006 25.8498 2.25001 27.2998 4.00001 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.85001 7.0498C3.90001 7.0498 3.95001 7.0498 4.00001 7.0498H28ZM28 24.9498H4.00001C3.50001 24.9498 3.10001 24.5498 3.10001 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-white">Email</h5>
                <p className="text-base text-white/70 hover:text-white">
                  <a href="mailto:info@miea.school">info@miea.school</a>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-5 flex lg:mb-0">
              <div className="mr-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_948_5886)">
                    <path
                      d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.2 22.8499C5.85 19.4999 3.25 15.7499 1.9 12.2999C0.4 8.59994 0.55 5.54994 2.3 3.84994C2.35 3.79994 2.45 3.74994 2.5 3.69994L6.7 1.19994C7.75 0.599942 9.1 0.899942 9.8 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.8 5.54994C2.85 6.59994 2.9 8.74994 4 11.4999C5.25 14.6499 7.65 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.9 14.1499 8.5 11.9499C7.85 10.8999 8.1 9.54994 9.1 8.84994L10.9 7.59994V7.54994L7.95 3.14994C7.95 3.09994 7.9 3.09994 7.85 3.14994L3.8 5.54994Z"
                      fill="white"
                    />
                    <path
                      d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                      fill="white"
                    />
                    <path
                      d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_948_5886">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-white">
                  Phone Numbers
                </h5>
                <p className="text-base text-white/70">09 9585 94545</p>
                <p className="text-base text-white/70">09 7767 94545</p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-5 flex lg:mb-0">
              <div className="mr-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.2 11.0498C20.2 8.5498 18.2 6.5498 15.7 6.5498C13.2 6.5498 11.2 8.5498 11.2 11.0498C11.2 13.5498 13.2 15.5498 15.7 15.5498C18.2 15.5498 20.2 13.5498 20.2 11.0498ZM13.45 11.0498C13.45 9.7998 14.45 8.7998 15.7 8.7998C16.95 8.7998 17.95 9.7998 17.95 11.0498C17.95 12.2998 16.95 13.2998 15.7 13.2998C14.45 13.2998 13.45 12.2998 13.45 11.0498Z"
                    fill="white"
                  />
                  <path
                    d="M31.1 29.4499L29.05 20.1999C28.95 19.7499 28.6 19.3999 28.1 19.3499L22.15 18.4999C24.05 15.7999 25.6 12.9499 25.6 10.7499C25.6 5.4499 21.15 1.1499 15.7 1.1499C10.25 1.1499 5.8 5.4499 5.8 10.7499C5.8 12.9499 7.35 15.7999 9.25 18.4999L3.25 19.3499C2.75 19.3999 2.4 19.7999 2.3 20.2999L0.900001 29.5499C0.850001 29.9499 1 30.3499 1.3 30.5999C1.6 30.8499 2 30.9499 2.4 30.7999L9 28.4999L15.65 30.7499C15.9 30.8499 16.15 30.8499 16.35 30.7499L23 28.4999L29.65 30.7499C29.75 30.7999 29.9 30.7999 30 30.7999C30.25 30.7999 30.55 30.6999 30.75 30.4999C31.05 30.2999 31.2 29.8499 31.1 29.4499ZM15.7 3.3999C19.95 3.3999 23.35 6.6999 23.35 10.7499C23.35 13.4999 19.4 18.7499 15.7 22.7999C12 18.7999 8.05 13.4999 8.05 10.7499C8.05 6.6999 11.45 3.3999 15.7 3.3999ZM23.35 26.2499C23.1 26.1499 22.85 26.1499 22.65 26.2499L16 28.4999L9.35 26.2499C9.1 26.1499 8.85 26.1499 8.65 26.2499L3.4 28.0499L4.4 21.4999L10.75 20.5499C11.9 21.9999 13.1 23.3499 14.05 24.3999C14.45 24.8499 15.05 25.0999 15.65 25.0999C16.25 25.0999 16.85 24.8499 17.25 24.3999C18.2 23.3499 19.4 21.9999 20.55 20.5499L27.05 21.4999L28.5 27.9999L23.35 26.2499Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-white">
                  School Address
                </h5>
                <p className="text-base text-white/70">
                  No. (2A,520-C3), <br />
                  Shwe Taung Gone Yeik Thar St, <br />
                  Shwe Gone Taing, Bahan Township, Yangon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-stroke py-8 dark:border-dark-3">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-3/12 xl:w-1/3">
              <div className="w-full py-3 text-center lg:text-left">
                <a href="" className="inline-block max-w-[260px]">
                  <img
                    src={miea_logo_hr}
                    alt="logo"
                    className="max-w-full dark:hidden"
                  />
                  <img
                    src={miea_logo_hr_white}
                    alt="logo"
                    className="max-w-full hidden dark:block"
                  />
                </a>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-5/12 xl:w-1/3">
              <div className="py-3 text-center">
                <p className="text-base text-body-color dark:text-dark-6">
                  © {new Date().getFullYear()} MIEA School | All Rights Reserved
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-1/3">
              <div className="w-full py-3">
                <div className="-mx-3 flex items-center justify-center lg:justify-end">
                  <a
                    href="https://www.facebook.com/mieaschool"
                    className="px-3 text-dark-7 hover:text-primary dark:text-white/40"
                  >
                    <FaFacebook className="text-blue text-4xl" />
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
