import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/" className="link">
          BookShelf
        </Link>
      </h1>
    </header>
  );
};

export default Header;
