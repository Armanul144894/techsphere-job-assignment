import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/navbar/logo.png";
import { FaArrowUp, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar lg:justify-center gap-5 text-[20px] font-[600]">
      <div className="gap-5">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="uppercase flex  items-center gap-2 text-[#AF6CD8]">
                <h1>Browse games</h1>
                <div>
                  <FaArrowUp className="origin-center rotate-45"></FaArrowUp>
                </div>
              </Link>
            </li>
            <li>
              <Link className="uppercase text-white">About Us</Link>
            </li>
            <li>
              <Link className="uppercase text-white">How to sell</Link>
            </li>
            <li>
              <Link className="uppercase text-white">Contact us</Link>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between uppercase text-white">
                Gbp
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link>Submenu 1</Link>
                </li>
                <li>
                  <Link>Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="uppercase text-white">
                <FaUser></FaUser>
              </Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          <img
            className="lg:w-[282px] lg:h-[31.28px] md:w-[180px] md:h-[20px] w-[180px] h-[20px]"
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center gap-5 hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="uppercase flex items-center gap-2 text-[#AF6CD8]">
              <h1>Browse games</h1>
              <div>
                <FaArrowUp className="origin-center rotate-45"></FaArrowUp>
              </div>
            </Link>
          </li>
          <li>
            <Link className="uppercase text-white">About Us</Link>
          </li>
          <li>
            <Link className="uppercase text-white">How to sell</Link>
          </li>
          <li>
            <Link className="uppercase text-white">Contact us</Link>
          </li>
          <li tabIndex={0}>
            <Link className="uppercase text-white">
              Gbp
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2">
              <li>
                <Link>Submenu 1</Link>
              </li>
              <li>
                <Link>Submenu 2</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="uppercase text-white">
              <FaUser></FaUser>
            </Link>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end text-white">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </label>
        <div
          tabIndex={0}
          className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div className="card-body">
            <span className="font-bold text-lg">8 Items</span>
            <span className="text-info">Subtotal: $999</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
