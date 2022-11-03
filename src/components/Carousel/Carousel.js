import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Carousel.scss";

function Carousel() {
  return (
    <div className="carousel">
      <OwlCarousel
        className="owl-theme"
        margin={0}
        loop
        items={1}
        dots={false}
        autoplay
        autoplayTimeout={5000}
      >
        <div className="item">
          <img
            className="img-fluid"
            src="https://assets.asaxiy.uz/uploads/banner/desktop/633520602d4ca.jpg.webp"
            alt=""
          />
        </div>
        <div className="item">
          <img
            className="img-fluid"
            src="https://assets.asaxiy.uz/uploads/banner/desktop/633c2226ea012.jpg.webp"
            alt=""
          />
        </div>
        <div className="item">
          <img
            className="img-fluid"
            src="https://assets.asaxiy.uz/uploads/banner/desktop/628784f087071.jpg.webp"
            alt=""
          />
        </div>
        <div className="item">
          <img
            className="img-fluid"
            src="https://assets.asaxiy.uz/uploads/banner/desktop/62f4b37ece1f6.jpg.webp"
            alt=""
          />
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Carousel;
