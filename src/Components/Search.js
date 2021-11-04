import React, { useState } from "react";
import useFetch from "./usefetch";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import { FcSearch } from "react-icons/fc";
import { AiOutlineHome, AiOutlineArrowLeft } from "react-icons/ai";
const Search = ({ token }) => {
  const api = "https://reactnd-books-api.udacity.com";
  const [query, setQuery] = useState(" ");
  const searchHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") setQuery(" ");
    else setQuery(e.target.value);
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
    <main className="container">
      <div className="search-container">
        <Link to="/bookshelf-react/" className="back-link">
          <AiOutlineArrowLeft />
        </Link>
        <input
          type="text"
          className="search-bar"
          placeholder="search"
          onKeyUp={(e) => {
            searchHandler(e);
          }}
        ></input>
      </div>
      {query === " " && (
        <>
          <h3 style={{ textAlign: "center", fontWeight: 400 }}>
            Type something to search
          </h3>
          <div className="icon-holder">
            <FcSearch className="search-icon" />
          </div>
        </>
      )}
      {error && <h1>{error}</h1>}
      {data && query !== " " && (
        <Shelf
          title="Search Results"
          books={data.books}
          isloading={isLoading}
        ></Shelf>
      )}
      <div className="add-book">
        <Link to="/bookshelf-react/" className="link">
          <AiOutlineHome />
        </Link>
      </div>
    </main>
  );
};

export default Search;
