import React from "react";
import Hero from "../components/HomePage/Hero";
import Services from "../components/HomePage/Services";
import RecentNews from "../components/HomePage/RecentNews";
import Features from "../components/HomePage/Features";
import Testimonials from "../components/HomePage/Testimonials";
import About from "../components/HomePage/About";
import Achievements from "../components/HomePage/Achievements";
import Video from "../components/HomePage/Video";

function Home() {
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
}

export default Home;
