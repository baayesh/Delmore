import React from "react";
import Header from "../components/header";
import Hero from "../components/home/hero";
import Services from "../components/home/services";
import USP from "../components/home/usp";
import Counter from "../components/home/counter";
import About from "../components/home/about";
import Getintouch from "../components/home/getintouch";
import Footer from "../components/footer";
import "../styles/home.css";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import Testimonials from "../components/home/testimonials";
import Partners from "../components/home/partners";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="contact-container">
        <div className="contact-icon-div row ">
          <IoLogoWhatsapp className="contact-icon" />
          <p className="tag__1">WhatsApp </p>
        </div>
        <div className="contact-icon-div ">
          <FaPhone className="contact-icon" />
          <p className="tag__1">Mobile </p>
        </div>
      </div>
      <Hero />
      <Services />
      <About />
      <Counter />
      <USP />
      <Partners />
      <Getintouch />

      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
  