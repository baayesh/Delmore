import React from "react";
import { useState } from "react";
import "../../styles/home.css";
import { FaHandPointRight } from "react-icons/fa";
import usp from "../../assets/usp.jpg";

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
        <div>
          <img
            src={usp}
            className={`image__stack__item ${activeImage === 0 ? "active" : ""}`}
            onClick={() => imageHandleClick(0)}
          />
        </div>
<div>
  
          <img
            src={usp}
            className={`image__stack__item ${activeImage === 1 ? "active" : ""}`}
            onClick={() => imageHandleClick(1)}
          />
</div>
<div>
  
          <img
            src={usp}
            className={`image__stack__item ${activeImage === 2 ? "active" : ""}`}
            onClick={() => imageHandleClick(2)}
          />
</div>
      </div>
    </div>
  );
};

export default USP;
