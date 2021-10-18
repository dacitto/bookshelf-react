import React from "react";
import Book from "./Book";
const Shelf = (props) => {
  // console.log("props");
  // console.log(props);
  return (
    <div className="shelf">
      <h1 className="shelf-title">{props.title}</h1>

      {props.isloading ? (
        <h3>loading...</h3>
      ) : (
        <div className="books-container">
          {props.books == "" && <h3>No books found</h3>}
          {props.books.error && <h3>No books found</h3>}
          {props.books.error !== "empty query" &&
            props.books.map((book) => (
              <Book
                key={book.id}
                book={book}
                changeListener={props.changeListener}
                setChangeListener={props.setChangeListener}
              ></Book>
            ))}
        </div>
      )}
    </div>
  );
};

export default Shelf;
