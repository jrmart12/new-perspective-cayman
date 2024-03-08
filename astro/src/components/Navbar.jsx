import React, { useEffect, useState } from "react";
import "../styles/navbar.scss";

export default function Navbar() {
  let listener = null;
  const [scrollState, setScrollState] = useState("top");
  const [close, setclose] = useState(false);

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
            <a href="#home" className="navigation__link">
              Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="#aboutUs" className="navigation__link">
              About
            </a>
          </li>
          <li className="navigation__item">
            <a href="#services" className="navigation__link">
              Services
            </a>
          </li>
          <li className="navigation__item">
            <a href="#contactUs" className="navigation__link">
              Contact
            </a>
          </li>
          {/* <li className="navigation__item">
            <a href="/vacancies" className="navigation__link">
              Vacancies
            </a>
          </li> */}
        </ul>
      </nav>
      <div className="navbar-mobile">
        <input
          type="checkbox"
          className="navbar-mobile__checkbox"
          id="navi-toggle"
          checked={close}
          onChange={() => setclose(!close)}
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
            <li
              className="navbar-mobile__item"
              onClick={() => setclose(!close)}
            >
              <a href="#home" className="navbar-mobile__link">
                Home
              </a>
            </li>
            <li
              className="navbar-mobile__item"
              onClick={() => setclose(!close)}
            >
              <a href="#aboutUs" className="navbar-mobile__link">
                About
              </a>
            </li>
            <li
              className="navbar-mobile__item"
              onClick={() => setclose(!close)}
            >
              <a href="#services" className="navbar-mobile__link">
                Services
              </a>
            </li>
            <li
              className="navbar-mobile__item"
              onClick={() => setclose(!close)}
            >
              <a href="#contactUs" className="navbar-mobile__link">
                Contact
              </a>
            </li>
            {/* <li
              className="navbar-mobile__item"
              onClick={() => setclose(!close)}
            >
              <a href="/vacancies" className="navbar-mobile__link">
                Vacancies
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
}
