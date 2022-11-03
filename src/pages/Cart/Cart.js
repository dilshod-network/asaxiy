import React from "react";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFormCart,
  incrementAmount,
  decrementAmount,
} from "../Cart/cart_slice";

function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const renderCart = () => {
    return cart.map((item, index) => (
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

            <a class="btn btn-primary btn-sm" href="#">
              Xiaomi
            </a>
          </div>

          <div class="mb-4 mb-sm-0 d-flex">
            <div class="amount-counter d-flex align-items-center list-product">
              <button
                id="down"
                class="btn remove"
                type="button"
                onClick={() => {
                  if (item.number > 1) {
                    dispatch(decrementAmount(index));
                  } else {
                    dispatch(deleteFormCart(item.id));
                  }
                }}
              >
                -
              </button>
              <input
                class="amount-number-6ad0f0b0d65cf1aa693bdc394d8dc772 change_with_input_6ad0f0b0d65cf1aa693bdc394d8dc772"
                oninput="change_qt('6ad0f0b0d65cf1aa693bdc394d8dc772');"
                type="text"
                value={item.number}
              />
              <button
                id="up"
                class="btn add"
                type="button"
                onClick={() => {
                  dispatch(incrementAmount(index));
                }}
              >
                +
              </button>
              <input type="hidden" value="4083000" />
            </div>
          </div>
          <div class="cart__item-prices d-flex flex-column flex-shrink-0">
            <span class="product__item-price">{item.price}</span>

            <a
              href="javascript:void(0)"
              onClick={() => {
                dispatch(deleteFormCart(item.id));
              }}
              class="cart__item-trash"
            >
              <i class="fas fa-trash-alt"></i>
              <span>Удалить</span>
            </a>
          </div>
        </div>
      </div>
    ));
  };

  const handleTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total = total + item.price * item.number;
    });
    return total;
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
                  Стандартный покупки <span class="pcount">{cart.length}</span>
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
                  Товары на рассрочку <span class="pcount">{cart.length} </span>
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
                  <div class="col-lg-9 col-md-8">
                    <div class="cart__list">{renderCart()}</div>
                  </div>
                  <div class="check__pay col-lg-3 col-md-4">
                    <div class="check__pay-wrapper">
                      <div class="check__pay-product-cost">
                        <p class="check__pay-product--in">
                          В корзине {cart.length} товара
                        </p>
                        <p class="check__pay-total--amount">Общая сумма:</p>
                        <p class="check__pay-actual--cost all_price_for_simple">
                          <span class="allcost">{handleTotalPrice()}</span>
                          <span class="d-none price_all_simle_span">сум</span>
                        </p>
                      </div>
                      <div class="check__pay-product-sold">
                        <a
                          href="/cart/checkout"
                          data-pjax="0"
                          class="btn default-btn btn-orange-custom"
                        >
                          ОФОРМИТЬ
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
    </div>
  );
}

export default Cart;
