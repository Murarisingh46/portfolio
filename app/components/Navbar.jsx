"use client";
import React, { useState } from 'react';
import { assets } from '@/assets/assets';
import Image from "next/image";
import { Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#aboutMe" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-md px-6 py-4 lg:px-12 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <h1 className="text-2xl font-extrabold text-gray-800">
            Murari <span className="text-red-300">.</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative group hover:text-blue-600 transition-all"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          {/* Dark Mode Icon */}
          <button
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            aria-label="Dark mode"
          >
            <Moon className="w-5 h-5 text-gray-700" />
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="flex items-center gap-2 text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt="Arrow"
              width={12}
              height={12}
              className="inline"
            />
          </a>
        </div>

        {/* Hamburger Menu - Mobile */}
        <button
          className="md:hidden block p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm flex flex-col items-center pt-24"
          >
            <motion.ul
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ staggerChildren: 0.1 }}
              className="flex flex-col gap-6 bg-white rounded-2xl shadow-xl p-6 w-11/12 max-w-sm text-center"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              {/* Mobile Contact Button */}
              <a
                href="#contact"
                className="mt-4 inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                Contact
                <Image
                  src={assets.arrow_icon}
                  alt="Arrow"
                  width={12}
                  height={12}
                />
              </a>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
