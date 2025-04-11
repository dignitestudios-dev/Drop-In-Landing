"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Service1 } from "@/app/assets/export";

const Services = () => {
  return (
    <div className="py-12">
      <div className="w-full flex flex-col items-center shadow-2xl bg-[#1313138A] py-20 overflow-hidden relative">
        <div className="  -z-10 ">
          <div className=" absolute bottom-0 left-0 w-[10rem] sm:w-[10rem] lg:w-[20rem] h-[20rem] sm:h-[10rem] lg:h-[20rem]  bg-[#2F7EF7] rounded-full blur-[120px]" />
          <div className="absolute top-0 right-0 w-[15rem] h-[25rem]  bg-[#00FFF2] rounded-full blur-[120px]  " />
        </div>
        <p className="text-[18px] font-[500] bg-gradient-to-l from-[#00FFF2] to-[#2F7EF7] bg-clip-text text-transparent">
          Our Application Service
        </p>
        <h3 className="text-center  text-[32px]  lg:text-[40px] font-[600] text-[#FFFFFF] leading-[100%]">
          Features What Can <br /> Provide for You.
        </h3>
        <div className="w-full px-10 lg:px-28 py-12">
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper h-80 lg:h-64 "
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide className="w-full lg:!w-[35%] flex flex-col items-center justify-center text-center space-y-3 lg:px-12 ">
              <div className=" flex items-center  justify-center">
                <Image src={Service1} alt="" className="w-[90px] h-[90px] " />
              </div>
              <div className="space-y-3">
                <p className="text-[24px] font-[600] text-[#FFFFFF]">
                  Figma ipsum component
                </p>
                <p className="text-[16px] font-[400] text-[#D6D6D6]">
                  Figma ipsum component variant main layer. Device vertical
                  effect outline fill. Library frame prototype asset.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full lg:!w-[35%] flex flex-col items-center justify-center text-center space-y-3 lg:px-12 ">
              <div className=" flex items-center  justify-center">
                <Image src={Service1} alt="" className="w-[90px] h-[90px]" />
              </div>
              <div className="space-y-3">
                <p className="text-[24px] font-[600] text-[#FFFFFF]">
                  Figma ipsum component
                </p>
                <p className="text-[16px] font-[400] text-[#D6D6D6]">
                  Figma ipsum component variant main layer. Device vertical
                  effect outline fill. Library frame prototype asset.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full lg:!w-[35%] flex flex-col items-center justify-center text-center space-y-3 lg:px-12 ">
              <div className=" flex items-center  justify-center">
                <Image
                  src={Service1}
                  alt=""
                  className="w-[90px] h-[90px] object-contain !flex items-end justify-end"
                />
              </div>
              <div className="space-y-3">
                <p className="text-[24px] font-[600] text-[#FFFFFF]">
                  Figma ipsum component
                </p>
                <p className="text-[16px] font-[400] text-[#D6D6D6]">
                  Figma ipsum component variant main layer. Device vertical
                  effect outline fill. Library frame prototype asset.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full lg:!w-[35%] flex flex-col items-center justify-center text-center space-y-3 lg:px-12 ">
              <div className=" flex items-center  justify-center">
                <Image
                  src={Service1}
                  alt=""
                  className="w-[90px] h-[90px] object-contain !flex items-end justify-end"
                />
              </div>
              <div className="space-y-3">
                <p className="text-[24px] font-[600] text-[#FFFFFF]">
                  Figma ipsum component
                </p>
                <p className="text-[16px] font-[400] text-[#D6D6D6]">
                  Figma ipsum component variant main layer. Device vertical
                  effect outline fill. Library frame prototype asset.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Services;
