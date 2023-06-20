// import Image from "next/image";
// import {urlForImage} from "../../../sanity/lib/image"
// import ProductCart from "./ProductCart"
// import {client} from "../../lib/ClientSanity"
// import {Image as IImage} from 'sanity';

// export const getProductData = async () => {
//   const res = await client.fetch(`*[_type=="product"]{
//     price,
//     _id,
//     title,
//     image,
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

