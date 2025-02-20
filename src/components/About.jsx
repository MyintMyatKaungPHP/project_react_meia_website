import React from "react";
import { motion } from "framer-motion";
import StuGroup from "../assets/images/stugroup.png";
import StuGroupWhite from "../assets/images/stugroup_white.png";

export default function About() {
  return (
    <section className="overflow-hidden bg-white dark:bg-dark">
      <div className="container mx-auto">
        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0, scale: 1.2 }} // Start slightly zoomed-in
          whileInView={{ opacity: 1, scale: 1 }} // Zoom-out to normal size
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img
            src={StuGroup}
            alt="about image"
            className="w-full object-center dark:hidden"
          />
          <img
            src={StuGroupWhite}
            alt="about image"
            className="w-full object-center hidden dark:block"
          />
        </motion.div>
      </div>
    </section>
  );
}
