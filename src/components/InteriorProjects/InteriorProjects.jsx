import React, { useEffect, useState } from 'react';
import './InteriorProjects.css';
import { InteriorData } from './InteriorData';

const InteriorProjects = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container-fluid p-0">
      <div className="row p-0">
        {
          InteriorData.map((item, index) => (
            <div className="col-12" key={index}>
              <img
                className={`interiorBanner ${showImage ? 'show' : ''}`}
                src={item.img}
                alt=""
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default InteriorProjects;
