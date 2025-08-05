// src/pages/Services.jsx
import React from "react";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaComments, FaLock, FaLightbulb } from "react-icons/fa";
import Footer from "./Footer";

const services = [
  {
    title: "Custom Software Development",
    description: "Build tailored business solutions using React, Node.js, and MongoDB.",
    icon: <FaLaptopCode className="text-4xl text-blue-700 mb-4" />,
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile apps using React Native & Flutter.",
    icon: <FaMobileAlt className="text-4xl text-green-600 mb-4" />,
  },
  {
    title: "Cloud & DevOps",
    description: "Deploy and scale your apps using AWS, Render, Vercel, and Docker.",
    icon: <FaCloud className="text-4xl text-purple-700 mb-4" />,
  },
  {
    title: "IT Consulting",
    description: "Get strategic guidance to streamline your software and tech processes.",
    icon: <FaComments className="text-4xl text-yellow-500 mb-4" />,
  },
  {
    title: "Cybersecurity Solutions",
    description: "Secure your apps with JWT auth, HTTPS, and modern security standards.",
    icon: <FaLock className="text-4xl text-red-600 mb-4" />,
  },
  {
    title: "Startup Tech Support",
    description: "From MVP to scalable platform — get full-stack startup launch support.",
    icon: <FaLightbulb className="text-4xl text-orange-500 mb-4" />,
  },
];

const Services = () => {
  return (
    <div className="bg-[#222327] mt-8 text-gray-800 min-h-screen">
   

      <section className="py-16 px-6 ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl text-white font-bold mb-4">Our Services</h2>
          <p className="text-lg text-white mb-2">
            We provide top-tier open software solutions that drive real results.
          </p>

     
<section className="py-16 px-6 bg-[#222327]">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {services.map((item, i) => (
      <div
        key={i}
        className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-6 shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 text-center"
      >
        {/* Icon */}
        <div className="flex justify-center items-center mb-4">
          {item.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>

        {/* Description */}
        <p className="text-gray-800">{item.description}</p>
      </div>
    ))}
  </div>
</section>
        </div>
      </section>

   <Footer />
    </div>
  );
};

export default Services;
