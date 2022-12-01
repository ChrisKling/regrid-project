import React from "react";
import "./Chatstyles.css";

const Search = () => {
  return (
    <div className="chatSearch">
      <div className="chatSearchForm">
        <input type="text" placeholder="Find a user..." />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
