import React from "react";
import car from "../../../assets/whyUs/car.png";
import border from "../../../assets/whyUs/border.png";
import line from "../../../assets/whyUs/line.png";
import button from "../../../assets/whyUs/button.png";
import background from "../../../assets/whyUs/background.png";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center relative lg:mt-20">
      <div>
        <img className="lg:w-[1203px] w-full mt-72" src={car} alt="" />
      </div>
      <div className="lg:w-[463px] w-full mt-10">
        <div className="relative">
          <h1 className="font-[700] text-[64px] text-white lg:absolute top-[-40px] uppercase">
            Why Us?
          </h1>
          <img className="w-[428px] hidden lg:block" src={line} alt="" />
        </div>
        <div>
          <p className="text-white text-justify mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            impedit asperiores praesentium, porro odio, quasi earum debitis
            voluptatem similique ipsam mollitia quo. Doloremque aliquam
            consectetur repellat reprehenderit laudantium repudiandae ipsum?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            impedit asperiores praesentium, porro odio, quasi earum debitis
            voluptatem similique ipsam mollitia quo. Doloremque aliquam
            consectetur repellat reprehenderit laudantium repudiandae ipsum?
          </p>
          <button className="mt-8 text-start">
            <img className="w-[277px] h-[41px]" src={button} alt="" />
          </button>
        </div>
      </div>
      <img
        className="z-[-1] absolute hidden lg:block w-full"
        src={background}
        alt=""
      />
      <img
        className="z-[-1] absolute hidden lg:block right-12"
        src={border}
        alt=""
      />
    </div>
  );
};

export default WhyUs;
