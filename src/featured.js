import React from "react";
import "./featured.css";
import logo1 from "./images/logos/business-insider.png";
import logo2 from "./images/logos/forbes.png";
import logo3 from "./images/logos/techcrunch.png";
import logo4 from "./images/logos/the-new-york-times.png";
import logo5 from "./images/logos/usa-today.png";

function Featured() {
  return (
    <section className="featured-section">
      <h3>AS FEATURED IN</h3>
      <div className="logos">
        <img src={logo1} className="featured-logo insider"></img>
        <img src={logo2} className="featured-logo forbes"></img>
        <img src={logo3} className="featured-logo tech"></img>
        <img src={logo4} className="featured-logo"></img>
        <img src={logo5} className="featured-logo"></img>
      </div>
    </section>
  );
}

export default Featured;
