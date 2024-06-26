import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from './Pages/Contact';
import ScrollUp from './Components/ScrollUp';
function App() {
  return (
    <div>
      <ScrollUp />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
