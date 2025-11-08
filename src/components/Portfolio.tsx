import React from 'react';

const Portfolio = () => {
  const projects = [
    { name: 'Proiect Industrial', image: '/img/project1.jpg' },
    { name: 'Construcție Civilă', image: '/img/project2.jpg' },
    { name: 'Artă Metalică', image: '/img/project3.jpg' }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Portofoliul Nostru</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="text-center">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{project.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;