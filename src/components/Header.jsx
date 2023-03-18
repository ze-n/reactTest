import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className=".container header__container">
        <div className="header__logo">ShopCon</div>
        <nav className="header__nav">
          <ul className="header__nav-list" role="list">
            <li className="header__nav-items">
              <Link to="/" className="header__nav-links">
                Home
              </Link>
            </li>
            <li className="header__nav-items">
              <Link to="/cart" className="header__nav-links">
                <ShoppingCart size={32} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
