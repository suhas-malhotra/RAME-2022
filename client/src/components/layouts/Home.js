import React from "react";
import "../../assets/css/home.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

import naruto from "../../assets/img/RAME2016-1.JPG";
export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Organized by the Department of Mechanical Engineering of Delhi Technological University",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={naruto} alt="" className="img-fluid p-4" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>
            3<sup>rd</sup>
          </h1>
          <h1>International Conference</h1>
          <h1>on</h1>
          <h1>Recent Advances in Mechanical Engineering (RAME)</h1>

          <h2>8 July - 9 july'22</h2>
          <h3 className="text-center">
            <span ref={textRef}></span>
          </h3>
        </div>
      </div>
    </div>
  );
}
