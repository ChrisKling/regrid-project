import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import "./Chatstyles.css";

function Home() {
  return (
    <div className="listingsContainer">
      <div className="chatContainer">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
