import React from "react";
import Hero from "../components/Home/Hero";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";
import Section5 from "../components/Home/Section5";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Navigation from "../components/Navigation";

export default function HomePage() {
  return (
    <div>
      <Hero />

      <Slider />

      <Section3 />

      <Section4 />

      <Section5 />

      <Footer />
    </div>
  );
}
