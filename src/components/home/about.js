import { React, useRef } from "react";
import "../../styles/home.css";
import aboutus from "../../assets/Home/A-us.png";
import { FaHandPointRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import HeroVid from "../../assets/Home/Hero_vid.mp4";

const About = () => {
  return (
    <div className="about-container">
      <div className="row about__container ">
        <div className="about-title column about__text__container">
          <video autoplay  src={HeroVid} />

          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="about__content__container column container"
          >
            <h5 className="heading">
              Chris Wicks Based In Los Angeles Since 2009.
            </h5>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <motion.button
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="about__button"
            >
              Learn More{" "}
              <div>
                <FaHandPointRight />
              </div>{" "}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
