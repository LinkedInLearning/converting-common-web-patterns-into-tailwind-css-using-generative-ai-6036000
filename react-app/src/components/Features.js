import React from 'react';

const Features = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 grid grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Features Section</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros.
        </p>
        <a href="#" className="text-blue-500 hover:underline">Learn More</a>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-300 w-16 h-16"></div>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-gray-300 w-16 h-16"></div>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-gray-300 w-16 h-16"></div>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
