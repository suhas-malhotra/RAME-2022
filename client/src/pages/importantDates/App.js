import React from "react";

import Navbar from "../../components/layouts/Navbar";
import MovingHeader from "../../components/layouts/MovingHeader";
import Footer from "../../components/layouts/Footer";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <MovingHeader />
      Important Dates
      <Footer />
    </div>
  );
};

export default App;
