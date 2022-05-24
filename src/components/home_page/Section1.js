import React from "react";
import { useNavigate } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Section1() {
  let navigate = useNavigate();

  return (
    <div className="section-1">
      <div className="background">
        <div>
          <video
            autoPlay
            muted
            playbackSpeed={0.5}
            loop
            className="video-background"
          >
            <source src="assets/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="title">ag CTS</div>

      <div className="sub-title">Cyber Tech Solution</div>

      <div className="buttons">
        <a style={{ textDecoration: "none" }} href="/#information">
          <div className="button-primary">Learn More</div>
        </a>
        <a style={{ textDecoration: "none" }} href="/#information">
          <div
            className="button-secondary"
            onClick={() => {
              navigate("/services");
            }}
          >
            Services
          </div>
        </a>
      </div>
    </div>
  );
}
