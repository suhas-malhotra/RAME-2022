import React from 'react'
import "../../assets/css/home.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import anime from "../../assets/img/down.png";
import naruto from "../../assets/img/RAME2016-1.JPG";
export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Organized by the Mechanical Department of DTU"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={naruto} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>RAME</h1>
          <h1>CONFERENCE 2022</h1>

          <h2>Tentative Dates To be released soon</h2>
          <h3>
             <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#">
          <img src={anime}alt="" />
        </a>
        
      </div>
    </div>
  );
}
