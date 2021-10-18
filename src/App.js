//import "normalize.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Styles/main.scss";
import { useState, useEffect } from "react";
import * as API from "./API";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Search from "./Components/Search";
import PageNotFound from "./Components/PageNotFound";
import Footer from "./Components/Footer";
function App() {
  let token = localStorage.token;
  if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <Home token={token} />
        </Route>
        <Route path="/Search">
          <Search token={token} />
        </Route>
        <Route>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
