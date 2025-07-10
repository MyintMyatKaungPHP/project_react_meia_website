import React from "react";
import { motion } from "framer-motion";
import StuGroup from "../assets/images/stugroup.png";
import StuGroupWhite from "../assets/images/stugroup_white.png";
import { Typewriter } from "react-simple-typewriter";

export default function Contact() {
  return (
    <section className="bg-white pb-10 dark:bg-dark">
      <div className="container overflow-hidden">
        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0, scale: 1.15 }} // Start slightly zoomed-in
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
      <div className="container">
        <div className="w-full">
          <div>
            <object
              style={{ border: "0", height: "550px", width: "100%" }}
              data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.36376889632!2d96.15344277597569!3d16.808300383983564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1edf16efa7c47%3A0xec58624c537d98b!2sMyanmar%20International%20Education%20Academy%20-%20MIEA!5e0!3m2!1sen!2smm!4v1752000201911!5m2!1sen!2smm"
            ></object>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-10 text-center">
        <motion.h2
          className="text-2xl font-bold text-green dark:text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span>
            <Typewriter
              words={[
                "You’re warmly invited to reach out to us with any questions or inquiries.",
              ]}
              loop={1}
              cursor
              cursorStyle="♥︎"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </span>
        </motion.h2>
      </div>
    </section>
  );
}
