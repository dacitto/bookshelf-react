import React, { useContext } from "react";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
import { myBookContext } from "../App";
import { FcSearch } from "react-icons/fc";
const Home = () => {
  const context = useContext(myBookContext);
  const data = context.data;
  const isLoading = context.isLoading;
  const error = context.error;
  return (
    <main className="container">
      {error && <h1>{error}</h1>}
      {isLoading && (
        <div className="icon-holder">
          <FcSearch className="search-icon" />
          <h2 className="loading">Loading ...</h2>
        </div>
      )}
      {data && (
        <>
          <Shelf
            title="Reading"
            books={data.books.filter(
              (book) => book.shelf === "currentlyReading"
            )}
            isloading={isLoading}
          ></Shelf>
          <Shelf
            title="Read"
            books={data.books.filter((book) => book.shelf === "read")}
            isloading={isLoading}
          ></Shelf>
          <Shelf
            title="To Read"
            books={data.books.filter((book) => book.shelf === "wantToRead")}
            isloading={isLoading}
          ></Shelf>
        </>
      )}
      <div className="add-book">
        <Link to="/search" className="link">
          +
        </Link>
      </div>
    </main>
  );
};

export default Home;
