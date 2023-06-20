import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <div>
      <h3 className="text-center text-yellow-700 font-bold text-lg mt-32">
        PRODUCTS
      </h3>
      <h2 className="md:text-4xl text-3xl mb-8 mt-4 text-center font-bold">
        Check What We Have
      </h2>

<section className="flex md:flex-row flex-col">
      <div className="container flex flex-col flex-1 hover:scale-110 transition duration-700 ease-in-out">
      <div className="bg-slate-400">
            <Image src={"/boy.png"} alt="image" width={300} height={300} />
          </div>
        <h6 className="text-gray-800">Style Avenue</h6>
        <span className="block mt-2 font-bold text-2xl text-gray-800">$199</span>
      </div>

      <div className="container flex flex-col flex-1 hover:scale-110 transition duration-700 ease-in-out">
      <div className="bg-gray-500">
            <Image
              src={"/watch.png"}
              alt="image"
              width={500}
              height={500}
              className="mt-20 mb-[72px]"
            />
          </div>
        <h6 className="text-gray-800">The Watch Vault</h6>
        <span className="block mt-2 font-bold text-2xl text-gray-800">$120</span>
      </div>

      <div className="container flex flex-col flex-1 hover:scale-110 transition duration-700 ease-in-out">
        <div className="bg-slate-400">
          <Image
            src={"/shoe.png"}
            alt="image"
            width={500}
            height={500}
            className="my-[120px]"
          />
        </div>
        <h6 className="text-gray-800">Footwear Fusion</h6>
        <span className="block mt-2 font-bold text-2xl text-gray-800">$99</span>
      </div>
      </section>
    </div>
  );
};

export default Products;
