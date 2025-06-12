"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
// const faqData = [
//   {
//     question:
//       "Figma ipsum component variant main layer. Rectangle invite plugin community draft.",
//     answer:
//       "Figma ipsum component variant main layer. Ellipse asset plugin team invite. Team underline polygon text library edit distribute. Invite horizontal team content effect main vertical community bullet. Select effect bold layer layer inspect pen comment. Line scale distribute rotate figjam. Align stroke text layer bold. Auto overflow component thumbnail community vector overflow invite. Shadow mask text ellipse resizing star.",
//   },
//   {
//     question:
//       "Figma ipsum component variant main layer. Pen bold invite list shadow. Subtract undo.",
//     answer:
//       "Figma ipsum component variant main layer. Ellipse asset plugin team invite.",
//   },
//   {
//     question:
//       "Figma ipsum component variant main layer. Image star move move inspect. Outline share.",
//     answer:
//       " Figma ipsum component variant main layer. Stroke boolean rectangle comment share mask arrow main. Pixel fill pencil line arrange auto.Move connection subtract union union bold arrange reesizing pixel ",
//   },
//   {
//     question:
//       "Figma ipsum component variant main layer. Underline resizing align thumbnail rotate list.",
//     answer: "",
//   },
//   {
//     question:
//       "Figma ipsum component variant main layer. Device draft inspect ipsum fill frame bold.",
//     answer: "",
//   },
// ];
import { useForm } from "react-hook-form";
import { mobile2 } from "@/app/assets/export";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  // const toggleFAQ = (index) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  return (
    <div>
      <div className="p-7 xl:p-22" id="contactus">
        <div className="w-full contact h-full  flex flex-col lg:flex-row items-center j relative px-7 bg-[#1313138A] border-[1px] border-[#212121] rounded-[30px]">
          <div className="w-[50%] relative h-full xl:block hidden">
            <Image
              src={mobile2}
              alt="Contact Illustration"
              className="w-[400px] mx-auto "
            />
          </div>

          <div className="w-full flex flex-col xl:w-[50%] py-10">
            <p className=" md:text-[44px]   text-[32px] font-[500] bg-gradient-to-l from-[#00FFF2] to-[#2F7EF7] bg-clip-text text-transparent leading-[0.15px] md:leading-[60.15px]">
              Got Questions? <br />{" "}
              <span className="text-[#FFFFFF]">We’ve Got Answers!</span>
            </p>
            <p className="text-[18px] text-[#FFFFFF] font-[400]">
              Still Have Questions? We’re Here to Help!
            </p>

            <form onSubmit={handleSubmit} className="flex w-full flex-col pt-6">
              <div className="flex w-full gap-4">
                <div className="space-y-3.5 w-full">
                  <div>
                    <input
                      {...register("fullName", {
                        required: "Full Name is required",
                      })}
                      placeholder="Full Name"
                      className="w-full border-[1px] text-[14px] text-[#FFFFFF] border-white bg-[#59595926] p-3 rounded-[14px] outline-none backdrop-blur-[28.5px]"
                    />
                    {errors.fullName && (
                      <p className="text-red-200 text-sm">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email format",
                        },
                      })}
                      placeholder="Email Address"
                      className="w-full border-[1px] text-[14px] text-[#FFFFFF] border-white bg-[#59595926] p-3 rounded-[14px] outline-none backdrop-blur-[28.5px]"
                    />
                    {errors.email && (
                      <p className="text-red-200 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full">
                  <textarea
                    {...register("description", {
                      required: "Description is required",
                    })}
                    placeholder="Description"
                    rows={9}
                    className="w-full max-h-28 border-[1px] text-[14px] text-[#FFFFFF] border-white bg-[#59595926] p-3 rounded-[14px] outline-none backdrop-blur-[28.5px]"
                  />
                  {errors.description && (
                    <p className="text-red-200 text-sm">
                      {errors.description.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-48 mt-5 bg-gradient-to-l from-[#00FFF2] to-[#2F7EF7] font-semibold px-6 py-3 rounded-[14px] hover:bg-gray-100"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex flex-col pt-10 items-center justify-center ">
        <p className=" text-[18px] font-[500] bg-gradient-to-l from-[#00FFF2] to-[#2F7EF7] bg-clip-text text-transparent ">
          FAQs
        </p>
        <h3 className="text-[32px]  lg:text-[40px] font-[600] text-[#FFFFFF] leading-[100%] text-center">
          We're here to answer <br /> all your questions.
        </h3>
      </div>
      <div className=" px-6 md:px-20 py-10 space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-[1px] py-2 border-[#212121] bg-[#1313138A] rounded-[30px]"
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between cursor-pointer px-6 py-4"
            >
              <p className="text-white text-[14px] lg:text-[18px] font-[400px] ">
                {item.question}
              </p>
              {openIndex === index ? (
                <MdClose className="w-[19px] h-[19px] text-[#0390A0]" />
              ) : (
                <FaPlus className="text-[#0390A0]" />
              )}
            </div>
            {openIndex === index && item.answer && (
              <div className="px-6 pb-4 text-[#B0B0B0] text-[14px] lg:text-[16px] leading-6">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Faqs;
