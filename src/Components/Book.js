import React from "react";
import { useState } from "react";
import { update } from "../API";
const Book = ({ book, changeListener, setChangeListener }) => {
  const [shelfState, setShelfState] = useState(book.shelf);
  const HandleUpdate = /*async*/ (shelf) => {
    update(book, shelf).then(() => {
      setChangeListener(++changeListener);
      setShelfState(shelf);
      window.location.reload(false);
    });
  };
  console.log(book.shelf);
  return (
    <div className="book-card">
      <img src={book.imageLinks.smallThumbnail} alt={`${book.title}`} />
      <h3 className="book-title">{book.title}</h3>
      <select
        name="shelf-status"
        id="book-shelf"
        onChange={(value) => {
          HandleUpdate(value.target.value);
        }}
        value={shelfState}
      >
        <option value="read">read</option>
        <option value="currentlyReading">reading</option>
        <option value="wantToRead">want to read</option>
      </select>
    </div>
  );
};

export default Book;
