import React from "react";

export default function Materials() {
  return (
    <>
      <section className="page-header animate-fade-in">
        <h2>Learning Materials</h2>
        <p>Access free guides, documentation, and starter kits.</p>
      </section>
      <section className="list-section animate-fade-in">
        <div className="list-item">
          <div>
            <h4>Web Development Fundamentals Guide</h4>
            <p>HTML5, CSS Flexbox/Grid, and ES6 JavaScript core concepts.</p>
          </div>
          <button className="btn btn-outline">Download PDF</button>
        </div>
        <div className="list-item">
          <div>
            <h4>Community Facilitator Toolkit</h4>
            <p>Complete workshop templates, slides, and exercises.</p>
          </div>
          <button className="btn btn-outline">Download ZIP</button>
        </div>
      </section>
    </>
  );
}
