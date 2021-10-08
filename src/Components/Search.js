import React from "react";
import Header from "./Header";
//import * as API from "../API";

const Search = () => {
  return (
    <>
      <Header></Header>
      <input type="text" className="search-bar" placeholder="search"></input>
    </>
  );
};

export default Search;
