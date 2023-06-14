import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hamburger from './components/Hamburger'
import Drop from './components/Drop'

const page = () => {
  return (
    <div className='md:mx-24 mx-2'>
      <Navbar/>
      <HeroSection/>
      <Footer/>
      {/* <Drop/> */}
    </div>
  )
}

export default page




// import Image from "next/image";
// import {urlForImage} from "../../sanity/lib/image"
// import ProductCart from "../app/components/ProductCart"
// import {client} from "../lib/ClientSanity"
// import {Image as IImage} from 'sanity';

// export const getProductData = async () => {
//   const res = await client.fetch(`*[_type=="product"]{
//     item,
//     price,
//     _id,
//     image,
//     description,
//     category -> {
//       name
//     }
//   }`)
//   return res
// }

// interface IProduct {
//   item: string,
//   _id: string,
//   description: string,
//   image: IImage,
//   price: number,
//   category: {
//     name: string
//   }
// }

// export default async function Page() {

//   const data: IProduct[] = await getProductData()
//   return (
// <div className="grid grid-cols-[repeat(4,auto)] justify-center gap-x-10">
//    {data.map((itm) =>(
//     <div>
//       <ProductCart itm={itm}/>
//     </div>
//    ))}
// </div>
//   )
//  }
