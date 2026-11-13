import React, { useState } from "react";

export default function Join() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "learner",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    setFormData({ name: "", email: "", role: "learner" });
  };

  return (
    <>
      <section className="page-header animate-fade-in">
        <h2>Join Us</h2>
        <p>
          Become an active participant or contributor in our global network.
        </p>
      </section>
      <section className="form-section animate-fade-in">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              required
              placeholder="Jane Doe"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              required
              placeholder="jane@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role of Interest</label>
            <select
              id="role"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
            >
              <option value="learner">Learner / Student</option>
              <option value="mentor">Mentor / Volunteer</option>
              <option value="partner">Partner Organization</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Application
          </button>
        </form>
      </section>
    </>
  );
}
