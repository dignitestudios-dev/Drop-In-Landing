import { belowhero, fullysecure, verification } from "@/app/assets/export";
import Image from "next/image";
import React from "react";

const BelowHero = () => {
  return (
    <div className="pt-40 " id="about">
      <div className=" w-[80%] mx-auto   bg-[#1313138A] overflow-hidden rounded-2xl   ">
        <div className=" relative -z-10">
          <div className=" absolute top-[320px] -left-20 w-[10rem] sm:w-[10rem] lg:w-[20rem] h-[20rem] sm:h-[10rem] lg:h-[20rem]  bg-[#2F7EF7] rounded-full blur-[120px]" />
          <div className="absolute top-0 -right-20 w-[15rem] h-[25rem]  bg-[#00FFF2] rounded-full blur-[120px]  " />
        </div>
        <div className="w-full  flex lg:flex-row flex-col items-center    ">
          <div className="flex flex-col lg:w-[50%]  pl-20   ">
            <p className=" text-[18px] font-[500] bg-gradient-to-l from-[#00FFF2] to-[#2F7EF7] bg-clip-text text-transparent ">
              Figma ipsum
            </p>
            <h3 className="text-[44px] lg:text-[64px] text-[#FFFFFF]  font-[500]">
              Figma ipsum{" "}
            </h3>
            <p className="text-[16px] text-[#D6D6D6]  font-[400]">
              Figma ipsum component variant main layer. Stroke boolean rectangle
              comment share mask arrow main. Pixel fill pencil line arrange
              auto. Move connection subtract union union bold arrange reesizing
              pixel slice. Rotate.
            </p>
            <div className="flex flex-col gap-5 pt-4">
              <div className="flex items-center p-6  shadow-2xl rounded-2xl gap-4 bg-[#FFFFFF0D]">
                <Image src={verification} alt=" online" className="w-12" />
                <div className="flex flex-col gap-2">
                  <p className="text-[20px] text-[#FFFFFF]  font-[700]">
                    Online Verification
                  </p>
                  <p className="text-[#ACACAC] text-[14px] font-[400]">
                    Use Doob template you can build a corporate website a short
                    time.
                  </p>
                </div>
              </div>
              <div className="flex items-center p-6 shadow-2xl rounded-2xl gap-4 border-2 border-[#FFFFFF0D]">
                <Image
                  src={fullysecure}
                  alt="fully secure"
                  className="w-12 text-[#011827]"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-[20px] text-[#FFFFFF]  font-[700]">
                    Online Verification
                  </p>
                  <p className="text-[#ACACAC] text-[14px] font-[400]">
                    Use Doob template you can build a corporate website a short
                    time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden  lg:block w-[60%]">
            <Image src={belowhero} alt="" className=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelowHero;
  




