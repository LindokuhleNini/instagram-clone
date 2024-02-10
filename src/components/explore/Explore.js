import React from "react";
import "../style.css";
import MediaCard from "./MediaCard";

const Explore = () => {
  return (
    <>
      <div className="explore-page">
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
    </>
  );
};

export default Explore;
