"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-sky-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-red-600" /> },
  ];

  return (
    <section
      id="skills"
      className="-mt-16 px-6 py-20 bg-gradient-to-tr from-[#FFDEE9] via-[#B5FFFC] to-[#FFFAF0]"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-[#4E342E] drop-shadow-md"
        >
          💡 My Skills
        </motion.h2>
        <p className="mt-4 text-lg sm:text-xl text-[#6D4C41]">
          A blend of modern frontend technologies and tools I work with.
        </p>

        {/* Skills Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              className="flex flex-col items-center justify-center bg-white/70 backdrop-blur-md rounded-3xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-6xl mb-4 drop-shadow-md">{skill.icon}</div>
              <h3 className="text-lg font-bold text-[#3E2723]">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
