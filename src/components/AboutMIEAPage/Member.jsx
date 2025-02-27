import React from "react";
import Adtive_logo from "../../assets/images/Adtive_logo.png";
import Adtive_logo_white from "../../assets/images/Adtive_logo_white.png";
import MIEA_logo from "../../assets/images/MIEA_logo.png";
import { motion } from "framer-motion";
const Member = () => {
  return (
    <>
      <section className="relative pt-[50px] pb-[110px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <motion.div
              className="w-full px-4 lg:w-1/2"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap -mx-2 sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="">
                    <img
                      src={Adtive_logo}
                      alt="about image"
                      className="object-cover object-center w-[90%] dark:hidden"
                    />
                    <img
                      src={Adtive_logo_white}
                      alt="about image"
                      className="object-cover object-center w-[90%] hidden dark:block"
                    />
                  </div>
                </div>
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="">
                    <img
                      src={MIEA_logo}
                      alt="about image"
                      className="object-cover object-center w-[90%]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full px-4 lg:w-1/2"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px]/[48px]">
                  Member of Adtive Myanmar Company Limited
                </h2>
                <p className="mb-10 text-base leading-relaxed dark:text-dark-6 text-body-color">
                  MIEA School is a member of Adtive Myanmar Company Limited,
                  which provides education and training services in Yangon,
                  Myanmar.
                </p>
                <div className="bg-green dark:bg-yellow relative z-10 mb-4 flex items-center justify-center overflow-hidden py-12 px-6 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                  <div className="mr-4">
                    <span className="block text-7xl font-extrabold text-white dark:text-black animate-bounce">
                      {new Date().getFullYear() - 2019}
                    </span>
                  </div>
                  <div>
                    <span className="block text-2xl font-medium text-white dark:text-black">
                      years of experience
                    </span>
                    <span className="block text-2xl font-medium text-white dark:text-black">
                      from 2019 - {new Date().getFullYear()} January
                    </span>
                  </div>
                  <div>
                    <span className="absolute top-0 left-0 -z-10">
                      <svg
                        width="106"
                        height="144"
                        viewBox="0 0 106 144"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.1"
                          x="-67"
                          y="47.127"
                          width="113.378"
                          height="131.304"
                          transform="rotate(-42.8643 -67 47.127)"
                          fill="url(#paint0_linear_1416_214)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1416_214"
                            x1="-10.3111"
                            y1="47.127"
                            x2="-10.3111"
                            y2="178.431"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="white" />
                            <stop
                              offset="1"
                              stop-color="white"
                              stop-opacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute top-0 right-0 -z-10">
                      <svg
                        width="130"
                        height="97"
                        viewBox="0 0 130 97"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.1"
                          x="0.86792"
                          y="-6.67725"
                          width="155.563"
                          height="140.614"
                          transform="rotate(-42.8643 0.86792 -6.67725)"
                          fill="url(#paint0_linear_1416_215)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1416_215"
                            x1="78.6495"
                            y1="-6.67725"
                            x2="78.6495"
                            y2="133.937"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="white" />
                            <stop
                              offset="1"
                              stop-color="white"
                              stop-opacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute bottom-0 right-0 -z-10">
                      <svg
                        width="175"
                        height="104"
                        viewBox="0 0 175 104"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.1"
                          x="175.011"
                          y="108.611"
                          width="101.246"
                          height="148.179"
                          transform="rotate(137.136 175.011 108.611)"
                          fill="url(#paint0_linear_1416_216)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1416_216"
                            x1="225.634"
                            y1="108.611"
                            x2="225.634"
                            y2="256.79"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="white" />
                            <stop
                              offset="1"
                              stop-color="white"
                              stop-opacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Member;
