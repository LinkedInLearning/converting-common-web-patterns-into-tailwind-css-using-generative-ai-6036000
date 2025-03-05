import React from 'react';

const Hero = () => (
  <section className="bg-gray-200 py-16">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Title copy goes here</h1>
      <p className="text-gray-700 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis
        euismod lorem.
      </p>
      <a href="#" className="bg-black text-white px-6 py-3 rounded-lg">Get Started</a>
      <div className="mt-8">
        <div className="bg-gray-300 w-full h-64 mx-auto"></div>
      </div>
    </div>
  </section>
);

export default Hero;
