import React from "react";
import { motion } from "framer-motion";
import MIT_Plate from "../../assets/images/MIT_Plate.png";
import MIT_Certificate from "../../assets/images/MIT_Certificate.png";
import MIEA_logo from "../../assets/images/MIEA_logo.png";
import MIT_logo from "../../assets/images/MIT_logo.png";
import mission from "../../assets/images/mission.gif";

export default function Timeline() {
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
}

const SingleStep = ({
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
