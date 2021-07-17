import Navbar from "./components/layouts/Navbar";
import AboutUs from "./components/layouts/AboutUs";
import Footer from "./components/layouts/Footer";
import MovingHeader from "./components/layouts/MovingHeader";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home/App";
import CallForPapers from "./pages/callForPapers/App";
import ImportantDates from "./pages/importantDates/App";
import Contact from "./pages/contact/App";
import Speakers from "./pages/speakers/App";
import Gallery from "./pages/gallery/App";
import Committee from "./pages/committee/App";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/call-for-papers">
            <CallForPapers />
          </Route>
          <Route path="/speakers">
            <Speakers />
          </Route>
          <Route path="/important-dates">
            <ImportantDates />
          </Route>
          <Route path="/contact-us">
            <Contact />
          </Route>
          <Route path="/committee">
            <Committee />
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
