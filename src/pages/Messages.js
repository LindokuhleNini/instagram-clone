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
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
          </div>
        </div>
        <div className="right-msg-div"></div>
      </div>
    </>
  );
};

export default Messages;
