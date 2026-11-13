import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "programs", label: "Programs" },
  { id: "materials", label: "Materials" },
  { id: "support", label: "Support Us" },
  { id: "join", label: "Join Us" },
  { id: "contact", label: "Contact Us" },
];

export default function Navbar({ activeTab, navigateTo }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const popupRef = useRef(null);

  const handleNavClick = (id) => {
    navigateTo(id);
    setIsMobileOpen(false); // Close popup when a link is clicked
  };

  // Lock body scrolling when popup is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Close popup when clicking outside or pressing Escape
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsMobileOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileOpen(false);
    };

    if (isMobileOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileOpen]);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Brand Logo */}
        <a
          href="#home"
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
        >
          <i className="fa-solid fa-bars"></i> ModuApp
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeTab === item.id ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="mobile-toggle"
          aria-label="Toggle Menu"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-popup-menu"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          <i
            className={`fa-solid ${isMobileOpen ? "fa-xmark" : "fa-bars"}`}
          ></i>
        </button>
      </div>

      {/* Mobile Popup Overlay & Modal */}
      {isMobileOpen && (
        <div className="mobile-popup-overlay" id="mobile-popup-menu">
          <div className="mobile-popup-card" ref={popupRef}>
            <div className="mobile-popup-header">
              <span className="mobile-popup-title">Menu Navigation</span>
              <button
                type="button"
                className="mobile-popup-close"
                aria-label="Close menu"
                onClick={() => setIsMobileOpen(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <nav className="mobile-popup-links">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`mobile-popup-link ${activeTab === item.id ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  <span>{item.label}</span>
                  <i className="fa-solid fa-chevron-right arrow-icon"></i>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
