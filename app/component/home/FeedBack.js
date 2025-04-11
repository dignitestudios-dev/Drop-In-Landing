"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { feedBack1, feedBack2, feedBack3 } from "@/app/assets/export";
const FeedBack = () => {
  return (
    <div className="">
      <div className="w-full flex flex-col items-center my-20">
        <p className="text-[18px] font-[500] bg-gradient-to-l from-[#00FFF2] to-[#2F7EF7] bg-clip-text text-transparent leading-[70px]">
          Client Feedback
        </p>
        <h3 className="text-center text-[32px]  lg:text-[40px] font-[600] text-[#FFFFFF] leading-[100%]">
          Our Clients Feedback.
        </h3>
        <div className="w-full px-12 lg:px-24 py-3  lg:py-12 flex items-center justify-center">
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            spaceBetween={50}
            autoplay={{ delay: 3000 }}
            loop={true}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              1024: {
                slidesPerView: 3, // 1024px and above = 3 slides
              },
            }}
            className="mySwiper h-96     "
          >
            <SwiperSlide className="!w-full lg:!w-[30%]  flex flex-col items-center justify-center text-center space-y-3 ">
              <div className="w-full flex justify-center  relative  top-10 ">
                <Image
                  src={feedBack1}
                  alt=""
                  className="w-[100px] lg:w-[150px] h-[100px] lg:h-[150px] object-contain !flex items-end justify-end "
                />
              </div>
              <div className="space-y-2 flex flex-col items-center justify-center px-3 lg:px-10 border-[1px] border-[#212121] rounded-[30px] bg-[#1313138A] h-[209px] relative -top-8 -z-10">
                <p className="text-[20px] font-[600] text-[#FFFFFF]">
                  Afsana Nila
                </p>
                <p className="text-[16px] font-[400] text-[#D6D6D6]">
                  “Duis aute irure dolor in reprehenderit cillum dolore eu
                  fugiat nulla pariatur.„
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-full lg:!w-[30%]  flex flex-col items-center justify-center text-center space-y-3 ">
              <div className="w-full flex justify-center  relative  top-10 ">
                <Image
                  src={feedBack2}
                  alt=""
                  className="w-[100px] lg:w-[150px] h-[100px] lg:h-[150px]  "
                />
              </div>
              <div className="space-y-2 flex flex-col items-center justify-center  px-10 border-[1px] border-[#212121] rounded-[30px] bg-[#1313138A] h-[209px] relative -top-8 -z-10">
                <p className="text-[20px] font-[600] text-[#FFFFFF]">
                  Afsana Nila
                </p>
                <p className="text-[16px] font-[400] text-[#D6D6D6]">
                  “Duis aute irure dolor in reprehenderit cillum dolore eu
                  fugiat nulla pariatur.„
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-full lg:!w-[30%]  flex flex-col items-center justify-center text-center space-y-3 ">
              <div className="w-full flex justify-center  relative  top-10 ">
                <Image
                  src={feedBack3}
                  alt=""
                  className="w-[100px] lg:w-[150px] h-[100px] lg:h-[150px]  "
                />
              </div>
              <div className="space-y-2 flex flex-col items-center justify-center  px-10 border-[1px] border-[#212121] rounded-[30px] bg-[#1313138A] h-[209px] relative -top-8 -z-10">
                <p className="text-[20px] font-[600] text-[#FFFFFF]">
                  Afsana Nila
                </p>
                <p className="text-[16px] font-[400] text-[#D6D6D6]">
                  “Duis aute irure dolor in reprehenderit cillum dolore eu
                  fugiat nulla pariatur.„
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
