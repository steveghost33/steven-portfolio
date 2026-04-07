import Header from "../sections/Header.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Projects from "../sections/Projects.jsx";
import Skills from "../sections/Skills.jsx";
import Contact from "../sections/Contact.jsx";
import Footer from "../sections/Footer.jsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-s1">
      <Header />
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
