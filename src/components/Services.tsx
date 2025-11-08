import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Fabricare Metal",
      description: "Fabricarea de componente metalice customizate pentru orice industrie."
    },
    {
      title: "Proiectare 3D",
      description: "Servicii complete de proiectare 3D și inginerie inversă."
    },
    {
      title: "Asamblare",
      description: "Servicii profesionale de asamblare pentru componente complexe."
    },
    {
      title: "Consultanță",
      description: "Consultanță tehnică pentru proiectele dumneavoastră."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Serviciile Noastre</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-400">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;