import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
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
  const data: IProduct[] = await getProductData();

  return (
    <div className="md:mx-24 mx-2">
      <Navbar />
      <div className="grid grid-cols-[repeat(4,auto)] justify-center gap-x-10">
        {data.map((itm) => (
          <div key={itm._id}>
            <ProductCart itm={itm} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
