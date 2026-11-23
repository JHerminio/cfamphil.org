import React, { useState } from "react";
import "./AboutTabs.css";

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = [
    {
      id: "mission",
      label: "Our Mission",
      title: "Empowering Communities Worldwide",
      content:
        "We strive to bridge educational gaps and foster sustainable community growth through collaborative initiatives, open resources, and dedicated mentorship.",
    },
    {
      id: "team",
      label: "Leadership & Team",
      title: "Driven by Passionate Experts",
      content:
        "Our team consists of educators, technologists, and community organizers dedicated to creating scalable, equitable impact across various regions.",
    },
    {
      id: "impact",
      label: "Our Impact",
      title: "Measurable Change",
      content:
        "Over the past 5 years, we have successfully launched over 50 programs, reached 10,000+ learners, and partnered with dozens of local community centers.",
    },
  ];

  return (
    <section className="about-section">
      <h2>About our Organization</h2>
      <p className="about-subtitle">
        Learn more about our mission, leadership, and impact.
      </p>
      <div className="about-container content-block ">
        {/* Tab Navigation */}
        <div
          className="about-tabs"
          role="tablist"
          aria-label="About Us Navigation"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <div className="about-tab-panels">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              id={`panel-${tab.id}`}
              className={`tab-panel ${activeTab === tab.id ? "active" : ""}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              hidden={activeTab !== tab.id}
            >
              <h3>{tab.title}</h3>
              <p>{tab.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
