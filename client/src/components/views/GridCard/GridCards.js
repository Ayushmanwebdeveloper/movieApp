import React from "react";
import { Col } from "antd";
import "./GridCards.css";

function GridCards(props) {
  if (props.landingPage) {
    return (
      
      <div class="col-lg-3 col-sm-4 col-6">
        <div style={{ marginRight: "20px", marginLeft: "20px"}}>
        <div style={{ position: "relative", overflow: "hidden", backgroundColor: "black" }}>
        <a href={`/movies/${props.movieID}`}>
              
            <img
              style={{ width: "100%" }}
              src={props.image}
              alt={props.movieName}
                className={"landing-page-posters border border-dark img-fluid"}
            />
           </a>
        </div>
     
          <p className="gfont" style={{ display: "flex", justifyContent: "center" }}>{props.movieName}</p>
          <h6 className="text-warning bg-dark" style={{ display: "flex", justifyContent: "center" }}>IMDb: {props.reviews}</h6>
          </div>
        </div>
      
      
    );
  } else {
    return (
      <div class="col-lg-2 col-sm-4 col-6">
        <div style={{ marginRight: "7px" }}>
          <div style={{ position: "relative", overflow: "hidden", backgroundColor: "black" }}>
            <a href={`/movies/${props.movieID}`}>
              <img
                style={{ width: "100%" }}
                src={props.image}
                alt={props.movieName}
                className={"landing-page-posters border border-dark img-fluid"}
              />
            </a>
          </div>

          <p class="h6" style={{ display: "flex", justifyContent: "center" }}>{props.movieName}</p>
          <h6 className="text-warning bg-dark" style={{ display: "flex", justifyContent: "center" }}> {props.reviews || props.characterName}</h6>
        </div>
      </div>
    );
  }
}

export default GridCards;
