import {
  appstore,
  facebook,
  instagram,
  linkedin,
  logo,
  twiter,
} from "@/app/assets/export";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="px-4 lg:px-20 lg:py-10">
      <div className=" bg-[#1313138A] border-[1px] border-[#212121] rounded-[30px]  py-10 overflow-hidden relative">
        <div className=" -z-10 ">
          <div className=" absolute bottom-0 left-0 w-[10rem]  lg:w-[15rem] h-[10rem]  lg:h-[15rem]  bg-[#2F7EF7] rounded-full blur-[190px]" />
          <div className="absolute top-0 right-0 w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem]  bg-[#00FFF2] rounded-full blur-[160px]  " />
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 pt-12 px-8 gap-12 lg:gap-6 relative ">
          <div className="flex flex-col gap-4 ">
            <Image src={logo} alt="logo" className="w-[79px] h-[105px]" />
            <p className="text-[22px] text-[#FFFFFF]  font-[400]">
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
                dropincorporated95@gmail.com
              </li>
              <li className="text-[14px] text-[#FFFFFF]  font-[400]">
                305 Webster Ave #103Cambridge, MA 02139
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
            <Image src={appstore} alt="" className="w-[171px] h-[113px]" />
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-[#FFFFFF21] mt-8 pt-10 px-8 relative ">
          <p className="text-[14px] text-[#FFFFFF] font-[400]">
            © 2025 Drop In. All rights reserved.
          </p>
          <div className="flex text-white gap-3">
            <Link
              href={"/privacy"}
              className="text-[14px]  text-[#FFFFFF] font-[400] "
            >
              Privacy Policy
            </Link>
            <Link href={"/Terms"}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
