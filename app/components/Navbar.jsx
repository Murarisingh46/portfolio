"use client";
import React, { useState, useEffect } from "react";
import { Moon } from "lucide-react"; // Dark mode icon
import Image from "next/image";
import { assets } from "@/assets/assets"; // your assets (arrow icon etc.)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-lg px-6 lg:px-12 py-4 flex justify-between items-center">
      {/* Logo */}
      <a href="#">
        <h1 className="text-2xl font-bold text-gray-900">
          Murari <span className="text-red-400">.</span>
        </h1>
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-lg font-medium">
        <li>
          <a href="#" className="hover:text-blue-600 transition">Home</a>
        </li>
        <li>
          <a href="#aboutMe" className="hover:text-blue-600 transition">About</a>
        </li>
        <li>
          <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
        </li>
      </ul>

      {/* Right Side */}
      <div className="hidden md:flex items-center gap-4">
        {/* Dark Mode Icon */}
        <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
          <Moon className="w-5 h-5 text-gray-700" />
        </button>

        {/* Contact Button */}
        <a
          href="#footer"
          className="flex items-center gap-2 px-6 py-3 text-gray-700 font-semibold border border-gray-400 rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-sm"
        >
          Contact
          <Image src={assets.arrow_icon} alt="Arrow" width={10} height={10} />
        </a>
      </div>

      {/* Hamburger Icon - Mobile */}
      <button
        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
        onClick={() => setMenuOpen(true)}
      >
        <svg
          className="w-8 h-8 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-40">
          <div className="absolute top-0 right-0 w-full max-w-xs bg-white h-full shadow-lg p-6 flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end mb-4 p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Menu Items */}
            <ul className="flex flex-col gap-4 text-lg font-medium">
              <li>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-600 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#aboutMe"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-600 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-600 transition"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-600 transition"
                >
                  Projects
                </a>
              </li>

              {/* Contact Button */}
              <li>
                <a
                  href="#footer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold border border-blue-600 rounded-full text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-sm"
                >
                  Contact
                  <Image src={assets.arrow_icon} alt="Arrow" width={14} height={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
