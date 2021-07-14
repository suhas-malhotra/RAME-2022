import React, { useState } from "react";

import Gallery from "../../components/layouts/Gallery";
import Navbar from "../../components/layouts/Navbar";

import "./App.css";
import LASTYEAR from "../../components/layouts/2020imagesdata";
import SIXTEEN from "../../components/layouts/2016imagesdata";

const App = () => {
  const [images, setImages] = useState(LASTYEAR);

  return (
    <div>
      <Navbar />

      <div className="buttons">
        <button
          onClick={() => {
            setImages(LASTYEAR);
          }}
        >
          RAME 2020
        </button>
        <button
          onClick={() => {
            setImages(SIXTEEN);
          }}
        >
          RAME 2016
        </button>
      </div>
      <Gallery images={images} />
    </div>
  );
};

export default App;
