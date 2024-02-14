import React from "react";
import { FaHeart, FaComment, FaShare, FaBookmark } from "react-icons/fa";
import "../style.css";

const PostContainer = () => {
  return (
    <div className="post-container">
      {/* User info */}
      <div className="user-info">
        <img
          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0LzQ3OS1tay05NjkwLWpvYjU4My1rc2lkc3B3Mi5qcGc.jpg"
          alt="Profile"
          className="profile-picture"
        />
        <span className="username">Username</span>
        <span className="three-dots">...</span>
      </div>

      {/* Post content */}
      <div className="post-content">
        <img
          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0LzQ3OS1tay05NjkwLWpvYjU4My1rc2lkc3B3Mi5qcGc.jpg"
          alt="Post"
          className="post-image"
        />
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
