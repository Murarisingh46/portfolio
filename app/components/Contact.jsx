"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("⏳ Sending...");

    emailjs
      .send(
        "service_mo9hl7s",
        "template_aye2cah",
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        "RnnSONqL0LurEWEgE"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS ERROR DETAILS:", error);
          setStatus("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative px-6 py-16 bg-gradient-to-tr from-[#FFF0F5] via-[#E0F7FA] to-[#FFFDE7] overflow-hidden"
    >
      {/* Decorative Floating Circles */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -right-16 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-[#4E342E] drop-shadow-md"
        >
          📬 Connect With Me
        </motion.h2>
        <p className="mt-4 text-lg sm:text-xl text-[#6D4C41]">
          Have a question or want to work together? Drop me a message!
        </p>

        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-br from-white/80 via-blue-50/60 to-purple-50/60 backdrop-blur-lg rounded-3xl shadow-2xl shadow-blue-200/50 border border-white/50 p-8 sm:p-12 space-y-6 transition-transform hover:scale-105"
        >
          <input
            type="text"
            name="name"
            placeholder="👤 Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-5 py-4 border border-gray-200 rounded-2xl bg-white/60 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="📧 Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-5 py-4 border border-gray-200 rounded-2xl bg-white/60 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="💬 Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-5 py-4 border border-gray-200 rounded-2xl bg-white/60 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg rounded-2xl shadow-lg hover:scale-105 hover:from-blue-700 hover:to-indigo-700 transition transform duration-300 ease-in-out"
          >
            🚀 Send Message
          </button>
        </motion.form>

        {status && (
          <p
            className={`mt-6 text-lg font-medium ${
              status.includes("✅")
                ? "text-green-600"
                : status.includes("❌")
                ? "text-red-600"
                : "text-gray-700"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
}
