import React from "react";
import Header from "./Header";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
import * as API from "../API";
const Home = () => {
  const tr = async () => {
    const books = API.getAll();
    return await books;
  };

  const data = tr();
  console.log(data);
  return (
    <>
      <Header></Header>
      <Shelf title="Reading"></Shelf>
      <Shelf title="Read"></Shelf>
      <Shelf title="To Read"></Shelf>
      <div className="add-book">
        <Link to="/search" className="link">
          +
        </Link>
      </div>
    </>
  );
};

export default Home;
