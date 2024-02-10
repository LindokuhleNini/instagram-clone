import React from "react";
import "../style.css";
import Suggestions from "./Suggestions";
import StoriesContainer from "./Stories";
import PostContainer from "./Posts";

const Home = () => {
  return (
    <>
      <div className="central-div">
        <div className="stories-container">
          <StoriesContainer />
          <StoriesContainer />
          <StoriesContainer />
          <StoriesContainer />
          <StoriesContainer />
          <StoriesContainer />
          <StoriesContainer />
          <StoriesContainer />
        </div>
        <div>
          <PostContainer />
          <PostContainer />
          <PostContainer />
          <PostContainer />
        </div>
      </div>
      <Suggestions />
    </>
  );
};

export default Home;
