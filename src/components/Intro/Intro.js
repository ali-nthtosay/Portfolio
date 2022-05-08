import React from "react";
import "./Intro.css";
import myPic from "../../img/ali.jpg";

export default function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Ali</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              
              <div className="i-title-item">MERN Full Stack</div>
              <div className="i-title-item">Welding Inspector</div>
              <div className="i-title-item">Mechanical Engineer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={myPic} alt="myPic" className="i-img" />
      </div>
    </div>
  );
}
