import React, { useEffect, useState } from "react";
import "../styles/navbar.scss";

export default function Navbar() {
  let listener = null;
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== "scrolled") setScrollState("scrolled");
      } else {
        if (scrollState !== "top") setScrollState("top");
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);
  return (
    <>
      <nav className={`navbar navbar-${scrollState}`}>
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              About Us
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Services
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div className="navbar-mobile">
        <input
          type="checkbox"
          className="navbar-mobile__checkbox"
          id="navi-toggle"
        />

        <label
          htmlFor="navi-toggle"
          className={`navbar-mobile__button navbar-${scrollState}`}
        >
          <span className="navbar-mobile__icon">&nbsp;</span>
        </label>

        <div className="navbar-mobile__background">&nbsp;</div>

        <nav className="navbar-mobile__nav">
          <ul className="navbar-mobile__list">
            <li className="navbar-mobile__item">
              <a href="#" className="navbar-mobile__link">
                Home
              </a>
            </li>
            <li className="navbar-mobile__item">
              <a href="#" className="navbar-mobile__link">
                About Us
              </a>
            </li>
            <li className="navbar-mobile__item">
              <a href="#" className="navbar-mobile__link">
                Services
              </a>
            </li>
            <li className="navbar-mobile__item">
              <a href="#" className="navbar-mobile__link">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
