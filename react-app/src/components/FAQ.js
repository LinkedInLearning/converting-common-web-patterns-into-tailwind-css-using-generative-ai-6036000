import React from 'react';

const FAQ = () => (
  <section className="py-16 bg-brand">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div className="bg-${color} p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">What is your return policy?</h3>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">How do I track my order?</h3>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Can I purchase items again?</h3>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros.</p>
        </div>
      </div>
    </div>
  </section>
);

export default FAQ;
