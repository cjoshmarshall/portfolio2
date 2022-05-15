import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Projects from "./pages/Projects.js"
import Skills from "./pages/Skills.js"
import Contact from "./pages/Contact.js"

function App() {
  return (
    <>
      <Header />
      <Navbar />
        <section id="home" ><Home /></section>
        <section id="about" ><About /></section>
        <section id="projects" ><Projects /></section>
        <section id="skills" ><Skills /></section>
        <section id="contact" ><Contact /></section>
    </>
  );
}

export default App;
