import React from "react";
import "./price.css";
import { BiCheck, BiX } from "react-icons/bi";

function Price() {
  return (
    <section className="price-section">
      <div>
        <h2 className="price-heading">PRICING</h2>
        <p className="price-summary">Eating well without breaking the bank</p>
      </div>
      <div className="price-grid">
        <div className="pricing  pricing-plan">
          <h3 className="price-category">STARTER</h3>
          <p className="price-dollars">
            <span>$</span>399
          </p>
          <p className="price-month">per month. That's all $13 per meal!</p>
          <ul>
            <li className="day">
              <span>
                <BiCheck />
              </span>
              1 meal per day
            </li>
            <li className="orders">
              <span>
                <BiCheck />
              </span>
              Order from 11am to 9pm
            </li>
            <li className="delivery">
              <span>
                <BiCheck />
              </span>
              Delivery is free
            </li>
            <li className="access">
              <span>
                <BiX />
              </span>
              Get access to all recipes
            </li>
          </ul>
          <a className="price-btn">Start eating well</a>
        </div>
        <div className="pricing pricing-bg">
          <h3 className="price-category">COMPLETE</h3>
          <p className="price-dollars">
            <span>$</span>649
          </p>
          <p className="price-month">per month. That's all $11 per meal!</p>
          <ul>
            <li className="day">
              <span>
                <BiCheck />
              </span>
              2 meal2 per day
            </li>
            <li className="orders">
              <span>
                <BiCheck />
              </span>
              Order 24/7
            </li>
            <li className="delivery">
              <span>
                <BiCheck />
              </span>
              Delivery is free
            </li>
            <li className="access">
              <span>
                <BiCheck />
              </span>
              Get access to all recipes
            </li>
          </ul>
          <a className="price-btn">Start eating well</a>
        </div>
      </div>
      <p className="both-plans">
        Prices include all applicable taxes. You can cancel at anytime. Both
        plans include the following:
      </p>
    </section>
  );
}

export default Price;
