/** @format */

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-4 fixed top-0 w-full">
      {/* <div className=" bg-[#2699fb] from-indigo-500 from-10% via-sky-500 via-30% to-[#E63946] to-90%  p-4 fixed top-0 w-full"> */}
      {/* <div className="bg-[#2699fb] p-4"> */}
      <div className="max-w-[1240px] py-[15px] flex items-center justify-between mx-auto">
        <div className="text-3xl font-bold font-serif text-white">
          <a href="/">GrammerGuide</a>
        </div>
        {openMenu ? (
          <AiOutlineClose
            onClick={() => setOpenMenu(!openMenu)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setOpenMenu(!openMenu)}
            className="text-white text-2xl md:hidden block"
          />
        )}
        <ul className="hidden md:flex text-white gap-10 font-bold">
          <li className="hover:text-black">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-black">
            <a href="/verb">Verb</a>
          </li>
          <li className="hover:text-black">
            <a href="/tense">Tense</a>
          </li>
          <li className="hover:text-black">
            <a href="/modal">Modal</a>
          </li>
          <li className="hover:text-black">
            <a href="/speech">Speech</a>
          </li>
          {/* <li>
                    <a href="/about">About</a>
                </li> */}
        </ul>
        {/* responsive */}
        <ul
          className={`md:hidden text-white fixed bg-black duration-300 top-[96px] w-full h-screen ${
            openMenu ? "left-0" : "left-[-100%]"
          }`}
        >
          <li className="p-5">
            <a href="/">Home</a>
          </li>
          <li className="p-5">
            <a href="/tense">Tense</a>
          </li>
          <li className="p-5">
            <a href="/modal">Modal</a>
          </li>
          <li className="p-5">
            <a href="/speech">Speech</a>
          </li>
          {/* <li className="p-5">
                    <a href="/about">About</a>
                </li> */}
        </ul>
      </div>
    </div>
  );
};
export default Header;
