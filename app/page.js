'use client'
import { use } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
export default function Home() {
  return (
    <div >
      <Navbar />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}
