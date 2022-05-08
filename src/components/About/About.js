import React from 'react'
import "./About.css"

import Pic2 from "../../img/Eshop.png"

export default function About() {
  return (
    <div className="a" >
      <div className="a-left">
        {/* <div className="a-card bg"></div> */}
        <div className="a-card">
        <a  href="https://bejewelled-malasada-d8ea80.netlify.app/" target="_blank" >
        <img src={Pic2} alt="pic" className="a-img" />
         </a>
          
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        
        <div className="a-award">
          
          <div className="a-award-texts">
            <h4 className="a-award-title"> Eshop Website</h4>
            <p className="a-award-desc">
              • This is a full stack site enabling people to create an account, buy, and sell products. <br />
              • Created with React on the frontend and with Mongo and Express on the
                back

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
