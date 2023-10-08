import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navs.css";
import logo from "../images/logo.jpg";
import { FaShoppingCart, FaRegMoon, FaSun} from "react-icons/fa";

function Navs() {
  const [nightMode, setNightMode] = useState(false);
const toggleNightMode = () => {
  setNightMode(!nightMode);

  // Additional logic for toggling styles based on night mode
  const body = document.body;
  const navLinks = document.querySelectorAll(".nav-link");
  const logoImage = document.querySelector(".logo img");
  const footer = document.querySelector(".footer");

  if (nightMode) {
    // Night mode styles
    body.style.backgroundColor = "#000";
    navLinks.forEach(link => {
      link.style.color = "#fff";
    });
    logoImage.style.filter = "invert(1)";
    footer.style.backgroundColor = "#000";
    footer.style.color = "#fff";
  } else {
    // Day mode styles
    body.style.backgroundColor = "#fff";
    navLinks.forEach(link => {
      link.style.color = "#000";
    });
    logoImage.style.filter = "invert(0)";
    footer.style.backgroundColor = "#fff";
    footer.style.color = "#000";
  }
};

  return (
    <nav className="navbar-expand-lg d-flex justify-content-around  text-dark">
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
        <ul className="navbar-nav mr-auto text-dark flex-sm-row flex-md-row">
          <li>
              <div className="night-mode-toggle" onClick={toggleNightMode}>
            {nightMode ? (
              <FaSun size={30} className="night-mode-icon text-white" />
            ) : (
              <FaRegMoon size={30} className="night-mode-icon text-dark" />
            )}
          </div>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link " to="/home" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home/food" className="nav-link ">
              Foods' Court
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home/drink" className="nav-link ">
              Drinks' Court
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home/reserveSeats" className="nav-link ">
              Movies
            </NavLink>
          </li>
          <li>
          <div className="cart-icon">
        <NavLink to="/home/cart" className="nav-link ">
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
