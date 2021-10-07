import React from "react";
import Header from "./Header";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Header></Header>
      <Shelf title="Reading"></Shelf>
      <div className="add-book">
        <Link to="/search" className="link">
          +
        </Link>
      </div>
    </>
  );
};

export default Home;
