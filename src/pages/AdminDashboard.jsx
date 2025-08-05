// src/pages/AdminDashboard.jsx
import React from "react";
import { FaEnvelope, FaFileAlt, FaTasks, FaUsers } from "react-icons/fa";

const dashboardStats = [
  {
    title: "Messages",
    count: 12,
    icon: <FaEnvelope className="text-2xl text-blue-600" />,
  },
  {
    title: "Proposals",
    count: 5,
    icon: <FaFileAlt className="text-2xl text-green-600" />,
  },
  {
    title: "Projects",
    count: 8,
    icon: <FaTasks className="text-2xl text-purple-600" />,
  },
  {
    title: "Clients",
    count: 20,
    icon: <FaUsers className="text-2xl text-yellow-600" />,
  },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-10">Admin Dashboard</h1>

      {/* Dashboard Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {dashboardStats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded shadow p-6 text-center hover:shadow-lg">
            <div className="mb-2">{stat.icon}</div>
            <h3 className="text-lg font-semibold">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-800">{stat.count}</p>
          </div>
        ))}
      </div>

      {/* Placeholder Sections */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Recent Messages</h2>
          <p className="text-gray-500">[Placeholder for messages table]</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Proposal Uploads</h2>
          <p className="text-gray-500">[Placeholder for proposal management]</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
