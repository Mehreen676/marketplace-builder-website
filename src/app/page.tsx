import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Nike Shoes</title>
        <meta name="description" content="Discover the latest Nike shoes and shop your favorites." />
      </Head>

      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Nike Shoes</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#products" className="text-gray-600 hover:text-gray-900">Shop</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-gray-800 text-white text-center py-20">
          <h2 className="text-4xl font-bold">Step into Style</h2>
          <p className="mt-4 text-lg">Explore the latest collection of Nike shoes for every occasion.</p>
          <a
            href="#products"
            className="mt-6 inline-block px-6 py-3 bg-red-600 text-white font-medium rounded hover:bg-red-700"
          >
            Shop Now
          </a>
        </section>

        <section id="products" className="container mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Collection</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded shadow p-4">
                <Image
                  src={`/shoe-${index + 1}.jpg`}
                  alt={`Nike Shoe ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded"
                />
                <h4 className="mt-4 text-lg font-semibold text-gray-800">Nike Air Max {index + 1}</h4>
                <p className="mt-2 text-gray-600">High-quality running shoes designed for comfort and style.</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">$120</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-gray-800">About Us</h3>
            <p className="mt-4 text-gray-600">
              At Nike Shoes, we believe in providing the best footwear for all your athletic and casual needs. Our mission
              is to inspire every step of your journey.
            </p>
          </div>
        </section>

        <section id="contact" className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-gray-800">Contact Us</h3>
            <p className="mt-4 text-gray-600">Have questions? Reach out to us and we'll be happy to assist.</p>
            <form className="mt-8 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Nike Shoes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
