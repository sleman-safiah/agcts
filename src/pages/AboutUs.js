import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "animate.css/animate.min.css";

export default function AboutUs() {
  return (
    <div>
      <Header background={true} page="about-us" />
      <div>
        <video autoPlay muted playbackSpeed={0.5} loop className="video-about">
          <source
            src="https://apparel-agcts.s3.eu-west-1.amazonaws.com/web/videos/about.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="about-container">
        <div className="about-title">
          <span>ag</span> CTS
        </div>
        <div className="about-sub-title">Cyber Tech Solutions</div>
        <div className="about-content">
          <div>
            1. We follow the industry best practices aligned with your business
          </div>
          <div>
            2. Trusted and reliable services to enhance your business growth
          </div>
          <div>
            3. Certified and experienced professional to prove state of the art
            consulting services
          </div>
          <div>
            4. Agile and flexible consulting model so that your business pace is
            never compromised
          </div>
          <div>
            5. Cost-effective services tailored to needs of organizations of any
            size and any domain
          </div>
          <div>
            6. Extensive retail, Banking and other international experience
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
