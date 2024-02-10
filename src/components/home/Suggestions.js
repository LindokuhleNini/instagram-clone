import React from "react";
import "../style.css";
import Profile from "./Profile";
import SuggestionsCard from "./SuggestionsCard";

const Suggestions = () => {
  return (
    <>
      <div className="right-div">
        <Profile />
        <div className="suggestions-header">
          <div className="suggested-text">Suggested for you</div>
          <button className="see-all-button">See all</button>
        </div>
        <SuggestionsCard />
        <SuggestionsCard />
        <SuggestionsCard />
        <SuggestionsCard />
        <SuggestionsCard />
      </div>
    </>
  );
};

export default Suggestions;
