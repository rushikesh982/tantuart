import React from 'react';
import './Shop.css';
import banner_1 from '../Assets/banners_1.webp';
import data from '../Shop/data.js';
import img from '../Assets/cart_1.webp';

const Shop = () => {
  return (
    <div className="shop-container">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <img src={banner_1} className='w-100 banner-img' alt="Shop Banner" />
          </div>
          <div className="col-12">
            <h3 className='text-center p-4 section-title'>BEST SELLERS</h3>
          </div>
        </div>
      </div>
      
      <div className="container-fluid products-container">
        <div className="row">
          {data.map((item, idx) => (
            <div className="col-md-3 col-sm-6 col-12 mb-4" key={idx}>
              <div className="product-card">
                <div className="product-image">
                  {item.onSale && <div className="sale-badge">SALE</div>}
                  <img src={item.image || img} className='img-fluid product-img' alt={item.name} />
                </div>
                <div className="product-details">
                  <h5 className="product-title">{item.heading|| "Lorem ipsum dolor sit amet"}</h5>
                  <p className="product-price text-center">
                    {item.off_price && <del>Rs {item.price}</del>} 
                    Rs {item.price || "60000"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-12 text-center p-5">
           <button className='btn btn-primary'>VIEW ALL</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;