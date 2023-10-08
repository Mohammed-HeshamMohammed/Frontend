import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navs.css";
import logo from "../images/logo.jpg";
import { FaShoppingCart } from "react-icons/fa";

function Navs() {
  return (
    <nav className="navbar-expand-lg d-flex justify-content-around  text-white">
      <div className="logo">
        <img src={logo} alt="logo" />

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto text-white flex-sm-row flex-md-row">
          <li className="nav-item active">
            <NavLink className="nav-link text-white" to="/home" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home/food" className="nav-link text-white">
              Foods' Court
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home/drink" className="nav-link text-white">
              Drinks' Court
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home/reserveSeats" className="nav-link text-white">
              Movies
            </NavLink>
          </li>
          <li>
          <div className="cart-icon">
        <NavLink to="/home/cart" className="nav-link text-white">
          <FaShoppingCart size={30} />
        </NavLink>
      </div>
          </li>
        </ul>
      </div>
      <div className="form">
        <form class="form-inline my-2 my-lg-0">
          <button className="btn btn-danger mx-3">
            <NavLink className="text-white" to="/">
              Logout
            </NavLink>
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navs;
