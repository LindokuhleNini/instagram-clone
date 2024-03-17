import React from "react";
import "../style.css";
import {
  FaHeart,
  FaComment,
  FaShare,
  FaBookmark,
  FaEllipsisH,
} from "react-icons/fa";

const ReelCard = () => {
  return (
    <div className="reel-card">
      <div className="video-icons-container">
        {/* Video element */}
        <iframe
          src="https://giphy.com/embed/pk1ujdUcvJAY7J9KbQ"
          width="480"
          height="480"
          frameBorder="0"
          class="giphy-embed"
          title="video"
          allowFullScreen
        ></iframe>
        {/* Icons for like, comment, share, save, more */}
        <div className="icons-container">
          <FaHeart className="icon" />
          <FaComment className="icon" />
          <FaShare className="icon" />
          <FaBookmark className="icon" />
          <FaEllipsisH className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ReelCard;
