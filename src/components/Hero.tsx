
import React from 'react'
               
import Image from 'next/image';
import Nikebanner from '../../public/images/nikebanner.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Hero = () => {



  return (
    <div>
      <div className="w-full mx-auto top-10 bg-[rgb(229,229,229)]">
        <h1 className="font-Helvetica Neue text-center text-[15px] font-semibold top-1 text-[#111111]">
          Hello Nike App
        </h1>
        <p className="font-Helvetica Neue text-center text-[11px] font-[400]">
          Download the app to access everything Nike.{' '}
          <span className="underline font-semibold font-Helvetica Neue">
            Get Your Great
          </span>
        </p>
      </div>

      <div className=" bg-gray-100 ">
        {/* Fullscreen Sneaker Image */}
        <div className="relative px-8 ">
           
        <Image
                  src={Nikebanner}
                  alt={"nike"}
                  width={1200}
                  height={100}
                  className="  rounded-md"/>
              
              
</div>
        </div>
      </div>
    
  
  )
};

export default Hero;

  

