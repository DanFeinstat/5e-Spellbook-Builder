import React from "react";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import SpellbookPage from "./pages/SpellbookPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/spellbook/user" component={SpellbookPage} />
        <Route component={Error} />
      </Switch>
    </div>
  </Router>
);

export default App;
