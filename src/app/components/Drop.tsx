"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Button } from "../../../components/ui/button"



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex md:gap-x-[56px] gap-y-5 items-center pb-2 md:flex-row flex-col">

        <span className="text-md text-gray-800">
          <Link href={"/"}>Home</Link>
        </span>

        <span>
            <button onClick={() => setIsOpen((prev) => !prev)} className="flex items-center gap-x-1.5">
          <div className="text-md text-gray-800">
              Catergories
          </div>
            <div>{isOpen ?  <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</div>
            </button>

          {isOpen && (
            <div className="bg-white absolute drop-shadow-xl -ml-8 md:-ml-10 mt-1">
                <h3 className="px-4 py-1 hover:bg-slate-100">
                  <a href="./categories/cloth">Branded Cloth</a>
                </h3>
                <h3 className="px-4 py-1 hover:bg-slate-100">
                  <a href="./categories/watch">Traditinal Watch</a>
                </h3>
                <h3 className="px-4 py-1 hover:bg-slate-100">
                  <a href="./categories/glasses">Sun Glasses</a>
                </h3>
                <h3 className="px-4 py-1 hover:bg-slate-100">
                  <a href="./categories/shoes">Cool Shoes</a>
                </h3>
            </div>
          )}
        </span>

        <span className="text-md text-gray-800">
          <Link href={"/"}>All Products</Link>
        </span>

    </header>
  );
};

export default Header;
