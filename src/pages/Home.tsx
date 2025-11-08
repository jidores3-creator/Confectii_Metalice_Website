import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">ProMetal Marelli</h1>
          <p className="text-xl md:text-2xl mb-8">Excelență în Construcții Metalice</p>
          <div className="flex gap-4 justify-center">
            <a href="#about" className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors">
              Despre Noi
            </a>
            <a href="#contact" className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-lg transition-colors">
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Despre ProMetal Marelli</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            Cu o experiență de peste 15 ani în domeniul construcțiilor metalice, ProMetal Marelli oferă soluții complete și de încredere pentru clienții din România și nu numai.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Serviciile Noastre</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Structuri Metalice</h3>
              <p>Proiectare și execuție structuri metalice pentru construcții civile și industriale</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Carpenterie Metalică</h3>
              <p>Fabricarea și montarea elementelor de carpenterie metalică de înaltă calitate</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Construcții Industriale</h3>
              <p>Hale industriale, depozite și alte structuri metalice de mari dimensiuni</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contactează-ne</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Date de Contact</h3>
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Strada Exemplu 123, București</span>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="w-5 h-5 mr-2" />
                <span>+40 721 123 456</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>contact@prometal.ro</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Formular de Contact</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Nume" className="w-full p-3 bg-gray-700 rounded" />
                <input type="email" placeholder="Email" className="w-full p-3 bg-gray-700 rounded" />
                <textarea placeholder="Mesaj" rows={4} className="w-full p-3 bg-gray-700 rounded" />
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 py-3 rounded">
                  Trimite Mesaj
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ProMetal Marelli. Toate drepturile rezervate.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;