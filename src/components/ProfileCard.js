import React from "react";
import "../style.css";

const ProfileCard = () => {
  return (
    <div className="profile-container">
      <div className="profile-info">
        <img
          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0LzQ3OS1tay05NjkwLWpvYjU4My1rc2lkc3B3Mi5qcGc.jpg"
          alt="Profile"
          className="profile-picture"
        />
        <div className="user-details">
          <span className="username">supermario_</span>
          <span className="full-name">Super Mario</span>
        </div>
      </div>
      <a href="logout" className="switch-button">
        Logout
      </a>
    </div>
  );
};

export default ProfileCard;
