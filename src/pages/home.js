import React from "react";
import Header from "../components/header";
import Hero from "../components/home/hero";
import Services from "../components/home/services";
import USP from "../components/usp";
import Counter from "../components/counter";
import About from "../components/home/about";
import Products from "../components/products";
import Getintouch from "../components/getintouch";
import Footer from "../components/footer";
import "../styles/home.css";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import Testimonials from "../components/testimonials";
import Awards from "../components/home/awards";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="contact-container">
        <div className="contact-icon-div contact-icon-mail">
          <MdEmail className="contact-icon" />
        </div>
        <div className="contact-icon-div contact-icon-whatsapp">
          <IoLogoWhatsapp className="contact-icon" />
        </div>
        <div className="contact-icon-div contact-icon-mobile">
          <FaPhone className="contact-icon" />
        </div>
      </div>
      <Hero />
      <Services />
      <About />
      <USP />
      <Products />
      <Counter />
      <Awards />
      <Getintouch />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
