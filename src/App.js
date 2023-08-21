import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Skills from "./components/Skills/skills";
import Footer from "./components/Footer/footer";
import Contact from "./components/Contact/contact";
import About from "./components/About/about";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
