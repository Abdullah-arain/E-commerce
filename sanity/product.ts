import { defineField } from "sanity";

const product = {
  name: "product",
  type: "document",
  title: "Products",
  fields: [
    {
        name: "item",
        type: "string",
        title: "Product Name"
    },
    {
        name: "description",
        type: "string",
        title: "Description"
    },
    {
        name: "price",
        type: "number",
        title: "Price"
    },
    {
        name: "image",
        type: "image",
        title: "Image"
    },
    defineField({
        name: "category",
        title: "Product Category",
        type: "reference",
        to:[
            {
                type: "category"
            },
        ]
    })
    
  ]
}

export default product
