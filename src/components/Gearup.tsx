import React from 'react'
import g1 from '../../public/gea/g1.png'
import g2 from '../../public/gea/g2.png'
import g3 from '../../public/gea/g3.png'
import g4 from '../../public/gea/g4.png'
import Link from 'next/link'

import Image from 'next/image'
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';


  





// const responsive = {
  //   superLargeDesktop: {
    //     // the naming can be any, depends on you.
    //     breakpoint: { max: 4000, min: 3000 },
    //     items: 5
    //   },
    //   desktop: {
      //     breakpoint: { max: 3000, min: 1024 },
      //     items: 3
      //   },
      //   tablet: {
        //     breakpoint: { max: 1024, min: 464 },
        //     items: 2
        //   },
        //   mobile: {
          //     breakpoint: { max: 464, min: 0 },
          //     items: 1
          //   }
          // };
          
 const Gearup = () => {
  return (
  

 

<div className="bg-white py-16 px-8">
        <div className=" mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-left">Gear Up</h2>
          
          {/* Shop Men's and Women's with Arrows */}
          <div className="flex justify-between mb-8">
            {/* Shop Men's Section */}
            <div className="flex items-center">
              <h2 className="text-1xl font-bold text-gray-900 ml-96">Shop Men</h2>
              <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center ml-2">
                ←
              </button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center ml-2">
                →
              </button>
            </div>
            
            {/* Shop Women's Section */}
            <div className="flex items-center">
              <h2 className="text-1xl font-bold text-gray-900">Shop Women</h2>
              <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center ml-2">
                ←
              </button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center ml-2">
                →
              </button>
            </div>
          </div>

{/* divider */}

<div className="flex w-full flex-col lg:flex-row md:flex-row">
  <div className="card bg-base-300 rounded-box grid  flex-grow place-items-center">
              <Image src={g1} alt="Mens Top" width={300} height={300} className="rounded-lg" />
              <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT ADV TechKnit Ultra</p>
              <p className="text-gray-500 text-sm">₹ 3,895</p>
            </div></div>
  <div className="divider lg:divider-horizontal">OR</div>
  <div className="card bg-base-300 rounded-box grid  flex-grow place-items-center">content</div>
</div>


          {/* <div className="grid grid-cols-4 gap-12">
            {/* Men's Section */}
            {/* <div className="text-center flex flex-col items-center">
              <Image src={g1} alt="Mens Top" width={300} height={300} className="rounded-lg" />
              <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT ADV TechKnit Ultra</p>
              <p className="text-gray-500 text-sm">₹ 3,895</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <Image src={g2}alt="Men's Shorts" width={300} height={300} className="rounded-lg" />
              <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT Challenger</p>
              <p className="text-gray-500 text-sm">₹ 2,495</p>
            </div>  */}

{/*             
            <div className="text-center flex flex-col items-center ">
              <Image src={g3}alt="Women's Top" width={300} height={300} className="rounded-lg" />
              <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT ADV Run Division</p>
              <p className="text-gray-500 text-sm">₹ 5,295</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <Image src={g4} alt="Women's Leggings" width={300} height={300} className="rounded-lg" />
              <p className="text-gray-700 font-medium mt-4">Nike Fast</p>
              <p className="text-gray-500 text-sm">₹ 3,795</p>
            </div> */}
          {/* </div> */}
        






















  {/* <div className='py-2'><h1 className=' flex items-start px-8 font-extrabold font-Helvetica Neue text-2xl'>Gear Up</h1></div>
    <div className='flex flex-col lg:flex-row gap-12 py-10'>    
     
    <div className='flex-[1] '>                                 <div className="flex space-x-4">
                                   <button className="px-[23] py-2 font-bold rounded-full"> Mens Shop</button>
                                   <div className="flex space-x-2 flex-col md:flex-row">
                                     <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center font-bold">
                                       ←
                                     </button>
                                     <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center">
                                       →
                                     </button>
                                   </div>
                                 </div>
    <div className='flex flex-col lg:flex-row md:flex-row gap-2'>
      
    <div> <Link href='/product/1' >  

<Image className='w-full' src={g1} alt='gear up' width={200}
height={200}/>
<div>
<h1>sna</h1>
<p>ssaakbsmx</p>
</div></Link></div>


<div> <Link href='/product/1' >  

<Image className='w-full' src={g1} alt='gear up' width={200}
height={200}/>
<div >
<h1>sna</h1>
<p>ssaakbsmx</p>
</div></Link>
      </div></div>
</div>


    <div className='flex-[1]'>                                 <div className="flex space-x-2">
                                   <button className="px-4 py-2 font-bold rounded-full">Shop</button>
                                   <div className="flex space-x-2 flex-col md:flex-row">
                                     <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center font-bold">
                                       ←
                                     </button>
                                     <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center">
                                       →
                                     </button>
                                   </div>
                                 </div>
    <div className='flex flex-col md:flex-row lg:flex-row gap-2'>

    <div> <Link href='/product/1' >  

<Image className='w-full' src={g1} alt='gear up' width={200}
height={200}/>
<div >
<h1>sna</h1>
<p>ssaakbsmx</p>
</div></Link>
</div>

<div> <Link href='/product/1' >  

<Image className='w-full' src={g1} alt='gear up' width={200}
height={200}/>
<div >
<h1>sna</h1>
<p>ssaakbsmx</p>
</div>
</Link>
</div>
    </div>
    </div> */}

      
{/* <Carousel responsive={responsive}>
  <div> <Link href='/product/1' >  

<Image className='w-full' src={g1} alt='gear up' width={200}
height={200}/>
<div >
<h1>sna</h1>
<p>ssaakbsmx</p>
</div>
</Link></div>


  <div> <Link href='/product/1' >  

<Image className='w-full' src={g1} alt='gear up' width={200}
height={200}/>
<div >
<h1>sna</h1>
<p>ssaakbsmx</p>
</div>
</Link></div>



  <div> <Link href='/product/1' >  

<Image className='w-full' src={g1} alt='gear up' width={200}
height={200}/>
<div >
<h1>sna</h1>
<p>ssaakbsmx</p>
</div>
</Link></div>


  <div> <Link href='/product/1' >  

<Image className='w-full' src={g1} alt='gear up' width={200}
height={200}/>
<div >
<h1>sna</h1>
<p>ssaakbsmx</p>
</div>
</Link></div>
</Carousel>;                    */}
                                                     
                                                           
                               










</div>
)}


export default Gearup


{/* <div className=''>
 <Link href='/product/1' >  

 <Image className='w-full' src={g1} alt='gear up' width={200}
 height={200}/>
 <div >
 <h1>sna</h1>
 <p>ssaakbsmx</p>
 </div>
 </Link>



 <Link href='/product/1' >

 <Image className='w-full' src={g2} alt='gear up' width={200}
 height={200}/>
 <div >
 <h1>bxs</h1>
 <p>ashvc</p>
 </div>
 </Link>
</div>
<div>

 <Link href='/product/1' >

 <Image className='w-full' src={g3} alt='gear up' width={200}
 height={200}/>
 <div >
 <h1>abc</h1>
 <p>hdkbjmanj</p>
 </div>
 </Link>
 
 <Link href='/product/1' >

 <Image className='w-full' src={g4} alt='gear up' width={200}
 height={200}/>
<div>
 <h1>avcb</h1>
 <p>sjfvm</p>
 </div>
 
 </Link>
</div> */}












  

