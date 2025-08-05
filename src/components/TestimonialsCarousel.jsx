import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    designation: "CEO, TechCorp",
    message:
      "Mishra Global Solutions helped us streamline our payroll process. Highly recommended!",
    avatar:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Anita Verma",
    designation: "HR Manager, Innovatech",
    message:
      "Professional team and timely delivery. Great experience working with Mishra Global Solutions.",
    avatar:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Suresh Kumar",
    designation: "Founder, Startup Hub",
    message:
      "Their project management solutions are very effective and easy to use.",
    avatar:
      "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(timer);
  }, [length]);

  if (!Array.isArray(testimonials) || length === 0) return null;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-lg text-center">
      <p className="italic text-gray-700 mb-4">"{testimonials[current].message}"</p>
      <div className="flex items-center justify-center space-x-4">
        <img
          src={testimonials[current].avatar}
          alt={testimonials[current].name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{testimonials[current].name}</h3>
          <p className="text-sm text-gray-500">{testimonials[current].designation}</p>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-700" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
