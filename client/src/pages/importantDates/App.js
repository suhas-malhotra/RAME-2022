import React from "react";

import Navbar from "../../components/layouts/Navbar";
import ImpDates from "../../components/layouts/ImpDates";
import MovingHeader from "../../components/layouts/MovingHeader";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <MovingHeader/>
     <ImpDates/>
    </div>
  );
};

export default App;
