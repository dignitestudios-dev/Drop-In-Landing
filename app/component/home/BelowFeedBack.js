import { google, mobile1, mobile2 } from "@/app/assets/export";
import Image from "next/image";
import React from "react";

const BelowFeedBack = () => {
  return (
    <div className="p-6 lg:p-20">
      <div className="w-full flex flex-col pt-10 items-center justify-center  bg-[#1313138A] border-[1px] border-[#212121] overflow-hidden rounded-[30px]">
        <h3 className=" text-[44px] text-center font-[500] bg-gradient-to-l from-[#00FFF2] to-[#2F7EF7] bg-clip-text text-transparent leading-[60.15px]">
          From “What’s the Move?”
          <br />
          <span className=" text-[#FFFFFF] ">to “See You There.”</span>
        </h3>
        <p className="text-[16px] font-[400] text-[#D6D6D6] px-20 md:px-32  lg:px-72 text-center pb-2.5 ">
          Drop In lets you instantly see what your friends are attending or{" "}
          <br />
          posting — and join them with a single tap.
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
