"use client"
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ProductCart from "../components/ProductCart";
import { client } from "../../lib/ClientSanity";
import { Image as IImage } from "sanity";
import { resolve } from "path";

const myObject: {
  [x: string]: unknown; // or [x: string]: any;
  getProductData: () => Promise<any>;
} = {
  getProductData: async () => {
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
  }
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

  const data = await client.fetch("*[_type == 'product' && category->ICateg == 'Men Dresses']");
  
  return (
    <div className="md:mx-24 mx-2">
      <Navbar />
      <h1 className="text-4xl text-center font-bold mt-10">Men's Shirts</h1>
        <div className="grid md:grid-cols-[repeat(3,auto)] grid-cols-[repeat(2,auto)] justify-center gap-x-5 md:gap-x-28 gap-y-10 mt-20">
        {data.map((itm: any) => (
          <div key={itm._id}>
            <ProductCart itm={itm} />
          </div>
        ))}
        </div>
      <Footer />
    </div>
  );
}



