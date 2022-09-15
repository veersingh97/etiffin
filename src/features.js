import React from "react";
import "./features.css";
import { TbInfinity, TbApple, TbLeaf, TbPlayerPause } from "react-icons/tb";

function Features() {
  return (
    <section className="features-section">
      <div className="features-content">
        <div className="features">
          <p className="feat-logo">
            <TbInfinity />
          </p>
          <h3 className="feat-head">Never cook again!</h3>
          <p className="feat-text">
            Our subscription cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div className="features">
          <p className="feat-logo">
            <TbApple />
          </p>
          <h3 className="feat-head">Local and organic</h3>
          <p className="feat-text">
            Our cooks use only local, fresh and organic products to cook your
            meals.
          </p>
        </div>
        <div className="features">
          <p className="feat-logo">
            <TbLeaf />
          </p>
          <h3 className="feat-head">No waste</h3>
          <p className="feat-text">
            All our partners use only reusable containers to pack all your
            meals.
          </p>
        </div>
        <div className="features">
          <p className="feat-logo">
            <TbPlayerPause />
          </p>
          <h3 className="feat-head">Pause anytime</h3>
          <p className="feat-text">
            Going on vacation? Just pause your subscription and we will refund
            you unused days.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
