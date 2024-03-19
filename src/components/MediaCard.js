import React from "react";
import "../style.css";

const MediaCard = ({ image_url }) => {
  return (
    <>
      <div className="explore-content">
        <img src={image_url} alt="content"></img>
      </div>
    </>
  );
};

export default MediaCard;
