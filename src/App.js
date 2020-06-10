import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignedOut from "./layouts/SignedOut";
import SignedIn from "./layouts/SignedIn";

export default App = () => {
  <Router>
    <Route path="/" exact component={SignedOut} />
    <Route path="/chat" exact component={SignedIn} />
  </Router>;
};
