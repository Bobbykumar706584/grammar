/** @format */

import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-12 bg-orange-800 left-1/2 text-white font-['poppins'] transform -translate-x-1/2 -translate-y-1/2 w-2/3 z-50 flex items-center justify-center p-2  transition-all duration-500 ease-in-out text-center ${
        scrolled
          ? "backdrop-blur-lg bg-white/30 py-1 shadow-xl rounded-full md:w-[50%] border border-white/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1240px] flex items-center justify-between px-4 py-2">
        <div
          className={`text-2xl md:text-3xl text-orange-800 font-bold font-serif mr-5 transition-all duration-300`}
        >
          <a href="/">GrammarGuide</a>
        </div>

        {openMenu ? (
          <AiOutlineClose
            onClick={() => setOpenMenu(!openMenu)}
            className=" text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setOpenMenu(!openMenu)}
            className=" text-2xl md:hidden block"
          />
        )}

        <ul
          className={`hidden md:flex gap-8 font-bold transition-all text-orange-800 duration-300 `}
        >
          <li className="">
            <a href="/">Home</a>
          </li>
          <li className="">
            <a href="/verb">Verb</a>
          </li>
          <li className="">
            <a href="/tense">Tense</a>
          </li>
          <li className="">
            <a href="/modal">Modal</a>
          </li>
          <li className="">
            <a href="/speech">Speech</a>
          </li>
        </ul>
      </div>

      {/* responsive menu */}
      <ul
        className={`md:hidden  fixed bg-black duration-300 top-[72px] w-full h-screen ${
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
      </ul>
    </div>
  );
};

export default Header;
