import React, { useState } from "react";
import { FaHeart, FaComment, FaShare, FaBookmark } from "react-icons/fa";
import "../style.css";

const PostContainer = ({ profile_p, image_url, username }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [likes, setLikes] = useState(99);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

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
        <img
          src={image_url}
          alt="Post"
          className="post-image"
          onDoubleClick={handleClick}
        />
      </div>

      {/* Action icons */}
      <div className="action-icons">
        <FaHeart
          className="icon"
          style={{ fill: isClicked ? "red" : "white" }}
          onClick={handleClick}
        />
        <FaComment className="icon" />
        <FaShare className="icon" />
        <FaBookmark
          className="save-icon"
          style={{ fill: saved ? "black" : "white" }}
          onClick={handleSave}
        />
      </div>

      {/* Like count */}
      <div className="like-count">{likes} likes</div>

      {/* Post caption */}
      <div className="post-caption">This is the post caption.</div>
    </div>
  );
};

export default PostContainer;
