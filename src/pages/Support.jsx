import React from "react";

export default function Support() {
  return (
    <>
      <section className="page-header animate-fade-in">
        <h2>Support Us</h2>
        <p>Help us expand our open programs and community resources.</p>
      </section>
      <section className="content-block animate-fade-in">
        <h3>Ways You Can Support</h3>
        <div className="grid-section mt-2">
          <div className="card">
            <i className="fa-solid fa-hand-holding-heart card-icon"></i>
            <h4>Donate</h4>
            <p>Directly fund hardware and learning material distribution.</p>
          </div>
          <div className="card">
            <i className="fa-solid fa-user-gear card-icon"></i>
            <h4>Volunteer Skills</h4>
            <p>Contribute as a code mentor, workshop leader, or organizer.</p>
          </div>
        </div>
      </section>
    </>
  );
}
