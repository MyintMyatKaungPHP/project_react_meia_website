import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import MIEA_logo from "../assets/images/MIEA_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

// Define types for our data
interface Student {
  Image: string;
  Name: string;
  Program: string;
  Description: string[];
  Year: string;
}

// Props for the SingleCard component
interface SingleCardProps {
  Image?: string;
  Name: string;
  Program: string;
  Description: string[];
  Year: string;
}

const StudentAchievementsPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("all");

  // Generate years from 2019 to last year
  const years = useMemo<string[]>(() => {
    const lastYear = new Date().getFullYear() - 1;
    const yearArray: string[] = ["all"];
    for (let year = lastYear; year >= 2019; year--) {
      yearArray.push(`Class of ${year}`);
    }
    return yearArray;
  }, []);

  const filteredCards = useMemo<Student[]>(() => {
    const students: Student[] = [
      // Class of 2024 (10 students)
      {
        Image: "https://i.ibb.co/MVv7h59/student1.jpg",
        Name: "Htet Aung Kyaw",
        Program: "Advanced Level (A Level)",
        Description: [
          "Top in Myanmar (Physics)",
          "Outstanding Cambridge Learner Award",
        ],
        Year: "Class of 2024",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student2.jpg",
        Name: "May Myat Noe",
        Program: "Advanced Level (A Level)",
        Description: ["High Achievement in Chemistry", "Academic Excellence"],
        Year: "Class of 2024",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student3.jpg",
        Name: "Pyae Sone Aung",
        Program: "Upper Secondary Level (IGCSE)",
        Description: ["Best in Mathematics", "Outstanding Performance"],
        Year: "Class of 2024",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student4.jpg",
        Name: "Su Myat Mon",
        Program: "Upper Secondary Level (IGCSE)",
        Description: ["Top in Biology", "Merit Award"],
        Year: "Class of 2024",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student5.jpg",
        Name: "Kaung Htet Aung",
        Program: "Lower Secondary Level (Pre-IGCSE)",
        Description: ["Excellence in English", "Academic Achievement"],
        Year: "Class of 2024",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student6.jpg",
        Name: "Aye Myat Thu",
        Program: "Advanced Level (A Level)",
        Description: ["Outstanding in ICT", "High Achievement"],
        Year: "Class of 2024",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student7.jpg",
        Name: "Min Khant Ko",
        Program: "Upper Secondary Level (IGCSE)",
        Description: ["Best in Physics", "Academic Excellence"],
        Year: "Class of 2024",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student8.jpg",
        Name: "Thiri Yadanar",
        Program: "Lower Secondary Level (Pre-IGCSE)",
        Description: ["Top Performance in Science", "Merit Award"],
        Year: "Class of 2024",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student9.jpg",
        Name: "Aung Kaung Myat",
        Program: "Advanced Level (A Level)",
        Description: ["Excellence in Chemistry", "Outstanding Achievement"],
        Year: "Class of 2024",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student10.jpg",
        Name: "Ei Thandar Kyaw",
        Program: "Upper Secondary Level (IGCSE)",
        Description: ["Best in Global Perspectives", "Academic Excellence"],
        Year: "Class of 2024",
      },

      // Class of 2023 (6 students)
      {
        Image: "https://i.ibb.co/MVv7h59/student11.jpg",
        Name: "Kyaw Zin Thant",
        Program: "Advanced Level (A Level)",
        Description: [
          "Top in Myanmar (Mathematics)",
          "Outstanding Achievement",
        ],
        Year: "Class of 2023",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student12.jpg",
        Name: "Hnin Ei Phyu",
        Program: "Upper Secondary Level (IGCSE)",
        Description: ["Excellence in Biology", "High Achievement"],
        Year: "Class of 2023",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student13.jpg",
        Name: "Zaw Lin Htike",
        Program: "Lower Secondary Level (Pre-IGCSE)",
        Description: ["Best in Mathematics", "Merit Award"],
        Year: "Class of 2023",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student14.jpg",
        Name: "Thet Hnin Yee",
        Program: "Advanced Level (A Level)",
        Description: ["Outstanding in Physics", "Academic Excellence"],
        Year: "Class of 2023",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student15.jpg",
        Name: "Phone Myint Aung",
        Program: "Upper Secondary Level (IGCSE)",
        Description: ["Top Performance in Chemistry", "High Achievement"],
        Year: "Class of 2023",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student16.jpg",
        Name: "Yoon Myat Thwe",
        Program: "Lower Secondary Level (Pre-IGCSE)",
        Description: ["Excellence in Science", "Outstanding Performance"],
        Year: "Class of 2023",
      },

      // Class of 2022 (7 students)
      {
        Image: "https://i.ibb.co/MVv7h59/student17.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2022",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student18.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2022",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student19.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2022",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student20.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2022",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student21.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2022",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student22.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2022",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student23.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2022",
      },

      // Class of 2021 (5 students)
      {
        Image: "https://i.ibb.co/MVv7h59/student24.jpg",
        Name: "Myat Noe Wai",
        Program: "Advanced Level (A Level)",
        Description: ["Outstanding in Mathematics", "High Achievement"],
        Year: "Class of 2021",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student25.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2021",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student26.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2021",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student27.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2021",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student28.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2021",
      },

      // Class of 2020 (9 students)
      {
        Image: "https://i.ibb.co/MVv7h59/student29.jpg",
        Name: "Kaung Sat Aung",
        Program: "Upper Secondary Level (IGCSE)",
        Description: ["Excellence in Physics", "Merit Award"],
        Year: "Class of 2020",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student30.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2020",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student31.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2020",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student32.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2020",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student33.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2020",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student34.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2020",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student35.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2020",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student36.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2020",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student37.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2020",
      },

      // Class of 2019 (4 students)
      {
        Image: "https://i.ibb.co/MVv7h59/student38.jpg",
        Name: "Thet Hmue Wai",
        Program: "Advanced Level (A Level)",
        Description: ["Top Performance in Chemistry", "Academic Excellence"],
        Year: "Class of 2019",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student39.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2019",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student40.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2019",
      },
      {
        Image: "https://i.ibb.co/MVv7h59/student41.jpg",
        Name: "Thant Zin Oo",
        Program: "Advanced Level (A Level)",
        Description: ["Top in Biology", "Academic Excellence"],
        Year: "Class of 2019",
      },
    ];

    if (selectedYear === "all") return students;
    return students.filter((student) => student.Year === selectedYear);
  }, [selectedYear]);

  return (
    <section className="bg-white py-20  dark:bg-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="w-full mb-10 text-center"
        >
          <span className="mb-2 block text-lg font-semibold text-green">
            Outstanding Students
          </span>
          <h2 className="mb-3 text-3xl !leading-[1.2] tracking-[-1.2px] text-dark sm:text-5xl md:text-[40px] dark:text-white">
            Achievements of
            <span className="font-bold"> MIEA Students </span>
          </h2>
          <p className="text-lg font-medium text-dark-4 dark:text-dark-6">
            The following students have achieved remarkable success in their
            academic journey at MIEA.
          </p>
        </motion.div>
        <div className="mb-8 flex justify-center">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-48 cursor-pointer appearance-none rounded-lg border-2 border-green bg-white px-4 py-3 text-base font-semibold text-dark shadow-sm transition-all duration-200 hover:border-green-600 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200 dark:bg-dark-2 dark:text-white dark:hover:border-green-400 dark:focus:border-green-400"
            style={{
              backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2322AD5C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              backgroundSize: "1em",
            }}
          >
            {years.map((year) => (
              <option key={year} value={year} className="py-2">
                {year === "all" ? "All Years" : year}
              </option>
            ))}
          </select>
        </div>
        <div className="-mx-4 flex flex-wrap items-center justify-center">
          {filteredCards.map((card, index) => (
            <SingleCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentAchievementsPage;

const SingleCard: React.FC<SingleCardProps> = ({
  Image = MIEA_logo,
  Description,
  Name,
  Year,
  Program,
}) => {
  // Program color mapping
  const programColor: Record<string, string> = {
    "Advanced Level (A Level)": "text-red-500",
    "Upper Secondary Level (IGCSE)": "text-green-500",
    "Lower Secondary Level (Pre-IGCSE)": "text-blue-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      viewport={{ once: false }}
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.4,
      }}
      className="w-full px-4 lg:w-1/2 xl:w-1/2"
    >
      <div className="relative z-10 mb-10 block items-center overflow-hidden rounded-lg shadow-md hover:shadow-lg bg-[#F2F5FC] dark:bg-dark-2 sm:flex sm:items-stretch md:items-center lg:block xl:flex xl:items-stretch">
        <div className="w-full sm:max-w-[200px] md:max-w-[250px] lg:max-w-full xl:max-w-[200px] 2xl:max-w-[240px]">
          <div className="h-[250px] sm:h-full lg:h-[250px] xl:h-full">
            <img
              src={Image}
              alt={Name}
              className={`w-full ${
                Image === MIEA_logo ? "bg-green-100 p-8" : "h-full object-cover"
              }`}
            />
          </div>
        </div>
        <div className="w-full p-8 sm:p-6 md:p-8">
          <h3>
            <a className="mb-3 block text-xl font-semibold text-dark dark:text-white">
              {Name}
            </a>
          </h3>
          <div className="space-y-2 mb-5">
            <span className={`text-sm block w-fit ${programColor[Program]}`}>
              {Program}
            </span>
            <span className="bg-yellow-500 text-dark px-3 py-1 rounded-full text-sm inline-block">
              {Year}
            </span>
          </div>
          <ul className="space-y-3">
            {Description.map((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faMedal}
                  className="text-yellow-500 w-5 h-5"
                />
                <span className="text-base leading-relaxed text-dark dark:text-dark-6">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <span className="absolute bottom-2 right-2 z-[-1]">
          <svg
            width="22"
            height="30"
            viewBox="0 0 22 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="20.3422"
              cy="28.6142"
              r="1.07573"
              transform="rotate(180 20.3422 28.6142)"
              fill="#f5c115"
            />
            <circle
              cx="20.3422"
              cy="10.3271"
              r="1.07573"
              transform="rotate(180 20.3422 10.3271)"
              fill="#f5c115"
            />
            <circle
              cx="20.3383"
              cy="19.3631"
              r="1.07573"
              transform="rotate(180 20.3383 19.3631)"
              fill="#f5c115"
            />
            <circle
              cx="20.3422"
              cy="1.07564"
              r="1.07573"
              transform="rotate(180 20.3422 1.07564)"
              fill="#f5c115"
            />
            <circle
              cx="10.7094"
              cy="28.6142"
              r="1.07573"
              transform="rotate(180 10.7094 28.6142)"
              fill="#f5c115"
            />
            <circle
              cx="10.7094"
              cy="10.3271"
              r="1.07573"
              transform="rotate(180 10.7094 10.3271)"
              fill="#f5c115"
            />
            <circle
              cx="10.7094"
              cy="19.3631"
              r="1.07573"
              transform="rotate(180 10.7094 19.3631)"
              fill="#f5c115"
            />
            <circle
              cx="10.7094"
              cy="1.07564"
              r="1.07573"
              transform="rotate(180 10.7094 1.07564)"
              fill="#f5c115"
            />
            <circle
              cx="1.07661"
              cy="28.6142"
              r="1.07573"
              transform="rotate(180 1.07661 28.6142)"
              fill="#f5c115"
            />
            <circle
              cx="1.07661"
              cy="10.3271"
              r="1.07573"
              transform="rotate(180 1.07661 10.3271)"
              fill="#f5c115"
            />
            <circle
              cx="1.07661"
              cy="19.3631"
              r="1.07573"
              transform="rotate(180 1.07661 19.3631)"
              fill="#f5c115"
            />
            <circle
              cx="1.07661"
              cy="1.07564"
              r="1.07573"
              transform="rotate(180 1.07661 1.07564)"
              fill="#f5c115"
            />
          </svg>
        </span>
      </div>
    </motion.div>
  );
};