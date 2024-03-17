import React from "react";
import "../style.css";

const ProfileInfo = () => {
  const imageUrls = [
    "https://via.placeholder.com/286x286",
    "https://via.placeholder.com/286x286",
    "https://via.placeholder.com/286x286",
    "https://via.placeholder.com/286x286",
    "https://via.placeholder.com/286x286",
    "https://via.placeholder.com/286x286",
    // Add more image URLs as needed
  ];

  return (
    <div className="profile-main">
      <div className="profile-deets">
        <div className="profile-pic">
          <img
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0LzQ3OS1tay05NjkwLWpvYjU4My1rc2lkc3B3Mi5qcGc.jpg"
            alt="pic"
            className="p-image"
          />
        </div>
        <div className="account-details">
          <div className="top-details">
            <p>supermario</p>
            <button className="follow-btn">Following</button>
            <button className="message-btn">Message</button>
          </div>
          <div className="account-numbers">
            <p>
              <b>6,051</b> posts
            </p>
            <p>
              <b>364M</b> followers
            </p>
            <p>
              <b>304</b> following
            </p>
          </div>
          <p className="name-surname">Super Mario</p>
          <button className="handle-btn">@ supermario</button>
          <p className="followed-by">Followed by ... </p>
        </div>
      </div>
      <div className="profile-content">
        <div className="heighlights">
          <img
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0LzQ3OS1tay05NjkwLWpvYjU4My1rc2lkc3B3Mi5qcGc.jpg"
            alt="pic"
            className="pr-image"
          />
          <img
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0LzQ3OS1tay05NjkwLWpvYjU4My1rc2lkc3B3Mi5qcGc.jpg"
            alt="pic"
            className="pr-image"
          />
        </div>
        <div className="profile-posts">
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="gallery-item">
              <img src={imageUrl} alt={`${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
