"use client";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-tr from-indigo-100 via-purple-50 to-pink-50 px-6 py-16 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-extrabold text-gray-900">Murari Singh</h3>
          <p className="mt-2 text-gray-700 text-lg">
            Frontend Engineer | React & Next.js Developer
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="flex flex-col gap-6 w-full md:w-auto">
          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition">
            <FaEnvelope className="text-blue-600 text-xl" />
            <a
              href="mailto:murariiisingh46@gmail.com"
              className="text-gray-800 font-medium hover:text-blue-700 transition-colors"
            >
              murariiisingh46@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition">
            <FaPhoneAlt className="text-green-600 text-xl" />
            <a
              href="tel:+916202952245"
              className="text-gray-800 font-medium hover:text-green-700 transition-colors"
            >
              +91-6202952245
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-2 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/murari-singh-bab95a1a9"
              target="_blank"
              className="text-gray-700 hover:text-blue-700 transition-colors text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-700 hover:text-pink-500 transition-colors text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/Murarisingh46"
              target="_blank"
              className="text-gray-700 hover:text-black transition-colors text-2xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-12 pt-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Murari Singh. All rights reserved.
      </div>
    </footer>
  );
}
