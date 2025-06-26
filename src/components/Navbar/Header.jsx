import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../Assets/footerLogo.webp";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [activeTab, setActiveTab] = useState('/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPass, SetShowPass] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  // Shop categories data
  const shopCategories = [
    { name: "String Art", path: "string-art" },
    { name: "Texture Art", path: "texture-art" },
    { name: "Embroidery Art", path: "embroidery-art" },
    { name: "Quartz Sand Art", path: "quartz-sand-art" },
    { name: "Geometry Texture Art", path: "geometry-texture-art" },
    { name: "Lippan Art", path: "lippan-art" },
    { name: "Modern Art", path: "modern-art" },
    { name: "Hand Painted Canvas", path: "hand-painted-canvas" },
    { name: "3D Wall Art", path: "3d-wall-art" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const modal = new window.bootstrap.Modal(
        document.getElementById("exampleModal")
      );
      modal.show();
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <NavLink to="/" onClick={() => setActiveTab("shop")}>
              <img src={Logo} alt="Company Logo" className="navbar-logo" />
            </NavLink>
          </div>

          <div className={`navbar-links ${mobileMenuOpen ? "active" : ""}`}>
            <ul>
              <li className={`dropdown-container ${activeTab === "shop" ? "active" : ""}`} onClick={(e) => {
                    if (window.innerWidth <= 768) {
                      e.preventDefault();
                    }
                    setActiveTab("shop");
                  }}>
                <NavLink
                  // to="/shop"
  
                  
                >
                  SHOP <i className="ri-arrow-down-s-line dropdown-arrow"></i>
                </NavLink>
                <div className="dropdown-menu">
                  <div className="dropdown-grid">
                    {shopCategories.map((category) => (
                      <NavLink
                        key={category.path}
                        to={category.path}
                        className="dropdown-item"
                        onClick={() => {
                          setActiveTab(category.path);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {category.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <NavLink
                  to="/workshop"
                  className={activeTab === "workshop" ? "active" : ""}
                  onClick={() => {
                    setActiveTab("workshop");
                    setMobileMenuOpen(false);
                  }}
                >
                  WORKSHOP
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/interiorProjects"
                  className={activeTab === "interiorProject" ? "active" : ""}
                  onClick={() => {
                    setActiveTab("interiorProject");
                    setMobileMenuOpen(false);
                  }}
                >
                  INTERIORS PROJECT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={activeTab === "contact" ? "active" : ""}
                  onClick={() => {
                    setActiveTab("contact");
                    setMobileMenuOpen(false);
                  }}
                >
                  CONTACT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ourStory"
                  className={activeTab === "ourStory" ? "active" : ""}
                  onClick={() => {
                    setActiveTab("ourStory");
                    setMobileMenuOpen(false);
                  }}
                >
                  OUR STORY
                </NavLink>
              </li>
              <li
                className="d-block d-md-none loginmob"
                aria-label="Account"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => {
                  setActiveTab("login");
                  setMobileMenuOpen(false);
                }}
              >
                <span>
                  LOGIN
                  <span className="hover-underline"></span>
                </span>
              </li>
            </ul>
          </div>

          <div className="navbar-actions">
            <button
              className="nav-icon"
              aria-label="Account"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="ri-account-circle-fill"></i>
            </button>
            <button className="nav-icon" aria-label="Search">
              <i className="ri-search-line"></i>
            </button>
            <NavLink to='/cart'>
              <button className="nav-icon" aria-label="Cart">
                <i className="ri-shopping-cart-2-line"></i>
                <span className="cart-badge">0</span>
              </button>
            </NavLink>
            <button
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <i
                className={`ri-${mobileMenuOpen ? "close-line" : "menu-line"}`}
              ></i>
            </button>
          </div>
        </div>
      </header>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header border-bottom-0">
              <h1
                className="modal-title fs-4 fw-bold text-primary"
                id="exampleModalLabel"
              >
                Welcome Back
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body py-4 px-4 px-md-5">
              <form action="/login" method="post" className="loginForm">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-3"
                    id="floatingInput"
                    name="u_email"
                    placeholder="name@example.com"
                    required
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type={showPass ? "text" : "password"}
                    className="form-control rounded-3"
                    id="floatingPassword"
                    name="u_pass"
                    placeholder="Password"
                    required
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onClick={() => SetShowPass(!showPass)}
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="flexCheckDefault"
                  >
                    Show password
                  </label>
                </div>

                <button
                  className="w-100 btn btn-lg btn-primary rounded-3 mb-3"
                  type="submit"
                >
                  LOG IN
                </button>

                <div className="text-center mt-4">
                  <a href="#" className="text-decoration-none text-muted small">
                    Forgot password?
                  </a>
                  <p className="mt-2 mb-0 text-muted small">
                    Don't have an account?{" "}
                  </p>
                  <NavLink to="/signIn">
                    <p
                      className="d-inline text-primary text-decoration-none nav-link"
                      data-bs-dismiss="modal"
                    >
                      Sign up
                    </p>
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;