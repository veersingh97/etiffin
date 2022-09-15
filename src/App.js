import React from "react";
import "./App.css";
import Navbar from "./navbar";
import Hero from "./hero";
import Howitworks from "./howitworks";
import Featured from "./featured";
import Meals from "./meals";
import Testimonials from "./testimonials";
import Price from "./price";
import Features from "./features";
import CallToAction from "./calltoaction";
import Footer from "./footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Howitworks />
      <Meals />
      <Testimonials />
      <Price />
      <Features />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
