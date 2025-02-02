import React from 'react'

export default function Content() {
  return (
    <div className='mx-auto flex-wrap'>
      <div className="relative flex flex-col items-center text-center bg-white py-12">
        {/* Section Title */}
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
          First Look
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-slate-500 text-white">
          NIKE AIR MAX PULSE
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6 sm:text-base md:text-lg lg:text-xl">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse—designed to push you past your limits and help you go to the max.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 flex-col md:flex-row  ">
          <button className="px-6 py-3 bg-blue-700 text-white font-medium rounded-full hover:bg-gray-800 transition">
            Notify Me
          </button>
          <button className="px-6 py-3 bg-blue-700 text-white font-medium rounded-full hover:bg-gray-800 transition">
            Shop Air Max
          </button>
        </div>
      </div>
    </div>
  )
}

 



//Content2






