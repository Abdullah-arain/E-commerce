"use client"
import Link from 'next/link'

import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { RiShoppingCartFill } from 'react-icons/ri';
import { Button } from '../../../components/ui/button';
import {DropdownMenuRadioGroupDemo} from "../components/Dropdown"
import { ButtonLink } from '../components/Dropdown';
import { ButtonLink2 } from '../components/Dropdown';
import  Drop  from '../components/Drop';
import Hamburger from './Hamburger';


export default function Navbar() {
  return (
    <div className='flex bg-white border-b-2 items-center'>

      {/* Logo */}

      <div className='flex-1 flex flex-row mt-5'>
        <p className='md:text-xl text-lg font-semibold bg-black text-white mb-3 px-2 md:px-4 py-1'>Velocity</p>
        <p className='text-xl ml-2 mt-1 font-medium'>Wear</p>
      </div>
      
      {/* route */}
    
    <span className='md:block hidden flex-2'>
         {/* <ButtonLink/>

         <DropdownMenuRadioGroupDemo/>

        <ButtonLink2/> */}
        <Drop/>
       </span>

       {/* cart */}

      <span className='flex-1 md:block hidden'>
       <div className='grid justify-items-end'>
          <RiShoppingCartFill size={30} className='justify-self-end mt-5'/>
       </div>
       </span>

      {/* Hamburger */}
       <span className='flex-1 md:hidden block mt-5'>
       <div className='grid justify-items-end'>
        <Hamburger/>
       </div>
       </span>

    </div>
  )
}





















// const Navbar = () => {

//   return (
//     <div className='flex flex-col md:flex-row md:pt-8 pt-6 border-b-2'>

//        <span className='flex-1 flex '> 

//       <div className='flex-1 flex flex-row'>
//         <p className='md:text-xl text-lg font-semibold bg-black text-white mb-3 px-2 md:px-4 py-1'>Velocity</p>
//         <p className='text-xl ml-2 mt-1 font-medium'>Wear</p>
//       </div>

//       <div className='flex-2 items-center justify-ceter pb-2 gap-16 flex flex-col order-1 md:flex-row'>        
//         <ButtonLink/>

//         <DropdownMenuRadioGroupDemo/>

//        <ButtonLink2/>
//       </div>
      
//       <div className='flex-1 flex flex-row gap-x-3 order-last ml-40 justify-items-stretch'>
        
//         <RiShoppingCartFill size={30} className='justify-self-end'/>
//       </div>
//      </span>

     {/* <div className='flex-1'>
      <GiHamburgerMenu/>
     </div> */}
{/*       
    </div>
  )
}

export default Navbar */}






// const [isOpen,setIsOpen] = useState(false)

//  const [showMore, setShowMore] = useState(false)


 // function handleMoreClick() {
  //   setShowMore(!showMore);
  // }
  

// import React from 'react'


// export default function Navbar() {
//   return (
//     <div>
//       <header className="flex flex-wrap justify-between items-center">
//   <a href="#" className="flex-1">
//     <img className="inline h-7" src="https://res.cloudinary.com/thirus/image/upload/v1628614672/logos/circleai_dm9slt.png" alt="" />
//   </a>
//   <ul className="order-last flex-[100%] mt-4 md:order-none md:flex-auto md:mt-0">
//     <li>
//       <a href="">Home</a>
//     </li>
//     <li>
//       <a href="#">About Us</a>
//     </li>
//     <li>
//       <a href="#">Pricing</a>
//     </li>
//   </ul>
//   <span className="flex-1 text-right">
//     <a href="" className="btn">Join us</a>
//   </span>
// </header>
//     </div>
//   )
// }
