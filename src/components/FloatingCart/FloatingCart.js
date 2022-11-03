import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFormCart } from "../../pages/Cart/cart_slice";
import { Link } from "react-router-dom";

function FloatingCart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const renderBoughtProducts = () => {
    return cart.map((item) => {
      return (
        <li class="cart__product-item">
          <div class="cart__product-item--img">
            <img class="img" src={item.image} alt={item.name} />
          </div>
          <div class="cart__product-item--info">
            <h6>
              <a href="/product/telefony-i-gadzhety/planshety/planshet-xiaomi-pad-5-6128gb-wi-fi-white">
                {item.name}
                {item.number > 1 ? `(${item.number + "x"})` : null}
              </a>
            </h6>
          </div>
          <div class="cart__product-item--price">
            <span class="cart__product-price--new">{item.price}</span>
          </div>
          <div class="remove__product-wrapper">
            <noindex>
              <a
                onClick={() => dispatch(deleteFormCart(item.id))}
                rel="nofollow"
              >
                <i class="fas fa-times"></i>
              </a>
            </noindex>
          </div>
        </li>
      );
    });
  };

  const handleTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total = total + item.price * item.number;
    });
    return total;
  };
  return (
    <div class="cart__modal dropdown-menu dropdown-menu-right">
      <div class="cart-wrapper">
        <div
          id="test-cart"
          data-pjax-container=""
          data-pjax-push-state=""
          data-pjax-timeout="1000"
        >
          <div class="cart__modal-top">
            <ul class="cart__product-list" id="cart-content">
              <ul class="cart__product-list" id="cart-content">
                {renderBoughtProducts()}
              </ul>
            </ul>
          </div>
        </div>{" "}
        <div class="cart__modal-footer">
          <div class="cart__modal-total">
            <span>Сумма</span>
            <span class="total-count">{handleTotalPrice()}</span>
          </div>
        </div>
        <div class="cart__modal-footer">
          <div class="cart__modal-total-buttons">
            <noindex>
              <a
                href="/cart/checkout"
                class="btn default-btn btn-primary-custom"
                rel="nofollow"
              >
                ОФОРМИТЬ ПОКУПКУ
              </a>
              <Link
                to="/cart"
                class="btn reset__btn reset__primary "
                rel="nofollow"
              >
                ПЕРЕЙТИ В КОРЗИНКУ
              </Link>
            </noindex>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloatingCart;
