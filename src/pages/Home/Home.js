import React from "react";
import Books from "../../components/Books/Books";
import Carousel from "../../components/Carousel/Carousel";
import Discount from "../../components/Discount/Discount";
import Products from "../../components/Products/Products";
import "./Home.scss";

function Home(props) {
  return (
    <div className="home container">
      <div className="daily">
        <Carousel />
        <Discount />
      </div>
      <div className="shop-section">
        <div className="container">
          <div className="row">
            <div className="left-side col-lg-4 col-xl-3 ">
              <Books />
            </div>
            <div className="left-side col-lg-8 col-xl-9 ">
              <Products />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
