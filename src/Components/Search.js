import React, { useState } from "react";
import Header from "./Header";
import useFetch from "./usefetch";
import Shelf from "./Shelf";

const Search = (token) => {
  const api = "https://reactnd-books-api.udacity.com";
  const [query, setQuery] = useState("react");
  const searchHandler = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };
  const headers = {
    Accept: "application/json",
    Authorization: token,
  };
  const params = {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };
  const {
    data,
    isPending: isLoading,
    error,
  } = useFetch(`${api}/search`, params, query);
  return (
    <>
      <Header></Header>
      <input
        type="text"
        className="search-bar"
        placeholder="search"
        onKeyUp={(e) => {
          searchHandler(e);
        }}
      ></input>

      {data && (
        <Shelf
          title="Search Results"
          books={data.books}
          isloading={isLoading}
        ></Shelf>
      )}
    </>
  );
};

export default Search;
