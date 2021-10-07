import React from "react";

const Shelf = ({ title }) => {
  return (
    <div className="shelf container">
      <h1 className="shelf-title">{title}</h1>
    </div>
  );
};

export default Shelf;
