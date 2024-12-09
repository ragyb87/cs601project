import React from "react";
import Footer from "../components/FooterInclude"; // Import the Footer component


function AboutPage() {
  return (
    <>
      <div className="inner-pages">
        <div className="hero-section">
          <img src="/assets/ragy.jpeg" alt="Ragy Basilious" className="about-image" />
          <div className="hero-content">
            <h1>Ragy Basilious</h1>
            <h3>Demographics</h3>
            <ul>
              <li><strong>Age:</strong> 37</li>
              <li><strong>Education:</strong> Bachelor's in Computer Science, pursuing Master's in Software Development</li>
              <li><strong>Origin:</strong> Egypt</li>
              <li><strong>Location:</strong> California, USA</li>
              <li><strong>Current Role:</strong> Software Developer at Esri</li>
              <li><strong>Focus:</strong> GIS solutions, creating user-friendly interfaces</li>
            </ul>
          </div>
        </div>

        <section className="content-section">
          <h2>About Me</h2>
          <p>
            With a strong background in software development, I thrive on crafting innovative solutions,
            especially in GIS. My journey from Egypt to California has shaped my global perspective,
            and I'm passionate about creating impactful tools that empower communities.
          </p>
        </section>

        <section className="content-section">
          <h2>Goals and Tasks</h2>
          <p>
            I strive to build meaningful software that bridges the gap between people and technology.
            My key goals include:
          </p>
          <ul>
            <li>Developing GIS-driven tools that provide value to communities.</li>
            <li>Continuously improving user experience in software applications.</li>
            <li>Advocating for Agile practices to streamline project workflows.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Environment</h2>
          <ul>
            <li><strong>Physical:</strong> Working in a collaborative environment at Esri's offices in California.</li>
            <li><strong>Social:</strong> Engaging with diverse teams and attending tech meetups.</li>
            <li><strong>Technological:</strong> Leveraging cutting-edge tools for GIS development and data visualization.</li>
          </ul>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default AboutPage;
