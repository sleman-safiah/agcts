import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import SecurityProgramService from "../SecurityProgramService";

export default function Section2() {
  const mediaQuery = window.matchMedia("(max-width: 680px)");
  return (
    <div className="section-2" id="information">
      <div className="sp-title">
        <div className="sp-divider" />
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          animateOnce={true}
          initiallyVisible={mediaQuery.matches}
          duration={1}
        >
          <div className="sp-title-content">
            Customer benefits of implementing cybersecurity managed services
          </div>
        </ScrollAnimation>
      </div>
      <div className="sp-content">
        <SecurityProgramService />
      </div>
    </div>
  );
}
