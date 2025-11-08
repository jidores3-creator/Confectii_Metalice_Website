import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          ProMetal Marelli
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Excelență în prelucrarea metalelor din România
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
          Contactează-ne
        </button>
      </div>
    </section>
  );
};

export default Hero;