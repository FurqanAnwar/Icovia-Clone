import React from "react";
import Header from "./components/Header/Header";
import Main from "src/components/Main/Main";
import SecondPage from "src/components/Pages/SecondPage/SecondPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <section className="Section">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/plan">
            <SecondPage />
          </Route>
        </Switch>
      </section>
    </Router>
  );
};

export default App;
