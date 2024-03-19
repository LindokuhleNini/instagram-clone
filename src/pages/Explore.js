import React from "react";
import "../style.css";
import MediaCard from "../components/MediaCard";
import SideMenu from "../components/SideMenu";

const Explore = () => {
  return (
    <>
      <SideMenu />
      <div className="explore-page">
        <MediaCard image_url="https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk4MDQzMTI5NzY3NTM1ODA2/short-captions-for-profile-pictures.png" />
        <MediaCard image_url="https://cdn2.momjunction.com/wp-content/uploads/2021/11/30-Cute-And-Nice-Words-To-Describe-Your-Boyfriend-624x702.jpg" />
        <MediaCard image_url="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg" />
        <MediaCard image_url="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg" />
        <MediaCard image_url="https://media.istockphoto.com/id/1303977605/photo/five-cocktails-in-hands-joined-in-celebratory-toast.jpg?s=612x612&w=0&k=20&c=QtnWuVeQCwKOfXIISxfkuDhQTe15qnnKOFKgpcH1Vko=" />
        <MediaCard image_url="https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/Twitter-NFT-profile.jpg" />
      </div>
    </>
  );
};

export default Explore;
