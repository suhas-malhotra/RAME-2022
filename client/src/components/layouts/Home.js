import React from "react";
import "../../assets/css/home.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import schedule from "../../assets/docs/schedule.pdf";

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
    <div>
      <div className="intro" id="intro">
        <div className="wrapper">
          <h1> International Conference</h1>
          <h1> on </h1>
          <h1 style={{ fontSize: "40px" }}>
            {" "}
            Recent Advances in Materials, Manufacturing and Thermal Engineering{" "}
          </h1>
          <h1 style={{ fontSize: "40px" }}>(RAMMTE-2022)</h1>
          <h2>8th-9th July 2022</h2>
          <h2 className="text-center">
            <span ref={textRef}></span>
          </h2>
        </div>
      </div>
      <h1 className="text-center m-4 " style={{ fontWeight: "600" }}>
        {" "}
        <a href={schedule} download>
          Invitation
        </a>{" "}
        to all the stackholders of the RAMMTE-2022
      </h1>
    </div>
  );
}
