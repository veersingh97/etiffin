import React from "react";
import { useState } from "react";
import "./navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "./images/logos/omnifood-logo.png";
import MoblieMenu from "./mobilemenu";

function Navbar() {
  const [click, setClicked] = useState(false);

  const clicked = () => {
    setClicked(!click);
    
  };

  return (
    <section className="navbar-section">
      <div className="navbar-content">
        <img src={logo} className="navbar-logo" />
        <div>
          <div>
            <ul className="navbar-links">
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">Meals</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">
                  <span>Try for free</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <li className="bars" onClick={() => clicked()}>
              {click ? <FiX /> : <FiMenu />}
            </li>
          </div>
          <div className="mobile-menu">
            {click && <MoblieMenu />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
