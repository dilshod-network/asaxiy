import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleBook from "../SingleBook/SingleBook";
import { fetchBooks } from "./books_slice";
import "./Books.scss";

function Books() {
  const dispatch = useDispatch();
  const { books, loading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
    //eslint-disable-next-line
  }, []);

  const renderBooks = () => {
    if (loading === "loading") {
      return <p>Loading...</p>;
    } else if (loading === "error") {
      return <p>Error</p>;
    }
    if (books.length > 0) {
      return books.map((book, index) => {
        if (index < 5) {
          return <SingleBook {...book} />;
        } else return null;
      });
    }
  };

  return (
    <div className="books">
      <div className="books-header">
        <span>Книги</span>
        <img src="https://assets.asaxiy.uz/uploads//5f46535c8c1c3.png" alt="" />
      </div>
      <div className="books-section">{renderBooks()}</div>
    </div>
  );
}

export default Books;
