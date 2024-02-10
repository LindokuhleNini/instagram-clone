import React from "react";
import "./style.css";
import SideMenu from "./SideMenu";
import Home from "./home/Home";

const Main = () => {
  return (
    <>
      <div className="main-div">
        <SideMenu />
        <Home />
      </div>
    </>
  );
};

export default Main;
