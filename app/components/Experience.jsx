"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "Persistent Systems",
      role: "Software Engineer",
      duration: "Dec 2023 - Present · 1 yr 9 mos",
      location: "Bengaluru, Karnataka, India · Hybrid",
      details: [
        "Developed scalable applications using React.js and Next.js, enhancing user experience and performance.",
        "Collaborated with cross-functional teams to implement high-performance solutions, resulting in improved application efficiency.",
        "Utilized JavaScript and TypeScript to create robust, maintainable code, leading to a 30% reduction in bug reports.",
      ],
      skills: ["Next.js", "React.js", "Tailwind CSS", "JavaScript", "TypeScript","MongoDB","Node.js","Git"],
    },
    {
      company: "Persistent Systems",
      role: "Intern",
      duration: "Jan 2023 - Dec 2023 · 1 yr",
      location: "Bengaluru, Karnataka, India · Hybrid",
      details: [
        "Contributed to frontend development projects using HTML5, CSS, Java, JavaScript, React.js.",
        "Gained hands-on experience in building interactive web pages and improving UI/UX.",
      ],
      skills: ["HTML5", "CSS", "Java", "JavaScript", "React.js"],
    },
    {
      company: "LTIMindtree",
      role: "Intern",
      duration: "Feb 2023 - May 2023 · 4 mos",
      location: "Pune, Maharashtra, India · Hybrid",
      details: [
        "Completed internship project with Java and CSS.",
        "Learned collaborative software development in a professional environment.",
      ],
      skills: ["Java", "CSS", "HTML5", "JavaScript"],
    },
  ];

  return (
    <section
      id="experience"
      className="px-6 py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900 text-center"
        >
          💼 My Experience
        </motion.h2>
        <p className="mt-4 text-center text-gray-600 text-lg">
          Roles and internships where I contributed and learned
        </p>

        {/* Timeline */}
        <div className="mt-12 relative">
          {/* Vertical line only on md+ */}
          <div className="hidden md:block absolute left-5 top-0 w-1 h-full bg-blue-200"></div>

          <ul className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative md:flex md:items-start md:pl-12"
              >
                {/* Circle for timeline */}
                <div className="absolute md:left-5 left-1 top-0 w-4 h-4 rounded-full bg-blue-500 mt-2 md:mt-2"></div>

                <div className="ml-6 md:ml-12">
                  <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-gray-600 font-medium">
                    {exp.company} • {exp.duration}
                  </p>
                  <p className="text-gray-500 text-sm mb-2">{exp.location}</p>

                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-gray-800 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
