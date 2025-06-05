import React from "react";
import Navbar from "../component/home/Navbar";
import Hero from "../component/home/Hero";
import BelowHero from "../component/home/BelowHero";
import Feature from "../component/home/Feature";
import Services from "../component/home/Services";
import FeedBack from "../component/home/FeedBack";
import BelowFeedBack from "../component/home/BelowFeedBack";
import Faqs from "../component/home/Faqs";
import Footer from "../component/home/Footer";

const Home = () => {
  return (
    <div className=" overflow-hidden relative">
      <div className="fixed inset-0 -z-10 bg-[#060606]">
        <div className=" absolute bottom-0 -left-20 w-[15rem] h-[15rem]   lg:w-[20rem] lg:h-[20rem]   bg-[#2F7EF7] rounded-full blur-[180px]" />
        <div className="absolute top-0 -right-20 w-[15rem] h-[15rem] lg:w-[20rem] lg:h-[20rem]  bg-[#00FFF2] rounded-full blur-[180px]  " />
      </div>
      <Navbar />
      <Hero />
      <BelowHero />
      <Feature />
      <Services />
      <BelowFeedBack />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
