import { Nav } from "./components/Nav";
import { Hero } from "./sections/Hero.tsx";
import { About } from "./sections/About.tsx";
import { Skills } from "./sections/Skills.tsx";
import { Experience } from "./sections/Experience.tsx";
import { Projects } from "./sections/Projects.tsx";
import { Contact } from "./sections/Contact.tsx";
import { Footer } from "./components/Footer";
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
