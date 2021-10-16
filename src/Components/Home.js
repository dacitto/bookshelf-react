import React, { setState, useEffect, useState } from "react";
import Header from "./Header";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
import * as API from "../API";
import useFetch from "./usefetch";
const Home = () => {
  /*
  const [read, setRead] = useState([]);
  const [reading, setReading] = useState([]);
  const [toRead, setToRead] = useState([]);
  const [Mybooks, setBooks] = useState([]);

  const [isloading, setIsLoading] = useState(true);
  const AllBooks = [];
  useEffect(() => {
    API.getAll().then((books) => {
      books.forEach((book) => {
        AllBooks.push(book);
      });
      setBooks(AllBooks);
      setReading(Mybooks.filter((book) => book.shelf === "currentlyReading"));
      setRead(Mybooks.filter((book) => book.shelf === "read"));
      setToRead(Mybooks.filter((book) => book.shelf === "wantToRead"));
      setIsLoading(false);
    });
  }, []);
  console.log(read);*/
  const api = "https://reactnd-books-api.udacity.com";
  const { data, isPending: isLoading, error } = useFetch(`${api}/books`);
  // if (data) {
  //   const reading = data.books.filter(
  //     (book) => data.shelf === "currentlyReading"
  //   );
  //   const read = data.books.filter((book) => book.shelf === "read");
  //   const toRead = data.books.filter((book) => book.shelf === "wantToRead");
  // }
  // console.log(data.books);
  // console.log(isLoading);
  // console.log(error);

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
    </>
  );
};

export default Home;
