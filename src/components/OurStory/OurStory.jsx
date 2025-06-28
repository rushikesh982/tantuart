import React from 'react';
import './OurStory.css';
import storyBanner from '../Assets/banners_1.webp';
import infoimg from '../Assets/ourstoryinfo.jpg';
import Banner from '../Banner/Banner';

const OurStory = () => {
  return (
    <div className="our-story">
      {/* Hero Banner */}
      <Banner OurStory='Our Story'/>
      {/* Introduction */}
      <section className="story-intro">
        <div className="container">
          <p className="lead-text">
            Founded in 2015, we began as a small team with a big vision. Today, we're proud to serve thousands of customers worldwide while staying true to our core values of quality, innovation, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="story-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-image">
              <img src={infoimg} alt="Our team working together" />
            </div>
            <div className="content-text">
              <h2>From Humble Beginnings</h2>
              <p>
                What started in a garage with just two employees has grown into an award-winning company recognized for excellence in our industry. Every step of our journey has been guided by our commitment to making a difference.
              </p>
              <div className="milestones">
                <div className="milestone">
                  <h3>2015</h3>
                  <p>Founded in San Francisco</p>
                </div>
                <div className="milestone">
                  <h3>2018</h3>
                  <p>First international expansion</p>
                </div>
                <div className="milestone">
                  <h3>2022</h3>
                  <p>Recognized as Industry Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-statement">
        <div className="container">
          <blockquote>
            "Our mission is to deliver exceptional quality while fostering innovation and building lasting relationships with our customers and community."
          </blockquote>
          <p className="signature">— Founder & CEO</p>
        </div>
      </section>
    </div>
  );
};

export default OurStory;