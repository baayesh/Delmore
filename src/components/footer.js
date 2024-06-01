import React from "react";
import "../styles/footer.css";
import logo from "../assets/logo/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-column">
          <h3>LINK</h3>
          <p>Home</p>
          <p>About</p>
          <p>Video</p>
          <p>Contacts</p>
          <img src={logo} className="logo-footer" />
        </div>
        <div className="footer-column">
          <h3>YOUTUBE</h3>
          <p>Test 1</p>
          <p>Test 2</p>
          <p>Test 3</p>
          <p>Test 4</p>
          <p>Test 5</p>
          <p>Test 6</p>
        </div>
        <div className="footer-column">
          <h3>HELP CENTER</h3>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className="footer-column">
          <h3>SUBSCRIBE AND WATCH MORE</h3>
          <p>we’ll reach out over email to set up a call</p>
          <div className="row footer-social">
            <div className="social-media-icon-container">
              <FaFacebookF className="social-media-icon" />
            </div>

            <div className="social-media-icon-container">
              <AiFillInstagram  className="social-media-icon"/>
            </div>
            <div className="social-media-icon-container">
              <FaLinkedinIn className="social-media-icon"/>
            </div>
            <div className="social-media-icon-container">
              <SiTwitter className="social-media-icon"/>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-lastline">
        <p>
          ©2024 by Cinch Motors Limited. All Rights Reserved. Powered by: Techme
        </p>
      </div>
    </div>
  );
};

export default Footer;
