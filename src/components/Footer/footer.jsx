import React, { useState } from 'react'
import './Footer.css'
import footer_icon from '../Assets/headerLogo.png'
const Footer = () => {
  const [dropdown, setdropdown] = useState(false)
  const [shop, setshop] = useState(false)
  const [useful,setuseful] = useState(false)
  const [contact,setcontact] = useState(false)


  return (
    <div className="container-fluid footer-main">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 company-info">
          <div className='responsive-icon' onClick={() => setdropdown(!dropdown)}>
            <h1>COMPANY INFO</h1>
            <i class="ri-arrow-down-s-line"></i>
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
            <i class="ri-arrow-down-s-line"></i>
          </div>
          <ul className={shop ? "show" : ""}>
            <li><p>Customisable</p></li>
            <li><p>Quick Buy</p></li>
            <li><p>Logos</p></li>
            <li><p>Portrait</p></li>
            <li><p>Workshop</p></li>
          </ul>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-2 useful-link">
         
           <div className='responsive-icon' onClick={() => setuseful(!useful)}>
            <h1>USEFUL LINK</h1>
            <i class="ri-arrow-down-s-line"></i>
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
            <i class="ri-arrow-down-s-line"></i>
          </div>
          <ul className={contact?"show":""}>
            <li>
              <div className='email'>
                <input type="text" name="" placeholder='Enter your email' id="" />
                <i class="ri-mail-line"></i>
              </div>
            </li>
            <li><i class="ri-instagram-line"></i></li>
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