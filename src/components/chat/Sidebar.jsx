import React from "react";
import Navbar from "./Navbar";
import "./Chatstyles.css";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="chatSidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
