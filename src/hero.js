import React from "react";
import "./hero.css";
import heroImage from "./images/logos/hero.png";
import customer1 from "./images/costumers/customer-1.jpg";
import customer2 from "./images/costumers/customer-2.jpg";
import customer3 from "./images/costumers/customer-3.jpg";
import customer4 from "./images/costumers/customer-4.jpg";
import customer5 from "./images/costumers/customer-5.jpg";
import customer6 from "./images/costumers/customer-6.jpg";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1 className="headline">
          A healthy meal delivered to your door, every single day
        </h1>
        <p className="hero-summary">
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
          We have delivered 250,000+ meals last year!
        </p>
        <div className="hero-btn">
          <button className="start-btn">Start Eating Well</button>
          <button className="learn-btn ">Learn More &darr;</button>
        </div>
        <div className="customers">
          <div>
            <img src={customer1} className="customers-img"></img>
            <img src={customer2} className="customers-img"></img>
            <img src={customer3} className="customers-img"></img>
            <img src={customer4} className="customers-img"></img>
            <img src={customer5} className="customers-img"></img>
            <img src={customer6} className="customers-img"></img>
          </div>
          <h4>
            <span>250,000+</span> meals delivered last year!
          </h4>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} className="hero-img"></img>
      </div>
    </div>
  );
}

export default Hero;
