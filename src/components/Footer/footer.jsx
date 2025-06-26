import React, { useState } from 'react'

import './Footer.css'
import footer_icon from '../Assets/headerLogo.png'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  const [dropdown, setdropdown] = useState(false)
  const [shop, setshop] = useState(false)
  const [useful,setuseful] = useState(false)
  const [contact,setcontact] = useState(false)

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
  return (
    <div className="container-fluid footer-main">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 company-info">
          <div className='responsive-icon' onClick={() => setdropdown(!dropdown)}>
            <h1>COMPANY INFO</h1>
            <i className="ri-arrow-down-s-line"></i>
          </div>
          <ul className={dropdown ? "show" : ""}>
            <li><img src={footer_icon} className='w-100' alt="" /></li>
            <li><p>Registered Office: STUDIOCB PVT LTDRajendra Nagar GZB UP 201005</p></li>
            <li><p>Support Email: connect@craftsbazaar.store</p></li>
            <li><p>Support Phone :+91 93150 73677</p></li>
          </ul>
        </div>
        <div className="ccol-12 col-sm-12 col-md-6 col-lg-2 shop">
          <div className='responsive-icon' onClick={() => setshop(!shop)}>
            <h1>SHOP</h1>
            <i className="ri-arrow-down-s-line"></i>
          </div>
          <ul className={shop ? "show" : ""}>
              {shopCategories.map((item,idx)=>{
                return(
                   <>
                      <div className="show-nav">
                         <li  className='show-nav' ><NavLink to={item.path}><p>{item.name}</p></NavLink></li>
                      </div>
                   </>
                )
              })}
          </ul>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-2 useful-link">
         
           <div className='responsive-icon' onClick={() => setuseful(!useful)}>
            <h1>USEFUL LINK</h1>
            <i className="ri-arrow-down-s-line"></i>
          </div>
          <ul className={useful? "show" : ""}>
            <li><p>Privacy & Policy</p></li>
            <li><p>Terms Of Use</p></li>
            <li><p>Refund Policy</p></li>
            <li><p>ogs</p></li>
            <li><p>Corporate</p></li>
            <li><p>Whatsapp Us</p></li>
            <li><p>Track your order</p></li>

          </ul>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 contact-us">
           <div className='responsive-icon' onClick={() => setcontact(!contact)}>
            <h1>SIGN UP AND SAVE</h1>
            <i className="ri-arrow-down-s-line"></i>
          </div>
          <ul className={contact?"show":""}>
            <li>
              <div className='email'>
                <input type="text" name="" placeholder='Enter your email' id="" />
                <i className="ri-mail-line"></i>
              </div>
            </li>
            <li><i className="ri-instagram-line"></i></li>
          </ul>
        </div>
        <div className="col-12 footer-end">
          <p>© 2025 Craftsbazaar | All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer