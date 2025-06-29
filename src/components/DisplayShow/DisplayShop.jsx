import React from 'react'
// import {String_art} from '../Assets/ShowContent.js'
import { NavLink } from "react-router-dom";
const DisplayShop = ({data}) => {
  return (
    <div>
        <div className="container-fluid ">
        <div className="brands-section">
          <div className="brands-header">
            <h2>{data.title}<span>✔️</span></h2>
          <NavLink to={`/${data.title.toLowerCase().replace(/\s+/g, '-')}`}>VIEW ALL &gt;</NavLink>
          </div>
          <div className="brands-scroll">
            <div className="container-fluid my-4">
              <div className="d-flex overflow-auto gap-3 pb-2 hide-scrollbar " style={{ scrollSnapType: 'x mandatory ' }}>
                {data?.items?.map((item, idx) => (
                  <div
                    className="card product-card border-0 shadow-sm "
                    key={idx}
                    style={{ minWidth: '250px', scrollSnapAlign: 'start'  }}
                  >
                    <div className="position-relative overflow-hidden" style={{ paddingTop: '100%' }}>
                      <img
                        src={item.img}
                        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                        alt={item.name || "String art design"}
                      />
                      {item.onSale && (
                        <div className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 small rounded-bl">
                          SALE
                        </div>
                      )}
                      <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-50 text-white p-2 text-center">
                        Quick View
                      </div>
                    </div>
                    <div className="card-body p-2">
                      <h6 className="card-title text-center fs-6">
                        {item.heading || "Geometric String Art"}
                      </h6>
                      <div className="d-flex justify-content-center align-items-center">
                        {item.off_price && (
                          <del className="text-muted me-2">Rs {item.price}</del>
                        )}
                        <span className="fw-bold text-danger fs-6">
                          Rs {item.off_price || item.price || "600.00"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>




      </div>
    </div>
  )
}

export default DisplayShop