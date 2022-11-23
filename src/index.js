import React from "react";
import ReactDOM from "react-dom/client";
import AnimatedLogo from "./components/frontpage/AnimatedLogo";
import Background from "./components/frontpage/Background";
import Frontpagecard from "./components/frontpage/Frontpagecard";
import "./index.css";
//import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <AnimatedLogo />
      <Frontpagecard />
      <Background />
    </div>
    {/*<App />*/}
  </React.StrictMode>
);
