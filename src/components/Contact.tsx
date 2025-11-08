import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contactează-ne</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Nume"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <textarea
              placeholder="Mesaj"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg"
          >
            Trimite
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;