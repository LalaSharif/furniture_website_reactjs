import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingBasket,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <div className="header">
        <div className="topnav">
          <div className="language">Az</div>
          <FontAwesomeIcon icon={faSearch} />
          <div className="logo">HomeDecor</div>
          <FontAwesomeIcon icon={faShoppingCart} />
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="downnav">
          <div className="navbar">
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Collections</a>
                </li>
                <li>
                  <a href="#">Sale</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
