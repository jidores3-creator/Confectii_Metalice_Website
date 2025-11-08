import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "Proiect Industrial",
      description: "Sistem de conducte pentru fabrică",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Constructie Civilă",
      description: "Structuri metalice pentru clădiri",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Automotive",
      description: "Componente auto personalizate",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Portofoliul Nostru</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-gray-700 h-48 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;