import React, { useEffect, useState } from "react";
import "./InteriorProjects.css";
import { InteriorData } from "./InteriorData";
import cardImg from "../Assets/workshop_photo.webp";
import banner from '../Assets/banners_1.webp'
import Banner from "../Banner/Banner";

const InteriorProjects = () => {
 

  return (
    <div className="interior-projects-container">
      {/* Hero Banner */}
      <Banner interiorProject='Interior Projects'/>
      {/* Projects Grid */}
      <div className="projects-grid">
        {InteriorData.slice(1).map((item, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img
                src={item.img}
                alt={item.title || "Interior project"}
                className="project-image"
                loading="lazy"
              />
              <div className="project-overlay">
                <h3>{item.title || "Project Title"}</h3>
                <p>{item.description || "Project description"}</p>
                <button className="view-project-btn">View Project</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Card */}
      <div className="featured-card-container">
        <div className="featured-card">
          <div className="featured-card-image">
            <img src={cardImg} alt="Featured project" />
            <div className="featured-badge">Featured</div>
          </div>
          <div className="featured-card-content">
            <div className="card-meta">
              <span className="category">Workshop</span>
              <span className="date">Latest Project</span>
            </div>
            <h2>Modern Workshop Design</h2>
            <p className="description">
              A contemporary workshop space designed for creativity and functionality, 
              blending industrial elements with modern aesthetics.
            </p>
            <div className="card-footer">
              <a href="#" className="cta-link">
                Explore Project
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorProjects;