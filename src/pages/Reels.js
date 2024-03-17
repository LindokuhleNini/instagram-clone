import React from "react";
import SideMenu from "../components/SideMenu";
import "../style.css";
import ReelCard from "../components/ReelCard";

const Reels = () => {
  /*   const reelsData = [
    { id: 1, src: "https://giphy.com/embed/pk1ujdUcvJAY7J9KbQ" },
    { id: 2, src: "https://giphy.com/embed/pk1ujdUcvJAY7J9KbQ" },
    { id: 3, src: "https://giphy.com/embed/pk1ujdUcvJAY7J9KbQ" },
  ]; */
  return (
    <>
      <SideMenu />
      <div className="reels-page">
        <ReelCard />
        <ReelCard />
        <ReelCard />
        <ReelCard />
        <ReelCard />
        <ReelCard />
        {/* Add more ReelCard components here */}
      </div>
    </>
  );
};

export default Reels;
