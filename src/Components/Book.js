import React from "react";

const Book = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.imageLinks.smallThumbnail} alt={`${book.title}`} />
      <h3 className="book-title">{book.title}</h3>
      <select name="shelf-status">
        <option value="read">read</option>
        <option value="currentlyReading">reading</option>
        <option value="wantToRead">want to read</option>
      </select>
    </div>
  );
};

export default Book;
