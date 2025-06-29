import React from "react";
import './EmbroideryArt.css'
import { Embroidery_art } from "../../../Assets/ShowContent";
export default function EmbroideryArt()
{
    return(
        <>
             <div className="container-fluid mt-4">
             <div className="row g-4">
                {Embroidery_art.items.map((item, idx) => (
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" key={idx}>
                        <div className="card product-card h-100 border-0 shadow-sm hover-shadow transition-all">
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
                            <div className="card-body">
                                <h5 className="card-title text-truncate">
                                    {item.heading || "Geometric String Art"}
                                </h5>
                                <div className="d-flex justify-content-center align-items-center">
                                    {item.off_price && (
                                        <del className="fs-8">Rs {item.price}</del>
                                    )}
                                    <span className="fw-bold text-primary fs-8">
                                        Rs {item.off_price || item.price || "600.00"}
                                    </span>
                                </div>
                                <button className="btn btn-sm btn-outline-primary w-100 mt-3">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
           </div>
        </>
    )
}