import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";
function Nav() {
  const subTotalProductInCart = useSelector((state) =>
    state.cart.products.reduce((ac, product) => product.quantity + ac, 0)
  );
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
            <span id="lws-totalCart">{subTotalProductInCart}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
