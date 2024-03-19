import React from "react";
import "../style.css";

const ChatCard = ({ image_url, username }) => {
  return (
    <div className="profile-container">
      <div className="profile-info">
        <img src={image_url} alt="Profile" className="profile-picture" />
        <div className="user-details">
          <span className="username">{username}</span>
          <span className="chat-history">Hi I'm {username} :)</span>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
