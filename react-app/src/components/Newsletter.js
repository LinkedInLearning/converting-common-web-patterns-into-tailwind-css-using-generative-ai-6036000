import React from 'react';

const Newsletter = () => (
  <section className="bg-gray-200 py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Newsletter Sign Up</h2>
      <p className="text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <form className="flex justify-center">
        <input type="email" placeholder="Your email" className="px-4 py-2 border rounded-l-lg" />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded-r-lg">Subscribe</button>
      </form>
    </div>
  </section>
);

export default Newsletter;
