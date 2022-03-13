import React from "react";
import Features from "../src/components/Features/Features";
import { Header } from "../src/components/Header/Header";
import Hero from "../src/components/Hero/Hero";
import Navbar from "../src/components/Navbar/Navbar";

const home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
    </>
  );
};

export default home;
