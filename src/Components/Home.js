import React, { setState, useEffect, useState } from "react";
import Header from "./Header";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
import * as API from "../API";
import useFetch from "./usefetch";
const Home = () => {
  const api = "https://reactnd-books-api.udacity.com";
  const [changeListener, setChangeListener] = useState(1);
  const { data, isPending: isLoading, error } = useFetch(`${api}/books`);
  // if (data) {
  //   localStorage.setItem("books", data.books);
  // }
  // console.log(localStorage["books"]);

  return (
    <>
      <Header></Header>
      {isLoading && <h1>Loading ...</h1>}
      {data && (
        <>
          <Shelf
            title="Reading"
            books={data.books.filter(
              (book) => book.shelf === "currentlyReading"
            )}
            changeListener={changeListener}
            setChangeListener={setChangeListener}
            isloading={isLoading}
          ></Shelf>
          <Shelf
            title="Read"
            books={data.books.filter((book) => book.shelf === "read")}
            isloading={isLoading}
            changeListener={changeListener}
            setChangeListener={setChangeListener}
          ></Shelf>
          <Shelf
            title="To Read"
            books={data.books.filter((book) => book.shelf === "wantToRead")}
            isloading={isLoading}
            changeListener={changeListener}
            setChangeListener={setChangeListener}
          ></Shelf>
        </>
      )}
      <div className="add-book">
        <Link to="/search" className="link">
          +
        </Link>
      </div>
    </>
  );
};

export default Home;
