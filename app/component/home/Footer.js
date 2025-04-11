import {
  appstore,
  facebook,
  instagram,
  linkedin,
  logo,
  twiter,
} from "@/app/assets/export";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="px-4 lg:px-20 lg:py-10">
      <div className=" bg-[#1313138A] border-[1px] border-[#212121] rounded-[30px]  py-10 overflow-hidden relative">
        <div className=" -z-10 ">
          <div className=" absolute bottom-0 left-0 w-[10rem]  lg:w-[20rem] h-[10rem]  lg:h-[20rem]  bg-[#2F7EF7] rounded-full blur-[120px]" />
          <div className="absolute top-0 right-0 w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[20rem]  bg-[#00FFF2] rounded-full blur-[120px]  " />
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 pt-12 px-8 gap-12 lg:gap-6 relative ">
          <div className="flex flex-col gap-4 ">
            <Image src={logo} alt="logo" className="w-[79px]" />
            <p className="text-[22px] text-[#FFFFFF]  font-semibold">
              Social links
            </p>
            <div className="flex gap-3">
              <Image src={facebook} alt="" className="w-[43px] h-[43px]" />
              <Image src={linkedin} alt="" className="w-[43px] h-[43px]" />
              <Image src={instagram} alt="" className="w-[43px] h-[43px]" />
              <Image src={twiter} alt="" className="w-[43px] h-[43px]" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-[22px] text-[#FFFFFF]  font-semibold">
              Quick links
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="text-[14px] text-[#FFFFFF]  font-[400]">Home</li>
              <li className="text-[14px] text-[#FFFFFF]  font-[400]">About</li>
              <li className="text-[14px] text-[#FFFFFF]  font-[400]">
                Features
              </li>
              <li className="text-[14px] text-[#FFFFFF]  font-[400]">
                Contact
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-[22px] text-[#FFFFFF]  font-semibold">
              Contact
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="text-[14px] text-[#FFFFFF]  font-[400]">
                support@dropin.com
              </li>
              <li className="text-[14px] text-[#FFFFFF]  font-[400]">
                +1 (123) 456-7890
              </li>
              <li className="text-[14px] text-[#FFFFFF]  font-[400]">
                5053 Kiehn Junctions, Corpus Christi 19197
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-[22px] text-[#FFFFFF]  font-semibold">
              Download the App
            </h3>
            <p className="text-[14px] leading-[20px] font-[400]  text-[#FFFFFF]">
              Figma ipsum component variant main layer. Underline draft outline
              frame.
            </p>
            <Image src={appstore} alt="" className="w-[240px] h-[150px]" />
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-[#FFFFFF21] mt-8 pt-10 px-8 relative ">
          <p className="text-[14px] text-[#FFFFFF] font-[400]">
            © 2025 Drop In. All rights reserved.
          </p>
          <p className="text-[14px] text-[#FFFFFF] font-[400] ">
            privacy Policy <span>Terms & Conditions</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
