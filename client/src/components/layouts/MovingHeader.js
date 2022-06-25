/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import "../../assets/css/MovingHeader.css";
import guidelines from "../../assets/docs/guidelines.pptx";
import papers from "../../assets/docs/papers.pdf";
export const MovingHeader = () => {
  return (
    <div>
      <marquee bgcolor="#FFC000" scrollamount="10" vspace="5" direction="left">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSed9JUz7LGVKSMMlazEh7qLlO649Pve9K20EUhnBUpUimKHjQ/viewform">
          Click here to Register
        </a>{" "}
        ||{" "}
        <a href={guidelines} download>
          {" "}
          Guidelines
        </a>{" "}
        ||{" "}
        <a href={papers} download>
          {" "}
          Tentative List of Selected Papers
        </a>
      </marquee>
    </div>
  );
};
export default MovingHeader;
