import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      {/* Contact Information Section */}
      <section className="relative z-10 overflow-hidden bg-white py-10 dark:bg-dark">
        <div className="container">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            {/* Contact Info */}
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <motion.div
                className="mb-12 max-w-[570px] lg:mb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.span
                  className="mb-4 block text-base font-semibold text-green dark:text-yellow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Contact Us
                </motion.span>
                <motion.h2
                  className="mb-6 text-[40px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  GET IN TOUCH WITH US
                </motion.h2>

                {/* Contact Details */}
                <motion.div
                  className="mb-8 flex w-full"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="mr-5 flex items-center justify-center overflow-hidden rounded bg-primary/5 text-green dark:text-yellow"
                    style={{
                      border: "1px solid #21ad5c",
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaClock className="text-3xl" style={{ margin: "15px" }} />
                  </motion.div>
                  <div style={{ width: "100%" }}>
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Office Hours
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Monday - Friday: 9:00 am - 5:00 pm
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="mb-8 flex w-full"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="mr-5 flex items-center justify-center overflow-hidden rounded bg-primary/5 text-green dark:text-yellow"
                    style={{
                      border: "1px solid #21ad5c",
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaPhone className="text-3xl" style={{ margin: "15px" }} />
                  </motion.div>
                  <div style={{ width: "100%" }}>
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Phone
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      09 9585 94545, 09 7767 94545
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="mb-8 flex w-full"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="mr-5 flex items-center justify-center overflow-hidden rounded bg-primary/5 text-green dark:text-yellow"
                    style={{
                      border: "1px solid #21ad5c",
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaEnvelope
                      className="text-3xl"
                      style={{ margin: "15px" }}
                    />
                  </motion.div>
                  <div style={{ width: "100%" }}>
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Email
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      info@miea.school
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="mb-8 flex w-full"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="mr-5 flex items-center justify-center overflow-hidden rounded bg-primary/5 text-green dark:text-yellow"
                    style={{
                      border: "1px solid #21ad5c",
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaMapMarkerAlt
                      className="text-3xl"
                      style={{ margin: "15px" }}
                    />
                  </motion.div>
                  <div style={{ width: "100%" }}>
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Address
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      No. (2A,520-C3), Shwe Taung Gone Yeik Thar Street, <br />
                      Shwe Gone Taing, Bahan Township, Yangon
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Map Card */}
            <motion.div
              className="w-full px-4 lg:w-1/2 xl:w-5/12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12 border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="mb-6 text-2xl font-bold text-center text-dark dark:text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Find Us on Map
                </motion.h3>
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="h-[400px] w-full overflow-hidden rounded-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.36376889632!2d96.15344277597569!3d16.808300383983564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1edf16efa7c47%3A0xec58624c537d98b!2sMyanmar%20International%20Education%20Academy%20-%20MIEA!5e0!3m2!1sen!2smm!4v1752000201911!5m2!1sen!2smm"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="MIEA Location"
                    ></iframe>
                  </div>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <p>
                    <motion.h2
                      className="text-l text-green dark:text-yellow"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    >
                      <span>
                        <Typewriter
                          words={[
                            "You're warmly invited to reach out to us with any questions or inquiries.",
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
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
