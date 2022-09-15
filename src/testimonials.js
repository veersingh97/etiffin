import React from "react";
import "./testimonials.css";
import cust1 from "./images/costumers/ben.jpg";
import cust2 from "./images/costumers/dave.jpg";
import cust3 from "./images/costumers/hannah.jpg";
import cust4 from "./images/costumers/steve.jpg";
import gal1 from "./images/gallery/gallery-1.jpg";
import gal2 from "./images/gallery/gallery-2.jpg";
import gal3 from "./images/gallery/gallery-3.jpg";
import gal4 from "./images/gallery/gallery-4.jpg";
import gal5 from "./images/gallery/gallery-5.jpg";
import gal6 from "./images/gallery/gallery-6.jpg";
import gal7 from "./images/gallery/gallery-7.jpg";
import gal8 from "./images/gallery/gallery-8.jpg";
import gal9 from "./images/gallery/gallery-9.jpg";
import gal10 from "./images/gallery/gallery-10.jpg";
import gal11 from "./images/gallery/gallery-11.jpg";
import gal12 from "./images/gallery/gallery-12.jpg";

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div>
        <h2 className="heading">TESTIMONIALS</h2>
        <h4 className="summary">Once you try it, you can't go back</h4>{" "}
        <div className="testimonials">
          <div className="testimonial">
            <img className="testi-img" src={cust1}></img>
            <p className="testi-text">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </p>
            <p className="testi-name">--Dave Bryson</p>
          </div>
          <div className="testimonial">
            <img className="testi-img" src={cust2}></img>
            <p className="testi-text">
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </p>
            <p className="testi-name">--Ben Hadley</p>
          </div>
          <div className="testimonial">
            <img className="testi-img" src={cust4}></img>
            <p className="testi-text">
              Omnifood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </p>
            <p className="testi-name">--Steve Miller</p>
          </div>
          <div className="testimonial">
            <img className="testi-img" src={cust3}></img>
            <p className="testi-text">
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </p>
            <p className="testi-name">--Hannah Smith</p>
          </div>
        </div>
      </div>

      <div className="gallery">
        <div className="customer">
          <img src={gal1} className="gallery-img"></img>
        </div>
        <div className="customer">
          <img src={gal2} className="gallery-img"></img>
        </div>
        <div className="customer">
          <img src={gal3} className="gallery-img"></img>
        </div>
        <div className="customer">
          <img src={gal4} className="gallery-img"></img>
        </div>
        <div className="customer">
          <img src={gal5} className="gallery-img"></img>
        </div>
        <div className="customer">
          <img src={gal6} className="gallery-img"></img>
        </div>
        <div className="customer">
          <img src={gal7} className="gallery-img"></img>
        </div>
        <div className="customer">
          <img src={gal8} className="gallery-img"></img>
        </div>
        <div className="customer">
          <img src={gal9} className="gallery-img"></img>
        </div>
        <div className="customer">
          <img src={gal10} className="gallery-img"></img>
        </div>
        <div className="customer">
          <img src={gal11} className="gallery-img"></img>
        </div>
        <div className="customer">
          <img src={gal12} className="gallery-img"></img>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
