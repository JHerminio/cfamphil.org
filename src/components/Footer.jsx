import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} ModuApp Organization. All rights
          reserved.
        </p>
        <div className="social-links">
          <a href="https://urlvanish.com/CFAM_Facebook">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.tiktok.com/@cfam.media">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="https://urlvanish.com/CFAM_Youtube">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
