import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconType } from "react-icons"; // For type checking icons

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  description: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageUrl,
  description,
  onClose,
}) => {
  if (!isOpen || !imageUrl) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl font-bold z-10"
            aria-label="Close modal"
          >
            &times;
          </button>

          <img
            src={imageUrl}
            alt="Facility"
            className="w-full h-auto max-h-[70vh] object-contain rounded-lg mb-4"
            onError={(e) => {
              console.error("Error loading image:", imageUrl);
            }}
          />

          <p className="text-base text-gray-700 dark:text-gray-300 text-center">
            {description}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;
