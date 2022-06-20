import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function Section3() {
  return (
    <div className="section-3">
      <div>
        <video
          autoPlay
          muted
          playbackSpeed={0.5}
          loop
          // className="video-background"
        >
          <source
            src="https://apparel-agcts.s3.eu-west-1.amazonaws.com/web/videos/home.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="audit-content">
        <div className="audit-content-details">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={1}>
            <div className="audit-title">Audit and Compliance</div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            duration={1}
            delay={500}
          >
            <div className="audit-subtitle">
              {" "}
              With in-depth insights on the Business-specific risks, we offer
              tailored audit services across all business disciplines,
              accelerating your company’s business performance. We provide Data
              and Analytics (D&A) services that facilitate a better
              understanding for stakeholders and ensure that our strategies
              align with your business values, such that they enable smarter
              decision-making capabilities.
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            duration={1}
            delay={1000}
          >
            <a
              style={{ textDecoration: "none", scroll: "smooth" }}
              href="/#cyber"
            >
              <span className="audit-button">Learn More</span>
            </a>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
