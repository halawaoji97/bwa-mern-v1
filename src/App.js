import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "assets/scss/style.scss";
// import Button from "./index.js";
import DetailsPage from "pages/DetailsPage.js";
import LandingPage from "pages/LandingPage.js";
import Checkout from "pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route path="/checkout" component={Checkout} />
      </Router>
    </div>
  );
}

export default App;
