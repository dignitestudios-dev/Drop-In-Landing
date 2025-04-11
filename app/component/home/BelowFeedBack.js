import { google, mobile1, mobile2 } from "@/app/assets/export";
import Image from "next/image";
import React from "react";

const BelowFeedBack = () => {
  return (
    <div className="p-6 lg:p-20">
      <div className="w-full flex flex-col pt-10 items-center justify-center  bg-[#1313138A] border-[1px] border-[#212121] overflow-hidden rounded-[30px]">
        <p className=" text-[18px] font-[500] bg-gradient-to-l from-[#00FFF2] to-[#2F7EF7] bg-clip-text text-transparent">
          Figma ipsum
        </p>

        <h3 className="text-[40px] md:text-[64px] font-[500] text-[#FFFFFF] leading-[101.15px]">
          Figma ipsum
        </h3>
        <p className="text-[16px] font-[400] text-[#D6D6D6] px-20 md:px-32  lg:px-72 text-center pb-2.5 ">
          Figma ipsum component variant main layer. Stroke boolean rectangle
          comment share mask arrow main. Pixel fill pencil line arrange auto.
          Move connection subtract union union bold arrange reesizing pixel
          slice. Rotate.{" "}
        </p>
        <Image src={google} alt="" className="w-[410] px-2" />
        <div className="flex  pt-10">
          <Image src={mobile1} alt="" className="w-[355px]  relative top-10" />
          <Image src={mobile2} alt="" className="w-[355px] hidden lg:block" />
        </div>
      </div>
    </div>
  );
};

export default BelowFeedBack;
