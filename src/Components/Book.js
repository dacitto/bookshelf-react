import React from "react";
import { useState } from "react";
import { update } from "../API";
const Book = ({ book, shelf, setShelf }) => {
  const [shelfState, setShelfState] = useState(book.shelf);
  const HandleUpdate = /*async*/ (shelf) => {
    update(book, shelf).then(() => {
      setShelfState(shelf);
      //setShelf(shelf);
      // const localbooks = JSON.parse(localStorage.books);
      // const objIndex = localbooks.findIndex((obj) => obj.id == book.id);
      // localbooks[objIndex] = book;
      // localStorage.removeItem("books");
      // localStorage.setItem("books", JSON.stringify(localbooks));
      if (book.shelf) window.location.reload(false);
    });
  };
  return (
    <div className="book-card">
      {book.imageLinks && (
        <img src={book.imageLinks.smallThumbnail} alt={`${book.title}`} />
      )}
      {!book.imageLinks && <img />}
      <select
        name="shelf-status"
        id="book-shelf"
        onChange={(value) => {
          HandleUpdate(value.target.value);
        }}
        value={book.shelf}
      >
        <option value="none">none</option>
        <option value="read">read</option>
        <option value="currentlyReading">reading</option>
        <option value="wantToRead">want to read</option>
      </select>
      <h3 className="book-title">{book.title}</h3>
      {book.authors &&
        book.authors.map((author) => (
          <h6 className="book-author" key={book.id + author}>
            {author}
          </h6>
        ))}
    </div>
  );
};

export default Book;
