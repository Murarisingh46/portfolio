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
      link: "#", // Replace with your live link
    },
    {
      title: "🛒 E-commerce Platform",
      desc: "Full-stack e-commerce platform with Clerk authentication, cart/checkout, admin panel for managing products & orders. Deployed on Vercel.",
      tech: ["Next.js", "Clerk", "MongoDB", "Cloudinary"],
      link: "#", // Replace with your live link
    },
   
  ];

  return (
    <section id="projects" className="px-6 py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900"
        >
          🚀 My Projects
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600">
          A showcase of some exciting projects I’ve built recently.
        </p>

        {/* Project Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-6 flex flex-col justify-between border border-gray-100"
            >
              <div>
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {proj.title}
                </h3>
                <p className="text-gray-600 text-base mb-4">{proj.desc}</p>

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
