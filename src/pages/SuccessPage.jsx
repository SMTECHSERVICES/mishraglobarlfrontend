import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <div className="bg-white p-10 rounded shadow-md text-center max-w-md">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-6">
          Your submission has been received successfully.
          We will get back to you shortly.
        </p>
        <Link
          to="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
