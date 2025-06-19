import React, { useEffect, useState } from 'react';
import './WorkShop.css';
import workshop from '../Assets/workshop_banner.webp';
import workshop_card from '../Assets/workshop_photo.webp'

const WorkShop = () => {
  const [work, setworkshop] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setworkshop(true);
    }, 200);
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="container-fluid p-0 overflow-hidden"> {/* Prevent body scroll if needed */}
      <div className="row">
        <div className="col-12 workshop_banner">
          <div className={`banner ${work ? "show" : ""}`}>
            <img src={workshop} className='w-100 h-100' alt="Workshop Banner" />
          </div>
        </div>
        <div className="col-6 p-5 ">
          <img src={workshop_card} className='h-100 w-100' alt="" />
        </div>
        <div className="col-6 p-5">
          <ul>
            <li><h1>Summer String Art DIY Workshop</h1></li>
            <li>
              <del>Rs. 2,399.00 Sale priceRs. 2,199.00</del>
              <p>Tax included.</p>
            </li>
            <li><p>Art is here to rock you up!! Our next  MASTERCLASS is scheduled for the 6th of July . Do buy the ticket to participate right now. See you soon! Only the first 10 slots are for 2199/- only.</p></li>
            <li>
              <p>6thJuly 2025 <br />
                Sunday, 1-3 PM</p>
            </li>
          </ul>
          <ul>
            <li><h2>The kit includes:</h2></li>
            <li><p>-A wooden base</p></li>
            <li><p>-Templates( Cactus, Infinity heart, “Home”)</p></li>
            <li><p>-Nails</p></li>
            <li><p>-Threads</p></li>
            <li><p>-Wall hanging hooks</p></li>
            <li><p>-Scissors</p></li>
            <li><p>Doesn’t include 🔨 hammer</p></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkShop;