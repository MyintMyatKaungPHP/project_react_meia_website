import React, { useState, useEffect, useCallback, useRef } from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaBullhorn, FaChartLine, FaPaintBrush } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import images
import Pearson_logo from "../assets/images/Pearson_logo.png";
import Pearson_logo_white from "../assets/images/Pearson_logo_white.png";
import CIE_logo from "../assets/images/CIE_logo.png";
import CIE_logo_white from "../assets/images/CIE_logo_white.png";
import miea_school from "../assets/images/miea_school.png";
import StuGroup from "../assets/images/stugroup.png";
import StuGroupWhite from "../assets/images/stugroup_white.png";

// Interfaces
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  details: string;
}

interface StatsItemProps {
  user: number;
  title: string;
  suffix?: string;
}

interface TestimonialProps {
  image: string;
  details: string;
  name: string;
  position: string;
}

interface BlogCardProps {
  image: string;
  CardSubTitle: string;
  CardTitle: string;
  CardDescription: string;
}

interface BlogSideCardItemProps {
  subtitle: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, details }) => {
  return (
    <motion.div
      className="w-full px-4 sm:w-4/5 md:w-1/2 lg:w-1/3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="group relative mb-8 rounded-xl border border-stroke bg-white p-10 text-center dark:border-dark-3 dark:bg-dark-2 md:px-8 lg:px-6 lg:py-9 xl:px-[43px] xl:py-[45px]"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <motion.div
          className="relative z-10 mx-auto mb-10 inline-flex h-11 items-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "backOut" }}
        >
          <span className="absolute -right-3 top-0 z-[-1] h-[34px] w-[34px] rounded-full bg-primary opacity-10"></span>
          {icon}
        </motion.div>
        <motion.h4
          className="mb-[14px] text-2xl font-bold text-dark dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h4>
        <motion.p
          className="text-body-color dark:text-dark-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {details}
        </motion.p>
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
                    MIEA School
                  </h1>
                  <h2 className="mb-8 text-dark dark:text-white xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[40px]">
                    <Typewriter
                      words={["A Level and IGCSE Centre"]}
                      loop={0}
                      cursor
                      cursorStyle="_"
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </h2>
                  <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6 xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
                    We are committed to providing the best education for
                    students.
                  </p>
                  <ul className="flex flex-wrap items-center">
                    <motion.li whileHover={{ scale: 1.05 }}>
                      <a
                        href="/#"
                        className="inline-flex items-center justify-center rounded-md bg-yellow px-6 py-3 text-center text-base font-medium text-dark hover:text-white hover:bg-green lg:px-7"
                      >
                        Get Started
                      </a>
                    </motion.li>
                  </ul>
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
                        src={miea_school}
                        alt="hero"
                        className="max-w-full lg:ml-auto transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                        whileHover={{ scale: 1.05 }}
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
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
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
                Our Best Services
              </motion.h2>
              <motion.p
                className="text-base text-body-color dark:text-dark-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </motion.p>
            </motion.div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <ServiceCard
            title="Marketing Solutions"
            details="Lorem Ipsum is simply dummy text of the printing and industry."
            icon={<FaBullhorn className="text-red text-4xl" />}
          />
          <ServiceCard
            title="Business Analytics"
            details="Lorem Ipsum is simply dummy text of the printing and industry."
            icon={<FaChartLine className="text-green text-4xl" />}
          />
          <ServiceCard
            title="UX & UI Design"
            details="Lorem Ipsum is simply dummy text of the printing and industry."
            icon={<FaPaintBrush className="text-blue text-4xl" />}
          />
        </div>
      </div>
    </section>
  );
};

const Features = () => {
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
                src="https://i.ibb.co/bv6mt6w/image-1.jpg"
                alt="service image"
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
                  MIEA
                </h3>
                <p className="text-semibold text-lg text-dark dark:text-white">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a distribution
                  of letters.
                </p>
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
                  <p className="text-base leading-normal text-dark dark:text-dark-6">
                    Lorem ipsum dolor sit amet sitim consectetur elit estibulum
                    tincidunt rutrum.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <h3 className="mb-5 text-xl font-bold text-green dark:text-white">
                    Vision
                  </h3>
                  <p className="text-base leading-normal text-dark dark:text-dark-6">
                    Lorem ipsum dolor sit amet sitim consectetur elit estibulum
                    tincidunt rutrum.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="overflow-hidden bg-white dark:bg-dark">
      <div className="container mx-auto">
        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0, scale: 1.2 }} // Start slightly zoomed-in
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
    </section>
  );
};

const Achievements = () => {
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
                Some Fun Facts
              </motion.span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-green dark:text-white md:text-[40px]">
                Our achievements
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </motion.div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="-mx-3 flex flex-wrap md:-mx-4">
              <StatsItem user={56825} title="Clients" />
              <StatsItem user={35574} title="Commits" />
              <StatsItem user={570} title="Team Members" />
              <StatsItem user={50} title="First Year of Use" suffix="%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsItem: React.FC<StatsItemProps> = ({ user, title, suffix = "" }) => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // Animation duration in ms
      const increment = Math.ceil(user / (duration / 30)); // Adjust speed
      const interval = setInterval(() => {
        start += increment;
        if (start >= user) {
          setCount(user);
          clearInterval(interval);
        } else {
          setCount(start);
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
          {count}
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
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const swiperRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  }, []);

  const handleNext = useCallback(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  }, []);

  return (
    <>
      <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Testimonials
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  What our Clients Says
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <Swiper
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2.2,
              },
              1024: {
                width: 1024,
                slidesPerView: 2.2,
              },
              1280: {
                width: 1280,
                slidesPerView: 3,
              },
            }}
            loop={true}
            spaceBetween={30}
            ref={swiperRef}
            className="!overflow-visible"
          >
            <SwiperSlide>
              <SingleTestimonial
                details="Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community. Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community."
                image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-01.png"
                name="1"
                position="Founder @ Rolex"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleTestimonial
                details="Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community."
                image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-02.png"
                name="2"
                position="Founder @ Ayro UI"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleTestimonial
                details="Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community."
                image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-03.png"
                name="3"
                position="Founder @ Trorex"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleTestimonial
                details="Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community."
                image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-01.png"
                name="4"
                position="Founder @ Rolex"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleTestimonial
                details="Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community."
                image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-02.png"
                name="5"
                position="Founder @ Ayro UI"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleTestimonial
                details="Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community."
                image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-03.png"
                name="6"
                position="Founder @ Trorex"
              />
            </SwiperSlide>
          </Swiper>
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
  const starIcon = (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
        fill="#FBB040"
      />
    </svg>
  );
  return (
    <div className="relative flex justify-center">
      <div className="relative w-full pb-16">
        <div className="mb-10 bg-white p-8 shadow-testimonial-5 dark:bg-dark-2 dark:shadow-box-dark lg:px-6 lg:py-8 xl:p-8">
          <div className="mb-5 flex items-center">
            <span className="mr-1">{starIcon}</span>
            <span className="mr-1">{starIcon}</span>
            <span className="mr-1">{starIcon}</span>
            <span className="mr-1">{starIcon}</span>
            <span className="mr-1">{starIcon}</span>
          </div>
          <p className="mb-6 text-base text-body-color dark:text-dark-6">
            {details}
          </p>
          <div className="flex items-center">
            <div className="mr-4 h-[50px] w-full max-w-[50px]">
              <img src={image} alt="image" className="w-full" />
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

  let domNode = useClickOutside(() => {
    setVideoOpen(false);
  });

  return (
    <section className="bg-white dark:bg-dark">
      <div ref={domNode} className="mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative z-10 overflow-hidden">
              <img
                src="https://cdn.tailgrids.com/2.0/image/marketing/images/videos/image-03.jpg"
                alt="image"
                className="absolute left-0 top-0 z-[-1] h-full w-full object-cover object-center"
              />
              <div className="relative z-10 bg-[#090E34] bg-opacity-90 px-8 py-20 md:py-[120px]">
                <div className="mx-auto max-w-[500px] text-center">
                  <h2 className="mb-5 text-3xl font-bold leading-[1.2] text-white sm:text-4xl md:text-[40px]">
                    Watch Our Intro Video
                  </h2>
                  <span className="mx-auto mb-4 block h-1 w-[60px] rounded bg-white"></span>
                  <p className="mb-[50px] text-base text-white md:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin at quam fringilla, scelerisque nisl diam.
                  </p>
                  <button
                    onClick={() => setVideoOpen(true)}
                    className="z-20 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary dark:bg-dark-3 dark:text-white md:h-[100px] md:w-[100px]"
                  >
                    <svg
                      width="23"
                      height="27"
                      viewBox="0 0 23 27"
                      className="fill-current"
                    >
                      <path d="M22.5 12.634C23.1667 13.0189 23.1667 13.9811 22.5 14.366L2.25 26.0574C1.58333 26.4423 0.750001 25.9611 0.750001 25.1913L0.750002 1.80866C0.750002 1.03886 1.58334 0.557731 2.25 0.942631L22.5 12.634Z" />
                    </svg>
                  </button>
                </div>
                <div>
                  <span className="absolute bottom-0 left-0 z-[-1]">
                    <svg
                      width="957"
                      height="550"
                      viewBox="0 0 957 550"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="-70.8242"
                        y="490.75"
                        width="1080.13"
                        height="373.353"
                        transform="rotate(-45 -70.8242 490.75)"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="-70.8242"
                          y1="678.647"
                          x2="1009.31"
                          y2="678.647"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3056D3" stopOpacity="0.26" />
                          <stop
                            offset="1"
                            stopColor="#3056D3"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute bottom-0 right-0 z-[-1]">
                    <svg
                      width="431"
                      height="320"
                      viewBox="0 0 431 320"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="385.004"
                        y="501.935"
                        width="544.154"
                        height="165.364"
                        transform="rotate(-135 385.004 501.935)"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="385.004"
                          y1="585.157"
                          x2="929.158"
                          y2="585.157"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3056D3" stopOpacity="0.36" />
                          <stop
                            offset="1"
                            stopColor="#3056D3"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {videoOpen && (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-70">
          <div className="mx-auto w-full max-w-[550px] bg-white">
            <>
              <iframe
                className="h-[320px] w-full"
                src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1"
              />
            </>
          </div>

          <button
            onClick={() => setVideoOpen(false)}
            className="absolute right-0 top-0 flex h-20 w-20 cursor-pointer items-center justify-center text-body-color hover:bg-black"
          >
            <svg viewBox="0 0 16 15" className="h-8 w-8 fill-current">
              <path d="M3.37258 1.27L8.23258 6.13L13.0726 1.29C13.1574 1.19972 13.2596 1.12749 13.373 1.07766C13.4864 1.02783 13.6087 1.00141 13.7326 1C13.9978 1 14.2522 1.10536 14.4397 1.29289C14.6272 1.48043 14.7326 1.73478 14.7326 2C14.7349 2.1226 14.7122 2.24439 14.6657 2.35788C14.6193 2.47138 14.5502 2.57419 14.4626 2.66L9.57258 7.5L14.4626 12.39C14.6274 12.5512 14.724 12.7696 14.7326 13C14.7326 13.2652 14.6272 13.5196 14.4397 13.7071C14.2522 13.8946 13.9978 14 13.7326 14C13.6051 14.0053 13.478 13.984 13.3592 13.9375C13.2404 13.8911 13.1326 13.8204 13.0426 13.73L8.23258 8.87L3.38258 13.72C3.29809 13.8073 3.19715 13.8769 3.08559 13.925C2.97402 13.9731 2.85405 13.9986 2.73258 14C2.46737 14 2.21301 13.8946 2.02548 13.7071C1.83794 13.5196 1.73258 13.2652 1.73258 13C1.73025 12.8774 1.753 12.7556 1.79943 12.6421C1.84586 12.5286 1.91499 12.4258 2.00258 12.34L6.89258 7.5L2.00258 2.61C1.83777 2.44876 1.74112 2.23041 1.73258 2C1.73258 1.73478 1.83794 1.48043 2.02548 1.29289C2.21301 1.10536 2.46737 1 2.73258 1C2.97258 1.003 3.20258 1.1 3.37258 1.27Z" />
            </svg>
          </button>
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
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Blogs
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Recent News
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <BlogCard
                CardSubTitle="Digital Marketing"
                CardTitle="How to use Facebook ads to sell online courses"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/9WvDZHw/image-01.png"
              />
              <BlogCard
                CardSubTitle="Digital Marketing"
                CardTitle="The Data-Driven Approach to Understanding."
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/X44PwNn/image-02.jpg"
              />
            </div>

            <div className="w-full px-4 lg:w-4/12">
              <div className="relative mb-8 bg-primary p-8">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  CardSubTitle,
  CardTitle,
  CardDescription,
}) => {
  return (
    <>
      <div className="mb-8 bg-gray dark:bg-dark-2">
        <div className="w-full items-stretch md:-mx-4 md:flex">
          <div className="w-full md:w-1/2 md:px-4">
            <div className="h-full w-full">
              <img
                src={image}
                alt="image"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="w-full px-8 md:w-1/2 md:px-4">
            <div className="w-full py-8">
              <span className="mb-2 inline-block text-sm font-medium tracking-wide text-primary">
                {CardSubTitle}
              </span>
              <h3>
                <a
                  href="#"
                  className="mb-3 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white"
                >
                  {CardTitle}
                </a>
              </h3>
              <p className="mb-7 text-base text-body-color dark:text-dark-6">
                {CardDescription}
              </p>
              <a
                href="#"
                className="group inline-flex items-center text-sm font-medium text-body-color duration-300 hover:text-primary dark:text-dark-6"
              >
                Read More
                <span className="ml-1 duration-300 group-hover:translate-x-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2 8.54995L10.3781 2.6437C10.125 2.39058 9.73125 2.39058 9.47812 2.6437C9.225 2.89683 9.225 3.29058 9.47812 3.5437L14.2031 8.35308H2.25C1.9125 8.35308 1.63125 8.63433 1.63125 8.97183C1.63125 9.30933 1.9125 9.6187 2.25 9.6187H14.2594L9.47812 14.4843C9.225 14.7375 9.225 15.1312 9.47812 15.3843C9.59062 15.4968 9.75937 15.5531 9.92812 15.5531C10.0969 15.5531 10.2656 15.4968 10.3781 15.3562L16.2 9.44995C16.4531 9.19683 16.4531 8.80308 16.2 8.54995Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BlogSideCardItem: React.FC<BlogSideCardItemProps> = ({
  subtitle,
  title,
  description,
}) => {
  return (
    <div className="mb-8">
      <span className="mb-2 inline-block text-sm font-medium text-white">
        {subtitle}
      </span>
      <h3>
        <a
          href="#"
          className="mb-3 inline-block text-lg font-semibold text-white hover:text-opacity-80"
        >
          {title}
        </a>
      </h3>
      <p className="text-base text-white text-opacity-70">{description}</p>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <About />
      <Achievements />
      <Testimonials />
      <Video />
      <RecentNews />
    </>
  );
};

export default Home;
