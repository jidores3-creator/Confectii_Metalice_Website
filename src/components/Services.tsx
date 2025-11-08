import React from 'react';

const Services = () => {
  const services = [
    { title: 'Prețuri Competitive', desc: 'Oferim cele mai bune prețuri de pe piață' },
    { title: 'Livrare Rapidă', desc: 'Livrăm produsele în maxim 48 de ore' },
    { title: 'Calitate Superioară', desc: 'Toate produsele noastre sunt 100% testate' },
    { title: 'Asistență 24/7', desc: 'Echipa noastră vă ajută oricând' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Serviciile Noastre</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;