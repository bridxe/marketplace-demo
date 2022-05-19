import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section2 />
      <Section3 />
    </div>
  );
}
