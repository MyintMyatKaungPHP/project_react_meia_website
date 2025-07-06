import React from "react";
import { motion } from "framer-motion";
import FacilityCard from "../components/FacilityCard";
import {
  FaChalkboardTeacher,
  FaFlask,
  FaLaptopCode,
  FaBookOpen,
  FaUtensils,
  FaFootballBall,
  FaMusic,
  FaMicrophoneAlt, // For Multipurpose Hall
  FaFirstAid,
  FaBus,
  FaWifi,
  FaShieldAlt,
} from "react-icons/fa"; // Import necessary icons from react-icons

// Define the structure for facility data
interface Facility {
  icon: any; // Using 'any' for IconType due to dynamic import with object keys
  title: string;
  description: string;
}

const facilityData: Facility[] = [
  {
    icon: FaChalkboardTeacher,
    title: "Modern Classrooms",
    description:
      "Spacious, well-ventilated classrooms with smart boards and comfortable seating for an optimal learning experience.",
  },
  {
    icon: FaFlask,
    title: "Science Laboratories",
    description:
      "Fully equipped Physics, Chemistry, and Biology labs provide hands-on experience and foster scientific exploration.",
  },
  {
    icon: FaLaptopCode,
    title: "Computer Lab",
    description:
      "A high-tech computer lab with internet access and modern software to develop digital literacy and coding skills.",
  },
  {
    icon: FaBookOpen,
    title: "Resourceful Library",
    description:
      "Our library boasts a vast collection of books, e-resources, and quiet study spaces for comprehensive research and reading.",
  },
  {
    icon: FaUtensils,
    title: "Hygienic Cafeteria",
    description:
      "A clean and spacious cafeteria serving nutritious and delicious meals prepared under strict hygiene standards.",
  },
  {
    icon: FaFootballBall,
    title: "Sports Facilities",
    description:
      "Expansive playgrounds, sports courts, and equipment for various indoor and outdoor sports activities.",
  },
  {
    icon: FaMusic,
    title: "Art & Music Studios",
    description:
      "Dedicated spaces for visual arts and music, fostering creativity and artistic expression.",
  },
  {
    icon: FaMicrophoneAlt, // You can choose a different icon here if FaMicrophoneAlt isn't suitable
    title: "Multipurpose Hall",
    description:
      "A large hall for assemblies, events, performances, and indoor sports activities.",
  },
  {
    icon: FaFirstAid,
    title: "Medical Room",
    description:
      "A well-equipped medical facility with trained staff to provide immediate first-aid and care.",
  },
  {
    icon: FaBus,
    title: "Safe Transportation",
    description:
      "Reliable and secure transportation services for students, ensuring comfortable and safe commuting.",
  },
  {
    icon: FaWifi,
    title: "Wi-Fi Enabled Campus",
    description:
      "High-speed Wi-Fi access across the campus to support modern learning and research.",
  },
  {
    icon: FaShieldAlt,
    title: "Enhanced Security",
    description:
      "24/7 CCTV surveillance and trained security personnel ensure a safe and secure environment for all.",
  },
];

const FacilitiesPage: React.FC = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white py-10 dark:bg-dark min-h-screen flex items-center justify-center">
      {/* Background Animated Circles - Adjusted sizes, blur, and opacity */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full   bg-yellow w-[300px] h-[300px] top-[10%] left-[5%] animate-move1"></div>
        <div className="absolute rounded-full  bg-[#005e16] w-[200px] h-[200px] top-[50%] right-[10%] animate-move2"></div>
        <div className="absolute rounded-full  bg-[#005e16] w-[420px] h-[420px] bottom-[15%] left-[20%] animate-move3"></div>
        <div className="absolute rounded-full  bg-yellow w-[230px] h-[230px] bottom-[5%] right-[30%] animate-move4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          className="mx-auto mb-[60px] max-w-[600px] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-2 block text-lg font-semibold text-green-600 dark:text-green-400">
            Our Campus
          </span>
          <motion.h2
            className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Explore Our World-Class Facilities
          </motion.h2>
          <motion.p
            className="text-base text-body-color dark:text-dark-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            We are dedicated to providing an environment that fosters holistic
            development, equipped with modern amenities and resources to support
            every student's journey.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilityData.map((facility, index) => (
            <FacilityCard
              key={index}
              icon={facility.icon}
              title={facility.title}
              description={facility.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesPage;
