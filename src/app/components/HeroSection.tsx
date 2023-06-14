import React from 'react'
import Image from 'next/image'
import Hero from "../../../public/Hero.png"
import { Button } from '../../../components/ui/button'
import { RiShoppingCartFill } from 'react-icons/ri';
import Promotion from './Promotion';
import Products from './Products';
import Newsletter from './Newsletter';



export default function HeroSection() {
  function ButtonLink() {
    return <Button variant="default" className='text-xl font-medium bg-yellow-400 hover:bg-yellow-400'>Sale 30%</Button>
  }
  function ButtonLink2() {
    return <Button variant="default" className='text-lg mt-7 ml-3'><RiShoppingCartFill size={30} className='mr-3'/>
    Start Shopping</Button>
  }
  
  return (
    <>
    <div className='flex flex-row'>
      <div className='flex-1 md:mt-20 mt-16'>
       <ButtonLink/>
        <h1 className='text-5xl font-bold w-54 mt-4'>Discover</h1>
        <h1 className='text-5xl font-bold w-54 mt-2'>Your Perfect</h1>
        <h1 className='text-5xl font-bold w-54 mt-2'>Style at</h1>
        <h1 className='md:text-6xl text-5xl font-bold text-yellow-400 mt-2'>GlamourVogue</h1>
        <p className='text-xl mt-4 ml-2 text-gray-600 w-56'>Elevate Your Wardrobe with the Latest Fashion Trends</p>
        <ButtonLink2/>
      </div>

      <div className='md:block hidden'>
        <Image src={"/ok.png"} alt='image' width={700} height={600} className='mt-20 '/>
      </div>
      {/* <div className='bg-blue-800 mt-24 py-28 px-48 rounded-tl-full'>
      </div> */}
    </div>
      <Promotion/>
      <Products/>
      <Newsletter/>
      </>
  )
}
