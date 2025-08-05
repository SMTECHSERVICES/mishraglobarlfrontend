// src/pages/About.jsx
import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="bg-[#222327] text-white mt-8 min-h-screen">
     

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg text-white mb-4">
            <strong>Mishra Global Solutions</strong> is an open-source-driven software consulting company
            dedicated to helping startups, SMBs, and enterprises build scalable digital solutions using modern technologies.
          </p>
          <p className="text-lg text-white">
            We specialize in full-stack development, mobile apps, backend systems, cloud integrations, and software strategy. Our team blends innovation with efficiency to deliver world-class solutions tailored to your needs.
          </p>
        </div>
      </section>

 <div className="py-10 text-center">
  <h1 className="text-2xl md:text-5xl font-bold text-white relative inline-block after:absolute after:content-[''] after:h-1 after:w-24 after:bg-yellow-400 after:left-1/2 after:-translate-x-1/2 after:-bottom-2">
    OUR CORE VALUES
  </h1>
</div>

<section className="py-16 px-6 bg-[#222327]">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
              { title: "Innovation", desc: "We embrace emerging technologies to keep our clients ahead of the curve." },
              { title: "Transparency", desc: "Clear communication and open-source practices are at the core of what we do." },
              { title: "Client First", desc: "Your goals drive our strategies. We succeed when you grow." },
            ]
.map((item, i) => (
      <div
        key={i}
        className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-6 shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
      >
        <div className="mb-4">
        
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
        <p className="text-gray-800">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

    <Footer />
    </div>
  );
};

export default About;
