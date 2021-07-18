/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import "../../assets/css/MovingHeader.css";

export const MovingHeader = () => {
  return (
    <div>
      <marquee bgcolor="#2a9df4" scrollamount="10" vspace="5" direction="left">
        Registration is Open till 31st December 2021
      </marquee>
    </div>
  );
};
export default MovingHeader;
