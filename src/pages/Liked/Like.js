import React from "react";
import "../Cart/Cart.scss";
import "./Likes.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeLike } from "./liked_slice";
import { addProduct, incrementAmount } from "../Cart/cart_slice";

function Cart() {
  const { likes } = useSelector((state) => state.likes);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const renderCart = () => {
    return likes.map((item) => (
      <div class="cart__item ">
        <a
          href="!#"
          class="cart__item-img d-flex align-items-center justify-content-center flex-shrink-0"
        >
          <img src={item.image} alt={item.name} />
        </a>

        <div class="product__cart-info ">
          <div class="mb-4 mb-sm-0">
            <a
              href="/product/planshet-xiaomi-pad-5-6128gb-wi-fi-white"
              className="cart__item-title d-block mb-0"
            >
              {item.name}
            </a>

            <a class="btn btn-primary btn-sm" href="!#">
              Xiaomi
            </a>
          </div>

          <div class="mb-4 mb-sm-0 d-flex">
            <div className="prices">
              <p>{item.price} $</p>
              <p>{Math.floor(item.price / 12)} $ / 12 month</p>
            </div>
          </div>
          <div class="cart__item-prices d-flex flex-column flex-shrink-0">
            <button
              onClick={() => {
                handleCart(item);
              }}
              className="btn btn-primary"
            >
              Add to cart
            </button>
            <button
              onClick={() => {
                dispatch(removeLike(item.id));
              }}
              className=" btn cart__item-trash"
            >
              <span>Удалить</span>
            </button>
          </div>
        </div>
      </div>
    ));
  };

  const handleCart = (product) => {
    let newCart = cart;
    if (newCart.length === 0) {
      const newProduct = { ...product, number: 1 };
      newCart = [newProduct];
      dispatch(addProduct(newCart));
    } else {
      const idx = newCart.findIndex((d) => d.id === product.id);
      if (idx >= 0) {
        dispatch(incrementAmount(idx));
      } else {
        const newProduct = { ...product, number: 1 };
        newCart = [...newCart, newProduct];
        dispatch(addProduct(newCart));
      }
    }
  };

  return (
    <div>
      <section class="cart-page mb-40">
        <div class="container">
          <h1 class="your-bin">Корзина</h1>
          <div
            id="cart-index"
            data-pjax-container=""
            data-pjax-push-state=""
            data-pjax-timeout="1000"
          >
            <ul class="nav nav-pills mb-3" role="tablist">
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active"
                  data-toggle="pill"
                  href="#pay-stand"
                  role="tab"
                  aria-controls="pay-stand"
                  aria-selected="true"
                >
                  Стандартный покупки <span class="pcount">{likes.length}</span>
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  data-toggle="pill"
                  href="#pay-inst"
                  role="tab"
                  aria-controls="pay-inst"
                  aria-selected="false"
                >
                  Товары на рассрочку{" "}
                  <span class="pcount">{likes.length} </span>
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div
                class="tab-pane fade show active"
                id="pay-stand"
                role="tabpanel"
              >
                <div class="row">
                  <div class="col-lg-12 col-md-8">
                    <div class="cart__list">{renderCart()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
