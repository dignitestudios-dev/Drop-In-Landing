"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import {
  icon1,
  icon10,
  icon11,
  icon12,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
} from "@/app/assets/export";

const Services = () => {
  return (
    <div className="py-12 " id="contact">
      <div className="w-full flex flex-col items-center shadow-2xl bg-[#1313138A] py-20 overflow-hidden relative">
        <div className="  -z-10 ">
          <div className=" absolute bottom-0 left-0 w-[10rem] sm:w-[10rem] lg:w-[20rem] h-[20rem] sm:h-[10rem] lg:h-[20rem]  bg-[#2F7EF7] rounded-full blur-[120px]" />
          <div className="absolute top-0 right-0 w-[15rem] h-[25rem]  bg-[#00FFF2] rounded-full blur-[120px]  " />
        </div>
        <p className="text-[18px] font-[500] bg-gradient-to-l from-[#00FFF2] to-[#2F7EF7] bg-clip-text text-transparent leading-[50px]">
          Our Application Service
        </p>
        <h3 className="text-center  text-[32px]  lg:text-[40px] font-[600] text-[#FFFFFF] leading-[50px]">
          Features What Can <br /> Provide for You.
        </h3>
        <div className="w-full px-10 lg:px-28 py-12">
          <Swiper
            slidesPerView={1} // Default for mobile
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="h-80 lg:h-64"
            breakpoints={{
              768: {
                slidesPerView: 1, // Tablet
              },
              1024: {
                slidesPerView: 3, // Desktop
              },
            }}
          >
            <SwiperSlide className="w-full lg:!w-[35%] flex flex-col items-center justify-center text-center space-y-3 lg:px-12 ">
              <div className=" flex items-center  justify-center">
                <Image src={icon1} alt="" className="w-[90px] h-[90px] " />
              </div>
              <div className="space-y-3">
                <p className="text-[24px] font-[600] text-[#FFFFFF]">
                  Map-Based Event Discovery
                </p>
                <p className="text-[16px] font-[400] text-[#D6D6D6]">
                  See what’s happening around you in real-time with an
                  interactive map view.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full lg:!w-[35%] flex flex-col items-center justify-center text-center space-y-3 lg:px-12 ">
              <div className=" flex items-center  justify-center">
                <Image src={icon2} alt="" className="w-[90px] h-[90px]" />
              </div>
              <div className="space-y-3">
                <p className="text-[24px] font-[600] text-[#FFFFFF]">
                  Personalized Event Categories
                </p>
                <p className="text-[16px] font-[400] text-[#D6D6D6]">
                  Explore events based on your interests with custom tags and
                  smart suggestions.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full lg:!w-[35%] flex flex-col items-center justify-center text-center space-y-3 lg:px-12 ">
              <div className=" flex items-center  justify-center">
                <Image
                  src={icon3}
                  alt=""
                  className="w-[90px] h-[90px] object-contain !flex items-end justify-end"
                />
              </div>
              <div className="space-y-3">
                <p className="text-[24px] font-[600] text-[#FFFFFF]">
                  Private & Public Event Options
                </p>
                <p className="text-[16px] font-[400] text-[#D6D6D6]">
                  Choose to share your event with everyone — or just your
                  circle.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full lg:!w-[35%] flex flex-col items-center justify-center text-center space-y-3 lg:px-12 ">
              <div className=" flex items-center  justify-center">
                <Image
                  src={icon4}
                  alt=""
                  className="w-[90px] h-[90px] object-contain !flex items-end justify-end"
                />
              </div>
              <div className="space-y-3">
                <p className="text-[24px] font-[600] text-[#FFFFFF]">
                  Live Location Integration
                </p>
                <p className="text-[16px] font-[400] text-[#D6D6D6]">
                  Navigate to events easily with real-time location updates and
                  directions.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full lg:!w-[35%] flex flex-col items-center justify-center text-center space-y-3 lg:px-12 ">
              <div className=" flex items-center  justify-center">
                <Image src={icon5} alt="" className="w-[90px] h-[90px] " />
              </div>
              <div className="space-y-3">
                <p className="text-[24px] font-[600] text-[#FFFFFF]">
                  Smart Notifications
                </p>
                <p className="text-[16px] font-[400] text-[#D6D6D6]">
                  Get instant alerts for new events that match your vibe and
                  location.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full lg:!w-[35%] flex flex-col items-center justify-center text-center space-y-3 lg:px-12 ">
              <div className=" flex items-center  justify-center">
                <Image src={icon6} alt="" className="w-[90px] h-[90px]" />
              </div>
              <div className="space-y-3">
                <p className="text-[24px] font-[600] text-[#FFFFFF]">
                  Dynamic Event Visibility
                </p>
                <p className="text-[16px] font-[400] text-[#D6D6D6]">
                  See what’s near you with radius-based visibility and list view
                  alternatives.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full lg:!w-[35%] flex flex-col items-center justify-center text-center space-y-3 lg:px-12 ">
              <div className=" flex items-center  justify-center">
                <Image
                  src={icon7}
                  alt=""
                  className="w-[90px] h-[90px] object-contain !flex items-end justify-end"
                />
              </div>
              <div className="space-y-3">
                <p className="text-[24px] font-[600] text-[#FFFFFF]">
                  Detailed Event Previews
                </p>
                <p className="text-[16px] font-[400] text-[#D6D6D6]">
                  Tap on a map pin to dive into full event details and RSVP
                  instantly.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full lg:!w-[35%] flex flex-col items-center justify-center text-center space-y-3 lg:px-12 ">
              <div className=" flex items-center  justify-center">
                <Image
                  src={icon8}
                  alt=""
                  className="w-[90px] h-[90px] object-contain !flex items-end justify-end"
                />
              </div>
              <div className="space-y-3">
                <p className="text-[24px] font-[600] text-[#FFFFFF]">
                  RSVP & Real-Time Chat Rooms
                </p>
                <p className="text-[16px] font-[400] text-[#D6D6D6]">
                  Join the conversation — RSVP to unlock exclusive event chat
                  access.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full lg:!w-[35%] flex flex-col items-center justify-center text-center space-y-3 lg:px-12 ">
              <div className=" flex items-center  justify-center">
                <Image
                  src={icon9}
                  alt=""
                  className="w-[90px] h-[90px] object-contain !flex items-end justify-end"
                />
              </div>
              <div className="space-y-3">
                <p className="text-[24px] font-[600] text-[#FFFFFF]">
                  Event Popularity & Feedback
                </p>
                <p className="text-[16px] font-[400] text-[#D6D6D6]">
                  See what’s trending by RSVPs and share your thoughts
                  post-event.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full lg:!w-[35%] flex flex-col items-center justify-center text-center space-y-3 lg:px-12 ">
              <div className=" flex items-center  justify-center">
                <Image
                  src={icon10}
                  alt=""
                  className="w-[90px] h-[90px] object-contain !flex items-end justify-end"
                />
              </div>
              <div className="space-y-3">
                <p className="text-[24px] font-[600] text-[#FFFFFF]">
                  Flexible Event Controls
                </p>
                <p className="text-[16px] font-[400] text-[#D6D6D6]">
                  Set slots, manage reschedules, and send emergency updates when
                  needed.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full lg:!w-[35%] flex flex-col items-center justify-center text-center space-y-3 lg:px-12 ">
              <div className=" flex items-center  justify-center">
                <Image
                  src={icon11}
                  alt=""
                  className="w-[90px] h-[90px] object-contain !flex items-end justify-end"
                />
              </div>
              <div className="space-y-3">
                <p className="text-[24px] font-[600] text-[#FFFFFF]">
                  Advanced Filters & Featured Events
                </p>
                <p className="text-[16px] font-[400] text-[#D6D6D6]">
                  Find events fast with city/state filters and spot featured
                  ones on the map.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full lg:!w-[35%] flex flex-col items-center justify-center text-center space-y-3 lg:px-12 ">
              <div className=" flex items-center  justify-center">
                <Image
                  src={icon12}
                  alt=""
                  className="w-[90px] h-[90px] object-contain !flex items-end justify-end"
                />
              </div>
              <div className="space-y-3">
                <p className="text-[24px] font-[600] text-[#FFFFFF]">
                  Admin Tools & Emergency Support
                </p>
                <p className="text-[16px] font-[400] text-[#D6D6D6]">
                  Keep things safe and running with reporting, alerts, and
                  direct admin chat.
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
