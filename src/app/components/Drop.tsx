"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";



const Header = () => {

 const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownOpen = () => {
    setIsOpen(true);
  };

  const handleDropdownClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex md:gap-x-[56px] gap-y-5 items-center pb-2 md:flex-row flex-col">

        <span className="text-md text-gray-800">
          <Link href={"/"}>Home</Link>
        </span>

              <span className="relative" onMouseLeave={handleDropdownClose}>
        <button
          onMouseEnter={handleDropdownOpen}
          className="flex items-center gap-1 text-md text-gray-800"
        >
          {selectedOption || "Categories"} <MdKeyboardArrowDown />
        </button>
        {isOpen && (
          <div className="bg-white absolute border drop-shadow-xl -ml-8 md:-ml-12 w-40">
            <a href="/cloth">
              <h3 className="px-4 py-2 hover:bg-slate-100 text-gray-500">
                Branded Cloth
              </h3>
            </a>
            <a href="/watch">
              <h3 className="px-4 py-2 hover:bg-slate-100 text-gray-500">
                Traditinal Watch
              </h3>
            </a>
            <a href="/glasses">
              <h3 className="px-4 py-2 hover:bg-slate-100 text-gray-500">
                Sun Glasses
              </h3>
            </a>
            <a href="/shoes">
              <h3 className="px-4 py-2 hover:bg-slate-100 text-gray-500">
                Cool Shoes
              </h3>
            </a>
          </div>
        )}
      </span>

        <span className="text-md text-gray-800">
          <Link href={"/all_products"}>All Products</Link>
        </span>

    </header>
  );
};

export default Header;
