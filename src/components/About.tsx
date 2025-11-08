import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Despre Noi</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-4">
              ProMetal Marelli este un lider în industria metalurgică din România, cu peste 15 ani de experiență.
              Specializăm în fabricarea de componente metalice de precizie pentru diverse industrii.
            </p>
            <p className="text-lg text-gray-300">
              Calitatea și durabilitatea sunt prioritățile noastre principale în fiecare proiect.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gray-700 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400">15+</h3>
              <p className="text-gray-300">Ani Experiență</p>
            </div>
            <div className="text-center p-4 bg-gray-700 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400">500+</h3>
              <p className="text-gray-300">Proiecte Finalizate</p>
            </div>
            <div className="text-center p-4 bg-gray-700 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400">100%</h3>
              <p className="text-gray-300">Satisfacție Client</p>
            </div>
            <div className="text-center p-4 bg-gray-700 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400">24/7</h3>
              <p className="text-gray-300">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;