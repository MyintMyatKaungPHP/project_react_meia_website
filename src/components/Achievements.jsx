import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Achievements = () => {
  return (
    <section className="bg-gray-4 py-20 dark:bg-dark-2 lg:py-[120px]">
      <div className="mx-auto px-4 sm:container">
        <div className="-mx-4 flex flex-wrap items-center">
          <motion.div
            className="w-full px-4 lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="mb-12 max-w-[560px] lg:mb-8">
              <motion.span
                className="mb-4 inline-block rounded bg-yellow px-3 py-1 text-base font-medium text-black"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Some Fun Facts
              </motion.span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-green dark:text-white md:text-[40px]">
                Our achievements
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </motion.div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="-mx-3 flex flex-wrap md:-mx-4">
              <StatsItem user={56825} title="Clients" />
              <StatsItem user={35574} title="Commits" />
              <StatsItem user={570} title="Team Members" />
              <StatsItem user={50} title="First Year of Use" suffix="%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

const StatsItem = ({ user, title, suffix = "" }) => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // Animation duration in ms
      const increment = Math.ceil(user / (duration / 30)); // Adjust speed
      const interval = setInterval(() => {
        start += increment;
        if (start >= user) {
          setCount(user);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [inView, user]);

  return (
    <motion.div
      className="w-full px-3 xs:w-1/2 md:px-4"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="group mb-6 rounded-[5px] bg-white px-4 py-6 text-center shadow-three hover:bg-green dark:bg-dark md:mb-8">
        <h4 className="mb-1 text-2xl font-bold leading-tight text-dark group-hover:text-white dark:text-white sm:text-[28px]">
          {count}
          {suffix}
        </h4>
        <p className="text-base text-body-color group-hover:text-white dark:text-dark-6">
          {title}
        </p>
      </div>
    </motion.div>
  );
};
