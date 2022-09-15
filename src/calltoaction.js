import React from "react";
import "./calltoaction.css";
import img from "./images/costumers/eating.jpg";

function CallToAction() {
  return (
    <section className="cta-section">
      
      <div className="cta-grid">
      <div className="cta-img-box mobile-image-none">
          <img src={img} className="cta-img"></img>
        </div>
        <div className="cta-text">
          <h2>Get your meals for free!</h2>
          <p>
            Healthy, tasty and hassle-free meals are waiting for you. Start
            eating well today. You can cancel or pause anytime. And your first
            meal is on us!
          </p>
          <div className="cta-form">
            <div>
              <label>Full Name:</label>
              <br />
              <input type="text" placeholder="John Will" required />
            </div>
            <div>
              <label>Email address:</label>
              <br />
              <input type="text" placeholder="me@example.com" required />
            </div>
            <div>
              <label>Where did you hear from us?</label>
              <br />
              <select>
                <option value="">Please choose one option:</option>
                <option value="youtube">Youtube</option>
                <option value="facebook">Facebook</option>
                <option value="instagram ">Instagram</option>
                <option value="newspaper">Newspaper</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="btn-btn">
              <button className="sign-btn">Sign up now</button>
            </div>
          </div>
        </div>
        <div className="cta-img-box desktop-image-none">
          <img src={img} className="cta-img"></img>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
