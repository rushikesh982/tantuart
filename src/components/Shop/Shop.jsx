import React from "react";
import "./Shop.css";
import banner_1 from "../Assets/banners_1.webp";
import { String_art } from "../Assets/ShowContent.js";
import { TextTure_Art } from "../Assets/ShowContent.js";
import DisplayShop from "../DisplayShow/DisplayShop.jsx";
import { Embroidery_art } from "../Assets/ShowContent.js";

const Shop = () => {
 
  return (
    <div className="shop-container">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <img
              src={banner_1}
              className="w-100 banner-img"
              alt="Shop Banner"
            />
          </div>
          <div className="col-12">
            <h3 className="text-center p-4 section-title">BEST SELLERS</h3>
          </div>
        </div>
      </div>
      <DisplayShop data={String_art}/>
      <DisplayShop data={TextTure_Art}/>
      <DisplayShop data={Embroidery_art}/>


    </div>
  );
};

export default Shop;
