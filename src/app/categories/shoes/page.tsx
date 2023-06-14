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
  
  const [filteredData, setFilteredData] = useState([]);
  const data: IProduct[] = await getProductData();

  
  const fetchData = async () => {
    try {
      const data = await client.fetch('*[_type == "product"]');
      const filteredData = data.filter((item: any) => item.category === 'Men watch');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  
  return (
    <div className="md:mx-24 mx-2">
      <Navbar />
      <div className="grid grid-cols-[repeat(4,auto)] justify-center gap-x-10">
        {filteredData.map((itm) => (
          <div>
            <ProductCart itm={itm} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}



