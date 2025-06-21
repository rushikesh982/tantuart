import React, { useEffect, useState } from "react";
import "./InteriorProjects.css";
import { InteriorData } from "./InteriorData";
import cardImg from "../Assets/workshop_photo.webp";

const InteriorProjects = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container-fluid p-0">
      <div className="row p-0">
        {InteriorData.map((item, index) => (
          <div className="col-12" key={index}>
            <img
              className={`interiorBanner ${showImage ? "show" : ""}`}
              src={item.img}
              alt=""
            />
          </div>
        ))}
        <div className="col-12">
          <div className="card">
            <a className="card-link" href="#">
              <div className="card-content">
                <div className="card-image">
                  <img
                    src={cardImg}
                    alt="Card illustration"
                    className="card-img"
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">This is heading</h3>
                  <p className="card-description">
                    Card description with lots of great facts and interesting
                    details.
                  </p>
                </div>
              </div>
              <div className="card-hover-overlay"></div>
              <div className="card-arrow">
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorProjects;
