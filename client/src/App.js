import React from "react";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import SpellbookPage from "./pages/SpellbookPage";
import { UserProvider } from "./components/Context/Context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => (
  <UserProvider>
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
  </UserProvider>
);

export default App;
