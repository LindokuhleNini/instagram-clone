// Overlay.js
import React from "react";
import { useState } from "react";
import "../style.css";

const SearchOverlay = ({ showOverlay }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  /*  const handleSearch = () => {
    // Perform search functionality here
    console.log("Searching for:", searchQuery);
    // For demonstration purposes, simply add the search query to recent searches
    setRecentSearches((prevSearches) => [searchQuery, ...prevSearches]);
  }; */

  /* const handleClearRecentSearches = () => {
    setRecentSearches([]);
  }; */

  return (
    <div className={`overlay ${showOverlay ? "show" : ""}`}>
      {showOverlay && (
        <div className="search-container">
          <div className="search-header">
            <h2>Search</h2>
          </div>
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <hr style={{ color: "#e6e3e3", width: "100%" }} />
          <div className="recent-searches">
            <h3>Recent</h3>
            {recentSearches.length === 0 ? (
              <p>No recent searches</p>
            ) : (
              <ul>
                {recentSearches.map((search, index) => (
                  <li key={index}>{search}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchOverlay;
