import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ServiceType from "./ServiceType";
import "./services.css";

export default function ServicesComp() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("https://agcts-backend.herokuapp.com/v1/service/getAllServices")
      .then((res) => {
        setServices(res.data.services);
      });
  }, []);

  return (
    <div className="sr-container">
      <div className="sr-title">We Provide To You</div>
      {services.length > 0 &&
        services.map((type, index) => {
          return (
            <ServiceType
              key={uuidv4()}
              title={type.title}
              services={type.subServices}
              number={index}
            />
          );
        })}
    </div>
  );
}
