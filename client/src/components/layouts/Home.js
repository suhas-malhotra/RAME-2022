import React from "react";
import "../../assets/css/home.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Organized by Department of Mechanical Engineering , DTU in association with Department of Mechanical Engineering , HBTU",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="wrapper">
        <h1>
          {" "}
          3<sup>rd</sup> International Conference
        </h1>
        <h1> on </h1>
        <h1>
          {" "}
          Recent Advances in Materials Manufacturing and Thermal Engineering{" "}
        </h1>
        <h1>(RAMMTE-2022)</h1>
        <h2>8 - 9 July 2022</h2>
        <h2 className="text-center">
          <span ref={textRef}></span>
        </h2>
      </div>
    </div>
  );
}
