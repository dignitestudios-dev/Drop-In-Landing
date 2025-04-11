import { feature } from "@/app/assets/export";
import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div className="mt-20">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center   lg:p-20 ">
        <div className="flex justify-center ">
          <Image src={feature} alt="" className="w-[520px] h-[576px]" />
        </div>
        <div className="flex flex-col lg:items-start items-center px-6 lg:text-start text-center ">
          <p className=" text-[18px] font-[500] bg-gradient-to-l from-[#00FFF2] to-[#2F7EF7] bg-clip-text text-transparent">
            Figma ipsum
          </p>
          <h3 className="text-[30px] md:text-[40px] text-[#FFFFFF]  font-[600]">
            Figma ipsum component
          </h3>
          <h3 className="text-[30px] md:text-[40px] bg-gradient-to-l from-[#00FFF2] to-[#2F7EF7] bg-clip-text text-transparent font-[600]">
            Figma ipsum{" "}
          </h3>
          <p className="text-[16px] text-[#D6D6D6]  font-[400]">
            Figma ipsum component variant main layer. Stroke boolean rectangle
            comment share mask arrow main. Pixel fill pencil line arrange auto.
            Move connection subtract union union bold arrange reesizing pixel
            slice. Rotate.
          </p>
          <p className="text-[16px] text-[#D6D6D6] pt-3.5  font-[400]">
            Figma ipsum component variant main layer. Stroke boolean rectangle
            comment share mask arrow main. Pixel fill pencil line arrange auto.
            Move connection subtract union union bold arrange reesizing pixel
            slice. Rotate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
