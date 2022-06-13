import React, { useState } from "react";
import "./Navigation.css";
import { FaBars } from "react-icons/fa";
import { BsBag, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

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
          <Link to="/"> Home</Link>
          <Link to="/Catalog"> ALL PRODUCTS</Link>
          <Link to="/"> NEW ARRIVALS </Link>
          <Link to="/"> SALES</Link>
          <Link to="/"> SEARCH</Link>
          <Link to="/WishList"> WISHLIST(0)</Link>
          <Link to="/Bag"> BAG(0)</Link>
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
