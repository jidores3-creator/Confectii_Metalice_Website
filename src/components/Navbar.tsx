import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">ProMetal Marelli</div>
        <div className="space-x-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900">Despre</a>
          <a href="#services" className="text-gray-600 hover:text-gray-900">Servicii</a>
          <a href="#portfolio" className="text-gray-600 hover:text-gray-900">Portofoliu</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;