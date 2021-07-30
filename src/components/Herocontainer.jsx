import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

export default function Herocontainer() {
  return (
    <>
      <div className="hero-container container">
        <div className="hero-col-text">
          <h1>
            Don't worry. <br />
            We are here for <br />
            every solution.
          </h1>
          <p>
            Bushwick meh Blue Bottle park belly mustache skateboard 3 wolf
            <br /> moon. Actually beard single-origin coffee,twee 90's PBR Echo
            Park
          </p>
          <div className="hero-btns">
            <button className="start-btn default-btn">Get Started</button>
            <button className="watch-video-btn default-btn">
              <PlayCircleFilledIcon /> Watch Video
            </button>
          </div>
          <div className="company-logos">
            <span>Integrations</span>
            <img src="./images/amazon.png" alt="logo" />
            <img src="./images/northern.png" alt="logo" />
            <img src="./images/google.png" alt="logo" />
            <img src="./images/skrill.png" alt="logo" />
          </div>
        </div>
        <div className="hero-col-img">
          <img src="./images/hero-img (2).png" alt="img" />
        </div>
      </div>
    </>
  );
}
