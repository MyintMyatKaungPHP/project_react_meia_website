import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface FacilityCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const FacilityCard: React.FC<FacilityCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <motion.div
      className="relative p-6 rounded-lg shadow-xl border border-white border-opacity-30 backdrop-blur-md bg-white bg-opacity-20 flex flex-col items-center text-center overflow-hidden cursor-pointer hover:bg-gray-500 hover:bg-opacity-30"
      // Added a stronger shadow on hover to make it pop more
      initial={{ y: 0, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }} // Slightly stronger initial shadow
      whileHover={{
        y: -10,
        scale: 1.03,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      }} // More prominent shadow on hover
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Icon */}
      <div className="mb-4 text-green dark:text-yellow">
        <Icon className="text-5xl" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-2 text-dark dark:text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base text-dark dark:text-white">{description}</p>
    </motion.div>
  );
};

export default FacilityCard;
