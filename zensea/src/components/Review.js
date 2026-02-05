import React from "react";
import "../css/Review.css";

const Review = ({ imageUrl, text, rating, readMoreLink }) => {
  return (
    <div className="rwrap">
      <div className="review-card">
        <img src={imageUrl} alt="Review" className="review-image" />
        <div className="roverlay">
          <div className="rtext">
            <p>{text}</p>
            <div className="rating">
              {/* Displaying star icons based on the rating */}
              {Array.from({ length: rating }, (_, index) => (
                <span key={index}>&#9733;</span>
              ))}
            </div>
            <a href={readMoreLink} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
