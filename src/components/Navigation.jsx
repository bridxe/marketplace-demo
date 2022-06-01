import React, { useState } from "react";
import "./Navigation.css";
import { FaBars } from "react-icons/fa";
import { BsBag, BsHeart } from "react-icons/bs";

export default function Navigation() {
  const [showLinks, setShowlinks] = useState(false);

  return (
    <div className="NavContainer">
      <div className="nav">
        <button className="openBtn" onClick={() => setShowlinks(!showLinks)}>
          <FaBars className="icons" />
        </button>
        <div className="imgContainer">
          <img src="logo.png" className="img"></img>
        </div>
        <nav className="navlinks" id={showLinks ? "show" : ""}>
          <a href="#"> ALL PRODUCTS</a>
          <a href="#"> NEW ARRIVALS </a>
          <a href="#"> SALES </a>
          <a href="#"> SEARCH</a>
          <a href="#">ACCOUNT </a>
          <a href="#"> WISHLIST(0)</a>
          <a href="#"> BAG(0) </a>
        </nav>
        <button>
          <BsHeart className="icons" />
        </button>
        <button>
          <BsBag className="icons" />
        </button>
      </div>
    </div>
  );
}
