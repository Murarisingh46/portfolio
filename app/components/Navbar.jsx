import React, { useState } from 'react';
import { assets } from '@/assets/assets';
import Image from "next/image";
import { Moon } from "lucide-react"; // ✅ Dark mode icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div>
      <nav className='flex items-center justify-between p-6 fixed w-full z-50 bg-white lg:px-8 xl:px-[8%] shadow'>
        <a href="">
          {/* <Image src={assets.logo} alt="Logo" className='w-28 cursor-pointer mr-14' /> */}
          <h1 className='text-2xl font-bold text-gray-800'>Murari <span className='text-red-300'>.</span></h1>
        </a>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden block"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-10 text-lg font-medium'>
          <li className='cursor-pointer hover:text-blue-600'>Home</li>
          <li className='cursor-pointer hover:text-blue-600'>About</li>
          <li className='cursor-pointer hover:text-blue-600'>Services</li>
          <li className='cursor-pointer hover:text-blue-600'>Blog</li>
        </ul>

        {/* Right side items (Dark mode icon + Contact) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Dark Mode Icon (just an icon for now) */}
          <button
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            aria-label="Dark mode icon"
          >
            <Moon className="w-5 h-5 text-gray-700" />
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className='text-gray-600 border border-gray-400 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300 items-center shadow-sm flex'
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt="Arrow"
              width={10}
              height={10}
              className="inline ml-2"
            />
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-40">
          <div className="absolute top-20 left-0 w-full px-4">
            <ul className='flex flex-col gap-2 text-base font-medium bg-white rounded-lg shadow-md p-4'>
              <li className='cursor-pointer hover:text-blue-600'>Home</li>
              <li className='cursor-pointer hover:text-blue-600'>About</li>
              <li className='cursor-pointer hover:text-blue-600'>Services</li>
              <li className='cursor-pointer hover:text-blue-600'>Blog</li>

              {/* Contact Button - Mobile */}
              <a
                href="#contact"
                className='text-blue-600 border border-blue-600 px-4 py-2 text-sm rounded-full font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300 flex items-center justify-center w-full shadow-sm'
              >
                Contact
                <Image
                  src={assets.arrow_icon}
                  alt="Arrow"
                  width={14}
                  height={14}
                  className="inline ml-2 align-middle"
                />
              </a>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
