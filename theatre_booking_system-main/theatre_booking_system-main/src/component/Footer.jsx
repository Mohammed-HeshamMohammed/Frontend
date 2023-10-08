import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.jpg";
import { faFacebook, faGoogle, faInstagram } from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer bg-black flex-md-row gap-4">
      <div className="imageFooter">
        <img src={logo} alt="logo" />
      </div>
      <div className="list text-white">
        <h2>Servises</h2>
        <ul>
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
        </ul>
      </div>
      <div className="icons text-white">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faGoogle} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  );
}

export default Footer;
