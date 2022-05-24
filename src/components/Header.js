import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";
export default function Header({ page, background }) {
  console.log(page);
  const mediaQuery = window.matchMedia("(max-width: 680px)");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const node = document.querySelector(".nav-bar");
    node.classList.toggle("close-menu");
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <div className={`header`}>
      {mediaQuery.matches && (
        <div
          className="menu"
          onClick={(e) => {
            setOpen((prev) => !prev);
          }}
        >
          <Menu fontSize="large" color="#03257e" />
        </div>
      )}
      <div className="logo">
        <span>ag</span>CTS
      </div>
      <div className="nav-bar">
        <ul>
          <Link
            style={{
              textDecoration: "none",
              color: `${page === "home" ? "unset" : "#61615f"}`,
            }}
            className={page === "home" ? "nav-bar-focus" : ""}
            to={"/"}
          >
            <li>HOME</li>
          </Link>
          <Link
            className={page === "services" ? "nav-bar-focus" : ""}
            style={{ textDecoration: "none" }}
            to={"/services"}
          >
            <li>SERVICES</li>
          </Link>

          <Link
            className={page === "questionnaire" ? "nav-bar-focus" : ""}
            style={{ textDecoration: "none" }}
            to={"/questionnaire"}
          >
            <li>QUESTIONNAIRE</li>
          </Link>

          <Link
            className={page === "about-us" ? "nav-bar-focus" : ""}
            style={{ textDecoration: "none" }}
            to={"/about-us"}
          >
            <li>ABOUT US</li>
          </Link>

          <Link
            className={page === "contact-us" ? "nav-bar-focus" : ""}
            style={{ textDecoration: "none" }}
            to={"/contact-us"}
          >
            <li>CONTACT</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
