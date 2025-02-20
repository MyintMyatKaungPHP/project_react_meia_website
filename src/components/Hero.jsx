import React, { useState, useEffect } from "react";
import { useMotionValue, useTransform } from "framer-motion";
import Pearson_logo from "../assets/images/Pearson_logo.png";
import Pearson_logo_white from "../assets/images/Pearson_logo_white.png";
import CIE_logo from "../assets/images/CIE_logo.png";
import CIE_logo_white from "../assets/images/CIE_logo_white.png";
import miea_school from "../assets/images/miea_school.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({
        x: event.clientX - window.innerWidth / 2,
        y: event.clientY - window.innerHeight / 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const xMotion = useMotionValue(0);
  const yMotion = useMotionValue(0);

  useEffect(() => {
    xMotion.set(mousePos.x * 0.02);
    yMotion.set(mousePos.y * 0.02);
  }, [mousePos.x, mousePos.y, xMotion, yMotion]);

  const xTransform = useTransform(xMotion, (val) => `${val}px`);
  const yTransform = useTransform(yMotion, (val) => `${val}px`);
  return (
    <>
      <div className="relative bg-white pb-[110px] pt-[30px] dark:bg-dark lg:pt-[80px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <motion.div
                  className="hero-content"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                >
                  <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-green dark:text-green-300 xs:text-[30px] sm:text-[40px] md:text-[45px] lg:text-[38px] xl:text-5xl">
                    MIEA School
                  </h1>
                  <h2 className="mb-8 text-dark dark:text-white xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[40px]">
                    <Typewriter
                      words={["A Level and IGCSE Centre"]}
                      loop={0} // 0 means infinite loop
                      cursor
                      cursorStyle="_"
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </h2>
                  <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6 xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
                    We are committed to providing the best education for
                    students.
                  </p>
                  <ul className="flex flex-wrap items-center">
                    <motion.li whileHover={{ scale: 1.05 }}>
                      <a
                        href="/#"
                        className="inline-flex items-center justify-center rounded-md bg-yellow px-6 py-3 text-center text-base font-medium text-dark hover:text-white hover:bg-green lg:px-7"
                      >
                        Get Started
                      </a>
                    </motion.li>
                  </ul>
                </motion.div>
                <div className="clients pt-16">
                  <h6 className="mb-6 flex items-center text-xs font-normal text-body-color dark:text-dark-6">
                    International Qulifications
                    <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                  </h6>

                  <div className="flex items-center space-x-4">
                    <motion.span
                      className="flex w-full items-center justify-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.8, delay: 0.2 }}
                    >
                      <img
                        src={Pearson_logo}
                        alt="pearson logo"
                        className="h-20 object-contain dark:hidden"
                      />
                      <img
                        src={Pearson_logo_white}
                        alt="pearson logo white"
                        className="h-20 object-contain hidden dark:block"
                      />
                    </motion.span>
                    <motion.span
                      className="flex w-full items-center justify-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.8, delay: 0.4 }}
                    >
                      <img
                        src={CIE_logo}
                        alt="cie logo"
                        className="h-20 object-contain dark:hidden"
                      />
                      <img
                        src={CIE_logo_white}
                        alt="cie logo white"
                        className="h-20 object-contain hidden dark:block"
                      />
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <motion.div
                    className="relative z-10 inline-block pt-11 lg:pt-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                  >
                    <span className="group">
                      <motion.img
                        src={miea_school}
                        alt="hero"
                        className="max-w-full lg:ml-auto transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                      />
                    </span>
                  </motion.div>
                  <motion.span
                    className="absolute -bottom-8 -left-8 z-[-1]"
                    style={{ x: xTransform, y: yTransform }}
                  >
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#21ad5c" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#21ad5c" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#21ad5c" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#21ad5c" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#21ad5c" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#21ad5c" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#21ad5c" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#21ad5c" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#21ad5c" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#21ad5c" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#21ad5c" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#21ad5c" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#21ad5c" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#21ad5c" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#21ad5c" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#21ad5c" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#21ad5c" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#21ad5c" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#21ad5c" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#21ad5c" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#21ad5c" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#21ad5c" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#21ad5c" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#21ad5c" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#21ad5c" />
                    </svg>
                  </motion.span>
                  <motion.span
                    className="absolute -top-8 -right-8 z-[-1]"
                    style={{ x: xTransform, y: yTransform }}
                  >
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#f5c115" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#f5c115" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#f5c115" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#f5c115" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#f5c115" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#f5c115" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#f5c115" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#f5c115" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#f5c115" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#f5c115" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#f5c115" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#f5c115" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#f5c115" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#f5c115" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#f5c115" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#f5c115" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#f5c115" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#f5c115" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#f5c115" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#f5c115" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#f5c115" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#f5c115" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#f5c115" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#f5c115" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#f5c115" />
                    </svg>
                  </motion.span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
