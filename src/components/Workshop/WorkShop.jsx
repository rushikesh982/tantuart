import React, { useEffect, useState, useRef } from "react";
import "./WorkShop.css";
import workshop from "../Assets/workshop_banner.webp";
import workshop_card from "../Assets/workshop_photo.webp";
import data from '../Assets/All_review'

const WorkShop = () => {
  const containerRef = useRef(null);
  const [scrollSpeed, setScrollSpeed] = useState(1);
  const [isScrolling, setIsScrolling] = useState(true);




  useEffect(() => {
    if (!isScrolling || !containerRef.current) return;

    const container = containerRef.current;
    let scrollPosition = 0;
    let animationId;

    const scroll = () => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= container.scrollWidth - container.clientWidth) {
        scrollPosition = 0; // Loop back to start
      }

      container.scrollTo({
        left: scrollPosition,
        behavior: 'auto' // Change to 'smooth' for smooth scrolling
      });

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isScrolling, scrollSpeed]);



  const [work, setworkshop] = useState(false);
  // const [slider, setslider] = useState(false);


  useEffect(() => {
    const timer = setInterval(() => {
      setworkshop(true);
      // setslider(true)
    }, 200);
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className="container-fluid p-0 overflow-hidden">
        <div className="row">
          <div className="col-12 workshop_banner">
            <div className={`banner ${work ? "show" : ""}`}>
              <img src={workshop} className="w-100 h-100" alt="Workshop Banner" />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 p-5 ">

            <img src={workshop_card} className=" w-100" alt="" />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 p-5 workshop-detail">
            <ul>
              <li>
                <h1>Summer String Art DIY Workshop</h1>
              </li>
              <li>
                <del>Rs. 2,399.00 Sale priceRs. 2,199.00</del>
                <p>Tax included.</p>
              </li>
              <li>
                <p>
                  Art is here to rock you up!! Our next MASTERCLASS is scheduled
                  for the 6th of July . Do buy the ticket to participate right
                  now. See you soon! Only the first 10 slots are for 2199/- only.
                </p>
              </li>
              <li>
                <p>
                  6thJuly 2025 <br />
                  Sunday, 1-3 PM
                </p>
              </li>
              <li><h1>The kit includes:</h1></li>
              <li><p>-A wooden base</p></li>
              <li><p>-Templates( Cactus, Infinity heart, “Home”)</p></li>
              <li><p>-Nails</p></li>
              <li><p>-Threads</p></li>
              <li><p>-Wall hanging hooks</p></li>
              <li><p>-Scissors</p></li>
              <li><p>Doesn’t include 🔨 hammer</p></li>
              <li><p>Please note that the link to the online class will be provided one day prior to the scheduled day. Kindly provide a correct contact number (preferably with whatsapp). We appreciate your patience and understanding.</p></li>
              <li><button className=' btn w-100'>ADD TO CART</button></li>
            </ul>
          </div>
          <div className="col-12 review ">
            <h1 className='p-2 text-center '> TOP REVIEWS</h1>
          </div>
          <div className="outer-div col-12 p-5" ref={containerRef}>
            {data.map((item, idx) => {
              return (
                // <>
                  <div className='box-1' key={idx}>
                    <div className="slide active">
                      <div className="stars">
                        ★★★★★
                      </div>
                      <p className="review-content">{item.content}</p>
                      <div className="review-footer">
                        <span className="review-title">{item.title}</span>
                        <span className="review-date">{item.date}</span>
                      </div>
                    </div>
                  </div>
                // </>
              )
            })}


          </div>
        </div>
      </div>
    </>
  );
};

export default WorkShop;
