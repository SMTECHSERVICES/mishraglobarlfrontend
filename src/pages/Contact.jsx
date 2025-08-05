// import React, { useState } from "react";
// import Footer from "./Footer";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Your message has been submitted!");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="bg-[#222327] min-h-screen text-white flex flex-col">
//       <section className="py-16 px-6 flex-grow">
//         <div className="max-w-xl mx-auto bg-white text-black p-10 rounded-lg shadow-lg">
//           <h2 className="text-3xl font-bold mb-8 text-center tracking-wide text-gray-900">
//             Contact Us
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block mb-2 font-semibold text-gray-800"
//               >
//                 Name
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 name="name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
//                 placeholder="Your full name"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block mb-2 font-semibold text-gray-800"
//               >
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
//                 placeholder="you@example.com"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="message"
//                 className="block mb-2 font-semibold text-gray-800"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 required
//                 rows="5"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
//                 placeholder="Write your message here..."
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold shadow-md transform transition hover:scale-105"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import Footer from "./Footer";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      alert("Your message has been submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen mt-4 text-white flex flex-col">
      <section className="py-16 px-4 sm:px-6 flex-grow flex items-center">
        <div className="max-w-2xl mx-auto w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-yellow-400">
              Contact Us
            </h1>
            <p className="text-gray-300 max-w-md mx-auto">
              Have questions or want to work together? Reach out to us and we'll get back to you soon.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="hidden md:block md:w-2/5 bg-yellow-500 p-8">
                <div className="h-full flex flex-col justify-center">
                  <div className="space-y-6 text-yellow-50">
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-600 p-3 rounded-full">
                        <FiUser className="text-xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Direct Communication</h3>
                        <p className="text-yellow-100 mt-1">
                          Get in touch with our team directly
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-600 p-3 rounded-full">
                        <FiMessageSquare className="text-xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Quick Response</h3>
                        <p className="text-yellow-100 mt-1">
                          We typically reply within 24 hours
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-600 p-3 rounded-full">
                        <FiMail className="text-xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Email Support</h3>
                        <p className="text-yellow-100 mt-1">
                          info@smservice.co.in
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <FiUser />
                    </div>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-200 focus:border-yellow-500 focus:outline-none text-gray-800 placeholder-gray-500 transition"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <FiMail />
                    </div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-200 focus:border-yellow-500 focus:outline-none text-gray-800 placeholder-gray-500 transition"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none text-gray-500">
                      <FiMessageSquare />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-200 focus:border-yellow-500 focus:outline-none text-gray-800 placeholder-gray-500 transition resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold text-white shadow-lg transition-all ${
                      isSubmitting
                        ? "bg-yellow-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 hover:shadow-xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Send Message <FiSend className="ml-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;