import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaPlay } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import BlogCard from "../components/BlogCard";
import BlogSideCardItem from "../components/BlogSideCard";
import UnderConstructionPage from "./UnderConstructionPage";
import http from "../services/http";

// Import images
import Pearson_logo from "../assets/images/Pearson_logo.png";
import Pearson_logo_white from "../assets/images/Pearson_logo_white.png";
import CIE_logo from "../assets/images/CIE_logo.png";
import CIE_logo_white from "../assets/images/CIE_logo_white.png";
import miea_school from "../assets/images/miea_school.png";
import StuGroup from "../assets/images/stugroup.png";
import StuGroupWhite from "../assets/images/stugroup_white.png";
import Graduation2024 from "../assets/images/2024_graduation.jpg";
import iQuals_logo from "../assets/images/iquals.jpeg";
import BC_Myanmar_logo from "../assets/images/bc_myanmar.png";
import TEDx_logo from "../assets/images/tedx.webp";
import miea_school_video from "../assets/videos/miea_school_video.mp4";

// Interfaces
interface ServiceCardProps {
  id?: number;
  title: string;
  details: string;
  image?: string;
  overlayColor?: string;
  overlay_color?: string;
  link?: string;
  tag_name?: string;
}

interface StatsItemProps {
  user: number | string;
  title: string;
  suffix?: string;
}

interface TestimonialProps {
  image: string;
  details: string;
  name: string;
  position: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  details,
  image,
  overlayColor,
  link,
  tag_name,
}) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="w-full px-4 sm:w-4/5 md:w-1/2 lg:w-1/3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="group relative mb-8 rounded-xl border border-stroke overflow-hidden cursor-pointer"
        style={{
          backgroundImage: image ? `url(${image})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          aspectRatio: "16/9",
          width: "100%",
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        onClick={() => {
          if (link) {
            const finalLink = tag_name ? `${link}#${tag_name}` : link;
            navigate(finalLink);
          }
        }}
      >
        {/* Background overlay - hidden by default, shows on hover */}
        <div
          className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
          style={{
            backgroundColor: overlayColor
              ? `${overlayColor}90`
              : "rgba(239, 68, 68, 0.9)",
            backgroundImage: "none",
          }}
        ></div>
        {/* Content - hidden by default, shows on hover */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <motion.h4
            className="mb-3 text-xl md:text-2xl font-bold text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h4>
          <motion.p
            className="text-white text-sm md:text-base px-4"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {details}
          </motion.p>
        </div>
        <motion.span
          className="absolute -bottom-2 left-0 right-0 z-[-1] mx-auto h-12 w-3/4 bg-primary opacity-0 blur-[12px]"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.14 }}
          transition={{ duration: 0.3 }}
        ></motion.span>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Hero section API data
  const [heroData, setHeroData] = useState({
    school_name: "MIEA School",
    typewriter_texts: ["A Level and IGCSE Centre"],
    intro_text:
      "We are committed to providing the best education for students.",
    button_text: "Get Started",
    button_link: "/#",
    button_show: true,
    hero_image: miea_school,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const { data: json } = await http.get(`/site-settings/hero-section`);
        const data = json?.data;
        if (data) {
          setHeroData({
            school_name: data.school_name || "MIEA School",
            typewriter_texts: data.typewriter_texts || [
              "A Level and IGCSE Centre",
            ],
            intro_text:
              data.intro_text ||
              "We are committed to providing the best education for students.",
            button_text: data.button_text || "Get Started",
            button_link: data.button_link || "/#",
            button_show:
              data.button_show !== undefined ? data.button_show : true,
            hero_image: data.hero_image
              ? `http://project_laravel_miea_portal.test${data.hero_image}`
              : miea_school,
          });
        }
      } catch (error) {
        console.error("Failed to fetch hero data:", error);
        // Keep default values on error
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: event.clientX - window.innerWidth / 2,
        y: event.clientY - window.innerHeight / 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const xMotion = useMotionValue(0);
  const yMotion = useMotionValue(0);

  useEffect(() => {
    xMotion.set(mousePos.x * 0.02);
    yMotion.set(mousePos.y * 0.02);
  }, [mousePos.x, mousePos.y, xMotion, yMotion]);

  const xTransform = useTransform(xMotion, (val) => `${val}px`);
  const yTransform = useTransform(yMotion, (val) => `${val}px`);

  return (
    <>
      <div className="relative bg-white pb-[110px] pt-[30px] dark:bg-dark lg:pt-[80px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <motion.div
                  className="hero-content"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                >
                  <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-green dark:text-green-300 xs:text-[30px] sm:text-[40px] md:text-[45px] lg:text-[38px] xl:text-5xl">
                    {loading ? (
                      <span className="inline-block h-12 w-48 animate-pulse rounded bg-gray-200 dark:bg-dark-2" />
                    ) : (
                      heroData.school_name
                    )}
                  </h1>
                  <h2 className="mb-8 text-dark dark:text-white xs:text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[38px]">
                    {loading ? (
                      <span className="inline-block h-8 w-64 animate-pulse rounded bg-gray-200 dark:bg-dark-2" />
                    ) : (
                      <Typewriter
                        words={heroData.typewriter_texts}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    )}
                  </h2>
                  <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6 xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
                    {loading ? (
                      <span className="inline-block h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-dark-2" />
                    ) : (
                      heroData.intro_text
                    )}
                  </p>
                  {heroData.button_show && (
                    <ul className="flex flex-wrap items-center">
                      <motion.li whileHover={{ scale: 1.05 }}>
                        <a
                          href={heroData.button_link}
                          className="inline-flex items-center justify-center rounded-md bg-yellow px-6 py-3 text-center text-base font-medium text-dark hover:text-white hover:bg-green lg:px-7"
                        >
                          {loading ? (
                            <span className="inline-block h-4 w-24 animate-pulse rounded bg-gray-200 dark:bg-dark-2" />
                          ) : (
                            heroData.button_text
                          )}
                        </a>
                      </motion.li>
                    </ul>
                  )}
                </motion.div>
                <div className="clients pt-16">
                  <h6 className="mb-6 flex items-center text-xs font-normal text-body-color dark:text-dark-6">
                    International Qulifications
                    <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                  </h6>

                  <div className="flex items-center space-x-4">
                    <motion.span
                      className="flex w-full items-center justify-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.8, delay: 0.2 }}
                    >
                      <img
                        src={Pearson_logo}
                        alt="pearson logo"
                        className="h-20 object-contain dark:hidden"
                      />
                      <img
                        src={Pearson_logo_white}
                        alt="pearson logo white"
                        className="h-20 object-contain hidden dark:block"
                      />
                    </motion.span>
                    <motion.span
                      className="flex w-full items-center justify-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.8, delay: 0.4 }}
                    >
                      <img
                        src={CIE_logo}
                        alt="cie logo"
                        className="h-20 object-contain dark:hidden"
                      />
                      <img
                        src={CIE_logo_white}
                        alt="cie logo white"
                        className="h-20 object-contain hidden dark:block"
                      />
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <motion.div
                    className="relative z-10 inline-block pt-11 lg:pt-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                  >
                    <span className="group">
                      <motion.img
                        src={loading ? miea_school : heroData.hero_image}
                        alt="hero"
                        style={{ height: "490px", width: "auto" }}
                        className="max-w-full lg:ml-auto transition-transform duration-300 ease-in-out transform group-hover:scale-105 object-cover"
                        whileHover={{ scale: 1.05 }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = miea_school;
                        }}
                      />
                    </span>
                  </motion.div>
                  <motion.span
                    className="absolute -bottom-8 -left-8 z-[-1]"
                    style={{ x: xTransform, y: yTransform }}
                  >
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#21ad5c" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#21ad5c" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#21ad5c" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#21ad5c" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#21ad5c" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#21ad5c" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#21ad5c" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#21ad5c" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#21ad5c" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#21ad5c" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#21ad5c" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#21ad5c" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#21ad5c" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#21ad5c" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#21ad5c" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#21ad5c" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#21ad5c" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#21ad5c" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#21ad5c" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#21ad5c" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#21ad5c" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#21ad5c" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#21ad5c" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#21ad5c" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#21ad5c" />
                    </svg>
                  </motion.span>
                  <motion.span
                    className="absolute -top-8 -right-8 z-[-1]"
                    style={{ x: xTransform, y: yTransform }}
                  >
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#f5c115" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#f5c115" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#f5c115" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#f5c115" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#f5c115" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#f5c115" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#f5c115" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#f5c115" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#f5c115" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#f5c115" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#f5c115" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#f5c115" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#f5c115" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#f5c115" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#f5c115" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#f5c115" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#f5c115" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#f5c115" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#f5c115" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#f5c115" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#f5c115" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#f5c115" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#f5c115" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#f5c115" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#f5c115" />
                    </svg>
                  </motion.span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Services = () => {
  // ServiceCard API data state
  const [serviceCards, setServiceCards] = useState<ServiceCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServiceCards = async () => {
      try {
        setLoading(true);
        const { data: json } = await http.get(`/site-settings/service-cards`);
        if (json?.success && json?.data) {
          setServiceCards(json.data);
        }
      } catch (error) {
        console.error("Failed to fetch service cards:", error);
        setError("Failed to load service cards");
      } finally {
        setLoading(false);
      }
    };

    fetchServiceCards();
  }, []);

  return (
    <section className="bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <motion.div
              className="mx-auto mb-[60px] max-w-[510px] text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-2 block text-lg font-semibold text-green">
                What we Serve
              </span>
              <motion.h2
                className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our Best Programmes
              </motion.h2>
              <motion.p
                className="text-base text-body-color dark:text-dark-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                We offer a wide range of international qualifications programmes
                from lower secondary to advanced level.
              </motion.p>
            </motion.div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {loading ? (
            // Loading skeleton
            <>
              {[1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  className="w-full px-4 sm:w-4/5 md:w-1/2 lg:w-1/3"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div className="group relative mb-8 rounded-xl border border-stroke overflow-hidden p-10 text-center md:px-8 lg:px-6 lg:py-9 xl:px-[43px] xl:py-[45px]">
                    <div className="animate-pulse">
                      <div className="h-64 w-full bg-gray-200 dark:bg-dark-2 rounded-lg mb-4"></div>
                      <div className="h-6 bg-gray-200 dark:bg-dark-2 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 dark:bg-dark-2 rounded"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </>
          ) : error ? (
            // Error state
            <motion.div
              className="w-full px-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <p className="text-red-600 dark:text-red-400">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </motion.div>
          ) : serviceCards.length === 0 ? (
            // Empty state
            <motion.div
              className="w-full px-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <p className="text-gray-600 dark:text-gray-400">
                  No service cards available at the moment.
                </p>
              </div>
            </motion.div>
          ) : (
            // Service cards from API
            serviceCards.map((card, index) => (
              <ServiceCard
                key={card.id || index}
                title={card.title}
                details={card.details}
                image={card.image}
                overlayColor={card.overlay_color}
                link={card.link}
                tag_name={card.tag_name}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  // About MIEA School, Content, Mission & Vision API data state
  const [aboutData, setAboutData] = useState({
    title: "About MIEA School",
    content:
      "MIEA School is a private academic centre in Yangon, Myanmar, offering a wide range of courses for students from Year 7 to Year 13.",
    mission:
      "Our mission is to provide high-quality education and foster academic excellence.",
    vision: "Our vision is to be a leading educational institution in Myanmar.",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        setLoading(true);
        const { data: json } = await http.get(`/site-settings/about-section`);
        if (json?.success && json?.data) {
          const data = json.data;
          setAboutData({
            title: data.title || "About MIEA School",
            content:
              data.content ||
              "MIEA School is a private academic centre in Yangon, Myanmar, offering a wide range of courses for students from Year 7 to Year 13.",
            mission:
              data.mission ||
              "Our mission is to provide high-quality education and foster academic excellence.",
            vision:
              data.vision ||
              "Our vision is to be a leading educational institution in Myanmar.",
          });
        }
      } catch (error) {
        console.error("Failed to fetch about data:", error);
        // Keep default values on error
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <section className="bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full mb-10 text-center"
        >
          <span className="mb-2 block text-lg font-semibold text-green">
            Mission & Vision
          </span>
          <h2 className="mb-3 text-3xl !leading-[1.2] tracking-[-1.2px] text-dark sm:text-5xl md:text-[40px] dark:text-white">
            Empowering your
            <span className="font-bold"> EDUCATION </span>
          </h2>

          <p className="text-lg font-medium text-dark-4 dark:text-dark-6">
            Your journey to excellence in education starts here
          </p>
        </motion.div>

        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              className="relative overflow-hidden rounded-xl max-lg:mb-12 xl:px-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={Graduation2024}
                alt="MIEA 2024 Graduation"
                className="w-full object-cover object-center"
              />
            </motion.div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="xl:px-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mb-11 border-b border-stroke pb-11 dark:border-dark-3"
              >
                <h3 className="mb-5 text-xl font-bold text-green dark:text-white">
                  {loading ? (
                    <span className="inline-block h-6 w-32 animate-pulse rounded bg-gray-200 dark:bg-dark-2" />
                  ) : (
                    aboutData.title
                  )}
                </h3>
                <div className="text-semibold text-lg text-dark text-justify dark:text-white">
                  {loading ? (
                    <>
                      <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-dark-2 mb-2" />
                      <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-dark-2" />
                    </>
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{ __html: aboutData.content }}
                    />
                  )}
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <h3 className="mb-5 text-xl font-bold text-green dark:text-white">
                    Mission
                  </h3>
                  <div className="text-base leading-normal text-dark dark:text-dark-6">
                    {loading ? (
                      <span className="inline-block h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-dark-2" />
                    ) : (
                      <div
                        className="[&_ul]:list-disc [&_ul]:ml-6 [&_ol]:list-decimal [&_ol]:ml-6 [&_li]:mb-1 [&_p]:mb-2 [&_strong]:font-bold"
                        style={{
                          listStyleType: "disc",
                          listStylePosition: "outside",
                        }}
                        dangerouslySetInnerHTML={{ __html: aboutData.mission }}
                      />
                    )}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <h3 className="mb-5 text-xl font-bold text-green dark:text-white">
                    Vision
                  </h3>
                  <div className="text-base leading-normal text-dark dark:text-dark-6">
                    {loading ? (
                      <span className="inline-block h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-dark-2" />
                    ) : (
                      <div
                        className="[&_ul]:list-disc [&_ul]:ml-6 [&_ol]:list-decimal [&_ol]:ml-6 [&_li]:mb-1 [&_p]:mb-2 [&_strong]:font-bold"
                        style={{
                          listStyleType: "disc",
                          listStylePosition: "outside",
                        }}
                        dangerouslySetInnerHTML={{ __html: aboutData.vision }}
                      />
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Moto = () => {
  // Moto section API data state
  const [motoData, setMotoData] = useState({
    lightImage: StuGroup,
    darkImage: StuGroupWhite,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMotoData = async () => {
      try {
        setLoading(true);
        const { data: json } = await http.get(`/site-settings/moto-section`);
        if (json?.success && json?.data) {
          const data = json.data;
          setMotoData({
            lightImage: data.light_image
              ? `http://project_laravel_miea_portal.test${data.light_image}`
              : StuGroup,
            darkImage: data.dark_image
              ? `http://project_laravel_miea_portal.test${data.dark_image}`
              : StuGroupWhite,
          });
        }
      } catch (error) {
        console.error("Failed to fetch moto data:", error);
        // Keep default values on error
      } finally {
        setLoading(false);
      }
    };

    fetchMotoData();
  }, []);

  return (
    <section className="overflow-hidden bg-white dark:bg-dark">
      <div className="container mx-auto">
        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0, scale: 1.2 }} // Start slightly zoomed-in
          whileInView={{ opacity: 1, scale: 1 }} // Zoom-out to normal size
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {loading ? (
            <div className="w-full h-96 bg-gray-200 dark:bg-dark-2 animate-pulse rounded-lg"></div>
          ) : (
            <>
              <img
                src={motoData.lightImage}
                alt="moto image light"
                className="w-full object-center dark:hidden"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = StuGroup;
                }}
              />
              <img
                src={motoData.darkImage}
                alt="moto image dark"
                className="w-full object-center hidden dark:block"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = StuGroupWhite;
                }}
              />
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const Achievements = () => {
  // Achievement section API data state
  const [achievementData, setAchievementData] = useState({
    graduated_students: 1682,
    qualified_teachers: 12,
    student_teacher_ratio: "15:1",
    courses_offered: 102,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievementData = async () => {
      try {
        setLoading(true);
        const { data: json } = await http.get(`/site-settings/achievements`);
        if (json?.success && json?.data) {
          const data = json.data;
          setAchievementData({
            graduated_students: data.graduated_students || 1682,
            qualified_teachers: data.qualified_teachers || 12,
            student_teacher_ratio: data.student_teacher_ratio || "15:1",
            courses_offered: data.courses_offered || 102,
          });
        }
      } catch (error) {
        console.error("Failed to fetch achievement data:", error);
        // Keep default values on error
      } finally {
        setLoading(false);
      }
    };

    fetchAchievementData();
  }, []);

  return (
    <section className="bg-gray-4 py-20 dark:bg-dark-2 lg:py-[120px]">
      <div className="mx-auto px-4 sm:container">
        <div className="-mx-4 flex flex-wrap items-center">
          <motion.div
            className="w-full px-4 lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="mb-12 max-w-[560px] lg:mb-8">
              <motion.span
                className="mb-4 inline-block rounded bg-yellow px-3 py-1 text-base font-medium text-black"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Our Impact in Numbers
              </motion.span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-green dark:text-white md:text-[40px]">
                MIEA by the Numbers
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Discover our journey through key statistics that showcase our
                commitment to educational excellence.
              </p>
              <p className="text-base text-body-color dark:text-dark-6">
                We continue to strive for growth and are still counting our
                achievements.
              </p>
            </div>
          </motion.div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="-mx-3 flex flex-wrap md:-mx-4">
              <StatsItem
                user={loading ? 0 : achievementData.graduated_students}
                title="Graduated Students"
              />
              <StatsItem
                user={loading ? 0 : achievementData.qualified_teachers}
                title="Qualified Teachers"
              />
              <StatsItem
                user={loading ? 0 : achievementData.student_teacher_ratio}
                title="Student-Teacher Ratio"
              />
              <StatsItem
                user={loading ? 0 : achievementData.courses_offered}
                title="No. of Courses Offering"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsItem: React.FC<StatsItemProps> = ({ user, title, suffix = "" }) => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [displayValue, setDisplayValue] = useState<number | string>(0);

  useEffect(() => {
    if (inView) {
      // If user is a string (like "15:1"), display it directly
      if (typeof user === "string") {
        setDisplayValue(user);
        return;
      }

      // If user is a number, animate it
      let start = 0;
      const duration = 2000; // Animation duration in ms
      const increment = Math.ceil(user / (duration / 30)); // Adjust speed
      const interval = setInterval(() => {
        start += increment;
        if (start >= user) {
          setDisplayValue(user);
          clearInterval(interval);
        } else {
          setDisplayValue(start);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [inView, user]);

  return (
    <motion.div
      className="w-full px-3 xs:w-1/2 md:px-4"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="group mb-6 rounded-[5px] bg-white px-4 py-6 text-center shadow-three hover:bg-green dark:bg-dark md:mb-8">
        <h4 className="mb-1 text-2xl font-bold leading-tight text-dark group-hover:text-white dark:text-white sm:text-[28px]">
          {displayValue}
          {suffix}
        </h4>
        <p className="text-base text-body-color group-hover:text-white dark:text-dark-6">
          {title}
        </p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const swiperRef = useRef<any>(null);

  // Testimonials API data state
  const [testimonialsData, setTestimonialsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonialsData = async () => {
      try {
        setLoading(true);
        const { data: json } = await http.get(`/testimonials`);
        if (json?.success && json?.data) {
          setTestimonialsData(json.data);
        }
      } catch (error) {
        console.error("Failed to fetch testimonials data:", error);
        setError("Failed to load testimonials");
        // Fallback to default testimonials
        setTestimonialsData([
          {
            id: 1,
            name: "Aung Aung",
            role: "Student @ Class of 2021",
            content:
              "I have been a student at MIEA since 2021 and I have loved every moment of it. The teachers are so helpful and the students are so friendly. I have made so many friends and I have learned so much.",
            image:
              "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-01.png",
          },
          {
            id: 2,
            name: "May Myat",
            role: "Parent @ Student",
            content:
              "The teachers are so helpful and the students are so friendly. I have made so many friends and I have learned so much.",
            image:
              "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-02.png",
          },
          {
            id: 3,
            name: "David Thant",
            role: "Student @ Class of 2022",
            content:
              "Teacher at MIEA since 2021 and I have loved every moment of it. The students are so friendly and the teachers are so helpful. I have made so many friends and I have learned so much.",
            image:
              "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-03.png",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonialsData();
  }, []);

  return (
    <>
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <motion.div
                className="mx-auto mb-[60px] max-w-[510px] text-center"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.span
                  className="mb-2 block text-lg font-semibold text-green"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Testimonials
                </motion.span>
                <motion.h2
                  className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  What our students and parents say
                </motion.h2>
              </motion.div>
            </div>
          </div>

          {loading ? (
            // Loading skeleton
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm animate-pulse"
                  >
                    <div className="h-4 bg-gray-200 dark:bg-dark-2 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-dark-2 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-dark-2 rounded w-3/4"></div>
                    <div className="flex items-center mt-4">
                      <div className="h-12 w-12 bg-gray-200 dark:bg-dark-2 rounded-full mr-4"></div>
                      <div>
                        <div className="h-4 bg-gray-200 dark:bg-dark-2 rounded w-24 mb-1"></div>
                        <div className="h-3 bg-gray-200 dark:bg-dark-2 rounded w-32"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : error ? (
            // Error state
            <div className="text-center">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-red-600 dark:text-red-400">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : testimonialsData.length === 0 ? (
            // Empty state
            <div className="text-center">
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-gray-600 dark:text-gray-400">
                  No testimonials available at the moment.
                </p>
              </div>
            </div>
          ) : (
            // Testimonials from API
            <>
              <div className="w-full overflow-hidden">
                <Swiper
                  breakpoints={{
                    640: {
                      width: 640,
                      slidesPerView: 1,
                    },
                    768: {
                      width: 768,
                      slidesPerView: 2,
                    },
                    1024: {
                      width: 1024,
                      slidesPerView: 2,
                    },
                    1280: {
                      width: 1280,
                      slidesPerView: 3,
                    },
                  }}
                  autoplay={false}
                  modules={[Autoplay, Navigation]}
                  navigation={{
                    nextEl: ".testimonial-next",
                    prevEl: ".testimonial-prev",
                  }}
                  loop={testimonialsData.length > 1}
                  spaceBetween={30}
                  centeredSlides={false}
                  watchSlidesProgress={true}
                  allowTouchMove={true}
                  ref={swiperRef}
                  className="w-full"
                >
                  {testimonialsData.map((testimonial, index) => (
                    <SwiperSlide key={testimonial.id || index}>
                      <SingleTestimonial
                        details={testimonial.content}
                        image={testimonial.image}
                        name={testimonial.name}
                        position={testimonial.role}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center space-x-4 mt-8">
                <button className="testimonial-prev flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 shadow-lg transition-all duration-300 hover:bg-green hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button className="testimonial-next flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 shadow-lg transition-all duration-300 hover:bg-green hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

const SingleTestimonial: React.FC<TestimonialProps> = ({
  image,
  details,
  name,
  position,
}) => {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-full pb-16">
        {/* Closing quotation mark - bottom right only */}
        <div
          className="absolute bottom-2 right-0 text-green dark:text-yellow select-none pointer-events-none z-20"
          style={{
            fontSize: "60pt",
            transform: "translate(5px, -40px)",
          }}
        >
          <FontAwesomeIcon icon={faQuoteRight} />
        </div>

        <div className="mb-10 bg-white p-8 shadow-testimonial-5 dark:bg-dark-2 dark:shadow-box-dark lg:px-6 lg:py-8 xl:p-8 relative border-2 border-green/20 rounded-xl">
          <p className="mb-6 text-base text-body-color dark:text-dark-6 relative z-10">
            {details}
          </p>
          <div className="flex items-center relative z-10">
            <div className="mr-4 h-[50px] w-full max-w-[50px]">
              <img src={image} alt="image" className="w-full rounded-full" />
            </div>
            <div className="w-full">
              <h5 className="mb-0.5 text-sm font-semibold text-dark dark:text-white">
                {name}
              </h5>
              <p className="text-xs text-secondary-color dark:text-dark-6">
                {position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Handler hook for when Outside click dropdown close
let useClickOutside = (handler: () => void) => {
  let domNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let maybeHandler = (event: MouseEvent) => {
      if (!domNode.current?.contains(event.target as Node)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};
// Handler hook for when Outside click dropdown close End Code====>>

const Video = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  let domNode = useClickOutside(() => {
    setVideoOpen(false);
  });

  return (
    <section ref={ref} className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          display: inView ? "block" : "none",
        }}
      >
        <source src={miea_school_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div
        className="relative z-10 flex items-center justify-center py-32"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.h2
            className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            School Life at MIEA
          </motion.h2>

          <motion.p
            className="mb-8 text-lg text-white sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our student and teacher activities at MIEA.
          </motion.p>

          <motion.button
            onClick={() => setVideoOpen(true)}
            className="group mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white bg-opacity-20 backdrop-blur-sm text-white transition-all duration-300 hover:bg-opacity-30 hover:scale-110 md:h-24 md:w-24"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
          >
            <FaPlay className="ml-1 text-2xl transition-transform duration-300 group-hover:scale-110 md:text-3xl" />
          </motion.button>
        </div>
      </div>

      {/* Modal Dialog */}
      {videoOpen && (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative mx-auto w-1/2 max-w-2xl rounded-lg bg-white shadow-2xl sm:w-3/4 md:w-1/2 lg:w-1/2">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
              <h3 className="text-base text-center w-full font-semibold text-gray-900">
                School Life at MIEA
              </h3>
              <button
                onClick={() => setVideoOpen(false)}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
              >
                <svg viewBox="0 0 16 15" className="h-3 w-3 fill-current">
                  <path d="M3.37258 1.27L8.23258 6.13L13.0726 1.29C13.1574 1.19972 13.2596 1.12749 13.373 1.07766C13.4864 1.02783 13.6087 1.00141 13.7326 1C13.9978 1 14.2522 1.10536 14.4397 1.29289C14.6272 1.48043 14.7326 1.73478 14.7326 2C14.7349 2.1226 14.7122 2.24439 14.6657 2.35788C14.6193 2.47138 14.5502 2.57419 14.4626 2.66L9.57258 7.5L14.4626 12.39C14.6274 12.5512 14.724 12.7696 14.7326 13C14.7326 13.2652 14.6272 13.5196 14.4397 13.7071C14.2522 13.8946 13.9978 14 13.7326 14C13.6051 14.0053 13.478 13.984 13.3592 13.9375C13.2404 13.8911 13.1326 13.8204 13.0426 13.73L8.23258 8.87L3.38258 13.72C3.29809 13.8073 3.19715 13.8769 3.08559 13.925C2.97402 13.9731 2.85405 13.9986 2.73258 14C2.46737 14 2.21301 13.8946 2.02548 13.7071C1.83794 13.5196 1.73258 13.2652 1.73258 13C1.73025 12.8774 1.753 12.7556 1.79943 12.6421C1.84586 12.5286 1.91499 12.4258 2.00258 12.34L6.89258 7.5L2.00258 2.61C1.83777 2.44876 1.74112 2.23041 1.73258 2C1.73258 1.73478 1.83794 1.48043 2.02548 1.29289C2.21301 1.10536 2.46737 1 2.73258 1C2.97258 1.003 3.20258 1.1 3.37258 1.27Z" />
                </svg>
              </button>
            </div>

            {/* Video Content */}
            <div className="p-4">
              <video
                className="h-auto w-full rounded-lg"
                controls
                preload="metadata"
                poster=""
                autoPlay
              >
                <source src={miea_school_video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const RecentNews = () => {
  return (
    <>
      <section className="bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <motion.div
              className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="mb-2 block text-lg font-semibold text-green dark:text-green-400"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Blogs
              </motion.span>
              <motion.h2
                className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Our Recent News
              </motion.h2>
              <motion.p
                className="text-base text-body-color dark:text-dark-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Stay updated with the latest news and events from MIEA.
              </motion.p>
            </motion.div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <motion.div
              className="w-full px-4 lg:w-8/12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <BlogCard
                subtitle="Digital Marketing"
                title="How to use Facebook ads to sell online courses"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/9WvDZHw/image-01.png"
                date="2024-12-22"
                category="Education"
                tags={["marketing", "online-course", "facebook"]}
              />
              <BlogCard
                subtitle="Digital Marketing"
                title="The Data-Driven Approach to Understanding."
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/X44PwNn/image-02.jpg"
                date="2024-12-15"
                category="Technology"
                tags={["data", "analysis", "research"]}
              />
            </motion.div>

            <motion.div
              className="w-full px-4 lg:w-4/12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="relative mb-8 bg-gradient-to-br from-green-600 to-green-800 dark:from-green-700 dark:to-green-900 p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <BlogSideCardItem
                  subtitle="Graphics Design"
                  title="Design is a Plan or The Construction of an Object."
                  description="Lorem Ipsum is simply dummy text of the printing and industry page when looking at its layout."
                />
                <BlogSideCardItem
                  subtitle="Graphics Design"
                  title="How to use Facebook ads to sell online courses"
                  description="Lorem Ipsum is simply dummy text of the printing and industry page when looking at its layout."
                />

                <span className="absolute right-0 top-0">
                  <svg
                    width="46"
                    height="45"
                    viewBox="0 0 46 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="1.39737"
                      cy="43.6026"
                      r="1.39737"
                      transform="rotate(-90 1.39737 43.6026)"
                      fill="white"
                      fillOpacity="0.44"
                    ></circle>
                    <circle
                      cx="1.39737"
                      cy="6.9913"
                      r="1.39737"
                      transform="rotate(-90 1.39737 6.9913)"
                      fill="white"
                      fillOpacity="0.44"
                    ></circle>
                    <circle
                      cx="13.6943"
                      cy="43.6026"
                      r="1.39737"
                      transform="rotate(-90 13.6943 43.6026)"
                      fill="white"
                      fillOpacity="0.44"
                    ></circle>
                    <circle
                      cx="13.6943"
                      cy="6.9913"
                      r="1.39737"
                      transform="rotate(-90 13.6943 6.9913)"
                      fill="white"
                      fillOpacity="0.44"
                    ></circle>
                    <circle
                      cx="25.9911"
                      cy="43.6026"
                      r="1.39737"
                      transform="rotate(-90 25.9911 43.6026)"
                      fill="white"
                      fillOpacity="0.44"
                    ></circle>
                    <circle
                      cx="25.9911"
                      cy="6.9913"
                      r="1.39737"
                      transform="rotate(-90 25.9911 6.9913)"
                      fill="white"
                      fillOpacity="0.44"
                    ></circle>
                    <circle
                      cx="38.288"
                      cy="43.6026"
                      r="1.39737"
                      transform="rotate(-90 38.288 43.6026)"
                      fill="white"
                      fillOpacity="0.44"
                    ></circle>
                    <circle
                      cx="38.288"
                      cy="6.9913"
                      r="1.39737"
                      transform="rotate(-90 38.288 6.9913)"
                      fill="white"
                      fillOpacity="0.44"
                    ></circle>
                    <circle
                      cx="1.39737"
                      cy="31.3057"
                      r="1.39737"
                      transform="rotate(-90 1.39737 31.3057)"
                      fill="white"
                      fillOpacity="0.44"
                    ></circle>
                    <circle
                      cx="13.6943"
                      cy="31.3057"
                      r="1.39737"
                      transform="rotate(-90 13.6943 31.3057)"
                      fill="white"
                      fillOpacity="0.44"
                    ></circle>
                    <circle
                      cx="25.9911"
                      cy="31.3057"
                      r="1.39737"
                      transform="rotate(-90 25.9911 31.3057)"
                      fill="white"
                      fillOpacity="0.44"
                    ></circle>
                    <circle
                      cx="38.288"
                      cy="31.3057"
                      r="1.39737"
                      transform="rotate(-90 38.288 31.3057)"
                      fill="white"
                      fillOpacity="0.44"
                    ></circle>
                    <circle
                      cx="1.39737"
                      cy="19.0086"
                      r="1.39737"
                      transform="rotate(-90 1.39737 19.0086)"
                      fill="white"
                      fillOpacity="0.44"
                    ></circle>
                    <circle
                      cx="13.6943"
                      cy="19.0086"
                      r="1.39737"
                      transform="rotate(-90 13.6943 19.0086)"
                      fill="white"
                      fillOpacity="0.44"
                    ></circle>
                    <circle
                      cx="25.9911"
                      cy="19.0086"
                      r="1.39737"
                      transform="rotate(-90 25.9911 19.0086)"
                      fill="white"
                      fillOpacity="0.44"
                    ></circle>
                    <circle
                      cx="38.288"
                      cy="19.0086"
                      r="1.39737"
                      transform="rotate(-90 38.288 19.0086)"
                      fill="white"
                      fillOpacity="0.44"
                    ></circle>
                  </svg>
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

const Partners = () => {
  const partnersData = [
    {
      name: "Pearson Edexcel",
      logo: Pearson_logo,
      link: "https://qualifications.pearson.com/",
    },
    {
      name: "Cambridge Assessment International Education",
      logo: CIE_logo,
      link: "https://www.cambridgeinternational.org/",
    },
    {
      name: "iQuals",
      logo: iQuals_logo,
      link: "https://www.iquals.org/",
    },
    {
      name: "British Council Myanmar",
      logo: BC_Myanmar_logo,
      link: "https://www.britishcouncil.org.mm/",
    },
    {
      name: "TEDx",
      logo: TEDx_logo,
      link: "https://www.ted.com/about/programs-initiatives/tedx-program",
    },
  ];

  const swiperRef = useRef<any>(null);

  return (
    <section className="bg-white py-16 lg:py-20 dark:bg-dark">
      <div className="container mx-auto">
        <div className="w-full px-4">
          <motion.div
            className="mx-auto mb-12 max-w-[510px] text-center"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="mb-2 block text-lg font-semibold text-green dark:text-green-400"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Trusted By
            </motion.span>
            <motion.h2
              className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[36px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Our Partners
            </motion.h2>
            <motion.p
              className="text-base text-body-color dark:text-dark-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Collaborating with world-class organizations to deliver excellence
              in education.
            </motion.p>
          </motion.div>
        </div>

        <div className="w-full overflow-hidden">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            autoplay={false}
            modules={[Autoplay, Navigation]}
            navigation={{
              nextEl: ".partners-next",
              prevEl: ".partners-prev",
            }}
            loop={true}
            ref={swiperRef}
            className="w-full"
          >
            {partnersData.map((partner, index) => (
              <SwiperSlide key={index}>
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-28 items-center justify-center rounded-lg border border-stroke bg-white px-6 py-6 hover:border-green hover:shadow-lg transition-all duration-300 dark:bg-gray-100"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 w-full object-contain"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4 mt-4">
          <button className="partners-prev flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 shadow-lg transition-all duration-300 hover:bg-green hover:text-white">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="partners-next flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 shadow-lg transition-all duration-300 hover:bg-green hover:text-white">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  const [isUnderMaintenance, setIsUnderMaintenance] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkMaintenanceStatus = async () => {
      try {
        const { data: json } = await http.get(`/site-settings/homepage`);
        const d = json?.data || {};
        setIsUnderMaintenance(Boolean(d.page_under_maintenance));
      } catch (error) {
        console.error("Failed to fetch maintenance status:", error);
        // On error, assume not under maintenance
        setIsUnderMaintenance(false);
      } finally {
        setLoading(false);
      }
    };

    checkMaintenanceStatus();
  }, []);

  if (loading) {
    return (
      <section className="relative z-10 overflow-hidden bg-white dark:bg-dark">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap items-center justify-center py-24 md:py-32 lg:py-40">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[650px] text-center">
                <div className="mx-auto h-6 w-48 animate-pulse rounded bg-gray-200 dark:bg-dark-2" />
                <div className="mx-auto mt-4 h-4 w-96 animate-pulse rounded bg-gray-200 dark:bg-dark-2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (isUnderMaintenance) {
    return <UnderConstructionPage showGoHomeButton={false} />;
  }

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Moto />
      <Achievements />
      <Testimonials />
      <Video />
      <RecentNews />
      <Partners />
    </>
  );
};

export default Home;
