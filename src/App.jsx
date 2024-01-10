import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  fetch("/api")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
    });

  const [startingPage, setStartingPage] = useState({
    home: true,
    projects: false,
    about: false,
    contact: false,
  });

  const handleRender = (clicked) => {
    setStartingPage({
      home: clicked === "home",
      projects: clicked === "projects",
      about: clicked === "about",
      contact: clicked === "contact",
    });
  };

  return (
    <>
      <Navbar onClick={handleRender} />
      {startingPage.home && <Home />}
      {startingPage.projects && <Projects />}
      {startingPage.about && <About />}
      {startingPage.contact && <Contact />}
    </>
  );
}

export default App;
