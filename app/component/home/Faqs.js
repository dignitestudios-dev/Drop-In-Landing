"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
const faqData = [
  {
    question:
      "Figma ipsum component variant main layer. Rectangle invite plugin community draft.",
    answer:
      "Figma ipsum component variant main layer. Ellipse asset plugin team invite. Team underline polygon text library edit distribute. Invite horizontal team content effect main vertical community bullet. Select effect bold layer layer inspect pen comment. Line scale distribute rotate figjam. Align stroke text layer bold. Auto overflow component thumbnail community vector overflow invite. Shadow mask text ellipse resizing star.",
  },
  {
    question:
      "Figma ipsum component variant main layer. Pen bold invite list shadow. Subtract undo.",
    answer:
      "Figma ipsum component variant main layer. Ellipse asset plugin team invite.",
  },
  {
    question:
      "Figma ipsum component variant main layer. Image star move move inspect. Outline share.",
    answer:
      " Figma ipsum component variant main layer. Stroke boolean rectangle comment share mask arrow main. Pixel fill pencil line arrange auto.Move connection subtract union union bold arrange reesizing pixel ",
  },
  {
    question:
      "Figma ipsum component variant main layer. Underline resizing align thumbnail rotate list.",
    answer: "",
  },
  {
    question:
      "Figma ipsum component variant main layer. Device draft inspect ipsum fill frame bold.",
    answer: "",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="w-full flex flex-col pt-10 items-center justify-center ">
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
      </div>
    </div>
  );
};

export default Faqs;
