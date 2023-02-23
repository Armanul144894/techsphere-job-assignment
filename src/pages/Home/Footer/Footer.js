import React from "react";
import background from "../../../assets/footer/background.png";
import logo from "../../../assets/footer/logo.png";
import visa from "../../../assets/footer/visa.png";

const Footer = () => {
  return (
    <div className="relative py-20 ">
      <footer className="footer footer-center lg:footer text-neutral-content flex flex-col lg:flex-row  justify-center lg:gap-24">
        <div className="">
          <h1 className="uppercase text-2xl text-[#FFFFFF]">Contacts</h1>
          <a className="link link-hover text-[16px] text-[#AF6CD8]">
            Company name
          </a>
          <a className="link link-hover text-[16px] text-[#AF6CD8]">
            123 place, Longdale{" "}
          </a>
          <a className="link link-hover text-[16px] text-[#AF6CD8]">
            Close, CITY, Post Code,
          </a>
          <a className="link link-hover text-[16px] text-[#AF6CD8]"> Country</a>
        </div>
        <div className="">
          <span className="uppercase text-2xl text-white">Company</span>
          <a className="link link-hover text-[16px] text-[#AF6CD8]">Aion</a>
          <a className="link link-hover text-[16px] text-[#AF6CD8]">
            DC Universe
          </a>
          <a className="link link-hover text-[16px] text-[#AF6CD8]">
            Elder Scrolls
          </a>
          <a className="link link-hover text-[16px] text-[#AF6CD8]">
            Fallout 76
          </a>
          <a className="link link-hover text-[16px] text-[#AF6CD8]">Fortnite</a>
        </div>
        <div className="mt-8">
          <a className="link link-hover text-[16px] text-[#AF6CD8]">
            Guild Wars 2{" "}
          </a>
          <a className="link link-hover text-[16px] text-[#AF6CD8]">
            Lord of the rings online
          </a>
          <a className="link link-hover text-[16px] text-[#AF6CD8]">
            Rocket league
          </a>
          <a className="link link-hover text-[16px] text-[#AF6CD8]">Warframe</a>
          <a className="link link-hover text-[16px] text-[#AF6CD8]">
            World of Warcraft
          </a>
        </div>
        <div>
          <span className="uppercase text-2xl text-white">Legal</span>
          <a className="link link-hover text-[16px] text-[#AF6CD8]">
            Terms of use
          </a>
          <a className="link link-hover text-[16px] text-[#AF6CD8]">
            Privacy policy
          </a>
          <a className="link link-hover text-[16px] text-[#AF6CD8]">
            Cookie policy
          </a>
        </div>
        <div className="">
          <span className="uppercase text-2xl text-white">
            <img className="w-[281px]" src={logo} alt="" />
          </span>
          <div className="w-[250px]">
            <p className="py-8">
              © 2021 yoursecretloot.com. All Rights Reserved. This site is not
              affiliated or owned by the listed gaming platform owners.
            </p>
            <img className="w-[209px] mx-auto" src={visa} alt="" />
          </div>
        </div>
        <img
          className="z-[-1] absolute w-full h-full"
          src={background}
          alt=""
        />
      </footer>
    </div>
  );
};

export default Footer;

{
  /* <div className="">
          <span className="footer-title text-xl text-white">Contacts</span>
          <a className="link link-hover text-[#AF6CD8]">Company name</a>
          <a className="link link-hover text-[#AF6CD8]">123 place, Longdale </a>
          <a className="link link-hover text-[#AF6CD8]">
            Close, CITY, Post Code,
          </a>
          <a className="link link-hover text-[#AF6CD8]"> Country</a>
        </div>
        <div className="text-center ">
          <span className="footer-title text-xl text-white">Company</span>
          <a className="link link-hover text-[#AF6CD8]">Aion</a>
          <a className="link link-hover text-[#AF6CD8]">DC Universe</a>
          <a className="link link-hover text-[#AF6CD8]">Elder Scrolls</a>
          <a className="link link-hover text-[#AF6CD8]">Fallout 76</a>
          <a className="link link-hover text-[#AF6CD8]">Fortnite</a>
        </div>
        <div className="mt-8">
          <a className="link link-hover text-[#AF6CD8]">Guild Wars 2 </a>
          <a className="link link-hover text-[#AF6CD8]">
            Lord of the rings online
          </a>
          <a className="link link-hover text-[#AF6CD8]">Rocket league</a>
          <a className="link link-hover text-[#AF6CD8]">Warframe</a>
          <a className="link link-hover text-[#AF6CD8]">World of Warcraft</a>
        </div>
        <div className="">
          <span className="footer-title text-xl text-white">Legal</span>
          <a className="link link-hover text-[#AF6CD8]">Terms of use</a>
          <a className="link link-hover text-[#AF6CD8]">Privacy policy</a>
          <a className="link link-hover text-[#AF6CD8]">Cookie policy</a>
        </div> */
}
