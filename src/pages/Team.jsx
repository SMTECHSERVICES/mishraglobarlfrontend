import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: " Er.Abhishek Mishra",
    role: "Founder & CEO",
    photo: "",
    bio: "Experienced software consultant and business strategist with 10+ years in IT.",
    linkedin: "https://linkedin.com/in/abhishek-mishra",
    twitter: "https://twitter.com/abhishek",
    email: "abhishek@mishraglobalsolutions.com",
  },
  {
    id: 2,
    name: "Er.Nishant Makhija",
    role: "Senior Project Manager",
    photo: "",
    bio: "Expert in project management and client engagement with strong leadership skills.",
    linkedin: "https://linkedin.com/in/priya-sharma",
    twitter: "https://twitter.com/priya",
    email: "priya@mishraglobalsolutions.com",
  },
  {
    id: 3,
    name: "Rakesh Kumar",
    role: "Lead Developer",
    photo: "",
    bio: "Full-stack developer specializing in MERN stack and scalable solutions.",
    linkedin: "https://linkedin.com/in/rakesh-kumar",
    twitter: "https://twitter.com/rakesh",
    email: "rakesh@mishraglobalsolutions.com",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">
        Meet Our Team
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-md p-6 text-center transform transition duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-blue-700 mb-2">{member.role}</p>
            <p className="text-gray-600 mb-4">{member.bio}</p>

            <div className="flex justify-center space-x-6 text-blue-600 text-xl">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn`}
                className="hover:text-blue-800 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} Twitter`}
                className="hover:text-blue-400 transition"
              >
                <FaTwitter />
              </a>

              <a
                href={`mailto:${member.email}`}
                aria-label={`Email ${member.name}`}
                className="hover:text-red-600 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
