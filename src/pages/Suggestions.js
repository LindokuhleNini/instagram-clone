import React from "react";
import "../style.css";
import SuggestionsCard from "../components/SuggestionsCard";
import SideMenu from "../components/SideMenu";

const Suggestions = () => {
  return (
    <>
      <SideMenu />
      <div className="suggested-div">
        <div className="suggestions-header">
          <div className="suggested-text">Suggested</div>
        </div>
        <SuggestionsCard />
        <SuggestionsCard />
        <SuggestionsCard />
        <SuggestionsCard />
        <SuggestionsCard />
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
