import React from "react";
import "../styles/getintouch.css";

const Getintouch = () => {
  return (
    <div className="get-in-touch-container">
      <div className="get-in-touch-main">
        <div className="get-in-touch-left">
          <h1>Get In Touch</h1>
          <h2>+64 22 0437 647</h2>
          <p>
            252 Lichfield Street, Christchurch Central City,<br/> Christchurch 8011,
            New Zealand
          </p>
        </div>
        <div className="line">

        </div>
        <div className="get-in-touch-right">
            <p>
            Monday to Friday: 9:00 AM to 5:00 PM
            </p>
            <p>Saturday: 9:00 AM to 1:00 PM</p>
            <p>
            Sunday: Closed
            </p>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
