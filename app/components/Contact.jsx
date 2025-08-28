"use client";
import { useState } from "react";
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
        "service_mo9hl7s",    // ✅ Correct Service ID
        "template_aye2cah",  // ✅ Your Template ID
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        "RnnSONqL0LurEWEgE"   // ✅ Your Public Key
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
    <section className="bg-gradient-to-br from-gray-50 to-gray-200 px-6 py-20" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">📬 Connect With Me</h2>
        <p className="mt-4 text-lg text-gray-600">
          Have a question or want to work together? Drop me a message!
        </p>

        {/* Contact Form */}
        <form
          onSubmit={sendEmail}
          className="mt-12 bg-white rounded-3xl shadow-xl p-8 sm:p-12 space-y-6 border border-gray-100"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="👤 Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-5 py-4 border border-gray-200 rounded-2xl bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="📧 Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-5 py-4 border border-gray-200 rounded-2xl bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="💬 Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-5 py-4 border border-gray-200 rounded-2xl bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg rounded-2xl shadow-lg hover:scale-105 hover:from-blue-700 hover:to-indigo-700 transition transform duration-300 ease-in-out"
          >
            🚀 Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p
            className={`mt-6 text-lg font-medium ${
              status.includes("✅") ? "text-green-600" : status.includes("❌") ? "text-red-600" : "text-gray-700"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
}
