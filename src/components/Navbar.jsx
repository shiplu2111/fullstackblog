"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full bg-[#FFF]   drop-shadow-[0_5.33333px_80px_0px_rgba(0,0,0,0.10)]">
        <div className="flex justify-between items-center md:mx-[62.33px] gap-3 mx-[43px] md:h-[90px] h-[75px] relative">
          <div className="flex items-center  h-[53.333px] hover:cursor-pointer ">
            <Link href="/">
              <img
                src="/Logo.png"
                className="mx-auto bottom-0 h-[100%] object-fill w-[80.667px]"
                alt="Hero"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-[42.67px]">
              <li className="text-[16.333px] font-[400]  hover:text-[#5E3BEE] hover:cursor-pointer">
                <Link href="/"> Home </Link>
              </li>
              <li className="text-[16.333px] font-[400]  hover:text-[#5E3BEE] hover:cursor-pointer">
                <Link href="/about-us"> About </Link>
              </li>
              <li className="text-[16.333px] font-[400]  hover:text-[#5E3BEE] hover:cursor-pointer">
                <Link href="/services"> Service</Link>
              </li>
              <li className="text-[16.333px] font-[400]  hover:text-[#5E3BEE] hover:cursor-pointer">
                <Link href="/blogs"> Blog</Link>
              </li>
              <li className="text-[16.333px] font-[400]  hover:text-[#5E3BEE] hover:cursor-pointer">
                <Link href="/contact-us"> Contact</Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <Link
              href="/login"
              className="border-[1.333px] border-blue-600 text-blue-600 py-[10.667px] px-[24.67px] text-[16.333px] font-[400] hover:bg-[#5E3BEE] hover:text-white transection-all duration-500 rounded-[5.333px] shadow"
            >
              Login
            </Link>
          </div>
          <div
            className="block md:hidden hover:cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.50238 5H26.7833V7.5H4.50238V5ZM11.9293 13.75H26.7833V16.25H11.9293V13.75ZM4.50238 22.5H26.7833V25H4.50238V22.5Z"
                fill="#1C1E53"
              />
            </svg>
          </div>

          <div
            className={`${
              open ? "block" : "hidden"
            } md:hidden bg-gray-300 w-full z-10 h-auto absolute top-[76px] right-0 shadow-2xl`}
          >
            <ul className="flex flex-col items-center">
              <li className="text-[16.333px] font-[400] py-3 bg-slate-100 w-full   hover:text-[#5E3BEE] hover:cursor-pointer gap-1 border-b-4 shadow-2xl">
                <span className="mx-4">Home</span>
              </li>
              <li className="text-[16.333px] font-[400] py-3 bg-slate-100 w-full   hover:text-[#5E3BEE] hover:cursor-pointer gap-1 border-b-4 shadow-2xl">
                <span className="mx-4">About</span>
              </li>
              <li className="text-[16.333px] font-[400] py-3 bg-slate-100 w-full   hover:text-[#5E3BEE] hover:cursor-pointer gap-1 border-b-4 shadow-2xl">
                <span className="mx-4">Service</span>
              </li>
              <li className="text-[16.333px] font-[400] py-3 bg-slate-100 w-full   hover:text-[#5E3BEE] hover:cursor-pointer gap-1 border-b-4 shadow-2xl">
                <span className="mx-4">Blog</span>
              </li>
              <li className="text-[16.333px] font-[400] py-3 bg-slate-100 w-full   hover:text-[#5E3BEE] hover:cursor-pointer gap-1 border-b-4 shadow-2xl">
                <span className="mx-4">Contact</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
