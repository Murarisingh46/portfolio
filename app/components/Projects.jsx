"use client";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "URL Shortener",
      description:
        "A full-stack app using Next.js, Node.js, and MongoDB. Generates custom short links with click tracking and analytics. Deployed on Vercel.",
      link: "https://url-shortner-theta-green.vercel.app/",
    },
    {
      title: "E-commerce Website",
      description:
        "A full-stack platform built with Next.js, Clerk, MongoDB, and Cloudinary. Features user authentication, cart/checkout, and an admin panel. Deployed on Vercel.",
      link: "#", // Replace with your live/demo link if available
    },
    {
      title: "Netflix GPT",
      description:
        "An AI-powered movie recommendation app using React, Next.js, OpenAI API, and TMDB API. Features conversational search and secure authentication.",
      link: "#", // Replace with your live/demo link
    },
    
  ];

  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900">🚀 Projects</h2>
        <p className="mt-4 text-lg text-gray-600">
          A selection of my personal and professional projects showcasing my
          frontend expertise.
        </p>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition p-6 text-left flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-blue-600 font-medium hover:underline"
                >
                  🔗 View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
