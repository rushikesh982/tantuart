import React, {useState,useEffect} from "react";
import './banner.css';


export default function Banner(props)
{
    const [ani, setani] = useState(false);
      useEffect(() => {
        setInterval(() => {
          setani(true);
        }, 200);
      }, []);
    return(
        <>
        <div className="container-fluid">
        <div className="row">
          <div className="col-12 contact-outer p-0 overflow-hidden">
            <div className={`ani-contact ${ani ? "ani-show" : ""}`}>
              <h1 className={`heading ${ani ? "show-heading" : ""}`}>
                {props.wallart3d}
                {props.contact}
                {props.OurStory}
                {props.interiorProject}
                {props.stringArt}
                {props.textureArt}
                {props.embroideryArt}
                {props.QuartzSandArt}
                {props.GeometryTextureArt}
                {props.lippanArt}
                {props.modernArt}
                {props.HandPaintedCanvas}
              </h1>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}