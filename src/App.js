import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Portfolio from "./pages/PortfolioPage";
import Gallery from "./pages/GalleryPage";
import Challenge from "./pages/ChallengePage";
import Contact from "./pages/ContacPaget";
import './App.css';



function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="/assets/logo.webp" alt="Logo" className="logo-img" />
        </div>
        <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About Me</Link></li>
          <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
          <li><Link to="/gallery" className="nav-link">Photo Gallery</Link></li>
          <li><Link to="/challenges" className="nav-link">Know Me Challenge</Link></li>
          <li><Link to="/contact" className="nav-link contact-link">Contact</Link></li>
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/challenges" element={<Challenge />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>

    
  );
}

export default App;
