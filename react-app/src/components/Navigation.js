import React, { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Company Logo</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-gray-900">Feature</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">User Examples</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Resources</a>
        </nav>
        <div className="hidden md:flex">
          <a href="#" className="text-gray-700 hover:text-gray-900 mr-4">Docs</a>
          <a href="#" className="bg-black text-white px-4 py-2 rounded">Get Started</a>
        </div>
        <div className="md:hidden">
          <button id="menu-button" className="text-gray-700 hover:text-gray-900 focus:outline-none" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={`${isMenuOpen ? '' : 'hidden'} md:hidden`}>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Feature</a>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">User Examples</a>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Pricing</a>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Resources</a>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Docs</a>
        <a href="#" className="block px-4 py-2 bg-black text-white rounded">Get Started</a>
      </div>
    </header>
  );
};

export default Navigation;
