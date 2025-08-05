// src/pages/Home.jsx
import React from "react";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import TechCard from "../components/TechCard";
import Footer from "./Footer";

   const techCardData = [
  {
    heading: "Frontend Technologies",
    techList: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Redux Toolkit",
      "Vite.js"
    ]
  },
  {
    heading: "Backend Technologies",
    techList: [
      "Node.js",
      "Express.js",
      "NestJS",
      "JWT Authentication",
      "REST API",
      "Socket.IO"
    ]
  },
  {
    heading: "Database & Storage",
    techList: [
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Supabase",
      "Redis",
      "Cloudinary"
    ]
  },
  {
    heading: "DevOps & Deployment",
    techList: [
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Netlify",
      "Render",
      "AWS EC2"
    ]
  },
  {
    heading: "Tools & Utilities",
    techList: [
      "Visual Studio Code",
      "Figma",
      "Postman",
      "ESLint",
      "Prettier",
      "Webpack"
    ]
  },
  {
    heading: "AI & ML Tools",
    techList: [
      "TensorFlow",
      "PyTorch",
      "OpenAI API",
      "LangChain",
      "Hugging Face Transformers",
      "Whisper"
    ]
  }
];

const Home = () => {
  return (
    <div className="bg-[#222327] text-white min-h-screen">


      <section className="bg-gradient-to-r h-screen flex items-center  text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Empowering Your Digital Vision</h2>
          <p className="text-lg md:text-xl mb-8">
            We build open-source solutions to grow your business digitally — web apps, mobile apps, backend systems, and consultancy.
          </p>
          <a href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold">
            Let's Connect
          </a>
        </div>
      </section>
<div className="py-10 text-center">
  <h1 className="text-2xl md:text-5xl font-bold text-white relative inline-block after:absolute after:content-[''] after:h-1 after:w-24 after:bg-yellow-400 after:left-1/2 after:-translate-x-1/2 after:-bottom-2">
    OUR SERVICES
  </h1>
</div>

<section className="py-16 px-6 bg-[#222327]">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        title: "Custom Web Development",
        description: "React, Node.js, MongoDB-based scalable web applications built to match your business.",
      },
      {
        title: "Mobile App Solutions",
        description: "Cross-platform apps with smooth UI/UX for Android & iOS using Flutter or React Native.",
      },
      {
        title: "Software Consulting",
        description: "From architecture to deployment, get expert guidance on digital transformation.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-6 shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
      >
        <div className="mb-4">
        
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
        <p className="text-gray-800">{item.description}</p>
      </div>
    ))}
  </div>
</section>


         <section className="mb-12 bg-[#222327] rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-300 mb-8">Technologies We Master</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 overflow-hidden gap-2.5'>
   {techCardData.map((techCard,index)=>{
              return <TechCard key={index} heading={techCard.heading} techList={techCard.techList} />

            })}
            </div>
         
           
          </section>
      <section className="py-12 ">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">What Our Clients Say</h2>
        <TestimonialsCarousel />
      </section>
     <Footer />
    </div>
  );
};

export default Home;
