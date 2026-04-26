import { useEffect, useState } from "react";
import Header from "../sections/Header.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Projects from "../sections/Projects.jsx";
import Skills from "../sections/Skills.jsx";
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
    <div className={`min-h-screen bg-s1 text-p4 transition-colors duration-300 ${theme === "dark" ? "theme-dark" : ""}`}>
      <Header theme={theme} onToggleTheme={handleToggleTheme} />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
