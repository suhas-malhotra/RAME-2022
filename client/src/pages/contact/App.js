import React from "react";

import Navbar from "../../components/layouts/Navbar";
import MovingHeader from "../../components/layouts/MovingHeader";
import Contact from "../../components/layouts/Contact";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <MovingHeader />
      <Contact />
    </div>
  );
};

export default App;
