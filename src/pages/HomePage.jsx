import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import RecentNews from "../components/RecentNews";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Achievements from "../components/Achievements";
import Video from "../components/Video";

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
