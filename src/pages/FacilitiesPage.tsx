import React, { useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "../components/ImageModal"; // Import the Modal component

// Icons imports
import {
  FaChalkboardTeacher,
  FaFlask,
  FaLaptopCode,
  FaBookOpen,
  FaUtensils,
  FaFootballBall,
  FaMusic,
  FaMicrophoneAlt,
  FaFirstAid,
  FaBus,
  FaWifi,
  FaShieldAlt,
} from "react-icons/fa";

// Facility Data Structure with Image Gallery
interface Facility {
  icon: any;
  title: string;
  description: string;
  imageGallery?: { imageUrl: string; description: string }[];
}

// Facility Data (as before)
const facilityData: Facility[] = [
  {
    icon: FaChalkboardTeacher,
    title: "Modern Classrooms",
    description:
      "Spacious, well-ventilated classrooms with smart boards and comfortable seating for an optimal learning experience.",
    imageGallery: [
      {
        imageUrl:
          "https://images.pexels.com/photos/5905440/pexels-photo-5905440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        description: "Bright and engaging classroom environment.",
      },
      {
        imageUrl:
          "https://thumbs.dreamstime.com/z/cheerful-teacher-interacting-diverse-students-colorful-classroom-plastic-bag-free-day-cheerful-teacher-interacting-317149403.jpg",
        description: "Interactive session with students and teacher.",
      },
      {
        imageUrl:
          "https://as2.ftcdn.net/v2/jpg/05/40/23/99/1000_F_540239926_4VPbVHUSfnMXiZ5L03YNlaVuwynrfMdP.jpg",
        description: "Students posing with teacher after a lesson.",
      },
      {
        imageUrl:
          "https://c8.alamy.com/comp/F35NTH/teacher-teaching-her-classroom-of-students-F35NTH.jpg",
        description: "Students conducting an experiment in the chemistry lab.",
      },
      {
        imageUrl:
          "https://c8.alamy.com/comp/CB3DPK/teacher-teaching-students-in-the-classroom-CB3DPK.jpg",
        description: "A teacher explaining a concept in the physics lab.",
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/3823277/pexels-photo-3823277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Students expressing creativity in the art studio.",
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Practicing musical instruments in a dedicated room.",
      },
    ],
  },
  {
    icon: FaFlask,
    title: "Science Laboratories",
    description:
      "Fully equipped Physics, Chemistry, and Biology labs provide hands-on experience and foster scientific exploration.",
    imageGallery: [
      {
        imageUrl:
          "https://c8.alamy.com/comp/F35NTH/teacher-teaching-her-classroom-of-students-F35NTH.jpg",
        description: "Students conducting an experiment in the chemistry lab.",
      },
      {
        imageUrl:
          "https://c8.alamy.com/comp/CB3DPK/teacher-teaching-students-in-the-classroom-CB3DPK.jpg",
        description: "A teacher explaining a concept in the physics lab.",
      },
    ],
  },
  {
    icon: FaLaptopCode,
    title: "Computer Lab",
    description:
      "A high-tech computer lab with internet access and modern software to develop digital literacy and coding skills.",
    imageGallery: [
      {
        imageUrl:
          "https://c8.alamy.com/comp/KX38AY/indian-school-students-teacher-teaching-studying-computer-education-KX38AY.jpg",
        description: "Students learning computer skills in a modern lab.",
      },
      {
        imageUrl:
          "https://img.freepik.com/free-photo/kids-studying-laboratory_23-2148898479.jpg?w=2000",
        description: "Collaborative coding session in progress.",
      },
    ],
  },
  {
    icon: FaBookOpen,
    title: "Resourceful Library",
    description:
      "Our library boasts a vast collection of books, e-resources, and quiet study spaces for comprehensive research and reading.",
    imageGallery: [
      {
        imageUrl:
          "https://thumbs.dreamstime.com/z/asian-female-teacher-teaching-diversity-kids-reading-book-cla-classroom-kindergarten-pre-school-concept-111242734.jpg",
        description: "Students engrossed in reading in the library.",
      },
      {
        imageUrl:
          "https://thumbs.dreamstime.com/z/diverse-classroom-interaction-engaged-teacher-students-vector-317148365.jpg",
        description: "A quiet corner for focused study in the library.",
      },
    ],
  },
  {
    icon: FaUtensils,
    title: "Hygienic Cafeteria",
    description:
      "A clean and spacious cafeteria serving nutritious and delicious meals prepared under strict hygiene standards.",
    imageGallery: [
      {
        imageUrl:
          "https://thumbs.dreamstime.com/z/teacher-students-classroom-teaching-58888092.jpg",
        description: "Healthy meal options available at the cafeteria.",
      },
    ],
  },
  {
    icon: FaFootballBall,
    title: "Sports Facilities",
    description:
      "Expansive playgrounds, sports courts, and equipment for various indoor and outdoor sports activities.",
    imageGallery: [
      {
        imageUrl:
          "https://img.freepik.com/free-photo/group-diverse-kids-studying_53876-138030.jpg?w=2000",
        description: "Students enjoying outdoor sports.",
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Indoor sports hall for various activities.",
      },
    ],
  },
  {
    icon: FaMusic,
    title: "Art & Music Studios",
    description:
      "Dedicated spaces for visual arts and music, fostering creativity and artistic expression.",
    imageGallery: [
      {
        imageUrl:
          "https://images.pexels.com/photos/3823277/pexels-photo-3823277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Students expressing creativity in the art studio.",
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Practicing musical instruments in a dedicated room.",
      },
    ],
  },
  {
    icon: FaMicrophoneAlt,
    title: "Multipurpose Hall",
    description:
      "A large hall for assemblies, events, performances, and indoor sports activities.",
    imageGallery: [
      {
        imageUrl:
          "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "School assembly in the multipurpose hall.",
      },
    ],
  },
  {
    icon: FaFirstAid,
    title: "Medical Room",
    description:
      "A well-equipped medical facility with trained staff to provide immediate first-aid and care.",
    imageGallery: [
      {
        imageUrl:
          "https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Our dedicated medical room.",
      },
    ],
  },
  {
    icon: FaBus,
    title: "Safe Transportation",
    description:
      "Reliable and secure transportation services for students, ensuring comfortable and safe commuting.",
    imageGallery: [
      {
        imageUrl:
          "https://images.pexels.com/photos/3993096/pexels-photo-3993096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "School buses ready for student transport.",
      },
    ],
  },
  {
    icon: FaWifi,
    title: "Wi-Fi Enabled Campus",
    description:
      "High-speed Wi-Fi access across the campus to support modern learning and research.",
    imageGallery: [
      {
        imageUrl:
          "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Students utilizing Wi-Fi for learning.",
      },
    ],
  },
  {
    icon: FaShieldAlt,
    title: "Enhanced Security",
    description:
      "24/7 CCTV surveillance and trained security personnel ensure a safe and secure environment for all.",
    imageGallery: [
      {
        imageUrl:
          "https://images.pexels.com/photos/5905440/pexels-photo-5905440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        description: "Secure campus environment with surveillance.",
      },
    ],
  },
];

// Tab list ကို facilityData.map() နဲ့ auto generate (icon ပါထည့်)
const tabList = facilityData.map((f, idx) => ({
  id: idx.toString(),
  label: f.title,
  icon: f.icon,
}));

const FacilitiesPage: React.FC = () => {
  const [openTab, setOpenTab] = useState<string>("0");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    imageUrl: string;
    description: string;
  } | null>(null);

  // index နဲ့တင် currentFacilityData ရယူ
  const currentFacilityData = facilityData[parseInt(openTab)];

  const handleOpenModal = (image: {
    imageUrl: string;
    description: string;
  }) => {
    if (image && image.imageUrl) {
      setSelectedImage(image);
      setIsModalOpen(true);
    } else {
      console.error("Invalid image data provided:", image);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const inactiveClasses =
    "text-body-color backdrop-blur-md bg-white bg-opacity-20 dark:text-white";

  return (
    <section className="mb-10 relative z-10 overflow-hidden bg-white dark:bg-dark min-h-screen flex items-center justify-center">
      {/* Background Animated Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full filter blur-xl opacity-40 dark:opacity-30 bg-yellow-400 w-[400px] h-[400px] top-[10%] left-[5%] animate-move1"></div>
        <div className="absolute rounded-full filter blur-xl opacity-40 dark:opacity-30 bg-green-400 w-[350px] h-[350px] top-[50%] right-[10%] animate-move2"></div>
        <div className="absolute rounded-full filter blur-xl opacity-40 dark:opacity-30 bg-green-300 w-[250px] h-[250px] bottom-[15%] left-[20%] animate-move3"></div>
        <div className="absolute rounded-full filter blur-xl opacity-40 dark:opacity-30 bg-yellow-300 w-[180px] h-[180px] bottom-[5%] right-[30%] animate-move4"></div>
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

        {/* Tabs for Facilities */}
        {/* Mobile: Dropdown */}
        <div className="w-full mb-4 px-4 flex md:hidden">
          <select
            className="w-full border-2 border-green-500 rounded-md py-2 px-3 text-lg"
            value={openTab}
            onChange={(e) => setOpenTab(e.target.value)}
          >
            {tabList.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>
        {/* Desktop: Tab Row */}
        <div className="hidden md:flex flex-wrap mb-8 px-4 justify-center">
          {tabList.map((tab) => {
            const isActive = openTab === tab.id;
            const tabClasses = isActive
              ? "bg-green-100 dark:bg-green-900 border-green-500 text-green-700 dark:text-green-300 hover:border-green-500 hover:text-green-700 dark:hover:text-green-300"
              : `${inactiveClasses} hover:bg-gray-100 dark:hover:bg-gray-700`;
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setOpenTab(tab.id)}
                className={`flex flex-col items-center px-6 py-3 mr-4 mb-2 rounded-md text-sm font-medium transition-colors duration-300 border-2 ${tabClasses}`}
                type="button"
              >
                <span className="text-2xl mb-1">
                  <IconComponent />
                </span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Facility Section - Image Gallery and Details */}
        <div className="flex flex-wrap -mx-4">
          {/* Facility Details Sidebar */}
          <div className="w-full px-4 lg:w-1/3">
            {currentFacilityData ? (
              <>
                <h3 className="text-xl font-semibold mb-3 text-green-500">
                  {currentFacilityData.title}
                </h3>
                <p className="mb-3 text-dark dark:text-white">
                  {currentFacilityData.description}
                </p>
              </>
            ) : (
              <div className="text-gray-500 dark:text-gray-400">
                Select a tab to view details.
              </div>
            )}
          </div>

          {/* Image Gallery Section */}
          <div className="w-full px-4 lg:w-2/3">
            {currentFacilityData?.imageGallery &&
            currentFacilityData.imageGallery.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentFacilityData.imageGallery.map((image, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer border border-gray-300 dark:border-gray-700"
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      onClick={() => handleOpenModal(image)}
                    >
                      <img
                        src={image.imageUrl}
                        alt={`${currentFacilityData.title} ${imgIndex + 1}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2 text-center">
                        {image.description.substring(0, 50)}...
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                No gallery images available for this tab.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          imageUrl={selectedImage.imageUrl}
          description={selectedImage.description}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default FacilitiesPage;
