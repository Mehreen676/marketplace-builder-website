          'use client'
 import React, { useEffect, useState } from 'react'
 import Image from 'next/image'
 import { Product } from '@/types/products'
 import { client } from '@/sanity/lib/client'
 import { allproducts,three } from '@/sanity/lib/queries'

 import { urlFor } from '@/sanity/lib/image'
 import { console } from 'inspector'
 







 
 const Shoes = () => {
  const [products, setProducts]=useState<Product[]>([])

 useEffect(()=>{
              async function fetchProducts() {

                               const fetchedProducts:Product[]=await client.fetch(three)              
                                setProducts(fetchedProducts)            
                                            }     
                           fetchProducts()
 },[])
   return (
     <div className="max-w-6xl mx-auto px-4 py-8 ">
       <h1 className='text-2xl font-bold mb-4 text-left'>Best of Air Max</h1>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8'>
                               {products.map((products)=>(
                               <div key={products._id} className='bordern rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 '>
                                

                                {products.productname}
                                {products.image && (<Image src={urlFor(products.image).url()}
                                alt='image'
                                width={200}
                                height={200} className='w-full h-48 object-cover rounded-md'/>)}
                                <h1 className='text-lg font-semibold mt-4'>{products.productname}</h1>
                               <p className='text-gray-500 mt-2'> ${
                                 products.price
                                }</p>
                               </div>
                               )

                               )}
                              
       </div>
     </div>
   )
 }

 export default Shoes











































// fetch product from sanity


// const ProductCard:React.FC=()=>{
//   const [product ,setProducts]=useState<Product[]>([]);


// const fetchedProducts=async()=>{
//   try{
//     const query =`*[_type == "product"]{
//     _id.
//     name,
//     description,
//     category,
//     price,
//     inventory,
//     colors,
//     status,
//     image{
//     assest->{
//     url}
//   }}`

  
  
//   const data =await sanity.fetch(query);
// setProducts(data);
// }catch(error)


// {
//   console.error("Error fetching product:",error)
// };
// }
// }