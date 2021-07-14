import Navbar from "../../components/layouts/Navbar";
import AboutUs from "../../components/layouts/AboutUs";
import Footer from "../../components/layouts/Footer";
import Home from "../../components/layouts/Home";

import React from "react";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="sections">
        <Home />
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
};

export default App;
