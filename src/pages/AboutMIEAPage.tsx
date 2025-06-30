import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import MIEA_logo_circle_t from "../assets/images/MIEA_logo_circle_t.png";
import Pearson_logo_white from "../assets/images/Pearson_logo_white.png";
import CIE_logo_white from "../assets/images/CIE_logo_white.png";
import Adtive_logo from "../assets/images/Adtive_logo.png";
import Adtive_logo_white from "../assets/images/Adtive_logo_white.png";
import MIEA_logo from "../assets/images/MIEA_logo.png";
import MIT_Plate from "../assets/images/MIT_Plate.png";
import MIT_Certificate from "../assets/images/MIT_Certificate.png";
import MIT_logo from "../assets/images/MIT_logo.png";
import mission from "../assets/images/mission.gif";

const AboutMIEAPage: React.FC = () => {
  return (
    <>
      <AboutMIEA />
      <Member />
      <Timeline />
    </>
  );
};

// AboutMIEA Component
const AboutMIEA: React.FC = () => {
  const [mousePosition, setMousePosition] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="bg-white dark:bg-dark">
      <div className="mx-auto">
        <div className="relative z-10 overflow-hidden bg-[#005e16] dark:bg-dark-3">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <motion.div
                className="w-full px-4 lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="px-6 py-14 sm:px-10 md:px-[70px] md:py-20 lg:pl-11 lg:pr-0">
                  <h2 className="mb-9 text-2xl font-bold leading-snug text-white dark:text-white md:text-[40px]/[48px]">
                    About MIEA
                  </h2>
                  <p className="mb-11 text-lg text-white dark:text-dark-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut.
                  </p>
                  <div className="w-full flex flex-wrap gap-2 items-center">
                    <div className="w-[35%]">
                      <img
                        src={Pearson_logo_white}
                        alt="MIEA Approved Centre Plate"
                        className="rounded-md"
                      />
                    </div>
                    <div className="w-[45%]">
                      <img
                        src={CIE_logo_white}
                        alt="MIEA Centre Approved Certificate"
                        className="rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="w-full self-center px-4 py-10 lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <img
                    src={MIEA_logo_circle_t}
                    alt="image"
                    className="mx-auto max-w-144"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="hidden md:block">
            <motion.span
              className="absolute right-[-100px] top-[-100px] z-[-1]"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                x: mousePosition.x * 0.02,
                y: mousePosition.y * 0.02,
              }}
              viewport={{ once: false }}
            >
              <div className="w-[364px] h-[364px] rounded-full bg-[#009900]"></div>
            </motion.span>
            <motion.span
              className="absolute right-[10px] top-[150px] z-[-1]"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                x: mousePosition.x * -0.02,
                y: mousePosition.y * -0.02,
              }}
              viewport={{ once: false }}
            >
              <div className="w-[161px] h-[161px] rounded-full bg-[#ffdd00]"></div>
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Member Component
const Member: React.FC = () => {
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
                            <stop stopColor="white" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
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
                            <stop stopColor="white" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
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
                            <stop stopColor="white" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
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

// Timeline Component
const Timeline: React.FC = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white dark:bg-dark">
      <motion.div
        className="mx-auto mb-[60px] max-w-[510px] text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="mb-2 block text-lg font-semibold text-green">
          MIEA School Timeline
        </span>
        <motion.h2
          className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Journey of MIEA
        </motion.h2>
      </motion.div>
      <div className="container">
        <div className="mx-auto w-full max-w-[790px]">
          <section className="overflow-hidden">
            <div className="mx-auto px-4 sm:container">
              <div className="mx-auto w-full max-w-[920px]">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <span className="absolute left-6 top-0 h-[calc(100%-80px)] w-[2px] border-l-2 border-dashed border-[#005e16] dark:border-[#ffdd00]"></span>

                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                  >
                    <SingleStep
                      number="2019"
                      title="Myanmar IGCSE Training"
                      details="Myanmar IGCSE Training (MIT) was established in 2019 and operated as a training center offering IGCSE ICT and Computer Science courses for Edexcel and Cambridge international examinations."
                      image={MIT_logo}
                      imageDark={MIT_logo}
                      imageWidth="30%"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                  >
                    <SingleStep
                      number="2022"
                      title="Pearson Approved Centre"
                      details="In 2022, Myanmar IGCSE Training (MIT) became approved centre of Pearson to offer IGCSE (Upper Secondary Level) and Pre-IGCSE (Lower Secondary Level) courses."
                      image={MIT_Plate}
                      image2={MIT_Certificate}
                      imageDark={MIT_Plate}
                      image2Dark={MIT_Certificate}
                      hasShadow={true}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                  >
                    <SingleStep
                      number="2023"
                      title="MIEA School"
                      details="In 2023, Myanmar IGCSE Training (MIT) was renamed to Myanmar International Education Academy (MIEA) School to expand its offerings and cater to a wider range of students."
                      image={MIEA_logo}
                      imageDark={MIEA_logo}
                      imageWidth="50%"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                  >
                    <SingleStep
                      number={new Date().getFullYear()}
                      title="Committed to Excellence"
                      details="We are continuously striving to improve and work harder in alignment with our mission and vision."
                      image={mission}
                      imageDark={mission}
                      imageWidth="50%"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

// SingleStep Component for Timeline
interface SingleStepProps {
  number: string | number;
  title: string;
  details: string;
  image?: string;
  imageDark?: string;
  image2?: string;
  image2Dark?: string;
  imageWidth?: string;
  imageWidth2?: string;
  hasShadow?: boolean;
}

const SingleStep: React.FC<SingleStepProps> = ({
  number,
  title,
  details,
  image,
  imageDark,
  image2,
  image2Dark,
  imageWidth = "70%",
  imageWidth2 = "70%",
  hasShadow = false,
}) => {
  return (
    <div className="group relative flex pb-20 md:pb-[20px]">
      <div className="border-green border-2 bg-yellow text-black dark:border-yellow dark:bg-green dark:text-white mr-4 flex h-11 w-full max-w-[44px] items-center justify-center rounded-full font-semibold md:mr-9 md:h-[50px] md:max-w-[50px] md:text-l z-10">
        {number}
      </div>
      <div className="w-full">
        <h3 className="mb-[10px] text-lg font-semibold text-green dark:text-yellow md:text-2xl">
          {title}
        </h3>
        <p className="text-base font-medium text-black dark:text-white">
          {details}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          {(image || imageDark) && (
            <>
              <img
                src={image}
                alt={title}
                style={{ maxWidth: imageWidth }}
                className={`rounded-lg ${
                  hasShadow ? "shadow-lg" : ""
                } block dark:hidden`}
              />
              <img
                src={imageDark || image}
                alt={title}
                style={{ maxWidth: imageWidth }}
                className={`rounded-lg ${
                  hasShadow ? "shadow-lg" : ""
                } hidden dark:block`}
              />
            </>
          )}
          {(image2 || image2Dark) && (
            <>
              <img
                src={image2}
                alt={title}
                style={{ maxWidth: imageWidth2 }}
                className={`rounded-lg ${
                  hasShadow ? "shadow-lg" : ""
                } block dark:hidden`}
              />
              <img
                src={image2Dark || image2}
                alt={title}
                style={{ maxWidth: imageWidth2 }}
                className={`rounded-lg ${
                  hasShadow ? "shadow-lg" : ""
                } hidden dark:block`}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMIEAPage;
