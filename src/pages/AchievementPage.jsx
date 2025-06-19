import React from "react";
import MIEA_Logo from "../assets/images/MIEA_logo.png";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
// Test data
const testData = [
  {
    year: "2023 - 2024",
    achievements: [
      "First Prize in National ICT Competition",
      "Best Innovation Award at Tech Expo 2024",
      "Outstanding Academic Performance",
      "Winner of Coding Challenge 2023",
      "Excellence in Research Project",
    ],
  },
  {
    year: "2022 - 2023",
    achievements: [
      "Second Prize in Regional Hackathon",
      "Best Team Award in Project Exhibition",
      "Academic Excellence Award",
      "Outstanding Leadership Recognition",
    ],
  },
  {
    year: "2021 - 2022",
    achievements: [
      "Innovation Award in Science Fair",
      "Outstanding Student Achievement",
      "Best Project Implementation",
      "Academic Honor Roll",
    ],
  },
  {
    year: "2020 - 2021",
    achievements: [
      "Innovation Award in Science Fair",
      "Outstanding Student Achievement",
      "Best Project Implementation",
      "Academic Honor Roll",
    ],
  },
  {
    year: "2019 - 2020",
    achievements: [
      "Innovation Award in Science Fair",
      "Outstanding Student Achievement",
      "Best Project Implementation",
      "Academic Honor Roll",
    ],
  },
];

export default function AchievementPage() {
  return (
    <section className="bg-gray-2 py-10  dark:bg-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full mb-10 text-center"
        >
          <span className="mb-2 block text-lg font-semibold text-green">
            School Achievements
          </span>
          <h2 className="mb-3 text-3xl !leading-[1.2] tracking-[-1.2px] text-dark sm:text-5xl md:text-[40px] dark:text-white">
            Achievements of
            <span className="font-bold"> MIEA </span>
          </h2>

          <p className="text-lg font-medium text-dark-4 dark:text-dark-6">
            Here are some of the achievements of MIEA over the years
          </p>
        </motion.div>
        <div className="grid gap-8 lg:grid-cols-2">
          {testData.map((item, index) => (
            <SingleCard
              key={index}
              year={item.year}
              achievements={item.achievements}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const SingleCard = ({ year, achievements }) => {
  return (
    <div className="shadow-xs mx-auto w-full rounded-[20px] bg-white p-11 dark:bg-dark-2">
      <div className="mb-8 flex items-center gap-6 max-sm:flex-wrap">
        <div className="flex aspect-square w-full max-w-[52px] items-center justify-center">
          <img
            src={MIEA_Logo}
            alt="MIEA Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-dark dark:text-white">
            {year}
          </h3>
          <p className="text-body-color dark:text-dark-6">Academic Year</p>
        </div>
      </div>

      <h4 className="mb-5 text-lg font-semibold text-dark dark:text-white">
        Achievements
      </h4>

      <ul className="space-y-1">
        {achievements.map((achievement, index) => (
          <li
            key={index}
            className="flex gap-3 text-lg text-body-color dark:text-dark-6"
          >
            <span className="pt-0.5 text-[#22AD5C]">
              <FaCheckCircle size={22} />
            </span>
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
};
