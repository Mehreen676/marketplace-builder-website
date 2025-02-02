import React from 'react';
import Image from 'next/image';
// import Firstimg from "@/app/Assets/Firstimg.png"
import Nike from "../../public/images/nikebanner.jpg"
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

import { GiHamburgerMenu } from "react-icons/gi";
import LOGO1 from "../../public/images/LOGO1.svg"
import logo2 from "../../public/images/logo2.svg"
import bag from "../../public/images/bag.png"   



import Logo from "@/app/Assets/Logo.png"
import { ShoppingBag, ShoppingCart } from 'lucide-react';
const Header = () => {
  return (  
<div>
        <header className="bg-[#F5F5F5] border-b font-[Helvetica Neue] flex justify-between items-center px-10 py-2 sm:px-6 lg:px-8 ">
          {/* Logo Section */}
          <Image src={LOGO1} alt="Logo" className="w-[24px] h-[24px]" />
    
          {/* Links Section */}
          <nav>
            <ul className="flex items-center space-x-3 text-black text-[11px] font-medium">
              <li>
                <Link href="#">Find a Store</Link>
              </li>
              <span className="h-[14px] w-px bg-gray-400" />
              <li>
                <Link href="#">Help</Link>
              </li>
              <span className="h-[14px] w-px bg-gray-400" />
              <li>
                <Link href="/sign up">Join Us</Link>
              </li>
              <span className="h-[14px] w-px bg-gray-400" />
              <li>
                <Link href="/Login">Sign In</Link>
              </li>
            </ul>
          </nav>
      </header>
      {/* Main navbar */}
    
    <header className="bg-white border-b shadow-sm">
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 py-2 md:px-8">
        {/* Logo */}
        <Image src={logo2} alt="Logo" className="w-[58.85px] h-[20.54px]" />

        {/* Navigation Links (hidden on mobile) */}
        <nav className="items-center hidden space-x-6 font-medium md:flex">
          <a href="#" className="text-black hover:underline">
            New & Featured
          </a>
          <a href="#" className="text-black hover:underline">
            Men
          </a>
          <a href="#" className="text-black hover:underline">
            Women
          </a>
          <a href="#" className="text-black hover:underline">
            Kids
          </a>
          <a href="#" className="text-black hover:underline">
            SNKRS
          </a>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar (hidden on small screens) */}
          <div className="items-center hidden px-3 py-1 rounded-full lg:flex bg-slate-100">
            <CiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="flex-grow pl-2 text-sm bg-transparent outline-none"
            />
          </div>

          {/* Icons */}
          <FaRegHeart className="text-lg text-black" />
          <Image src={bag} alt="Bag Icon" className="w-[18px] h-[18px]" />
          {/* <ShoppingBag className='text-lg text-black'/> */}
        </div>

        {/* Mobile Menu (visible only on small screens) */}
        <button className="text-lg text-black md:hidden">
       Menu   <GiHamburgerMenu />
      
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className="hidden w-full px-4 py-3 bg-white md:hidden" id="mobile-menu">
        <a href="#" className="block py-1 text-black hover:underline">
          New & Featured
        </a>
        <a href="#" className="block py-1 text-black hover:underline">
          Men
        </a>
        <a href="#" className="block py-1 text-black hover:underline">
          Women
        </a>
        <a href="#" className="block py-1 text-black hover:underline">
          Kids
        </a>
        <a href="#" className="block py-1 text-black hover:underline">
          SNKRS
        </a>
      </div>
    </header>
    </div>
  )
};

    export default Header















