import React from "react";
import "../../styles/home.css";
import brand from '../../assets/Home/brand.png'

const Partners = () => {
  return (
    <section>
      <div className="row container partners__container">
      <div className="column partners__left">
            <p className="tag-1">We are reliable dealers</p>
          <h4 className="heading">Partners Working with Us</h4>
          <p className="paragraph">
            Lorem ipsum sit amet Lorem ipsum sit amet Lorem ipsum sit amet rorem
            ipsum sit amet Lorem ipsum sit amet
          </p>
        </div>
        <div className="column partners__right">
            <div className="row partners__right__container">
                <img src={brand} alt="brand" />
                <img src={brand} alt="brand" />
                <img src={brand} alt="brand" />
                <img src={brand} alt="brand" />
            </div>
            <div className="row">
                <img src={brand} alt="brand" />
                <img src={brand} alt="brand" />
                <img src={brand} alt="brand" />
                <img src={brand} alt="brand" />
            </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;
