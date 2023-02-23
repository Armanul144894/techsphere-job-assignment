import React from "react";
import line from "../../../assets/about/line.png";
import women from "../../../assets/about/women.png";
import btn from "../../../assets/about/btn.png";
import border from "../../../assets/about/border.png";
import background from '../../../assets/about/background.png'
import sm_women from '../../../assets/about/sm-women.png'

const About = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center relative  mt-20">
      <div className="lg:w-[631px] lg:ml-32 lg:top-10 absolute lg:relative sm:bottom-80 ">
        <div className="relative">
          <h1 className="font-[700] text-[64px] text-white lg:absolute top-[-40px] lg:left-28 uppercase">About us</h1>
          <img className="w-[428px] hidden lg:block" src={line} alt="" />
        </div>
        <div className="lg:ml-24 mt-6">
          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, omnis
            placeat praesentium sed esse, tempora id quas asperiores quaerat
            natus ea optio rerum nisi officia, tempore eaque minima veritatis
            quos?
          </p>
          <img className="w-[205px] mx-auto h-[41px] mt-8" src={btn} alt="" />
        </div>
      </div>
        <img className="w-[1490px] h-[749px] pb-5 hidden lg:block" src={women} alt="" />
        <img className="pb-5 w-full block lg:hidden" src={sm_women} alt="" />
      <div>
      </div>
      <img className="z-[-1] absolute hidden lg:block w-full" src={background} alt="" />
      <img className="z-[-1] absolute hidden lg:block left-16" src={border} alt="" />
    </div>
  );
};

export default About;
