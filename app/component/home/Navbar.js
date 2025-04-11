"use client";
import { logo } from "@/app/assets/export";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      url: "#",
    },
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Feature",
      url: "#feature",
    },
    {
      name: "Contact Us",
      url: "#contact",
    },
  ];
  const [isOpen, setIsopen] = useState(false);
  const toggle = () => {
    console.log("sdfsdf");
    setIsopen((prev) => !prev);
  };

  useEffect(() => {
    console.log(isOpen, "isopen");
  }, [isOpen]);
  return (
    <div>
      <div className="bg-transparent relative flex flex-col items-center pt-5 z-10">
        <nav className="w-full flex items-center justify-between gap-11">
          <div className="hidden md:flex justify-center gap-10 w-full ">
            <ul className="flex items-center space-x-10 font-medium text-[#FFFFFF]">
              <li className="text-[16px] cursor-pointer font-[400]">
                <Link href={"#home"}> Home</Link>
              </li>
              <li className="text-[16px] cursor-pointer font-[400]">
                <Link href={"#about"}>About</Link>
              </li>
              <li className="text-[16px] font-[400]">
                <Image src={logo} alt="" className="w-[52px] h-[70px]" />
              </li>
              <li className="text-[16px] cursor-pointer font-[400]">
                <Link href="#feature">Feature</Link>
              </li>
              <li className="text-[16px] cursor-pointer font-[400]">
                <Link href={"#contact"}> contact</Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden flex justify-between w-full px-7  ">
            <Image src={logo} alt="" className="w-[52px] h-[70px]" />
            <button onClick={() => toggle()} className="text-white">
              <HiMenu />
            </button>
          </div>
        </nav>

        <div
          className={`
        absolute right-0 top-0 z-50 h-screen w-60 max-w-sm 
        bg-[#050505] text-white  
        transition-all duration-700 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-60"}
      `}
        >
          <div className="md:hidden p-5 flex justify-between items-start w-full">
            <ul className="flex flex-col space-y-4 py-5 uppercase">
              <li className="text-[16px] font-[400]">Home</li>
              <li className="text-[16px] font-[400]">About</li>
              <li className="text-[16px] font-[400]">Features</li>
              <li className="text-[16px] font-[400]">Contact</li>
            </ul>
            <button onClick={toggle} className="ml-auto">
              <RiCloseFill size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
