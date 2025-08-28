"use client";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss, SiBootstrap, SiMongodb, SiJest, SiCypress } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Redux / Zustand", icon: <SiRedux className="text-purple-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-600" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "Jest", icon: <SiJest className="text-red-500" /> },
    { name: "Cypress", icon: <SiCypress className="text-emerald-600" /> },
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900">⚡ Skills</h2>
        <p className="mt-4 text-lg text-gray-600">
          The technologies and tools I use to build modern, scalable, and
          user-focused web applications.
        </p>

        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="mt-4 text-gray-800 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
