import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function AboutUs() {
  return (
    <div>
      <Header background={true} page="about-us" />
      <div className="about-container">
        <div>
          <div className="about-title">
            <span>ag</span> CTS
          </div>
          <div className="about-sub-title">Cyber Tech Solutions</div>
          <div className="about-content">
            <div>
              1. We follow the industry best practices aligned with your
              business
            </div>
            <div>
              2. Trusted and reliable services to enhance your business growth
            </div>
            <div>
              3. Certified and experienced professional to prove state of the
              art consulting services
            </div>
            <div>
              4. Agile and flexible consulting model so that your business pace
              is never compromised
            </div>
            <div>
              5. Cost-effective services tailored to needs of organizations of
              any size and any domain
            </div>
            <div>
              6. Extensive retail, Banking and other international experience
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
