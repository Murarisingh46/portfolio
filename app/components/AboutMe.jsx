"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="bg-gray-50 px-6 pt-32 pb-20"> 
      {/* pt-32 pushes it down from navbar */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side - Profile Image */}
        <div className="flex-shrink-0">
          <Image
            src="/murari.jpeg" // make sure murari.jpeg is inside /public
            alt="Murari Singh"
            width={240}
            height={240}
            className="rounded-full object-cover"
          />
        </div>

        {/* Right Side - Intro */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900">
            Hi, I’m Murari Singh 👋
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl">
            I’m a <span className="font-semibold">Frontend Engineer </span> 
            passionate about building scalable, user-focused web applications 
            using React.js, Next.js, and modern frontend technologies. 
            I love turning ideas into interactive and impactful digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <Link href="/Murari_Resume.pdf" target="_blank">
              <button className="w-full sm:w-auto rounded-xl px-8 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition text-lg">
                📄 Download Resume
              </button>
            </Link>
            <Link href="mailto:murariiisingh46@gmail.com">
              <button className="w-full sm:w-auto rounded-xl px-8 py-3 border border-gray-400 text-gray-700 hover:bg-gray-100 transition text-lg">
                ✉️ Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
