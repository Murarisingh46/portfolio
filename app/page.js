'use client'
import { use } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <div >
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
