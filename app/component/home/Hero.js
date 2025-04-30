import { herobg, heroimg } from "@/app/assets/export";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      className=" min-h-screen  flex flex-col justify-center items-center  md:py-8  relative mb-20 "
      id="home"
    >
      <div className=" w-[100%] flex opacity-10  ">
        <Image
          src={herobg}
          alt=""
          className="absolute w-full mx-auto h-[341px] top-20 "
        />
      </div>
      <div className="flex flex-col  absolute top-20  justify-center px-6">
        <h2 className="text-white text-[44px] lg:text-[65px] font-[500] lg:leading-[50px] text-center ">
          Boredom Ends Where
          <br />
          <span className="bg-gradient-to-l from-[#00FFF2] to-[#2F7EF7] bg-clip-text text-transparent lg:leading-[102px]">
            Spontaneity Begins
          </span>
        </h2>
        <p className="text-[16px] font-[400] text-[#D6D6D6] lg:w-[50%] mx-auto text-center">
        This isn't a dating app, just real people, doing real things- together
Find real-time events, meet new people, make memories — all with just one tap. Drop In makes it easy to connect through spontaneous hangouts happening near you.

        </p>
      </div>
      <Image
        src={heroimg}
        alt=""
        className="w-[450px] md:w-[700px] lg:w-[1013px] absolute -bottom-48 z-0 h-[410px] lg:h-[610px] text-center"
      />
    </div>
  );
};

export default Hero;
