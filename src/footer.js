import React from "react";
import "./footer.css";
import Logo from "./images/logos/omnifood-logo.png";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-grid">
        <div>
          <img src={Logo} className="footer-logo"></img>
          <div className="brand-logo">
            <p>
              <FiInstagram />
            </p>
            <p>
              <FiFacebook />
            </p>
            <p>
              <FiTwitter />
            </p>
          </div>
          <p>Copyright &#169; 2030 by Omnifood, Inc. All rights reserved</p>
        </div>
        <div className="footer-content">
          <h4 className="footer-head">Contact us</h4>
          <p>Address: 623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
          <p>Phone: 415-201-6370 Email: hello@omnifood.com</p>
        </div>
        <div className="footer-content account">
          <h4 className="footer-head ">Account</h4>
          <p>Create account</p>
          <p>Sign in</p>
          <p>iOS app</p>
          <p>Android app</p>
        </div>
        <div className="footer-content company">
          <h4 className="footer-head ">Company</h4>
          <p>About company</p>
          <p>For Business</p>
          <p>Cooking partners</p>
          <p>Careers</p>
        </div>
        <div className="footer-content resources">
          <h4 className="footer-head ">Resources</h4>
          <p>Recipe directory</p>
          <p>Help center</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
