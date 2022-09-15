import React from "react";
import "./howitworks.css";
import App01 from "./images/app/app-screen-1.png";
import App02 from "./images/app/app-screen-2.png";
import App03 from "./images/app/app-screen-3.png";

function HowItWorks() {
  return (
    <section className="how-section">
      <div className="how-content">
        <h2 className="how-text">how it works</h2>
        <h3>Your daily dose of health in 3 simple steps</h3>
      </div>
      <div className="how-grid">
        <div className="how-lines">
          <p className="first">01</p>
          <h3>Tell us what you like (and what not)</h3>
          <p className="how-summary">
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>
        <div className="grid-image">
          <img className="img" src={App01}></img>
        </div>
      </div>
      <div className="how-grid">
        <div className="grid-image mobile-none">
          <img className="img" src={App02}></img>
        </div>
        <div className="how-lines">
          <p className="first">02</p>
          <h3>Approve your weekly meal plan</h3>
          <p className="how-summary">
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>
        <div className="grid-image desktop-none">
          <img className="img" src={App02}></img>
        </div>
      </div>
      <div className="how-grid">
        <div className="how-lines">
          <p className="first">03</p>
          <h3>Receive meals at convenient time</h3>
          <p className="how-summary">
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
          </p>
        </div>
        <div className="grid-image">
          <img className="img" src={App03}></img>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
