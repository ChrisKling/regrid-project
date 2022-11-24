import React from "react";
import AnimatedLogo from "./AnimatedLogo";
import Frontpagecard from "./Frontpagecard";
import "./Frontpage.css";

function Frontpage() {
  return (
    <div className="container">
      <AnimatedLogo />
      <Frontpagecard />
    </div>
  );
}

export default Frontpage;
