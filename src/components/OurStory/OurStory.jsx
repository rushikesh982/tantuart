import React from 'react';
import './OurStory.css';
import storyBanner from '../Assets/banners_1.webp';
import infoimg from '../Assets/ourstoryinfo.jpg'
const OurStory = () => {
  return (
    <>
    <div className="container-fluid p-0">
      <div className="row overflowy-hidden">
        <div className="col-12 storyBox">
          <img src={storyBanner} alt="" />
        </div>
      </div>
    </div>
    <div className="container-md container-fluid p-md-5">
      <div className="row">
        <div className="col-12">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ratione facilis enim voluptatem, provident placeat soluta quibusdam cupiditate dolore, cumque ipsam mollitia nesciunt possimus porro, beatae sequi eligendi doloribus asperiores.</p>
        </div>
      </div>
    </div>
    <div className="container-fluid infoContainer pt-md-2 pb-md-2">
        <div className="imgBox">
          <img src={infoimg} alt="" />
        </div>
        <div className="textBox">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id officiis in reprehenderit quo cum, itaque labore? Nemo cumque nostrum ab necessitatibus corporis non, error perferendis sint, eaque iste dolorum quae.</p>
        </div>
    </div>
    </>
  )
}

export default OurStory