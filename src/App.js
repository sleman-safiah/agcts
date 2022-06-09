import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Questionnaire from "./pages/Questionnaire";
import Services from "./pages/Services";
import Service from "./pages/Service";
import "./App.css";
import { useEffect } from "react";
import KEYS from "./env.development";

function App() {
  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    };

    // load the script by passing the URL
    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${KEYS.GOOGLE_RECAPTCHA_SITE_KEY}`,
      function () {
        console.log("Script loaded!");
      }
    );
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:slug" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
