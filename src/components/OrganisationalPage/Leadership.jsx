import React from "react";
import { motion } from "framer-motion";
import mmk from "../../assets/images/mmk.png";
import mta from "../../assets/images/mta.png";

const Leadership = () => {
  return (
    <section className="py-10 dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-green">
                MIEA School
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Leadership
              </h2>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamCard
            name="Dr. May Thu Aung"
            profession="Founder & Principal"
            imageSrc={mta}
            circleColor="#005e16"
            direction="left"
          />
          <TeamCard
            name="Myint Myat Kaung"
            profession="Founder & MD"
            imageSrc={mmk}
            circleColor="#f5c115"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Leadership;

const TeamCard = ({ imageSrc, name, profession, circleColor, direction }) => {
  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/4">
      <motion.div
        className="mx-auto mb-10 w-full max-w-[370px]"
        initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img src={imageSrc} alt="" className="w-full" />
          <div className="absolute bottom-5 left-0 w-full text-center">
            <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-dark-2">
              <h3 className="text-base font-semibold text-dark dark:text-white">
                {name}
              </h3>
              <p className="text-xs text-body-color dark:text-dark-6">
                {profession}
              </p>
              <div>
                <span className="absolute bottom-0 left-0">
                  <svg
                    width={61}
                    height={30}
                    viewBox="0 0 61 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx={16}
                      cy={45}
                      r={45}
                      fill={circleColor}
                      fillOpacity="1"
                    />
                  </svg>
                </span>
                <span className="absolute right-0 top-0">
                  <svg
                    width={20}
                    height={25}
                    viewBox="0 0 20 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="0.706257"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 0.706257 24.3533)"
                      fill={circleColor}
                    />
                    <circle
                      cx="6.39669"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 6.39669 24.3533)"
                      fill={circleColor}
                    />
                    <circle
                      cx="12.0881"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 12.0881 24.3533)"
                      fill={circleColor}
                    />
                    <circle
                      cx="17.7785"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 17.7785 24.3533)"
                      fill={circleColor}
                    />
                    <circle
                      cx="0.706257"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 0.706257 18.6624)"
                      fill={circleColor}
                    />
                    <circle
                      cx="6.39669"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 6.39669 18.6624)"
                      fill={circleColor}
                    />
                    <circle
                      cx="12.0881"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 12.0881 18.6624)"
                      fill={circleColor}
                    />
                    <circle
                      cx="17.7785"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 17.7785 18.6624)"
                      fill={circleColor}
                    />
                    <circle
                      cx="0.706257"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 0.706257 12.9717)"
                      fill={circleColor}
                    />
                    <circle
                      cx="6.39669"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 6.39669 12.9717)"
                      fill={circleColor}
                    />
                    <circle
                      cx="12.0881"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 12.0881 12.9717)"
                      fill={circleColor}
                    />
                    <circle
                      cx="17.7785"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 17.7785 12.9717)"
                      fill={circleColor}
                    />
                    <circle
                      cx="0.706257"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 0.706257 7.28077)"
                      fill={circleColor}
                    />
                    <circle
                      cx="6.39669"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 6.39669 7.28077)"
                      fill={circleColor}
                    />
                    <circle
                      cx="12.0881"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 12.0881 7.28077)"
                      fill={circleColor}
                    />
                    <circle
                      cx="17.7785"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 17.7785 7.28077)"
                      fill={circleColor}
                    />
                    <circle
                      cx="0.706257"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 0.706257 1.58989)"
                      fill={circleColor}
                    />
                    <circle
                      cx="6.39669"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 6.39669 1.58989)"
                      fill={circleColor}
                    />
                    <circle
                      cx="12.0881"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 12.0881 1.58989)"
                      fill={circleColor}
                    />
                    <circle
                      cx="17.7785"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 17.7785 1.58989)"
                      fill={circleColor}
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
