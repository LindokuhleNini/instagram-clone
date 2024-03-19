import React from "react";
import SideMenu from "../components/SideMenu";
import "../style.css";
import { FaEdit } from "react-icons/fa";
import ChatCard from "../components/ChatCard";

const Messages = () => {
  return (
    <>
      <SideMenu />
      <div className="message-container">
        <div className="left-msg-div">
          <div className="message-top">
            <header className="msg-header">
              <h1>Lindo</h1>
              <FaEdit />
            </header>
            <div className="msg-header2">
              <div className="msg-title">Messages</div>
              <a className="requests-button" href="requests">
                Requests
              </a>
            </div>
          </div>
          <div className="chats">
            <ChatCard
              image_url="https://media.istockphoto.com/id/1344781289/photo/profile-of-a-black-man-breathing-fresh-air-in-nature.webp?b=1&s=170667a&w=0&k=20&c=6ABKQk6yQiGw5nYrC6K1MPQX8fNRPKnVts65tRXint4="
              username="jake_"
            />
            <ChatCard
              image_url="https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face-thumbnail.jpg"
              username="zipho_"
            />
            <ChatCard
              image_url="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              username="mbali_"
            />
            <ChatCard
              image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxbz8S46qH4I4g7PacDGHeZuKICCu7zk3zlA&usqp=CAU"
              username="andre_"
            />
            <ChatCard
              image_url="https://e1.pxfuel.com/desktop-wallpaper/746/626/desktop-wallpaper-cool-profile-gaming-gaming-profile-thumbnail.jpg"
              username="drake_"
            />
            <ChatCard
              image_url="https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/Twitter-NFT-profile.jpg"
              username="shawn_"
            />
            <ChatCard
              image_url="https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk4MDQzMTI5NzY3NTM1ODA2/short-captions-for-profile-pictures.png"
              username="lovely_couples"
            />
            <ChatCard
              image_url="https://i.pinimg.com/736x/04/8b/8d/048b8dbc061a104f266176b1b7bf828c.jpg"
              username="cute_dogs"
            />
          </div>
        </div>
        <div className="right-msg-div"></div>
      </div>
    </>
  );
};

export default Messages;
