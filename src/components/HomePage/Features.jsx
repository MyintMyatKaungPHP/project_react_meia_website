import React from "react";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full mb-10 text-center"
        >
          <span className="mb-2 block text-lg font-semibold text-green">
            Mission & Vision
          </span>
          <h2 className="mb-3 text-3xl !leading-[1.2] tracking-[-1.2px] text-dark sm:text-5xl md:text-[40px] dark:text-white">
            Empowering your
            <span className="font-bold"> EDUCATION </span>
          </h2>

          <p className="text-lg font-medium text-dark-4 dark:text-dark-6">
            Your journey to excellence in education starts here
          </p>
        </motion.div>

        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              className="relative overflow-hidden rounded-xl max-lg:mb-12 xl:px-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://i.ibb.co/bv6mt6w/image-1.jpg"
                alt="service image"
                className="w-full object-cover object-center"
              />
            </motion.div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="xl:px-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mb-11 border-b border-stroke pb-11 dark:border-dark-3"
              >
                <h3 className="mb-5 text-xl font-bold text-green dark:text-white">
                  MIEA
                </h3>
                <p className="text-semibold text-lg text-dark dark:text-white">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a distribution
                  of letters.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <h3 className="mb-5 text-xl font-bold text-green dark:text-white">
                    Mission
                  </h3>
                  <p className="text-base leading-normal text-dark dark:text-dark-6">
                    Lorem ipsum dolor sit amet sitim consectetur elit estibulum
                    tincidunt rutrum.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <h3 className="mb-5 text-xl font-bold text-green dark:text-white">
                    Vision
                  </h3>
                  <p className="text-base leading-normal text-dark dark:text-dark-6">
                    Lorem ipsum dolor sit amet sitim consectetur elit estibulum
                    tincidunt rutrum.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
