import React from "react";
import "./Chatstyles.css";

const Navbar = () => {
  return (
    <div className="chatNavbar">
      <span className="logo">Pigeon Post</span>
      <div className="chatUser">
        <img
          src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
