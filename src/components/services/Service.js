import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import axios from "axios";

export default function Service() {
  const params = useParams();
  const [loaded, setLoaded] = useState(false);
  const [service, setService] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    let serviceTemp;
    axios
      .get(
        `https://agcts-backend.herokuapp.com/v1/service/getService?slug=${params.slug}`
      )
      .then((res) => {
        setService(res.data.service);
        serviceTemp = res.data.service;
      })
      .then(() => {
        setLoaded(true);
        console.log(serviceTemp);
        let imgs = serviceTemp.images;
        Promise.all(
          imgs.map((img) => {
            console.log(img);
            return import(`./images/${img}`);
          })
        ).then((res) => {
          console.log(res);
          setImages(res);
          setLoaded(false);
        });
      });
  }, []);

  useEffect(() => {}, [service]);

  return (
    <div className="sr-container">
      {loaded ? (
        <></>
      ) : (
        <div>
          <div className="service-title">{service.content}</div>
          <div className="service-image-container">
            <Carousel>
              {images?.length > 0 &&
                images.map((image) => (
                  <Carousel.Item>
                    <img
                      className="service-image"
                      src={image.default}
                      alt="ITGC"
                    />
                  </Carousel.Item>
                ))}
            </Carousel>
          </div>
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "90%",
              marginTop: "1em"
            }}
          >
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div style={{ textAlign: "center", fontFamily: "Poppins" }}>
                  Description About the Service
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="service-desc">{service.desc}</div>
              </AccordionDetails>
            </Accordion>
            {service.features?.length > 0 && (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div style={{ textAlign: "center", fontFamily: "Poppins" }}>
                    Some Features About the Service
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  {service.features.map((f) => {
                    return (
                      <div className="feature">
                        <span className="feature-title">{f.title}</span>
                        <span className="feature-content">{f.content}</span>
                      </div>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            )}
          </div>
          <div className="advantages-title">Advantages</div>
          <div className="advantages">
            {service?.advantages?.map((adv) => (
              <div className="advantage">{adv}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
