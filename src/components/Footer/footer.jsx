import React from 'react'
import './Footer.css'
import footer_icon from '../Assets/headerLogo.png'
const Footer = () => {
  return (
    <div className="container-fluid footer-main">
         <div className="row">
             <div className="col-4 company-info">
                   <ul>
                        <li><h1>Company Info</h1></li>
                        <li><img src={footer_icon} className='w-100' alt="" /></li>
                        <li><p>Registered Office: STUDIOCB PVT LTDRajendra Nagar GZB UP 201005</p></li>
                        <li><p>Support Email: connect@craftsbazaar.store</p></li>
                        <li><p>Support Phone :+91 93150 73677</p></li>
                   </ul>
             </div>
             <div className="col-2 shop">
                   <ul>
                       <li><h1>Shop</h1></li>
                       <li><p>Customisable</p></li>
                       <li><p>Quick Buy</p></li>
                       <li>Logos</li>
                       <li>Portrait</li>
                       <li>Workshop</li>
                   </ul>
             </div>
             <div className="col-2 useful-link">
                <ul>
                    <li><h1>Useful link</h1></li>
                    <li><p>Privacy & Policy</p></li>
                    <li><p>Terms Of Use</p></li>
                    <li><p>Refund Policy</p></li>
                    <li><p>ogs</p></li>
                    <li><p>Corporate</p></li>
                    <li><p>Whatsapp Us</p></li>
                    <li><p>Track your order</p></li>

                </ul>
             </div>
             <div className="col-4 contact-us">
                <ul>
                    <li>Sign up and save</li>
                    <li>
                        <div className='email'>
                          <input type="text" name="" id="" />
                          <i class="ri-mail-line"></i>
                        </div>
                    </li>
                </ul>
             </div>
         </div>
    </div>
  )
}

export default Footer