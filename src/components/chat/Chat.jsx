import { Add, Camera, More } from "@mui/icons-material";
import React from "react";
import "./Chatstyles.css";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chatChats">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <Camera />
          <Add />
          <More />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
