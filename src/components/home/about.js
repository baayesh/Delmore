import React from "react";
import "../../styles/home.css";
import aboutus from '../../assets/Home/A-us.png';
import { FaHandPointRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <div className="row container about__container ">
        <div className="about-title column about__text__container">
          <h5 className="heading">
            Chris Wicks Based In Los Angeles Since 2009.
          </h5>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.
          </p>
          <button className="about__button">
          Learn More{" "}
          <div>
            <FaHandPointRight />
          </div>{" "}
        </button>
        
        </div>
        <div className="about__image__container">
          <img src={aboutus} alt="about us" />
        </div>
      </div>
    </div>
  );
};

export default About;
