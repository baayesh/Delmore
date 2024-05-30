import React from "react";
import "../styles/usp.css";
import { FaHandPointRight } from "react-icons/fa";
import usp from "../assets/usp.jpg";

const USP = () => {
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

        <button className="usp-button">Learn More <div>
            <FaHandPointRight />
        </div> </button>
      </div>
      <div className="usp-img"><img src={usp}/></div>
    </div>
  );
};

export default USP;
