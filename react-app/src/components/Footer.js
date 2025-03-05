import React from 'react';

const Footer = () => (
  <footer className="bg-white py-8">
    <div className="container mx-auto px-4 grid grid-cols-4 gap-8">
      <div>
        <h3 className="font-bold text-lg mb-4">Company Logo</h3>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4">Company</h3>
        <ul>
          <li><a href="#" className="text-gray-700 hover:underline">How It Works</a></li>
          <li><a href="#" className="text-gray-700 hover:underline">Pricing</a></li>
          <li><a href="#" className="text-gray-700 hover:underline">Docs</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4">Resources</h3>
        <ul>
          <li><a href="#" className="text-gray-700 hover:underline">Blog Post Name</a></li>
          <li><a href="#" className="text-gray-700 hover:underline">Blog Post Name</a></li>
          <li><a href="#" className="text-gray-700 hover:underline">Blog Post Name</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4">About</h3>
        <ul>
          <li><a href="#" className="text-gray-700 hover:underline">Terms & Conditions</a></li>
          <li><a href="#" className="text-gray-700 hover:underline">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="text-center text-gray-600 mt-8">
      &copy; 2024 Company name
    </div>
  </footer>
);

export default Footer;
