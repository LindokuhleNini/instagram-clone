import React, { useState } from "react";
import "../style.css";
import image from "../images/hover-image.png";

const HoverCard = ({ image_url, username, full_name }) => {
  return (
    <div className="hover-card">
      <div className="top-details">
        <img src={image_url} alt="Profile" className="profile-picture" />
        <div>
          <div className="username">{username}</div>
          <div className="full-name">{full_name}</div>
        </div>
      </div>

      <div className="user-details">
        <div className="stats">
          <span>
            <div>
              <b>0</b>
            </div>
            <div>posts</div>
          </span>

          <span>
            <div>
              <b>50</b>
            </div>
            <div>followers</div>
          </span>

          <span>
            <div>
              <b>50</b>
            </div>
            <div>following</div>
          </span>
        </div>
      </div>
      <hr className="profile-divider" />
      <img src={image} alt="img" className="hover-image" />
      <hr className="profile-divider" />
      <div className="hover-bottom">
        <button type="submit" className="hover-follow-btn">
          Follow
        </button>
      </div>
    </div>
  );
};

const SuggestionsCard = ({ image_url, username, full_name }) => {
  const [showHoverCard, setShowHoverCard] = useState(false);

  const handleMouseEnter = () => {
    setShowHoverCard(true);
  };

  const handleMouseLeave = () => {
    setShowHoverCard(false);
  };

  return (
    <>
      <div
        className="profile-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="profile-info">
          <img src={image_url} alt="Profile" className="profile-picture" />
          <div className="user-details">
            <span className="username">{username}</span>
            <span className="full-name">{full_name}</span>
          </div>
        </div>
        <a href="follow" className="follow-button">
          Follow
        </a>
      </div>
      {showHoverCard && (
        <div
          className="hover-card-overlay"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <HoverCard
            image_url={image_url}
            username={username}
            full_name={full_name}
          />
        </div>
      )}
    </>
  );
};

export default SuggestionsCard;
