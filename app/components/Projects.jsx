"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "🔗 URL Shortener",
      desc: "A URL shortening app with custom link generation, analytics tracking, and a responsive UI.",
      tech: ["Next.js", "Node.js", "MongoDB"],
      link: "https://url-shortner-theta-green.vercel.app/",
    },
    {
      title: "🎬 Netflix GPT",
      desc: "An AI-powered Netflix-style app with ChatGPT API integration for conversational movie recommendations and secure authentication.",
      tech: ["React", "OpenAI", "TMDB"],
      link: "#",
    },
    {
      title: "🛒 E-commerce Platform",
      desc: "Full-stack e-commerce platform with Clerk authentication, cart/checkout, admin panel for managing products & orders. Deployed on Vercel.",
      tech: ["Next.js", "Clerk", "MongoDB", "Cloudinary"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="px-6 py-20 bg-gradient-to-tr from-[#FFFAF0] via-[#FFF0F5] to-[#E0F7FA]"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-[#4E342E] drop-shadow-md"
        >
          🚀 My Projects
        </motion.h2>
        <p className="mt-4 text-lg sm:text-xl text-[#6D4C41]">
          A showcase of some exciting projects I’ve built recently.
        </p>

        {/* Project Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="flex flex-col justify-between p-6 rounded-3xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl font-extrabold mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
                  {proj.title}
                </h3>
                <p className="text-gray-700 text-base mb-4">{proj.desc}</p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-gray-800 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Link */}
              <div className="mt-4">
                <Link
                  href={proj.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:scale-105 transition-transform"
                >
                  View Live <ExternalLink size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
