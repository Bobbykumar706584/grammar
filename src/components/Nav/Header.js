import React, { useState } from "react"
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
return (
    <div className="bg-blue-500 p-4 fixed top-0 w-full">
    {/* <div className="bg-[#2699fb] p-4"> */}
        <div className="max-w-[1240px] py-[15px] flex items-center justify-between mx-auto">
            <div className="text-3xl font-bold font-serif">
                <a href="/">GrammarGuide</a>
            </div>
            {openMenu ? 
            <AiOutlineClose onClick={() => setOpenMenu(!openMenu)}  className="text-white text-2xl md:hidden block"/>
                :
            <AiOutlineMenu onClick={() => setOpenMenu(!openMenu)}  className="text-white text-2xl md:hidden block"/>
             }
            <ul className="hidden md:flex text-white gap-10">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/verb">Verb</a>
                </li>
                <li>
                    <a href="/tense">Tense</a>
                </li>
                <li>
                    <a href="/modal">Modal</a>
                </li>
                <li>
                    <a href="/speech">Speech</a>
                </li>
                {/* <li>
                    <a href="/about">About</a>
                </li> */}
            </ul>
            {/* responsive */}
            <ul className={`md:hidden text-white fixed bg-black duration-300 top-[96px] w-full h-screen ${openMenu ? 'left-0' : 'left-[-100%]'}`}>
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
)

}
export default Header