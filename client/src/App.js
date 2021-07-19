import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home/App";
import CallForPapers from "./pages/callForPapers/App";
import Publication from "./pages/publications/App";
import Contact from "./pages/contact/App";
import Speakers from "./pages/speakers/App";
import Gallery from "./pages/gallery/App";
import Committee from "./pages/committee/App";

const App = () => {
  return (
    <div>
      <HashRouter>
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
          <Route path="/publication">
            <Publication />
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
      </HashRouter>
    </div>
  );
};

export default App;
