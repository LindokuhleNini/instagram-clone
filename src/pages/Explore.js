import React from "react";
import "../style.css";
import MediaCard from "../components/MediaCard";
import SideMenu from "../components/SideMenu";

const Explore = () => {
  return (
    <>
      <SideMenu />
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
