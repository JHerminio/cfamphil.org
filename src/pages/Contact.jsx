import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="page-header animate-fade-in">
        <h2>Contact Us</h2>
        <p>Have questions or feedback? Send us a direct message.</p>
      </section>
      <section className="form-section animate-fade-in">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="c-name">Name</label>
            <input
              type="text"
              id="c-name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="c-email">Email</label>
            <input
              type="email"
              id="c-email"
              required
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="c-message">Message</label>
            <textarea
              id="c-message"
              rows={5}
              required
              placeholder="Write your message here..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
