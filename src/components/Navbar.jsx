import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [ismobilenavopen, setIsmobilenavopen] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header>
        <a href="/" className="logo">
          <img src="./images/logo.png" alt="logo" />
        </a>
        <ul className="desktop-nav">
          <li>
            <a href="/">Integration</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
        </ul>
        <button className="desktop-nav-btn early-access-btn default-btn">
          Get early access
        </button>

        {/* toggle mobile nav button  */}
        <div
          onClick={() => setIsmobilenavopen(!ismobilenavopen)}
          className="toggle-btn hamburger-btn"
        >
          <div
            className={`bar1 bar ${ismobilenavopen ? "anim-bar1" : ""} `}
          ></div>
          <div
            className={`bar2 bar ${ismobilenavopen ? "anim-bar2" : ""} `}
          ></div>
          <div
            className={`bar3 bar ${ismobilenavopen ? "anim-bar3" : ""} `}
          ></div>
        </div>

        {/* mobile nav  */}
        <div
          className={`mobile-nav-container ${
            ismobilenavopen && windowDimensions < 470
              ? "open-mobile-nav"
              : "close-mobile-nav"
          } `}
        >
          <ul className="mobile-nav">
            <li>
              <a href="/">Integration</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
          </ul>
          <button className="mobile-nav-btn early-access-btn default-btn">
            Get early access
          </button>
        </div>
      </header>
    </>
  );
}
