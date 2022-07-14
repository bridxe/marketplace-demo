import React, { useState } from "react";
import "./Navigation.css";
import { FaBars } from "react-icons/fa";
import { BsBag, BsHeart, BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [showLinks, setShowlinks] = useState(false);

  const [showAllProducts, setProducts] = useState(true);

  return (
    <div>
      <div className="NavContainer">
        <div className="nav">
          <button
            className="openBtn hiddenButtons"
            onClick={() => setShowlinks(!showLinks)}
          >
            <FaBars className="icons" />
          </button>
          <Link to="/">
            <div className="imgContainer">
              <img src="logo.png" className="img"></img>
            </div>
          </Link>
          <nav className="navlinks" id={showLinks ? "show" : ""}>
            <Link to="/Catalog" className="allProducts">
              ALL PRODUCTS
              <button
                className="plusButton"
                onClick={() => setProducts(!showAllProducts)}
              >
                <BsPlusLg />
              </button>
            </Link>

            <Link to="/"> NEW ARRIVALS </Link>
            <Link to="/"> SALES</Link>
            <Link to="/"> SEARCH</Link>
            <Link to="/Account"> ACCOUNT</Link>
            <Link to="/WishList"> WISHLIST(0)</Link>
            <Link to="/Bag"> BAG(0)</Link>
          </nav>
          <button className="hiddenButtons">
            <BsHeart className="icons " />
          </button>
          <button className="hiddenButtons">
            <BsBag className="icons" />
          </button>
        </div>
      </div>
      <div
        className="AllProductsContainer"
        id={showAllProducts ? "hideProducts" : ""}
      >
        <div className="ClothingContainer">
          <span> CLOTHING </span>
          <ul>
            <li>ALL CLOTHING</li>
            <li>DRESSES</li>
            <li>PANTS</li>
            <li>T-SHIRTS</li>
            <li>SHIRTS</li>
            <li>LEGGINGS</li>
          </ul>
        </div>
        <div className="AccessoriesContainer">
          <span> ACCESSORIES </span>
          <ul>
            <li>ALL ACCESSORIES</li>
            <li>HATS</li>
            <li>BELTS</li>
            <li>WALLETS</li>
            <li>JEWELERY</li>
          </ul>
        </div>
        <div className="BagsContainer">
          <span> BAGS</span>
          <ul>
            <li>ALL BAGS</li>
            <li>SHOULDER</li>
            <li>TOTE</li>
            <li>CROSSBODY</li>
          </ul>
        </div>
        <div className="ShoesContainer">
          <span> SHOES </span>
          <ul>
            <li>ALL SHOES</li>
            <li>BOOTS</li>
            <li>SNEAKERS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
