import React from "react";
import "./meals.css";
import { TbFlame, TbJewishStar } from "react-icons/tb";
import { GiForkKnifeSpoon } from "react-icons/gi";
import meal1 from "./images/app/meal-1.jpg";
import meal2 from "./images/app/meal-2.jpg";
import meal3 from "./images/app/meal-3.jpg";

function Meals() {
  return (
    <section className="meals-section">
      <div>
        <h2 className="meal-heading">MEALS</h2>
        <h2 className="meal-summary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
        <div className="meals-grid">
          <div className="meals-conatiner">
            <img className=" meal-1 meal-img" src={meal1}></img>
            <p className="category non-veg">Non-Vegetarian</p>
            <h4 className="meal-name">Japanese Gyozas</h4>
            <p className="calories">
              <span>
                <TbFlame />
              </span>
              650 calories
            </p>
            <p className="score">
              <span>
                <GiForkKnifeSpoon />
              </span>
              Nutriscore &#174; 74
            </p>
            <p className="rating">
              <span>
                <TbJewishStar />
              </span>
              4.9 Rating (569)
            </p>
          </div>
          <div className="meals-conatiner">
            <img className="meal-2 meal-img" src={meal2}></img>
            <p className="category">Vegetarian</p>
            <h4 className="meal-name">Avocado Salad</h4>
            <p className="calories">
              <span>
                <TbFlame />
              </span>
              400 calories
            </p>
            <p className="score">
              <span>
                <GiForkKnifeSpoon />
              </span>
              Nutriscore &#174; 92
            </p>
            <p className="rating">
              <span>
                <TbJewishStar />
              </span>
              4.8 Rating (927)
            </p>
          </div>
          <div className="meals-conatiner">
            <img className="meal-3 meal-img" src={meal3}></img>
            <p className="category">Vegetarian</p>
            <h4 className="meal-name">Mix Veg Salad</h4>
            <p className="calories">
              <span>
                <TbFlame />
              </span>
              590 calories
            </p>
            <p className="score">
              <span>
                <GiForkKnifeSpoon />
              </span>
              Nutriscore &#174; 83
            </p>
            <p className="rating">
              <span>
                <TbJewishStar />
              </span>
              4.3 Rating (173)
            </p>
          </div>
        </div>
        <div className="see-all">
          <a href="#">See All Recipes &rarr;</a>
        </div>
      </div>
    </section>
  );
}

export default Meals;
