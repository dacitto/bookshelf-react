//import "normalize.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Styles/main.scss";
import { useState } from "react";
import useFetch from "./Components/usefetch";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Search from "./Components/Search";
import PageNotFound from "./Components/PageNotFound";
import Footer from "./Components/Footer";
export const myBookContext = React.createContext();
function App() {
  let token = localStorage.token;
  if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);
  const [bookStat, setBookStat] = useState(false);
  const api = "https://reactnd-books-api.udacity.com/books";
  const params = {
    headers: {
      Accept: "application/json",
      Authorization: token,
    },
  };
  const { data, isPending: isLoading, error } = useFetch(api, params, bookStat);
  return (
    <Router>
      <Header></Header>
      <myBookContext.Provider
        value={{ data, isLoading, error, bookStat, setBookStat }}
      >
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Search">
            <Search token={token} />
          </Route>
          <Route>
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </myBookContext.Provider>
      <Footer></Footer>
    </Router>
  );
}

export default App;
