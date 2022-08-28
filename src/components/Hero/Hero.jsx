import React from "react";
import "./Hero.css";
import "../../App.css";
import calory from "../../assets/calories.png";
import heart from "../../assets/heart.png";
import hero from "../../assets/hero_image.png";
import bars from "../../assets/hero_image_back.png";
import { Navbar } from "../Navbar/Navbar";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-l">
        <Navbar />
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
        </div>
        <p>
          In here we will help you to shape and build your ideal body and live
          up your life to fullest
        </p>

        <div className="hero-num">
          <div>
            <span>+ 140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>

        <div className="hero-btn">
          <span>Get Started</span>
          <span>Learn More</span>
        </div>

        <div className="calories">
          <img src={calory} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
      <div className="hero-r">
        <span className="join-btn">Join Now</span>
        <div className="heart">
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <div className="hero-img">
          <img className="hero" src={hero} alt="" />
          <img className="hero-bac" src={bars} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
