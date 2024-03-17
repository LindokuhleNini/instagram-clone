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
            <StoriesContainer
              image_url="https://media.istockphoto.com/id/1344781289/photo/profile-of-a-black-man-breathing-fresh-air-in-nature.webp?b=1&s=170667a&w=0&k=20&c=6ABKQk6yQiGw5nYrC6K1MPQX8fNRPKnVts65tRXint4="
              username="jake_"
            />
            <StoriesContainer
              image_url="https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face-thumbnail.jpg"
              username="zipho_"
            />
            <StoriesContainer
              image_url="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              username="mbali_"
            />
            <StoriesContainer
              image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxbz8S46qH4I4g7PacDGHeZuKICCu7zk3zlA&usqp=CAU"
              username="andre_"
            />
            <StoriesContainer
              image_url="https://e1.pxfuel.com/desktop-wallpaper/746/626/desktop-wallpaper-cool-profile-gaming-gaming-profile-thumbnail.jpg"
              username="drake_"
            />
            <StoriesContainer
              image_url="https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/Twitter-NFT-profile.jpg"
              username="shawn_"
            />
            <StoriesContainer
              image_url="https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk4MDQzMTI5NzY3NTM1ODA2/short-captions-for-profile-pictures.png"
              username="lovely_couples"
            />
            <StoriesContainer
              image_url="https://i.pinimg.com/736x/04/8b/8d/048b8dbc061a104f266176b1b7bf828c.jpg"
              username="cute_dogs"
            />
          </div>
          <div>
            <PostContainer
              profile_p="https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk4MDQzMTI5NzY3NTM1ODA2/short-captions-for-profile-pictures.png"
              image_url="https://cdn2.momjunction.com/wp-content/uploads/2021/11/30-Cute-And-Nice-Words-To-Describe-Your-Boyfriend-624x702.jpg"
              username="lovely_couples"
            />
            <PostContainer
              profile_p="https://i.pinimg.com/736x/04/8b/8d/048b8dbc061a104f266176b1b7bf828c.jpg"
              image_url="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg"
              username="cute_dogs"
            />
            <PostContainer
              profile_p="https://images.unsplash.com/photo-1466112928291-0903b80a9466?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              image_url="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg"
              username="nature_lover"
            />
            <PostContainer
              profile_p="https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/Twitter-NFT-profile.jpg"
              image_url="https://media.istockphoto.com/id/1303977605/photo/five-cocktails-in-hands-joined-in-celebratory-toast.jpg?s=612x612&w=0&k=20&c=QtnWuVeQCwKOfXIISxfkuDhQTe15qnnKOFKgpcH1Vko="
              username="cocktails_guy"
            />
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
          <SuggestionsCard
            image_url="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            username="cool_g"
            full_name="Cool Guy"
          />
          <SuggestionsCard
            image_url="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80"
            username="tony_stark"
            full_name="Tony Stark"
          />
          <SuggestionsCard
            image_url="https://e1.pxfuel.com/desktop-wallpaper/147/865/desktop-wallpaper-anime-profile-pic-anime-profile.jpg"
            username="n_zya"
            full_name="Anne Zya"
          />
          <SuggestionsCard
            image_url="https://wallpapers.com/images/hd/cute-aesthetic-profile-pictures-1200-x-1600-pjfl391j3q0f7rlz.jpg"
            username="flower_lover"
            full_name="Flower Lover"
          />
          <SuggestionsCard
            image_url="https://lh3.googleusercontent.com/proxy/XKaAaq9jzNfD_PGpEyDzcdci4j7bZrdDKLoXa2ZUlehXpfmY_PwE2a56GZTHt2pduskSqdk4d9TSZcNT2WXsG26b37Ongltsl3czKnLABHQj_5uOsOkKeCbleB2_BCEdAMK72e1rbA"
            username="game_master"
            full_name="Game Master"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
