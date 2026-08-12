import { ThemeProvider } from "./context/ThemeContext";
import AuroraBackground from "./components/AuroraBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function App() {
  return (
    <ThemeProvider>
      <AuroraBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
