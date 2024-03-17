import React from "react";
import "../style.css";

const StoriesContainer = ({ image_url, username }) => {
  return (
    <div className="story">
      <img src={image_url} alt="Story 1" className="story-image" />
      <div className="story-text">{username}</div>
    </div>
  );
};

export default StoriesContainer;
