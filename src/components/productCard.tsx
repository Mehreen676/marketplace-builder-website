import React from 'react';
import nikebanner from '../../public/images/nikebanner.jpg'

import Image from 'next/image';

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 pb-10 border-b-2 px-12 mx-auto gap-8">

<div className="card bg-base-100 w-69 shadow-xl hover:zoom-in-up">
  <div>
    <Image
      src={nikebanner}
      alt="Shoes" 
      width={442}
      height={442} className=' w-full'/>
  </div>
  <div className="card-body">

  <div className='px-2 py-2'> <div className='flex justify-between gap-4 font-bold '>
    <h2 className="card-title font-{Helvetica Neue} ">Nike Air Max Pulse</h2>
<p  >₹ 13 995</p></div>

    <p className='text-gray-600'>Womens Shoes</p></div>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>

</div>

<div className="card bg-base-100 w-69 shadow-xl">
  <div>
    <Image
      src={nikebanner}
      alt="Shoes" 
      width={442}
      height={442} className=' w-full'/>
  </div>
  <div className="card-body">
  <div className='px-2 py-2'> <div className='flex justify-between gap-4 font-bold '>
    <h2 className="card-title font-{Helvetica Neue} ">Nike Air Max Pulse</h2>
<p  >₹ 13 995</p></div>

    <p className='text-gray-600'>Mens Shoes</p></div>
    
  </div>

</div>

<div className="card bg-base-100 w-69 shadow-xl">
  <div>
    <Image
      src={nikebanner}
      alt="Shoes" 
      width={442}
      height={442} className=' w-full'/>
  </div>
  <div className="card-body">
  <div className='px-2 py-2'> <div className='flex justify-between gap-4 font-bold '>
    <h2 className="card-title font-{Helvetica Neue} ">Nike Air Max Pulse</h2>
<p  >₹ 13 995</p></div>

    <p className='text-gray-600'>Mens Shoes</p></div>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>

</div>


      </div>
  );
};

export default ProductCard;