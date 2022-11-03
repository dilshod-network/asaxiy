import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, incrementAmount } from "../../pages/Cart/cart_slice";
import { addLike, removeLike } from "../../pages/Liked/liked_slice";

function SingleProduct({ id, name, image, price }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { likes } = useSelector((state) => state.likes);
  const [liked, setLiked] = useState(false);
  const importantProduct = { id, name, image, price };

  useEffect(() => {
    const idx = likes.findIndex((item) => item.id === id);
    if (idx >= 0) {
      setLiked(true);
    }

    //eslint-disable-next-line
  }, []);

  const handleCart = (product) => {
    let newCart = cart;
    if (newCart.length === 0) {
      product.number = 1;
      newCart = [product];
      dispatch(addProduct(newCart));
    } else {
      const idx = newCart.findIndex((d) => d.id === product.id);
      if (idx >= 0) {
        dispatch(incrementAmount(idx));
        // newCart[idx] = newItem;
      } else {
        product.number = 1;
        newCart = [...newCart, product];
        dispatch(addProduct(newCart));
      }
    }
  };

  const handleLikes = (product) => {
    if (liked) {
      dispatch(removeLike(product));
      setLiked((prev) => !prev);
    } else {
      dispatch(addLike(product));
      setLiked((prev) => !prev);
    }
  };

  return (
    <div className="col-6 col-md-4 col-xl-3">
      <div className="item">
        <button
          type="button"
          className="product__item-cart border-0"
          onClick={() => {
            handleCart(importantProduct);
          }}
        >
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 1.14286C0.5 0.78782 0.826217 0.5 1.22862 0.5H1.77096C2.69434 0.5 3.24721 1.04771 3.56336 1.55685C3.77408 1.89623 3.92653 2.28987 4.04577 2.64624C4.07806 2.64401 4.11078 2.64286 4.14387 2.64286H16.2849C17.0914 2.64286 17.6738 3.32379 17.4527 4.00811L15.677 9.50163C15.3498 10.5142 14.3012 11.2124 13.1079 11.2124H7.32937C6.12618 11.2124 5.07145 10.5028 4.75303 9.47909L4.01422 7.10386L2.7915 3.4621L2.78952 3.45572C2.63825 2.96901 2.49629 2.51433 2.28534 2.1746C2.08048 1.84469 1.91718 1.78571 1.77096 1.78571H1.22862C0.826217 1.78571 0.5 1.49789 0.5 1.14286Z"
              fill="white"
            ></path>
            <path
              d="M6.81481 15.5C7.88792 15.5 8.7578 14.7325 8.7578 13.7857C8.7578 12.8389 7.88792 12.0714 6.81481 12.0714C5.74173 12.0714 4.87183 12.8389 4.87183 13.7857C4.87183 14.7325 5.74173 15.5 6.81481 15.5Z"
              fill="white"
            ></path>
            <path
              d="M13.6151 15.5C14.6882 15.5 15.5581 14.7325 15.5581 13.7857C15.5581 12.8389 14.6882 12.0714 13.6151 12.0714C12.542 12.0714 11.6721 12.8389 11.6721 13.7857C11.6721 14.7325 12.542 15.5 13.6151 15.5Z"
              fill="white"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          class="product__item-heart border-0 p-0 bg-transparent"
          onClick={() => {
            handleLikes(importantProduct);
          }}
        >
          <i
            className={`fa-${liked ? "solid" : "regular"} fa-heart`}
            style={{ fontSize: "25px" }}
          ></i>
        </button>
        <div className="item-img">
          <img className="img-fluid" src={image} alt="" />
        </div>
        <div className="item-info">
          <Link className="title-link">
            <span className="item-info-title">{name}</span>
          </Link>
          <div className="item-info-ratings">
            <div className="item-rating--stars">
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span className="rating-star">
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="far fa-star"></i>
              </span>
            </div>
            <div className="item-info--comments">
              <i class="fa-regular fa-message"></i>
              <span>3 отзывов</span>
            </div>
          </div>
          <div className="item-prices">
            <div className="prices-wrapper">
              <div className="product-price">{price}$</div>
              <div className="installment-price">
                {Math.floor(+price / 12)}$ / 12 oy
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="payment row justify-content-between">
              <button className="btn btn-success col-sm-4">Рассрочка</button>
              <button className="btn btn-primary col-sm-7">
                Купить в 1 клик
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
