import React from "react";
import "../style.css";
import StoriesContainer from "../components/Stories";
import PostContainer from "../components/PostsCard";
import SideMenu from "../components/SideMenu";
import ProfileCard from "../components/ProfileCard";
import SuggestionsCard from "../components/SuggestionsCard";

const Home = () => {
  return (
    <>
      <div className="main-div">
        <SideMenu />
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

        <div className="right-div">
          <ProfileCard />
          <div className="suggestions-header">
            <div className="suggested-text">Suggested for you</div>
            <a className="see-all-button" href="suggested">
              See all
            </a>
          </div>
          <SuggestionsCard />
          <SuggestionsCard />
          <SuggestionsCard />
          <SuggestionsCard />
          <SuggestionsCard />
        </div>
      </div>
    </>
  );
};

export default Home;
