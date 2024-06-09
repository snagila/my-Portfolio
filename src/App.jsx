import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import MyRecentWork from "./pages/MyRecentWork";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <label htmlFor="darkMode" className="dark-mode-toggler">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>

      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="skills" element={<Skills />} />
          <Route path="/projects" element={<MyRecentWork />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
