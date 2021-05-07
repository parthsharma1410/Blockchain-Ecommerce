import React from "react";
import "./App.css";

function Navigation() {

  return (
    <>
      <div className="navbarcss">
        <h1 className="brand">
          E-Cart
        </h1>
        <div className="mid">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#help">Help</a>
        </div>
      </div>
    </>
  );
}

export default Navigation;