import React from "react";
import Features from "../src/components/Features/Features";
import Footer from "../src/components/Footer/Footer";
import { Header } from "../src/components/Header/Header";
import Hero from "../src/components/Hero/Hero";

import { RecentWorks } from "../src/components/RecentWorks/RecentWorks";

const home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <RecentWorks />
      <Footer />
    </>
  );
};

export default home;
