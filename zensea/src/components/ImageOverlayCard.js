import React from "react";
import "../css/ImageOverlayCard.css";

const ImageOverlayCard = ({ imageUrl, text }) => {
  return (
    <div className="image-overlay-card">
      <img src={imageUrl} alt="Card Background" className="card-image" />
      <div className="overlay">
        <div className="text">
          <img src={text} alt="Slogan" />{" "}
        </div>
      </div>
    </div>
  );
};

export default ImageOverlayCard;
