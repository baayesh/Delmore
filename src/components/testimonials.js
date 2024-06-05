import React from "react";
import "../styles/home.css";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";

const Testimonials = () => {
  return (
    <section>
      <div className="testimaonials-container">
        <div className="testimonials-heading">
      
          <h1 className="heading">Testimonials</h1>
        </div>
        <div className="testimonials-cards">
          <div className="testimonials-card-1">
            <div className="testimonials-card-1-heading">
            <p className="tag-1">What our customers say about us</p>
              <h4 className="subheading">Testimonials</h4>
            </div>
            <div className="testimonials-card-1-content">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="testimonials-card-1-buttons">
              <button className="testimonials-button-1">
                <HiArrowSmallLeft className="testimonials-arrow"/>
              </button>
              <button className="testimonials-button-2">
                <HiArrowSmallRight className="testimonials-arrow"/>
              </button>
            </div>
          </div>
          <div className="testimonials-card-2">
            <div className="testimonials-card-heading">
              <h1>John Doe</h1>
            </div>
            <div className="testimonials-card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <div className="testimonials-card-3">
            <div className="testimonials-card-heading">
              <h1>John Doe</h1>
            </div>
            <div className="testimonials-card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
