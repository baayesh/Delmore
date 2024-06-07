import React from "react";

import "../../styles/home.css";
import { IoIosSend } from "react-icons/io";

const Getintouch = () => {
  return (
    <div className="get-in-touch-container">
      <div className="get-in-touch-main">
        <div className="get-in-touch-left">


          <h2>+64 22 0437 647</h2>
          <p>
            252 Lichfield Street, Christchurch Central City,
            <br /> Christchurch 8011, New Zealand
          </p>
        </div>
        <div className="line"></div>
        <div className="get-in-touch-right column">
          <p className="tag__1">Drop us Your Email</p>
          <h1 className="heading">We'll Get in touch</h1>
          <div className="row email__submission__container">
            <input type="email" placeholder="Email Address"></input>
            <button><IoIosSend className="email__submission__button" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
