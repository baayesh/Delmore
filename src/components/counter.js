import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../styles/counter.css";


const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div>
          <div className="counter-container ">
            <div className="row ">
              <div className="col" style={{overflow:"hidden"}}>
              
                  <h1 className="counter-number">
                    {counterOn && (
                      <CountUp start={0} end={20} duration={3} delay={0} />
                    )}
                    +
                  </h1>
                  <h4 className="counter-title">Projects Completed</h4>
               
              </div>
              <div className="col " style={{overflow:"hidden"}}>
                
                  <h1 className="counter-number">
                    {counterOn && (
                      <CountUp start={0} end={50} duration={3} delay={0} />
                    )}
                    +
                  </h1>
                  <h4 className="counter-title">Happy Customers</h4>
                
              </div>
              <div className="col " style={{overflow:"hidden"}}>
                
                  <h1 className="counter-number">
                    {counterOn && (
                      <CountUp start={0} end={30} duration={3} delay={0} />
                    )}
                    +
                  </h1>
                  <h4 className="counter-title">T.Me Talent</h4>
              </div>
            </div>
          </div>
        
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
