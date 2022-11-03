import React from "react";
import { Link } from "react-router-dom";

function SingleBook({ title, price, image }) {
  return (
    <Link className="book-link">
      <div className="book-link-image">
        <img src={image} alt="" />
      </div>
      <div className="book-link-details">
        <h6>{title}</h6>
        <p>Asaxiy Books Kitoblari</p>
      </div>
    </Link>
  );
}

export default SingleBook;
