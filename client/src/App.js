import Navbar from "./components/layouts/Navbar";
import AboutUs from "./components/layouts/AboutUs";
import Footer from "./components/layouts/Footer";
import MovingHeader from "./components/layouts/MovingHeader";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home/App";
import Gallery from "./pages/gallery/App";


function App() {
  
  return (
    <div>
      
      <BrowserRouter>
        <Switch>
          <Route path="/gallery">
            <Gallery/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
