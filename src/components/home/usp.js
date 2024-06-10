import React from "react";
import { useState } from "react";
import "../../styles/home.css";
import { FaHandPointRight } from "react-icons/fa";
import USP_1 from "../../assets/USP/USP_1.jpg";
import USP_2 from "../../assets/USP/USP_2.png";
import USP_3 from "../../assets/USP/USP_3.png";

const USP = () => {
  // use state for change state when user click on the image
  const [activeImage, setActiveImage] = useState(1);

  // change active index
  const imageHandleClick = (index) => {
    setActiveImage(index);
  };

  return (
    <div className="usp-main">
      <div className="usp-cta">
        <h2>
          Nelli Cola <br />
          Thal & Garak Drink
        </h2>

        <p>
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
        <p>
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor sadipscing
          invidunt ut labore .
        </p>

        <button className="usp-button">
          Learn More{" "}
          <div>
            <FaHandPointRight />
          </div>{" "}
        </button>
      </div>
      <div className="row image__stack__container">
        <img
          src={USP_1}
          className={`image__stack__item image__1 ${
            activeImage === 0 ? "active" : ""
          }`}
          onClick={() => imageHandleClick(0)}
        />

        <img
          src={USP_2}
          className={`image__stack__item image__2 ${activeImage === 1 ? "active" : ""}`}
          onClick={() => imageHandleClick(1)}
        />

        <img
          src={USP_3}
          className={`image__stack__item image__3 ${
            activeImage === 2 ? "active" : ""
          }`}
          onClick={() => imageHandleClick(2)}
        />
      </div>
    </div>
  );
};

export default USP;
