import { useEffect, useState } from "react";
import Header from "../sections/Header.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Projects from "../sections/Projects.jsx";
import Skills from "../sections/Skills.jsx";
import Experience from "../sections/Experience.jsx";
import Contact from "../sections/Contact.jsx";
import Footer from "../sections/Footer.jsx";

const Home = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");

    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`min-h-screen bg-s1 px-3 py-3 text-p4 transition-colors duration-300 md:px-4 md:py-4 ${theme === "dark" ? "theme-dark" : ""}`}>
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[30px] border border-s3/70 bg-s2/82 shadow-[0_18px_60px_rgba(31,41,55,0.08)]">
        <Header theme={theme} onToggleTheme={handleToggleTheme} />
        <main className="overflow-hidden">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
