import { feature } from "@/app/assets/export";
import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div className="mt-20 " id="feature">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center space-y-6  lg:p-20 ">
        <div className="flex justify-center px-4">
          <Image
            src={feature}
            alt=""
            className="md:w-[520px] md:h-[576px] w-[420px] h-[436px]"
          />
        </div>
        <div className="flex flex-col lg:items-start items-center px-6 lg:text-start text-center gap-6">
          <h3 className="text-[30px] md:text-[40px] bg-gradient-to-l from-[#00FFF2] to-[#2F7EF7] bg-clip-text text-transparent font-[600] md:leading-[50px] leading-[40px]">
            Build communities around <br />
            <span className="text-[#D6D6D6]">
              who you are and what
              <br /> you love.
            </span>
          </h3>
          <p className="text-[16px] text-[#D6D6D6]  font-[400]">
            There are groups for your school, city, or passion and if not <br />{" "}
            Drop In helps you create them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
