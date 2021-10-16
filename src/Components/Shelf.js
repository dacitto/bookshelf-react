import React from "react";
import Book from "./Book";
const Shelf = (props) => {
  // console.log("props");
  // console.log(props);
  console.log("shelf===>" + props.changeListener);
  return (
    <div className="shelf container">
      <h1 className="shelf-title">{props.title}</h1>

      {props.isloading ? (
        <h3>loading...</h3>
      ) : (
        <div className="books-container">
          {props.books.map((book) => {
            console.log(book.title);
            return (
              <Book
                key={book.id}
                book={book}
                changeListener={props.changeListener}
                setChangeListener={props.setChangeListener}
              ></Book>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Shelf;
