import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Materials from "./pages/Materials";
import Support from "./pages/Support";
import Join from "./pages/Join";
import Contact from "./pages/Contact";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (tab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (activeTab) {
      case "home":
        return <Home navigateTo={navigateTo} />;
      case "about":
        return <About />;
      case "programs":
        return <Programs />;
      case "materials":
        return <Materials />;
      case "support":
        return <Support />;
      case "join":
        return <Join />;
      case "contact":
        return <Contact />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} navigateTo={navigateTo} />
      <main id="content-container" className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
