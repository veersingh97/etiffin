import React from "react";
import { FiX } from "react-icons/fi";
import "./mobilemenu.css";

function MobileMenu() {
  return (
    <section className="mobile-menu-section">
      <div className="mobile-div">
        <ul className="mobile-flex">
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
            <a href="#">Try for free</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MobileMenu;
