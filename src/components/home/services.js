import React from "react";
import '../../styles/home.css';
import { FaBucket } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { LuPackageCheck } from "react-icons/lu";
import { FaHouse } from "react-icons/fa6";
import { CgMenuGridR } from "react-icons/cg";

const Services = () => {
  return (
    <section className="services-container">
      <div className="individual-service-container">
        <IconContext.Provider value={{ color: "white", size: "2em" }}>
          <div className="service-icon">
            <FaBucket />
          </div>
        </IconContext.Provider>
        <div className="service-title">
          <h4>IMPORT SOLUTIONS</h4>
        </div>
        <div className="service-description">
          <p>
          NVestibulum rutum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante.
          </p>
        </div>
      </div>
      <div className="individual-service-container">
      <IconContext.Provider value={{ color: "white", size: "2em" }}>
          <div className="service-icon">
          <LuPackageCheck />
          </div>
        </IconContext.Provider>
        <div className="service-title">
          <h4>
          EXPORT PARTNERSHIPS
          </h4>
        </div>
        <div className="service-description">
          <p>
          NVestibulum rutum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante.
          </p>
        </div>
      </div>
      <div className="individual-service-container">
      <IconContext.Provider value={{ color: "white", size: "2em" }}>
          <div className="service-icon">
          <FaHouse />
          </div>
        </IconContext.Provider>
        <div className="service-title">
          <h4>
          FLEXIBLE OFFICE SOLUTIONS
          </h4>
        </div>
        <div className="service-description">
          <p>
          NVestibulum rutum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante.
          </p>
        </div>
      </div>
      <div className="individual-service-container">
      <IconContext.Provider value={{ color: "white", size: "2em" }}>
          <div className="service-icon">
          <CgMenuGridR />
          </div>
        </IconContext.Provider>
        <div className="service-title">
          <h4>
          SUPPLY CHAIN & LOGISTICS SERVICES
          </h4>
        </div>
        <div className="service-description">
          <p>
          NVestibulum rutum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
