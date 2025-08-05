
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Mishra Global Solutions</h3>
          <p className="mb-2">sister development company of SM Services, working together to deliver software solutions across India.</p>
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-300 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-300 transition">About Us</a></li>
            <li><a href="/services" className="hover:text-blue-300 transition">Services</a></li>
            <li><a href="/contact" className="hover:text-blue-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex items-center space-x-4 text-xl mb-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-blue-400 transition">
              <FaFacebook />
            </a>
            <a href="mailto:info@mishraglobal.com" aria-label="Email" className="hover:text-blue-400 transition">
              <FaEnvelope />
            </a>
          </div>
          <p>Email: info@smservice.co.in</p>
          <p>Phone: +91-8505959159</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-blue-800 mt-10 pt-4 text-center text-xs text-gray-400">
        Designed & Built by Mishra Global Solutions with ❤️
      </div>
    </footer>
  );
};

export default Footer;
