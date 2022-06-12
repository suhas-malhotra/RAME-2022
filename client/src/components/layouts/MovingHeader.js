/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import "../../assets/css/MovingHeader.css";

export const MovingHeader = () => {
  return (
    <div>
      <marquee bgcolor="#FFC000" scrollamount="10" vspace="5" direction="left">
        Deadline for final round of call for papers is extended to June 6, 2022{" "}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSed9JUz7LGVKSMMlazEh7qLlO649Pve9K20EUhnBUpUimKHjQ/viewform">
          Click here to Register
        </a>
      </marquee>
    </div>
  );
};
export default MovingHeader;
