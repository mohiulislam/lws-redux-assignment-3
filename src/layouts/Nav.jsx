import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { FaShoppingBag } from "react-icons/fa";
function Nav() {
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <Link to="/">
          <img src={Logo} alt="LWS" className="max-w-[140px]" />
        </Link>
        <div className="flex gap-4">
          <Link to="/" className="navHome" id="lws-home">
            Home
          </Link>
          <Link to="/cart" className="navCart" id="lws-cart">
            <i className="text-xl fa-sharp ">
              <FaShoppingBag />
            </i>
            <span id="lws-totalCart">0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
