import React from "react";
import { useState, useContext } from "react";
import { update } from "../API";
import { myBookContext } from "../App";
const Book = ({ book, shelf, setShelf }) => {
  const [myStat, setStat] = useState(false);
  const context = useContext(myBookContext);
  const mybooks = context.data.books;
  let mybooksIdsShelf = {};
  mybooks.map((book) => (mybooksIdsShelf[book.id] = book.shelf));
  const [shelfState, setShelfState] = useState(mybooksIdsShelf[book.id]);
  const HandleUpdate = (shelf) => {
    update(book, shelf).then(() => {
      setShelfState(shelf);
      setStat(!myStat);
      context.setBookStat(!context.bookStat);
    });
  };
  return (
    <div className="book-card">
      {book.imageLinks && (
        <img src={book.imageLinks.smallThumbnail} alt={`${book.title}`} />
      )}
      {!book.imageLinks && <img alt="not found" />}
      <select
        name="shelf-status"
        id="book-shelf"
        className="shelf-status"
        onChange={(value) => {
          HandleUpdate(value.target.value);
        }}
        value={shelfState}
      >
        <option value="none">none</option>
        <option value="read">read</option>
        <option value="currentlyReading">reading</option>
        <option value="wantToRead">want to read</option>
      </select>
      <h3 className="book-title">{book.title}</h3>
      {book.authors &&
        book.authors.map((author) => (
          <span className="book-author" key={book.id + author}>
            {author}
          </span>
        ))}
    </div>
  );
};

export default Book;
