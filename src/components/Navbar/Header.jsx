import React, { useState } from 'react';
import './Header.css';
import Logo from '../Assets/footerLogo.webp';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [activeTab, setActiveTab] = useState('shop');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showPass,SetShowPass] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
        <header className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <NavLink to="/" onClick={() => setActiveTab('shop')}>
                        <img src={Logo} alt="Company Logo" className="navbar-logo" />
                    </NavLink>
                </div>

                <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={activeTab === 'shop' ? 'active' : ''}
                                onClick={() => {
                                    setActiveTab('shop');
                                    setMobileMenuOpen(false);
                                }}
                            >
                                SHOP
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/workshop"
                                className={activeTab === 'workshop' ? 'active' : ''}
                                onClick={() => {
                                    setActiveTab('workshop');
                                    setMobileMenuOpen(false);
                                }}
                            >
                                WORKSHOP
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/interiorProjects"
                                className={activeTab === 'interiorPorject' ? 'active' : ''}
                                onClick={() => {
                                    setActiveTab('interiorPorject');
                                    setMobileMenuOpen(false);
                                }}
                            >
                                INTERIORS PROJECT
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={activeTab === 'contact' ? 'active' : ''}
                                onClick={() => {
                                    setActiveTab('contact');
                                    setMobileMenuOpen(false);
                                }}
                            >
                                CONTACT
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/ourStory"
                                className={activeTab === 'ourStory' ? 'active' : ''}
                                onClick={() => {
                                    setActiveTab('ourStory');
                                    setMobileMenuOpen(false);
                                }}
                            >
                                OUR STORY
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="navbar-actions">
                    <button className="nav-icon" aria-label="Account" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="ri-account-circle-fill"></i>
                    </button>
                    <button className="nav-icon" aria-label="Search">
                        <i className="ri-search-line"></i>
                    </button>
                    <button className="nav-icon" aria-label="Cart">
                        <i className="ri-shopping-cart-2-line"></i>
                        <span className="cart-badge">0</span>
                    </button>
                    <button 
                        className="mobile-menu-toggle" 
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <i className={`ri-${mobileMenuOpen ? 'close-line' : 'menu-line'}`}></i>
                    </button>
                </div>
            </div>
        </header>

    

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5 fw-bolder" id="exampleModalLabel">LogIn</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
                     <form action="/login" method="post" className="loginForm">
            <table>
                <tbody>
                    <tr>
                        <td><span>Enter your Email</span></td>
                    </tr>
                    <tr>
                        <td><input type="text" name="u_email" placeholder='enter your email...' required /></td>
                    </tr>
                    <tr>
                        <td><span>Enter Your Password</span></td>
                    </tr>
                    <tr>
                        <td>
                            <input type={showPass?'text':'password'} name="u_pass" placeholder='enter password..' required />
                            </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" onClick={()=>{SetShowPass(!showPass)}} name="" className='show_pass' id="" />
                            <span>show password</span></td>
                    </tr>
                    <tr className='btnbox'>
                        <td><button className='logbtn' type="submit">LogIn</button></td>
                    </tr>
                    <tr>
                        <td className='f-pass-login'>
                            <p className='text-capitalize mt-3'>forget <a href="">password ?</a></p>
                            <p className='text-capitalize'>don't have an account ? <a href="/">sign up</a></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
      </div>
      {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>
        </>
    );
};

export default Header;
