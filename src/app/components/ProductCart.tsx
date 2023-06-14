"use client"

import Image from "next/image";
import {urlForImage} from "../../../sanity/lib/image"
import { FC } from "react";

const ProductCart : FC<{itm: any}> = ({itm}) => {

    const handleAddToCart = async () =>{
        const res = await fetch("/api/cart",{
            method: "POST",
            body: JSON.stringify({
                product_id: itm._id
            })
        })

        const result = await res.json()
        console.log(result)
    }
  return (
    <>
    <Image
     height={200}
     width={200}
     className="max-h-[100px] object-cover object-top"
     src={urlForImage(itm.image).url()} alt="Product"/>
     <div className="text-2xl font-semibold text-gray-800"> <h1>{itm.item}</h1></div>
     <div>{itm.description}</div>
     <div>$ {itm.price}</div>
     <button onClick={() => handleAddToCart()} className="bg-blue-700 text-white rounded-sm px-5 py-1">Add to Cart</button>
   </>
  )
}

export default ProductCart
