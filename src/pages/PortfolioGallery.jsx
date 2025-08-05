// src/pages/PortfolioGallery.jsx
import React from "react";

const portfolioItems = [
  {
    id: 1,
    title: "SM HR Payroll System",
    description: "Complete MERN stack payroll management system.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 2,
    title: "MentorConnect Platform",
    description: "Mentorship platform connecting mentors and mentees.",
    image:
      "https://images.unsplash.com/photo-1522202224249-8878fbc498bf?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 3,
    title: "Pooja Samagri Portal",
    description: "E-commerce platform for pooja samagri and pandit bookings.",
    image:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 4,
    title: "Job Fair Management",
    description: "Platform to organize and manage job fairs efficiently.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];

const PortfolioGallery = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-900">
        Our Portfolio
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a
                href={item.link}
                className="inline-block text-blue-700 hover:text-blue-900 font-semibold"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGallery;
