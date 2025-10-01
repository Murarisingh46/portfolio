"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section
      className="relative bg-gradient-to-b from-[#FFF8E1] via-[#FFE0B2] to-[#FFF3E0] px-6 pt-32 pb-36"
      id="aboutMe"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
        {/* Profile Image */}
        <div className="flex-shrink-0 relative">
          <div className="rounded-full bg-gradient-to-tr from-[#FBC02D] to-[#FF8F00] p-1 shadow-xl">
            <Image
              src="/murari.jpeg"
              alt="Murari Singh"
              width={260}
              height={260}
              className="rounded-full object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Intro */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#3E2723] drop-shadow-md">
            Hi, I’m Murari Singh 👋
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#5D4037] leading-relaxed max-w-3xl">
            I’m a{" "}
            <span className="font-semibold text-[#BF360C]">
              Frontend Engineer with 2 years of experience this is comming from test.
            </span>{" "}
            passionate about building{" "}
            <span className="text-[#D84315] font-medium">
              scalable, user-focused web applications
            </span>{" "}
            using{" "}
            <span className="text-[#EF6C00] font-semibold">React.js, Next.js</span>{" "}
            and modern frontend technologies. I love turning ideas into{" "}
            <span className="text-[#FF6F00] font-semibold">
              interactive and impactful digital experiences
            </span>
            , creating products that delight users and solve real problems.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <Link href="/Murari_Resume.pdf" target="_blank">
              <button className="w-full sm:w-auto rounded-xl px-8 py-3 bg-gradient-to-r from-[#FF8F00] to-[#FFB300] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform text-lg">
                📄 Download Resume
              </button>
            </Link>
            <Link href="#footer">
              <button className="w-full sm:w-auto rounded-xl px-8 py-3 border-2 border-[#FF8F00] text-[#BF360C] font-medium hover:bg-[#FFF3E0] hover:scale-105 hover:shadow-lg transition-transform text-lg">
                ✉️ Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C600,100 600,100 1200,0 L1200,120 L0,120 Z"
            className="fill-[#FFFAF0]"
          ></path>
        </svg>
      </div>
    </section>
  );
}
