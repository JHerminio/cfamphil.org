import React, { useState } from "react";
import SimpleCarousel from "../pages/SimpleCarousel";
import cfam_Community from "../images/webp/cfam-Community.webp";

// import "./Home.css";

export default function Home({ navigateTo }) {
  const [activeHeroTab, setActiveHeroTab] = useState("programs");

  return (
    <>
      <section className="">
        <SimpleCarousel />
      </section>
      <div className="main-content">
        <section className="hero animate-fade-in">
          <h1>Welcome to CFAM</h1>
          <h2>Catechetical Foundation of the Archdiocese of Manila</h2>

          <div
            className="hero-tabs"
            role="tablist"
            aria-label="Hero Section Options"
          >
            {/* <button
            className={`tab-btn ${activeHeroTab === "programs" ? "active" : ""}`}
            id="tab-programs"
            role="tab"
            aria-selected={activeHeroTab === "programs"}
            aria-controls="panel-programs"
            onClick={() => setActiveHeroTab("programs")}
          >
            Explore Programs
          </button>
          <button
            className={`tab-btn ${activeHeroTab === "join" ? "active" : ""}`}
            id="tab-join"
            role="tab"
            aria-selected={activeHeroTab === "join"}
            aria-controls="panel-join"
            onClick={() => setActiveHeroTab("join")}
          >
            Get Involved
          </button> */}
          </div>

          {/* <div className="hero-tab-panels">
          {activeHeroTab === "programs" && (
            <div
              id="panel-programs"
              className="tab-panel active"
              role="tabpanel"
              aria-labelledby="tab-programs"
            >
              <p>
                Discover our range of educational and community-focused
                initiatives.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => navigateTo("programs")}
              >
                View All Programs &rarr;
              </button>
            </div>
          )}

          {activeHeroTab === "join" && (
            <div
              id="panel-join"
              className="tab-panel active"
              role="tabpanel"
              aria-labelledby="tab-join"
            >
              <p>
                Join as a volunteer, mentor, or contributor to make a direct
                impact.
              </p>
              <button
                className="btn btn-secondary"
                onClick={() => navigateTo("join")}
              >
                Join the Movement &rarr;
              </button>
            </div>
          )}
        </div> */}
        </section>
        {/* <section className="grid-section">
        <div className="card">
          <i className="fa-solid fa-bolt card-icon"></i>
          <h3>Fast Performance</h3>
          <p>
            Seamless tab navigation without page reloads for instant responses.
          </p>
          <img src="" alt="" />
        </div>

        <div className="card">
          <i className="fa-solid fa-cubes card-icon"></i>
          <h3>Modular Structure</h3>
          <p>
            Dynamic DOM rendering leveraging lightweight client-side templates.
          </p>
        </div>
        <div className="card">
          <i className="fa-solid fa-mobile-screen card-icon"></i>
          <h3>Fully Responsive</h3>
          <p>Optimized layouts for desktop, tablet, and mobile browsers.</p>
        </div>
      </section> */}
        <section className="grid-section">
          <div className="card">
            <img
              src={cfam_Community}
              alt="Fast Performance illustration"
              className="card-img"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                marginTop: "12px",
              }}
            />
          </div>

          <div className="card">
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/ADyonv2bjcY?start=2"
                title="Watch Our Video"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
