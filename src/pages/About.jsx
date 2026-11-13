import React from "react";
import AboutTabs from "./AboutTabs";

export default function About() {
  return (
    <>
      <section className="page-header animate-fade-in">
        <AboutTabs />
        {/* <h2>About Us</h2>
        <p>
          Empowering communities through innovative solutions and dedicated
          teamwork.
        </p> */}
      </section>
      <section className="content-block animate-fade-in">
        <h3>Our Mission</h3>
        <p>
          We provide modern tools and structured learning frameworks designed to
          create sustainable educational and socio-economic opportunities.
        </p>
        <div className="stats-grid">
          <div className="stat-box">
            <h4>10k+</h4>
            <p>Participants</p>
          </div>
          <div className="stat-box">
            <h4>50+</h4>
            <p>Projects</p>
          </div>
          <div className="stat-box">
            <h4>100%</h4>
            <p>Open Access</p>
          </div>
        </div>
      </section>
    </>
  );
}
