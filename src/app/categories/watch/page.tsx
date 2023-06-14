"use client"
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { urlForImage } from "../../../../sanity/lib/image";
import ProductCart from "../../components/ProductCart";
import { client } from "../../../lib/ClientSanity";
import { Image as IImage } from "sanity";

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    item,
    price,
    _id,
    image,
    description,
    category -> {
      name
    }
  }`);
  return res;
};

interface IProduct {
  item: string;
  _id: string;
  description: string;
  image: IImage;
  price: number;
  category: {
    name: string;
  };
}



export default async function page() {
  
  // const data: IProduct[] = await getProductData();
  
  const data = await client.fetch('*[_type == "product"]');
  const [filteredData, setFilteredData] = useState(data);
  const filterData = filteredData.filter((item: any) => item.category === 'Men watch');
  
  return (
    <div className="md:mx-24 mx-2">
      <Navbar />
      <div className="grid grid-cols-[repeat(4,auto)] justify-center gap-x-10">
        {filterData.map((itm: any) => (
          <div>
            <ProductCart itm={itm} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}





// YourComponent.jsx
// import { useEffect, useState } from 'react';
// // import sanityClient from '../path/to/sanity.js';

// const YourComponent = () => {
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await client.fetch('*[_type == "product"]');
//         const filteredData = data.filter((item: any) => item.category === 'Men watch');
//         setFilteredData(filteredData);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {/* Render your filtered data here */}
//       {/* {filteredData} */}
//       <div className="grid grid-cols-[repeat(4,auto)] justify-center gap-x-10">
//          {filteredData.map((itm) => (
//            <div>
//              <ProductCart itm={itm} />
//            </div>
//          ))}
//       </div>
//     </div>
//   );
// };

// export default YourComponent;
