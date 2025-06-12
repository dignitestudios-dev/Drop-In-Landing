import { belowhero, fullysecure, verification } from "@/app/assets/export";
import Image from "next/image";
import React from "react";

const BelowHero = () => {
  return (
    <div className="pt-20 lg:pt-48 " id="about">
      <div className=" w-[80%] mx-auto   bg-[#1313138A] overflow-hidden rounded-2xl   ">
        <div className=" relative -z-10">
          <div className=" absolute top-[320px] -left-20 w-[10rem] sm:w-[10rem] lg:w-[20rem] h-[20rem] sm:h-[10rem] lg:h-[20rem]  bg-[#2F7EF7] rounded-full blur-[120px]" />
          <div className="absolute top-0 -right-20 w-[15rem] h-[25rem]  bg-[#00FFF2] rounded-full blur-[120px]  " />
        </div>
        <div className="w-full  flex lg:flex-row flex-col items-center    ">
          <div className="flex flex-col lg:w-[50%]  lg:pl-20 p-4  ">
            <h3 className="text-[30px] xl:text-[44px] font-[500] bg-gradient-to-l from-[#00FFF2] to-[#2F7EF7] bg-clip-text text-transparent xl:leading-[60.15px]">
              Don't just be the{" "}
              <span className="text-[#FFFFFF]">spectator, be the spark. </span>
            </h3>
            <p className="text-[14px] xl:text-[16px] text-[#D6D6D6] pt-2.5  font-[400]">
              Drop In lets you find or create real-time experiences that bring
              people together — anytime, anywhere.
            </p>
            <div className="flex flex-col gap-5 pt-4">
              <div className="flex items-center p-3 xl:p-6  shadow-2xl rounded-2xl gap-4 bg-[#FFFFFF0D]">
                <Image src={verification} alt=" online" className="w-12" />
                <div className="flex flex-col gap-2">
                  <p className="text-[16px] xl:text-[20px] text-[#FFFFFF]  font-[700]">
                    Turn Moments Into Movements
                  </p>
                  <p className="text-[#ACACAC] text-[12px] xl:text-[14px] font-[400]">
                    Real-time experiences that ignite connection.
                  </p>
                </div>
              </div>
              <div className="flex items-center p-3 xl:p-6 shadow-2xl rounded-2xl gap-4 border-2 border-[#FFFFFF0D]">
                <Image
                  src={fullysecure}
                  alt="fully secure"
                  className="w-12 text-[#011827]"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-[16px] xl:text-[20px] text-[#FFFFFF]  font-[700]">
                    Events That Fit Your Flow
                  </p>
                  <p className="text-[#ACACAC] text-[12px]   xl:text-[14px] font-[400]">
                    Explore live events across every vibe, interest, and scene —
                    all in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden  lg:block w-[60%]">
            <Image
              src={belowhero}
              alt=""
              className="object-center w-[900px]  h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelowHero;
