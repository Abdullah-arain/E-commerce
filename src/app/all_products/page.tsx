import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import ProductCart from "../components/ProductCart";
import { client } from "@/lib/ClientSanity";
import { Image as IImage } from "sanity";

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
  const data = await client.fetch("*[_type == 'product']");

  return (
    <div className="md:mx-24 mx-2">
      <Navbar />
      <div className="grid md:grid-cols-[repeat(4,auto)] grid-cols-[repeat(2,auto)] justify-center gap-x-10">
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
