/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import "../../assets/css/MovingHeader.css";

export const MovingHeader = () => {
  return (
    <div>
      <marquee bgcolor="#FFC000" scrollamount="10" vspace="5" direction="left">
        Deadline for final round of call for papers is extended to May 25, 2022
      </marquee>
    </div>
  );
};
export default MovingHeader;
