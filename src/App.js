//import "normalize.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Styles/main.scss";
import { useState, useEffect } from "react";
import * as API from "./API";
import Home from "./Components/Home";
import Search from "./Components/Search";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Search">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
