// import Image from 'next/image'
import React from 'react'
// import Imageb2 from '../../public/dontmiss/Imageb2.svg'
function Featured() {
  return (
    <div className='mx-auto'>
                              <h1 className=' flex items-start px-8 font-extrabold font-Helvetica Neue text-2xl'>Featured</h1>
      
        {/* Fullscreen Sneaker Image */}
        <div className="relative px-8 ">
           
        <div
  className="hero min-h-[80vh] custam-img"
  >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold font-Helvetica Neue">STEP INTO WHAT FEELS GOOD</h1>
      <p className="mb-5">
      Cause everyone should know the feeling of running in that perfect
      pair!
      </p>
      <button className="btn btn-primary">Find Your Shoe
      </button>
    </div>
  </div>
</div>
        </div>


   
       
        </div>     
    
    
  )
}

export default Featured
