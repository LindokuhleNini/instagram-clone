import React from "react";
import { useState } from "react";
import {
  FaHome,
  FaSearch,
  FaCompass,
  FaPlay,
  FaEnvelope,
  FaBell,
  FaPlusSquare,
  FaUser,
  FaEllipsisH,
} from "react-icons/fa";
import "../style.css";
import SearchOverlay from "./SearchOverlay";
import { Link } from "react-router-dom";
import Explore from "../pages/Explore";
//import Explore from "./explore/Explore";

const SideMenu = () => {
  let instaLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png";
  const [showLabels, setShowLabels] = useState(true);
  const [currentImage, setCurrentImage] = useState(instaLogo); // Initial image source
  const [sideMenuWidth, setSideMenuWidth] = useState("250px");
  const [showOverlay, setShowOverlay] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  //const [showExplorePage, setShowExplore] = useState(false);

  const toggleLabels = () => {
    setShowLabels(!showLabels);
    setCurrentImage(
      currentImage === instaLogo
        ? "https://i.pinimg.com/originals/7d/bd/0b/7dbd0b51c20a695901a84c4c083500f6.png"
        : instaLogo
    );
    setSideMenuWidth(showLabels ? "auto" : "250px");
    setShowOverlay(!showOverlay);
  };

  /*  const openExplorePage = () => {
    setShowExplore(!showExplorePage);
  }; */

  const handleClick = (index) => {
    setActiveMenuItem(index);
  };

  const menu = [
    { label: "Home", icon: <FaHome size={24} />, to: "/" },
    { label: "Search", icon: <FaSearch size={24} />, to: "/search" },
    {
      label: "Explore",
      icon: <FaCompass size={24} />,
      to: "/explore",
    },
    { label: "Reels", icon: <FaPlay size={24} />, to: "/reels" },
    { label: "Messages", icon: <FaEnvelope size={24} />, to: "/messages" },
    {
      label: "Notifications",
      icon: <FaBell size={24} />,
      to: "/notifications",
    },
    { label: "Create", icon: <FaPlusSquare size={24} />, to: "/create" },
    { label: "Profile", icon: <FaUser size={24} />, to: "/profile" },
    {
      label: "Threads",
      icon: <FaEnvelope size={24} />,
      specialClass: "last-item",
    }, // New item with special class
    {
      label: "More",
      icon: <FaEllipsisH size={24} />,
      specialClass: "last-item",
    }, // New item with special class
  ];

  return (
    <>
      <div className="side-menu" style={{ width: sideMenuWidth }}>
        <img
          className="logo"
          src={currentImage}
          alt="logo"
          style={{
            width: currentImage === instaLogo ? "100px" : "40px",
            height: "auto",
          }}
        ></img>
        <div className="vertical-list">
          <ul>
            {menu.map((item, index) => {
              if (item.label === "Search") {
                return (
                  <li key={index} className="search">
                    <div className="icon-label-wrapper" onClick={toggleLabels}>
                      {item.icon}
                      {showLabels && (
                        <div
                          className="label"
                          onClick={item.onClick || (() => {})}
                        >
                          {item.label}
                        </div>
                      )}
                    </div>
                  </li>
                );
              } else {
                return (
                  <li key={index} className={item.specialClass}>
                    <Link to={item.to}>
                      <div
                        className={`icon-label-wrapper ${
                          activeMenuItem === index ? "active" : ""
                        }`}
                        onClick={() => handleClick(index)}
                      >
                        {item.icon}
                        {showLabels && (
                          <a
                            href={`/${item.label.toLowerCase()}`}
                            onClick={item.onClick || (() => {})}
                          >
                            {item.label}
                          </a>
                        )}
                      </div>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
      <SearchOverlay showOverlay={showOverlay} />
    </>
  );
};

export default SideMenu;
