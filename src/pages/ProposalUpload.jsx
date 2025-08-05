// src/pages/ProposalUpload.jsx
import React, { useState } from "react";

const ProposalUpload = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This will be connected to backend later
    console.log("Proposal submitted:", formData);
    alert("Proposal submitted successfully!");
    setFormData({
      name: "",
      company: "",
      email: "",
      message: "",
      file: null,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Upload Proposal</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Company Name</label>
            <input
              type="text"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Project Brief</label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            ></textarea>
          </div>
          <div>
            <label className="block mb-1 font-medium">Upload Document (PDF, DOC)</label>
            <input
              type="file"
              name="file"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded font-semibold"
          >
            Submit Proposal
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProposalUpload;
