import React from "react";
import { FaHeart, FaComment, FaShare, FaBookmark } from "react-icons/fa";
import "../style.css";

const PostContainer = ({ profile_p, image_url, username }) => {
  return (
    <div className="post-container">
      {/* User info */}
      <div className="user-info">
        <img src={profile_p} alt="Profile" className="profile-picture" />
        <span className="username">{username}</span>
        <span className="three-dots">...</span>
      </div>

      {/* Post content */}
      <div className="post-content">
        <img src={image_url} alt="Post" className="post-image" />
      </div>

      {/* Action icons */}
      <div className="action-icons">
        <FaHeart className="icon" />
        <FaComment className="icon" />
        <FaShare className="icon" />
        <FaBookmark className="save-icon" />
      </div>

      {/* Like count */}
      <div className="like-count">100 likes</div>

      {/* Post caption */}
      <div className="post-caption">This is the post caption.</div>
    </div>
  );
};

export default PostContainer;
