// src/pages/ProjectTracker.jsx
import React from "react";

const projects = [
  {
    title: "SM HR Payroll System",
    client: "SM Services",
    status: "In Progress",
    techStack: "MERN Stack",
  },
  {
    title: "MentorConnect Platform",
    client: "Mishra Global",
    status: "Completed",
    techStack: "React, Node, MongoDB",
  },
  {
    title: "Pooja Samagri Portal",
    client: "Panditji Shop",
    status: "Planning",
    techStack: "React, Tailwind, Firebase",
  },
];

const statusColors = {
  "In Progress": "bg-yellow-100 text-yellow-700",
  Completed: "bg-green-100 text-green-700",
  Planning: "bg-blue-100 text-blue-700",
};

const ProjectTracker = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-10">Project Tracker</h1>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-left">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold">Project Name</th>
              <th className="px-6 py-3 text-sm font-semibold">Client</th>
              <th className="px-6 py-3 text-sm font-semibold">Tech Stack</th>
              <th className="px-6 py-3 text-sm font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {projects.map((project, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-4">{project.title}</td>
                <td className="px-6 py-4">{project.client}</td>
                <td className="px-6 py-4">{project.techStack}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusColors[project.status]}`}
                  >
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTracker;
