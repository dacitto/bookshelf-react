import React, { setState, useEffect, useState } from "react";
import Header from "./Header";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
import * as API from "../API";
const Home = () => {
  const [read, setRead] = useState([]);
  const [reading, setReading] = useState([]);
  const [toRead, setToRead] = useState([]);
  const [Mybooks, setBooks] = useState([]);
  var AllBooks = [];
  useEffect(() => {
    API.getAll().then((books) => {
      books.forEach((book) => {
        AllBooks.push(book);
      });
      setBooks(AllBooks);
    });
    setReading(Mybooks.filter((book) => book.shelf === "currentlyReading"));
    setRead(Mybooks.filter((book) => book.shelf === "read"));
    setToRead(Mybooks.filter((book) => book.shelf === "wantToRead"));
  }, []);
  return (
    <>
      <Header></Header>
      <Shelf title="Reading" books={reading}></Shelf>
      <Shelf title="Read" books={read}></Shelf>
      <Shelf title="To Read" books={toRead}></Shelf>
      <div className="add-book">
        <Link to="/search" className="link">
          +
        </Link>
      </div>
    </>
  );
};

export default Home;
