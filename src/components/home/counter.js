import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../../styles/home.css";


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
              <div className="col counter__individual" style={{overflow:"hidden"}}>
              
                  <div className="column">
                    <h6 className="counter-number counter__number">
                      {counterOn && (
                        <CountUp start={0} end={10} duration={3} delay={0} />
                      )}
                      +
                    </h6>
                    <h4 className="counter-title">AWARDS</h4>
                    <p className="paragraph">Sample Paragraph</p>
                  </div>
               
              </div>
              <div className="col counter__individual" style={{overflow:"hidden"}}>
                
                  <h6 className="counter-number counter__number">
                    {counterOn && (
                      <CountUp start={0} end={20} duration={3} delay={0} />
                    )}
                    +
                  </h6>
                  <h4 className="counter-title">PRODUCTS</h4>
                  <p className="paragraph">Sample Paragraph</p>
                
              </div>
              <div className="col counter__individual"  style={{overflow:"hidden"}}>
                
                  <h6 className="counter-number counter__number">
                    {counterOn && (
                      <CountUp start={0} end={15} duration={3} delay={0} />
                    )}
                    +
                  </h6>
                  <h4 className="counter-title">PARTNERS</h4>
                  <p className="paragraph">Sample Paragraph</p>
              </div>
              <div className="col counter__individual" style={{overflow:"hidden"}}>
                
                <h6 className="counter-number counter__number">
                  {counterOn && (
                    <CountUp start={0} end={10} duration={3} delay={0} />
                  )}
                  +
                </h6>
                <h4 className="counter-title">LOCATIONS</h4>
                <p className="paragraph">Sample Paragraph</p>
            </div>
            </div>
          </div>
        
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
