import React from "react";
import "../style.css";

const CreateOverlay = ({ showCreateOverlay, onClose }) => {
  const handleClose = () => {
    onClose(); // Call the onClose function passed from the parent
  };

  return (
    <div className={`create-overlay ${showCreateOverlay ? "show" : ""}`}>
      <button className="exit-button" onClick={handleClose}>
        X
      </button>
      {showCreateOverlay && (
        <div className="create-container">
          <div className="create-header">
            <h2>Create</h2>
          </div>
          <hr style={{ color: "#e6e3e3", width: "100%" }} />
        </div>
      )}
    </div>
  );
};

export default CreateOverlay;
