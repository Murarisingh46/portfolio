"use client";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-tr from-[#FFFDE7] via-[#E0F7FA] to-[#FFF0F5] px-6 py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-extrabold text-[#4E342E]">Murari Singh</h3>
          <p className="text-gray-700 mt-1">Frontend Engineer | React & Next.js Developer</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-3 text-gray-700 hover:text-[#FF6F00] transition-colors cursor-pointer">
            <FaEnvelope className="text-xl" />
            <a href="mailto:murariiisingh46@gmail.com" className="text-lg font-medium">
              murariiisingh46@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-700 hover:text-[#FF6F00] transition-colors cursor-pointer">
            <FaPhoneAlt className="text-xl" />
            <a href="tel:+916202952245" className="text-lg font-medium">
              +91-6202952245
            </a>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <a href="https://www.linkedin.com/in/murari-singh-bab95a1a9" target="_blank" className="text-gray-700 hover:text-blue-700 transition-colors text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" className="text-gray-700 hover:text-pink-500 transition-colors text-2xl">
              <FaInstagram />
            </a>
            <a href="https://github.com/Murarisingh46" target="_blank" className="text-gray-700 hover:text-black transition-colors text-2xl">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-600 text-sm relative z-10">
        © {new Date().getFullYear()} Murari Singh. All rights reserved.
      </div>
    </footer>
  );
}
