import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="text-section">
          <h1>
            I'm <span className="highlight">Ragy Basilious</span>.
            <br />
            A Software Developer
            <br />
            Based in <span className="highlight">California</span>.
          </h1>
          <p>
            I'm passionate about creating innovative web solutions and delivering impactful projects.
            If you're seeking someone with the skills to bring ideas to life, let's connect!
          </p>
          <a href="/portfolio" className="cta-button">Explore My Work</a>
        </div>
        <div className="image-section">
          <img src="/assets/person.webp" alt="Ragy Basilious" className="profile-image" />
        </div>
      </div>
      <footer>
        <p>Designed & Developed by Ragy Basilious</p>
        <div className="footer-links">
          <a href="[LinkedIn URL]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="[GitHub URL]" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </div>

  );
}

export default Home;
