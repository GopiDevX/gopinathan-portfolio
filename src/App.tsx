import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Certificates from "./sections/Certificates";
import CodingProfiles from "./sections/CodingProfiles";
import { useRecruiterMode } from "./store/useRecruiterMode";

function App() {
  const { isRecruiterMode } = useRecruiterMode();
  return (
    <>
      <div className={`fixed inset-0 z-[-1] bg-primary transition-colors duration-500 ${isRecruiterMode ? 'bg-[#0a0a0a]' : ''}`}>
        {!isRecruiterMode && (
          <>
            <div className="absolute top-0 left-0 w-full h-[500px] bg-accent-purple/20 blur-[120px] rounded-full mix-blend-screen opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-blue/20 blur-[120px] rounded-full mix-blend-screen opacity-20"></div>
          </>
        )}
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Certificates />
        <CodingProfiles />
        <Experience />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-500 text-sm glass mt-20">
        <p>&copy; {new Date().getFullYear()} Portfolio. Built with React, Tailwind & Three.js.</p>
      </footer>
    </>
  );
}

export default App;
