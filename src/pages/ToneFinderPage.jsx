import { useEffect, useState } from "react";
import Header from "../sections/Header.jsx";
import ToneFinder from "../sections/ToneFinder.jsx";
import Footer from "../sections/Footer.jsx";

const ToneFinderPage = () => {
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
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`min-h-screen bg-s1 text-p4 transition-colors duration-300 ${theme === "dark" ? "theme-dark" : ""}`}>
      <Header theme={theme} onToggleTheme={handleToggleTheme} />
      <main>
        <ToneFinder />
      </main>
      <Footer />
    </div>
  );
};

export default ToneFinderPage;
