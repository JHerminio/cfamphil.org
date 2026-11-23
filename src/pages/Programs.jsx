import React from "react";

export default function Programs() {
  return (
    <>
      <div className="main-content">
        <section className="page-header animate-fade-in">
          <h2>Our Programs</h2>
          <p>Discover our core initiatives active across multiple tracks.</p>
        </section>
        <section className="grid-section animate-fade-in">
          <div className="card">
            <h3>Digital Literacy Initiative</h3>
            <p>
              Hands-on training sessions covering core web development and
              digital tools.
            </p>
          </div>
          <div className="card">
            <h3>Community Tech Hubs</h3>
            <p>
              Establishing localized spaces for collaborative learning and
              resource access.
            </p>
          </div>
          <div className="card">
            <h3>Mentorship & Career Growth</h3>
            <p>
              Pairing aspiring tech talent with experienced industry
              professionals.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
