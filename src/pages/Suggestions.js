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
        <SuggestionsCard
          image_url="https://e1.pxfuel.com/desktop-wallpaper/263/422/desktop-wallpaper-instagram-profile-for-girls-instagram-dp-girl.jpg"
          username="angie_n"
          full_name="Angela Nui"
        />
        <SuggestionsCard
          image_url="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg"
          username="cat_lover"
          full_name="Cat Lover"
        />
        <SuggestionsCard
          image_url="https://media.istockphoto.com/id/1139459625/photo/silhouette-of-man-in-dark-place-anonymous-backlit-contour-a.webp?b=1&s=170667a&w=0&k=20&c=FvcYQyr8xlRzVHrYb3IsksCwDfTucVTQfOM_kq7whHI="
          username="anonymous_g"
          full_name="Anonymous G"
        />
        <SuggestionsCard
          image_url="https://imgv3.fotor.com/images/blog-cover-image/Ultimate-guide-of-Facebook-profile-pictures.jpg"
          username="tech_lover"
          full_name="Tech Lover"
        />
        <SuggestionsCard
          image_url="https://i.pinimg.com/736x/4b/4a/bf/4b4abf3207a1e1d7e18896f11ff47a47.jpg"
          username="god_lover"
          full_name="God Lover"
        />
      </div>
    </>
  );
};

export default Suggestions;
