import React from "react";
import gun from "../../../assets/header/gun.png";
import sm_gun from "../../../assets/header/sm_gun.png";
import border from "../../../assets/header/border.png";
import btn1 from "../../../assets/header/btn1.png";
import btn2 from "../../../assets/header/btn2.png";
import background from "../../../assets/header/background.png";

const Header = () => {
  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:mt[91px] ">
        <div>
          <img
            className="lg:w-[1690px] hidden lg:block md:block w-full lg:mt-60"
            src={gun}
            alt=""
          />
          <img
            className="lg:hidden md:hidden block w-full"
            src={sm_gun}
            alt=""
          />
        </div>

        <div className="container w-full lg:w-[463px] mx-auto lg:mr-40  mt-48 absolute lg:relative">
          <h1 className="font-[700] text-[48px] lg:text-[80px] text-white">
            MMOGLIFE
          </h1>
          <p className="font-[400] text-[18px] text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
            reprehenderit. Enim ex culpa facilis eius.
          </p>
          <div className="flex gap-6 mt-5 flex-col lg:flex-row justify-center items-center">
            <img
              className="h-[36px] w-[291px] lg:w-[203px] "
              src={btn1}
              alt=""
            />
            <img
              className="h-[36px] w-[291px] lg:w-[203px] "
              src={btn2}
              alt=""
            />
          </div>
        </div>
      </div>
      <img
        className="z-[-1] absolute w-full top-[-20%]"
        src={background}
        alt=""
      />
      <img
        className="z-[-1] absolute top-20 w-full right-20"
        src={border}
        alt=""
      />
    </div>
  );
};

export default Header;
