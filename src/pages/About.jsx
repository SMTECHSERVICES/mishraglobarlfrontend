// src/pages/About.jsx
import React from "react";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="bg-[#222327] text-white mt-8 min-h-screen">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>About Us - Mishra Global Solutions</title>
        <meta
          name="description"
          content="Mishra Global Solutions is a trusted software development and consulting company delivering scalable web, mobile, and cloud solutions for startups, SMBs, and enterprises."
        />
        <meta
          name="keywords"
          content="Mishra Global Solutions, software development, IT consulting, full-stack development, mobile app development, cloud integration, digital transformation"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mishra Global Solutions" />
        <meta name="language" content="English" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Mishra Global Solutions - About Us" />
        <meta
          property="og:description"
          content="Empowering businesses with innovative software, cloud, and IT consulting solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.smservicess.com/about" />
        <meta property="og:image" content="/logo.png" />
      </Helmet>

      {/* ✅ Page Content with Heading Hierarchy */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mt-10 mx-auto text-center">
          {/* H1 (only one) */}
          <h1 className="text-4xl font-bold mb-6">
            About Mishra Global Solutions
          </h1>

          {/* H2 */}
          <h2 className="text-2xl font-semibold mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-white mb-4">
            <strong>Mishra Global Solutions</strong> is a software development &
            consulting company dedicated to helping startups, SMBs, and
            enterprises build scalable digital solutions using modern
            technologies.
          </p>

          {/* H2 */}
          <h2 className="text-2xl font-semibold mb-4">
            What We Do
          </h2>
          <p className="text-lg text-white mb-4">
            We specialize in full-stack development, mobile apps, backend
            systems, cloud integrations, and software strategy. Our team blends
            innovation with efficiency to deliver world-class solutions tailored
            to your needs.
          </p>

          {/* H2 */}
          <h2 className="text-2xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-white">
            To empower businesses with innovative, reliable, and scalable
            technology solutions that drive growth and digital transformation.
          </p>
        </div>
      </section>

      {/* ✅ Core Values Section */}
      <div className="py-10 text-center">
        {/* H3 */}
        <h3 className="text-2xl mt-10 md:text-4xl font-bold text-white relative inline-block after:absolute after:content-[''] after:h-1 after:w-24 after:bg-yellow-400 after:left-1/2 after:-translate-x-1/2 after:-bottom-2">
          Our Core Values
        </h3>
      </div>

      <section className="py-16 px-6 bg-[#222327]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              desc: "We embrace emerging technologies to keep our clients ahead of the curve.",
            },
            {
              title: "Transparency",
              desc: "Clear communication and open-source practices are at the core of what we do.",
            },
            {
              title: "Client First",
              desc: "Your goals drive our strategies. We succeed when you grow.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-6 shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
            >
              {/* H3 inside each card */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-800">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Additional Subheadings */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        {/* H4 */}
        <h4 className="text-xl font-bold text-yellow-400 mb-2">
          Commitment to Quality
        </h4>
        <p className="text-white mb-6">
          We follow industry best practices and deliver projects with the
          highest quality standards, ensuring long-term reliability.
        </p>

        {/* H5 */}
        <h5 className="text-lg font-semibold text-yellow-300 mb-2">
          Global Reach
        </h5>
        <p className="text-white mb-6">
          With clients across industries and regions, our solutions are designed
          to scale globally.
        </p>

        {/* H6 */}
        <h6 className="text-md font-medium text-yellow-200 mb-2">
          Future Ready
        </h6>
        <p className="text-white">
          We continuously evolve with new technologies to keep businesses
          future-proof.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default About;
