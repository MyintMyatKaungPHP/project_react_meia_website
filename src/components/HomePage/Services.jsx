import React from "react";
import { motion } from "framer-motion";
import { FaBullhorn, FaChartLine, FaPaintBrush } from "react-icons/fa";

const Services = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <motion.div
              className="mx-auto mb-[60px] max-w-[510px] text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-2 block text-lg font-semibold text-green">
                What we Serve
              </span>
              <motion.h2
                className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our Best Services
              </motion.h2>
              <motion.p
                className="text-base text-body-color dark:text-dark-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </motion.p>
            </motion.div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <ServiceCard
            title="Marketing Solutions"
            details="Lorem Ipsum is simply dummy text of the printing and industry."
            icon={<FaBullhorn className="text-red text-4xl" />}
          />
          <ServiceCard
            title="Business Analytics"
            details="Lorem Ipsum is simply dummy text of the printing and industry."
            icon={<FaChartLine className="text-green text-4xl" />}
          />
          <ServiceCard
            title="UX & UI Design"
            details="Lorem Ipsum is simply dummy text of the printing and industry."
            icon={<FaPaintBrush className="text-blue text-4xl" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <motion.div
      className="w-full px-4 sm:w-4/5 md:w-1/2 lg:w-1/3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="group relative mb-8 rounded-xl border border-stroke bg-white p-10 text-center dark:border-dark-3 dark:bg-dark-2 md:px-8 lg:px-6 lg:py-9 xl:px-[43px] xl:py-[45px]"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <motion.div
          className="relative z-10 mx-auto mb-10 inline-flex h-11 items-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "backOut" }}
        >
          <span className="absolute -right-3 top-0 z-[-1] h-[34px] w-[34px] rounded-full bg-primary opacity-10"></span>
          {icon}
        </motion.div>
        <motion.h4
          className="mb-[14px] text-2xl font-bold text-dark dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h4>
        <motion.p
          className="text-body-color dark:text-dark-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {details}
        </motion.p>
        <motion.span
          className="absolute -bottom-2 left-0 right-0 z-[-1] mx-auto h-12 w-3/4 bg-primary opacity-0 blur-[12px]"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.14 }}
          transition={{ duration: 0.3 }}
        ></motion.span>
      </motion.div>
    </motion.div>
  );
};
