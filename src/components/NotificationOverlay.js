// Overlay.js
import React from "react";
import "../style.css";

const NotificationOverlay = ({ showNotifications }) => {
  return (
    <div className={`overlay ${showNotifications ? "show" : ""}`}>
      {showNotifications && (
        <div className="search-container">
          <div className="search-header">
            <h2>Notifications</h2>
          </div>
          <hr style={{ color: "#e6e3e3", width: "100%" }} />
        </div>
      )}
    </div>
  );
};

export default NotificationOverlay;
