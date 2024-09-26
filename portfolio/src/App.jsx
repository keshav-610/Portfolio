import Navbar from "./contents/Navbar";
import Home from "./contents/Home";
import About from "./contents/About";
import Skills from "./contents/Skills";
import Projects from "./contents/Projects";
import Experience from "./contents/Experience";
import Contact from "./contents/Contact";

function App() {
  return (
    <main className="main-class">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

export default App;
