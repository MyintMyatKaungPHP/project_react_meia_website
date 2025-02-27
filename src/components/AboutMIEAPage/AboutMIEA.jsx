import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import MIEA_logo_circle_t from "../../assets/images/MIEA_logo_circle_t.png";
import Pearson_logo_white from "../../assets/images/Pearson_logo_white.png";
import CIE_logo_white from "../../assets/images/CIE_logo_white.png";

const AboutMIEA = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
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

export default AboutMIEA;

const SingleStep = ({ number, title, details, done, ongoing }) => {
  return (
    <div className="group relative flex pb-16 md:pb-[90px]">
      <span
        style={{ height: "calc(100% - 70px)" }}
        className={
          "border-yellow dark:border-yellow absolute left-6 top-[60px] w-[2px] border-l-2 border-dashed group-last:border-none dark:border-dark-3"
        }
      ></span>
      <div
        className={
          "border-white border-2 bg-yellow text-black dark:border-yellow dark:bg-green dark:text-white mr-4 flex h-11 w-full max-w-[44px] items-center justify-center rounded-full border bg-yellow text-black font-semibold dark:border-yellow dark:bg-green dark:text-white md:mr-9 md:h-[50px] md:max-w-[50px] md:text-xl"
        }
      >
        {number}
      </div>
      <div className="w-full">
        <h3 className="mb-[10px] text-lg font-semibold text-white md:text-2xl">
          {title}
        </h3>
        <p className="text-base font-medium text-white">{details}</p>
      </div>
    </div>
  );
};
