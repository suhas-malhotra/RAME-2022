import React from "react";

import Navbar from "../../components/layouts/Navbar";
import MovingHeader from "../../components/layouts/MovingHeader";
import Footer from "../../components/layouts/Footer";
import ImpDates from "../../components/layouts/ImpDates";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <MovingHeader />
      <ImpDates />
      <Footer />
    </div>
  );
};

export default App;
