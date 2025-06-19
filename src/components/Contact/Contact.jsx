import React, { useEffect, useState } from 'react';
import './Contact.css'
const Contact = () => {
  const [ani, setani] = useState(false)
  useEffect(() => {
    setInterval(() => {
      setani(true)
    }, 200)
  }, [])
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 contact-outer p-0 overflow-hidden">
            <div className={`ani-contact ${ani ? "ani-show" : ""}`}>
              <h1 className={`heading ${ani ? "show-heading" : ""}`}>WE ARE HERE FOR YOU</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row contact-form">
          <div className="col-12  p-5  text-center text-dark">
            <h3>CONTACT US</h3>
            <p>Ask us anything! We're here to help.</p>
          </div>
          <div className="col-12 col-lg-6 p-4">
            <label htmlFor="" className='pb-1'>NAME</label>
            <input type="text" className='form-control' name="" id="" />
          </div>
          <div className="col-12 col-lg-6 p-4">
            <label htmlFor="" className='pb-1'>EMAIL</label>
            <input type="text" className='form-control' name="" id="" />
          </div>
          <div className="col-12 p-4">
            <label htmlFor="" className='pb-1'>PHONE NUMBER</label>
            <input type="text" className='form-control' name="" id="" />
          </div>
          <div className="col-12 p-4">
            <label htmlFor="" className='pb-1'>MESSAGE</label>
            <textarea name="" className='form-control' id=""></textarea>
          </div>
          <div className="col-12 p-4 text-center">
            <button className='btn btn-primary text-center'> Submit</button>
            <p className='p-4'>This site is protected by hCaptcha and the hCaptcha Privacy Policy and Terms of Service apply.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 live-help">
            <ul>
              <li> <h1>Live Help </h1></li>
              <li><p>Live Help
                If you have an issue or question that requires immediate assistance, you can click the button below to chat live with a Customer Service representative. If we aren’t available, drop us an email to the left and we will get back to you within 24 hours!</p></li>
              <li>  <div className='d-flex '>
                <i class="ri-mail-line"></i>
                <p>connect@craftsbazaar.store</p>
              </div></li>
              <li><h1>Registered Office:</h1></li>
              <li><h2>STUDIOCB PRIVATE LIMITED</h2></li>
              <li><p>Rajendra Nagar GZB Uttar Pradesh 201005</p></li>
            </ul>
          </div>
          <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120976.50290272718!2d73.7097419518867!3d18.64083986959591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8377fbdeab3%3A0x2c4265dab1a7a0f8!2sPimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1750080558596!5m2!1sen!2sin" width="600" height="450" style={{width:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact