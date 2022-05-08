import React from "react";
import "./MainImage.css";

function MainImage(props) {
  return (
    <div
      className="main-image"
      style={{
        background: `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 39%,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.90) 100%
    ), url('${props.image}')`,
      }}
    >
      <div>
        <div
          style={{ position: "absolute", maxWidth: "500px", bottom: "2rem", marginLeft: "2rem" }}
        >
          <h1 style={{ color: "white" }}>{props.title}</h1>
          <p style={{ color: "white", fontSize: "1rem" }}>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
export default MainImage;
