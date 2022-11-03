import React, { useState } from "react";
import FloatingCart from "../FloatingCart/FloatingCart";
import "./Navbar.scss";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { cart } = useSelector((state) => state.cart);
  const { likes } = useSelector((state) => state.likes);
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div className="header">
      <div className="header-navbar">
        <nav className="container">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="134"
              height="32"
              fill="none"
            >
              <path
                d="M2.367 24.82C6.195 16.517 9.966 8.295 13.809 0h6.427c-3.306 7.144-6.362 13.975-9.655 21.124-2.844.687-5.817 1.992-8.214 3.695zm26.653 6.83c-3.533-7.671-7.06-15.343-10.594-23.012 1.08-2.32 2.107-4.665 3.227-6.965 4.213 9.173 8.43 18.344 12.665 27.505-1.743.868-3.534 1.643-5.297 2.471zM0 29.42c6.269-6.295 13.787-8.503 22.554-6.623 1.065 2.395 2.265 4.751 3.329 7.148a18.232 18.232 0 00-7.259-2.01c-3.77-.29-7.711.346-10.98 2.322-.751.495-1.6 1.013-2.145 1.743C2.67 30.652.835 29.792 0 29.42z"
                fill="#008DFF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.414 12.954l2.579 5.62a1.325 1.325 0 01-1.403 1.862 20.376 20.376 0 00-2.744-.253c-.793-.013-1.558.02-2.294.1a.975.975 0 01-.99-1.375l2.7-5.95a1.183 1.183 0 012.152-.005z"
                fill="#008DFF"
                fill-opacity=".5"
              />
              <path
                d="M58.9 8.85v14.993h-3.961v-1.172c-1.34 1.082-2.99 1.623-4.95 1.623-1.98 0-3.7-.751-5.16-2.254-1.461-1.502-2.191-3.395-2.191-5.679 0-2.283.735-4.181 2.205-5.694 1.47-1.512 3.185-2.268 5.145-2.268 1.98 0 3.63.55 4.95 1.652V8.85H58.9zm-8.221 11.988c1.12 0 2.11-.415 2.97-1.247.86-.831 1.29-1.908 1.29-3.23s-.43-2.404-1.29-3.245c-.86-.841-1.85-1.262-2.97-1.262-1.22 0-2.226.41-3.016 1.232-.79.821-1.185 1.913-1.185 3.275 0 1.362.395 2.45 1.185 3.26.79.812 1.795 1.217 3.016 1.217zm9.765-.961l3.99-.811c.18 1.362 1.21 2.043 3.09 2.043.72 0 1.29-.14 1.71-.42.421-.281.631-.642.631-1.083 0-.66-.55-1.111-1.65-1.352l-3.06-.63c-1.36-.281-2.406-.792-3.136-1.533-.73-.741-1.095-1.653-1.095-2.735 0-1.462.555-2.654 1.666-3.575 1.11-.922 2.595-1.383 4.455-1.383 1.74 0 3.195.411 4.365 1.232 1.17.822 1.885 1.893 2.145 3.216l-3.78.75a2.15 2.15 0 00-.885-1.502c-.51-.38-1.165-.57-1.965-.57-.72 0-1.24.145-1.56.435-.32.29-.48.636-.48 1.037 0 .64.45 1.061 1.35 1.262l3.57.781c1.28.28 2.255.796 2.925 1.548.67.75 1.005 1.647 1.005 2.689 0 1.622-.595 2.864-1.785 3.726-1.19.861-2.785 1.292-4.785 1.292-1.78 0-3.3-.366-4.56-1.097-1.26-.731-1.98-1.838-2.16-3.32zM91.297 8.849v14.994h-3.96v-1.172c-1.34 1.082-2.99 1.623-4.95 1.623-1.98 0-3.701-.751-5.161-2.254-1.46-1.502-2.19-3.395-2.19-5.679 0-2.283.735-4.181 2.205-5.694C78.71 9.155 80.426 8.4 82.386 8.4c1.98 0 3.63.55 4.95 1.652V8.85h3.96zm-8.22 11.99c1.12 0 2.11-.416 2.97-1.248.86-.831 1.29-1.908 1.29-3.23s-.43-2.404-1.29-3.245c-.86-.841-1.85-1.262-2.97-1.262-1.22 0-2.226.41-3.016 1.232-.79.821-1.185 1.913-1.185 3.275 0 1.362.395 2.45 1.185 3.26.79.812 1.795 1.217 3.015 1.217zm21.134-4.297l5.04 7.301h-4.71l-3.271-4.747-3.24 4.747h-4.71l5.04-7.302-5.04-7.722h4.71l3.24 5.048 3.271-5.048h4.71l-5.04 7.722zm11.233 7.301h-3.96V8.85h3.96v14.994zm6.043-15.024l3.961 9.585 4.14-9.585h4.41l-7.614 17.604-1.086 2.528h-4.411l1.08-2.514 1.321-3.075-6.211-14.543h4.41zm-8.023-6.43c.69.001 1.269.239 1.736.715.467.476.7 1.038.7 1.687 0 .668-.233 1.225-.7 1.671-.467.446-1.046.669-1.736.669-.711 0-1.294-.223-1.751-.669-.457-.446-.685-1.003-.685-1.671 0-.649.233-1.21.7-1.687.467-.476 1.046-.714 1.736-.714z"
                fill="#13306A"
              />
            </svg>
          </Link>
          <div className="header-search">
            <form id="searchForm" class="position-relative form-search">
              <input
                id="key"
                value=""
                name="key"
                autocomplete="off"
                type="text"
                class="search-input"
                placeholder="Поиск..."
              />
              <button
                type="submit"
                class="btn btn-primary header__search__btn shadow-none"
              >
                <img
                  src="https://asaxiy.uz/custom-assets/images/search-icon.svg"
                  alt=""
                ></img>
                Искать
              </button>
              <div
                class="instant__results"
                style={{ display: "block", height: "auto" }}
              ></div>
            </form>
          </div>
          <div class="header__top-list">
            <noindex>
              <Link
                to="!#"
                class="header__top__link"
                title="Оплатить"
                rel="nofollow"
              >
                <img
                  class="header__top__link--img"
                  src="https://asaxiy.uz/custom-assets/images/icons/header/payment.svg"
                  alt=""
                />
                <span>Оплатить</span>
              </Link>
            </noindex>
            <noindex>
              <Link
                to="!#"
                class="header__top__link"
                title="Отследить заказ"
                rel="nofollow"
              >
                <img
                  class="header__top__link--img"
                  src="https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg"
                  alt=""
                />
                <span>Отследить</span>
              </Link>
            </noindex>
            <div class="dropdown lang-dropdown" title="Изменить язык">
              <button
                type="button"
                class="header__top__link header__top__link--lang  dropdown-toggle btn h-lang"
                id="main-language"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  class="header__top__link--img"
                  src="https://asaxiy.uz/custom-assets/images/icons/header/language.svg"
                  alt=""
                />
                <span>Русский</span>
              </button>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="main-language"
              >
                <ul>
                  <li class="">
                    <a href="/?language=uz">O'zbekcha</a>
                  </li>
                  <li class="active">
                    <a href="/?language=ru">Русский</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="dropdown cart_dropdown">
              <button
                type="button"
                class="header__top__link header__top__link--cart btn h-cart"
                data-toggle="dropdown"
              >
                <img
                  class="header__top__link--img"
                  src="https://asaxiy.uz/custom-assets/images/icons/header/cart.svg"
                  alt=""
                />
                <span>Корзинка</span>
                <span id="cart-count" class="cart_count">
                  {cart.length}
                </span>
              </button>
              <FloatingCart />
            </div>

            <noindex>
              <Link
                to="/favourites"
                class="header__top__link position-relative"
                rel="nofollow"
              >
                <img
                  src="https://asaxiy.uz/custom-assets/images/icons/header/heart.svg"
                  alt=""
                />
                <span>Избранное</span>
                <span
                  id="favourite-count"
                  class="cart_count"
                  style={{ right: "24px" }}
                >
                  {likes.length}
                </span>
              </Link>
            </noindex>
            <noindex>
              <a
                href="!#"
                class="header__top__link h-avatar"
                data-toggle="modal"
                data-target="#profile-modal"
                title="Кабинет"
                rel="nofollow"
              >
                <img
                  src="https://asaxiy.uz/custom-assets/images/icons/header/avatar.svg"
                  alt=""
                />
                <span>Кабинет</span>
              </a>
            </noindex>
            <a
              class="header__top__link asaxiy__number"
              href="tel:+998712000105"
            />
          </div>
        </nav>
      </div>
      <div className="header-bottom">
        <div className="container">
          <nav className="header__nav">
            <span
              style={{ cursor: "pointer" }}
              className="open_menu header__nav__link"
              onClick={() => {
                setActiveMenu((prev) => !prev);
              }}
            >
              <div class={`hamburger-small ${activeMenu ? "active" : ""}`}>
                <div class="hamburger__inner">
                  <div class="hamburger__item"></div>
                  <div class="hamburger__item"></div>
                  <div class="hamburger__item"></div>
                </div>
              </div>
              <span> Все категории</span>
            </span>
            <a class="header__nav__link" href="/news">
              Новости
            </a>
            <a class="header__nav__link" href="/product?new=1">
              Новинки
            </a>
            <a class="header__nav__link" href="/product?discount=1">
              Скидки
            </a>
            <a class="header__nav__link" href="/product/knigi">
              Книги
            </a>
            <a class="header__nav__link" href="/product/mebel">
              Мебель
            </a>
            <a class="header__nav__link" href="/product/telefony-i-gadzhety">
              Телефоны и гаджеты
            </a>
            <a class="header__nav__link" href="/product/kondicionery">
              Кондиционеры
            </a>
          </nav>
        </div>
        <div class={`mega__menu ${activeMenu ? "active" : ""}`}>
          <div class="mega__menu-inner">
            <div class="mega__menu-left">
              <ul class="mega__menu-list">
                <li>
                  <a
                    href="/product/knigi"
                    class="tab-open opened"
                    data-id="knigi"
                  >
                    <img
                      src="https://assets.asaxiy.uz/category//5e0158017e038.png"
                      alt="Книги"
                    />
                    Книги
                  </a>
                </li>
                <li>
                  <a
                    href="/product/telefony-i-gadzhety"
                    class="tab-open "
                    data-id="telefony-i-gadzhety"
                  >
                    <img
                      src="https://assets.asaxiy.uz/category//5e0153249b10a.png"
                      alt="Телефоны и гаджеты"
                    />
                    Телефоны и гаджеты
                  </a>
                </li>
                <li>
                  <a
                    href="/product/kondicionery"
                    class="tab-open "
                    data-id="kondicionery"
                  >
                    <img
                      src="https://assets.asaxiy.uz/category/air-conditioner.png"
                      alt="Кондиционеры"
                    />
                    Кондиционеры
                  </a>
                </li>
                <li>
                  <a
                    href="/product/kompyutery-i-orgtehnika"
                    class="tab-open "
                    data-id="kompyutery-i-orgtehnika"
                  >
                    <img
                      src="https://assets.asaxiy.uz/category//5e01560bef0bb.png"
                      alt="Компьютеры и оргтехника"
                    />
                    Компьютеры и оргтехника
                  </a>
                </li>
                <li>
                  <a
                    href="/product/dlya-gejmerov"
                    class="tab-open "
                    data-id="dlya-gejmerov"
                  >
                    <img
                      src="https://assets.asaxiy.uz/category//5fd9fbdaec848.png"
                      alt="Для геймеров"
                    />
                    Для геймеров
                  </a>
                </li>
                <li>
                  <a
                    href="/product/bytovaya-tehnika"
                    class="tab-open "
                    data-id="bytovaya-tehnika"
                  >
                    <img
                      src="https://assets.asaxiy.uz/category//5e0154abcfc0e.png"
                      alt="Бытовая техника"
                    />
                    Бытовая техника
                  </a>
                </li>
                <li>
                  <a
                    href="/product/televizory-video-i-audio"
                    class="tab-open "
                    data-id="televizory-video-i-audio"
                  >
                    <img
                      src="https://assets.asaxiy.uz/category//5e015729184f2.png"
                      alt="Телевизоры, видео и аудио"
                    />
                    Телевизоры, видео и аудио
                  </a>
                </li>
                <li>
                  <a href="/product/posuda" class="tab-open " data-id="posuda">
                    <img
                      src="https://assets.asaxiy.uz/category//kitchen2.png"
                      alt="Посуда"
                    />
                    Посуда
                  </a>
                </li>
                <li>
                  <a href="/product/mebel" class="tab-open " data-id="mebel">
                    <img
                      src="https://assets.asaxiy.uz/category/wardrobe.png"
                      alt="Мебель"
                    />
                    Мебель
                  </a>
                </li>
                <li>
                  <a
                    href="/product/sport-i-otdyh"
                    class="tab-open "
                    data-id="sport-i-otdyh"
                  >
                    <img
                      src="https://assets.asaxiy.uz/category//62be096a99c6d.jpeg"
                      alt="Спорт и отдых"
                    />
                    Спорт и отдых
                  </a>
                </li>
                <li>
                  <a
                    href="/product/dlya-doma"
                    class="tab-open "
                    data-id="dlya-doma"
                  >
                    <img
                      src="https://assets.asaxiy.uz/category//5e0157aa83115.jpg"
                      alt="Для дома и офиса"
                    />
                    Для дома и офиса
                  </a>
                </li>
                <li>
                  <a
                    href="/product/instrumenty-i-avtotovary"
                    class="tab-open "
                    data-id="instrumenty-i-avtotovary"
                  >
                    <img
                      src="https://assets.asaxiy.uz/category//5e01568229ad0.png"
                      alt="Инструменты и автотовары"
                    />
                    Инструменты и автотовары
                  </a>
                </li>
                <li>
                  <a href="/product/suvi" class="tab-open " data-id="suvi">
                    <img
                      src="https://assets.asaxiy.uz/category//5fb29e5f8b8a8.png"
                      alt="Игрушки, подарки и аксессуары"
                    />
                    Игрушки, подарки и аксессуары
                  </a>
                </li>
                <li>
                  <a
                    href="/product/odejda-obuv-i-aksessuari"
                    class="tab-open "
                    data-id="odejda-obuv-i-aksessuari"
                  >
                    <img
                      src="https://assets.asaxiy.uz/category//609532076b3e6.png"
                      alt="Одежда, обувь и аксессуары"
                    />
                    Одежда, обувь и аксессуары
                  </a>
                </li>
                <li>
                  <a
                    href="/product/detskiye-tovari"
                    class="tab-open "
                    data-id="detskiye-tovari"
                  >
                    <img
                      src="https://assets.asaxiy.uz/category//611662dbc91da.png"
                      alt="Детские товары"
                    />
                    Детские товары
                  </a>
                </li>
                <li>
                  <a
                    href="/product/krasota-i-zdorove"
                    class="tab-open "
                    data-id="krasota-i-zdorove"
                  >
                    <img
                      src="https://assets.asaxiy.uz/category//62c55b4f2bbf2.png"
                      alt="Красота и здоровье"
                    />
                    Красота и здоровье
                  </a>
                </li>
              </ul>
            </div>

            <div class="mega__menu-right">
              <div class="tab-content tab-active" data-id="knigi">
                <div class="mega__menu-right-inner">
                  <div class="mega__menu-content">
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/knigi/asaxiybooks-kitoblari"
                      >
                        Asaxiy Books китоблари
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/knigi/asaxiybooks-kitoblari">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/knigi/badiy-adabiyot"
                      >
                        Художественная литература
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/knigi/badiy-adabiyot">Все товары</a>
                        <a href="/product/knigi/badiy-adabiyot/zhahon-adabiyoti">
                          Мировая литература
                        </a>
                        <a href="/product/knigi/badiy-adabiyot/uzbek-adabiyoti">
                          Узбекская литература
                        </a>
                        <a href="/product/knigi/badiy-adabiyot/zamonavij-uzbek-adabiyoti">
                          Современная узбекская литература
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/knigi/psixologiya"
                      >
                        Психология и саморазвитие
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/knigi/psixologiya">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a class="menu__item-title" href="/product/knigi/biznes">
                        Книги про бизнес
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/knigi/biznes">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/knigi/bolalar-adabiyoti"
                      >
                        Детская литература
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/knigi/bolalar-adabiyoti">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/knigi/dinij-adabiyot"
                      >
                        Религиозная литература
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/knigi/dinij-adabiyot">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/knigi/na-russkom"
                      >
                        Книги на русском
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/knigi/na-russkom">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/knigi/ilm-fan-va-darsliklar"
                      >
                        Наука и учебники
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/knigi/ilm-fan-va-darsliklar">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/knigi/abiturient"
                      >
                        Для абитуриентов
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/knigi/abiturient">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/knigi/bestseller"
                      >
                        ТОП-100 бестселлер
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/knigi/bestseller">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a class="menu__item-title" href="/product/knigi/toplam">
                        Сборники бестселлеров
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/knigi/toplam">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a class="menu__item-title" href="/product/knigi/siyosat">
                        Политика
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/knigi/siyosat">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a class="menu__item-title" href="/product/knigi/kit-da">
                        Детективы и фантастика
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/knigi/kit-da">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/knigi/biography"
                      >
                        Биография
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/knigi/biography">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/knigi/kanstovar"
                      >
                        Канцтовары
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/knigi/kanstovar">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/knigi/tureckaya-literatura"
                      >
                        Турецкая литература
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/knigi/tureckaya-literatura">
                          Все товары
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-content " data-id="telefony-i-gadzhety">
                <div class="mega__menu-right-inner">
                  <div class="mega__menu-content">
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/telefony-i-gadzhety/telefony"
                      >
                        Телефоны
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/telefony-i-gadzhety/telefony">
                          Все товары
                        </a>
                        <a href="/product/telefony-i-gadzhety/telefony/knopochnye-telefony">
                          Кнопочные телефоны
                        </a>
                        <a href="/product/telefony-i-gadzhety/telefony/smartfony">
                          Смартфоны
                        </a>
                        <a href="/product/telefony-i-gadzhety/telefony/radiotelefoni">
                          Радиотелефоны
                        </a>
                        <a href="/product/telefony-i-gadzhety/telefony/provodniye-telefoni">
                          Проводные телефоны
                        </a>
                        <a href="/product/telefony-i-gadzhety/telefony/ip-telefony">
                          IP-телефоны
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/telefony-i-gadzhety/planshety"
                      >
                        Планшеты
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/telefony-i-gadzhety/planshety">
                          Все товары
                        </a>
                        <a href="/product/telefony-i-gadzhety/planshety/chexol-planshet">
                          Чехлы для планшетов
                        </a>
                        <a href="/product/telefony-i-gadzhety/planshety/graficheskie-planshety">
                          Графические планшеты
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/telefony-i-gadzhety/umnye-chasy-i-braslety"
                      >
                        Смарт-часы и браслеты
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/telefony-i-gadzhety/umnye-chasy-i-braslety">
                          Все товары
                        </a>
                        <a href="/product/telefony-i-gadzhety/umnye-chasy-i-braslety/aksessuar-smart-braslet-watch-band">
                          Аксессуары для смарт часов и фитнес браслетов
                        </a>
                        <a href="/product/telefony-i-gadzhety/umnye-chasy-i-braslety/umniye-chasi">
                          Смарт-часы
                        </a>
                        <a href="/product/telefony-i-gadzhety/umnye-chasy-i-braslety/fitnes-brasleti">
                          Фитнес-браслеты
                        </a>
                        <a href="/product/telefony-i-gadzhety/umnye-chasy-i-braslety/umniye-chasi/umnye-chasy-dlya-detei">
                          Умные часы для детей
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/telefony-i-gadzhety/faksy"
                      >
                        Факсы
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/telefony-i-gadzhety/faksy">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/telefony-i-gadzhety/aksessuary-mobile"
                      >
                        Аксессуары для смартфонов и планшетов
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/telefony-i-gadzhety/aksessuary-mobile">
                          Все товары
                        </a>
                        <a href="/product/telefony-i-gadzhety/aksessuary-mobile/zashitnye-stekla-dlya-smartfonov">
                          Защитные стекла для смартфонов
                        </a>
                        <a href="/product/telefony-i-gadzhety/aksessuary-mobile/besprovodnye-zaryadnye-ustrojstva">
                          Беспроводные зарядные устройства
                        </a>
                        <a href="/product/telefony-i-gadzhety/aksessuary-mobile/chehly-dlya-telefonov">
                          Чехлы для телефонов
                        </a>
                        <a href="/product/telefony-i-gadzhety/aksessuary-mobile/setevye-zaryadnye-ustrojstva">
                          Зарядные устройства и USB Кабели
                        </a>
                        <a href="/product/telefony-i-gadzhety/aksessuary-mobile/igrovye-gadzhety">
                          Игровые гаджеты
                        </a>
                        <a href="/product/telefony-i-gadzhety/aksessuary-mobile/vneshnij-akkumulyator-power-bank">
                          Внешний аккумулятор (Power bank)
                        </a>
                        <a href="/product/telefony-i-gadzhety/aksessuary-mobile/avtomobile-derjatel">
                          Автомобильные держатели
                        </a>
                        <a href="/product/telefony-i-gadzhety/aksessuary-mobile/perexodniki">
                          Aдаптеры
                        </a>
                        <a href="/product/telefony-i-gadzhety/aksessuary-mobile/aksessuri-dlya-avto">
                          Аксессуары для авто
                        </a>
                        <a href="/product/telefony-i-gadzhety/aksessuary-mobile/stilusy">
                          Стилусы
                        </a>
                        <a href="/product/telefony-i-gadzhety/aksessuary-mobile/shtativy-dlya-kolcevyh-lamp-i-telefonov">
                          Штативы для кольцевых ламп и телефонов
                        </a>
                        <a href="/product/telefony-i-gadzhety/aksessuary-mobile/dlya-chistki-gadzhetov">
                          Для чистки гаджетов
                        </a>
                        <a href="/product/telefony-i-gadzhety/aksessuary-mobile/podstavki-dlya-smartfonov-i-planshetov">
                          Подставки для смартфонов и планшетов
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/telefony-i-gadzhety/naushniki-i-auditexniki"
                      >
                        Наушники и аудиотехника
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/telefony-i-gadzhety/naushniki-i-auditexniki">
                          Все товары
                        </a>
                        <a href="/product/telefony-i-gadzhety/naushniki-i-auditexniki/besprovodniye-naushniki">
                          Беспроводные наушники
                        </a>
                        <a href="/product/telefony-i-gadzhety/naushniki-i-auditexniki/naushniki">
                          Наушники
                        </a>
                        <a href="/product/telefony-i-gadzhety/naushniki-i-auditexniki/bluetooth-garnitury">
                          Bluetooth гарнитуры
                        </a>
                        <a href="/product/telefony-i-gadzhety/naushniki-i-auditexniki/portativnaya-akustika">
                          Портативные колонки
                        </a>
                        <a href="/product/telefony-i-gadzhety/naushniki-i-auditexniki/mikrofon">
                          Микрофоны
                        </a>
                        <a href="/product/telefony-i-gadzhety/naushniki-i-auditexniki/diktofony">
                          Диктофоны
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/telefony-i-gadzhety/elektronnie-knigi"
                      >
                        Электронные книги
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/telefony-i-gadzhety/elektronnie-knigi">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/telefony-i-gadzhety/ochki-virtualnoy-realnosti-2"
                      >
                        Очки виртуальной реальности
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/telefony-i-gadzhety/ochki-virtualnoy-realnosti-2">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/telefony-i-gadzhety/radiostancii"
                      >
                        Радиостанции
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/telefony-i-gadzhety/radiostancii">
                          Все товары
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-content " data-id="kondicionery">
                <div class="mega__menu-right-inner">
                  <div class="mega__menu-content"></div>
                </div>
              </div>
              <div class="tab-content " data-id="kompyutery-i-orgtehnika">
                <div class="mega__menu-right-inner">
                  <div class="mega__menu-content">
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/kompyutery-i-orgtehnika/noutbuki"
                      >
                        Ноутбуки и аксессуары
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/kompyutery-i-orgtehnika/noutbuki">
                          Все товары
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/noutbuki/noutbuki-2">
                          Ноутбуки
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/noutbuki/sumki-dlya-noutbukov">
                          Сумки для ноутбуков
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/noutbuki/power-bank-noutbuk">
                          Power Bank для ноутбука
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/noutbuki/zaryadnie-ustroystva-dlya-noutbuka">
                          Зарядные устройства для ноутбука
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/noutbuki/podstavki-dlya-noutbukov">
                          Подставки для ноутбуков
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/kompyutery-i-orgtehnika/nositeli-informacii"
                      >
                        Носители информации
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/kompyutery-i-orgtehnika/nositeli-informacii">
                          Все товары
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/nositeli-informacii/karty-pamyati">
                          Карты памяти
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/nositeli-informacii/zhestkie-diski-ssd-i-setevye-nakopiteli">
                          Жесткие диски
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/nositeli-informacii/zhestkie-diski-hdd-dlya-nastolnogo-kompyutera">
                          Внутренние жесткие диски (HDD)
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/nositeli-informacii/vneshnie-zhestkie-diski-ext-hdd">
                          Внешние жесткие диски (Ext. HDD)
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/nositeli-informacii/usb-fleshki">
                          Флешки USB
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/kompyutery-i-orgtehnika/monitory"
                      >
                        Мониторы
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/kompyutery-i-orgtehnika/monitory">
                          Все товары
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/monitory/kronshteiny-dlya-monitorov">
                          Кронштейны для мониторов
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/kompyutery-i-orgtehnika/myshki-i-klaviatury"
                      >
                        Клавиатуры и мыши
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/kompyutery-i-orgtehnika/myshki-i-klaviatury">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/kompyutery-i-orgtehnika/modemy-routery-i-setevoe-oborudovanie"
                      >
                        Модемы, роутеры и сетевое оборудование
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/kompyutery-i-orgtehnika/modemy-routery-i-setevoe-oborudovanie">
                          Все товары
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/modemy-routery-i-setevoe-oborudovanie/setevoe-oborudovanie">
                          Сетевое оборудование
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/modemy-routery-i-setevoe-oborudovanie/wifi-routery-i-modemy-dlya-telefonnoj-seti">
                          ADSL модемы (для телефонной сети)
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/modemy-routery-i-setevoe-oborudovanie/wifi-routery-dlya-optovolokonnyh-setej">
                          Wi-Fi роутеры (Оптика)
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/modemy-routery-i-setevoe-oborudovanie/oborudovanie-3g-4g">
                          3G/4G модемы
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/modemy-routery-i-setevoe-oborudovanie/adaptery-wi-fi">
                          WiFi адаптеры
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/modemy-routery-i-setevoe-oborudovanie/usiliteli-signala">
                          Wi-Fi усилители
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/kompyutery-i-orgtehnika/kompyuteri-i-komplektyushiye"
                      >
                        Комплектующие
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/kompyutery-i-orgtehnika/kompyuteri-i-komplektyushiye">
                          Все товары
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/kompyuteri-i-komplektyushiye/videokarty">
                          Видеокарты
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/kompyuteri-i-komplektyushiye/operativnaya-pamyat">
                          Оперативная память (DDR)
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/kompyuteri-i-komplektyushiye/istochniki-bespereboynogo-pitaniya">
                          Источники бесперебойного питания
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/kompyuteri-i-komplektyushiye/bloki-pitaniya">
                          Блоки питания
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/kompyuteri-i-komplektyushiye/dvd-rw-usb">
                          Внешние оптические приводы DVD RW
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/kompyuteri-i-komplektyushiye/veb-kameri">
                          Веб-камеры
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/kompyuteri-i-komplektyushiye/materinskie-plati">
                          Материнские платы
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/kompyuteri-i-komplektyushiye/protsessori">
                          Процессоры
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/kompyuteri-i-komplektyushiye/kuleri">
                          Водяные кулеры
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/kompyuteri-i-komplektyushiye/kompyuternie-korpusa">
                          Компьютерные корпуса
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/kompyuteri-i-komplektyushiye/korpusnie-kuleri">
                          Корпусные кулеры
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/kompyutery-i-orgtehnika/kompyuteri-i-monobloki"
                      >
                        Компьютеры и моноблоки
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/kompyutery-i-orgtehnika/kompyuteri-i-monobloki">
                          Все товары
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/kompyuteri-i-monobloki/nastolnye-kompyutery">
                          Настольные компьютеры
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/kompyuteri-i-monobloki/monobloki">
                          Моноблоки
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/kompyutery-i-orgtehnika/ofisnaya-tehnika"
                      >
                        Офисная техника
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/kompyutery-i-orgtehnika/ofisnaya-tehnika">
                          Все товары
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/ofisnaya-tehnika/printery">
                          Принтеры и сканеры
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/ofisnaya-tehnika/skanery">
                          Сканеры
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/ofisnaya-tehnika/kalkulyatory">
                          Калькуляторы
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/ofisnaya-tehnika/schetchiki-banknot-kupyur">
                          Счетчики банкнот (купюр)
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/ofisnaya-tehnika/proektory">
                          Проекторы
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/ofisnaya-tehnika/portativnie-printeri">
                          Портативные принтеры
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/ofisnaya-tehnika/plottery">
                          Плоттеры
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/kompyutery-i-orgtehnika/kamery"
                      >
                        Камеры
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/kompyutery-i-orgtehnika/kamery">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/kompyutery-i-orgtehnika/kompyuternaya-akustika"
                      >
                        Компьютерная акустика
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/kompyutery-i-orgtehnika/kompyuternaya-akustika">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/kompyutery-i-orgtehnika/aksessuary-kompyutera"
                      >
                        Аксессуары для компьютера
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/kompyutery-i-orgtehnika/aksessuary-kompyutera">
                          Все товары
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/aksessuary-kompyutera/pitanie">
                          Питание
                        </a>
                        <a href="/product/kompyutery-i-orgtehnika/aksessuary-kompyutera/kabeli-perehodniki">
                          Кабели, переходники
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/kompyutery-i-orgtehnika/gejmerskie-kresla"
                      >
                        Геймерские кресла
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/kompyutery-i-orgtehnika/gejmerskie-kresla">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/kompyutery-i-orgtehnika/opticheskie-kabeli"
                      >
                        Оптические кабели
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/kompyutery-i-orgtehnika/opticheskie-kabeli">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/kompyutery-i-orgtehnika/programmnoe-obespechenie"
                      >
                        Программное обеспечение
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/kompyutery-i-orgtehnika/programmnoe-obespechenie">
                          Все товары
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-content " data-id="dlya-gejmerov">
                <div class="mega__menu-right-inner">
                  <div class="mega__menu-content">
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-gejmerov/garnituri-i-naushniki"
                      >
                        Гарнитуры и наушники
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-gejmerov/garnituri-i-naushniki">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-gejmerov/igrovie-klaviaturi"
                      >
                        Игровые клавиатуры
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-gejmerov/igrovie-klaviaturi">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-gejmerov/igrovie-mishi"
                      >
                        Игровые мыши
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-gejmerov/igrovie-mishi">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-gejmerov/igrovie-kresla"
                      >
                        Игровые кресла
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-gejmerov/igrovie-kresla">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-gejmerov/igrovie-konsoli"
                      >
                        Игровые приставки
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-gejmerov/igrovie-konsoli">
                          Все товары
                        </a>
                        <a href="/product/dlya-gejmerov/igrovie-konsoli/playstation">
                          PlayStation
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-gejmerov/ochki-virtualnoy-realnosti"
                      >
                        Очки виртуальной реальности
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-gejmerov/ochki-virtualnoy-realnosti">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-gejmerov/geympadi-i-djoystiki"
                      >
                        Геймпады и джойстики
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-gejmerov/geympadi-i-djoystiki">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-gejmerov/derjateli"
                      >
                        Держатели для кабелей
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-gejmerov/derjateli">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-gejmerov/zashitnie-ochki"
                      >
                        Защитные очки
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-gejmerov/zashitnie-ochki">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-gejmerov/podstavki-dlya-naushnikov"
                      >
                        Подставки для наушников
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-gejmerov/podstavki-dlya-naushnikov">
                          Все товары
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-content " data-id="bytovaya-tehnika">
                <div class="mega__menu-right-inner">
                  <div class="mega__menu-content">
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/bytovaya-tehnika/krupnaya-tehnika-dlya-kuhni"
                      >
                        Крупная техника для кухни
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/bytovaya-tehnika/krupnaya-tehnika-dlya-kuhni">
                          Все товары
                        </a>
                        <a href="/product/bytovaya-tehnika/krupnaya-tehnika-dlya-kuhni/holodilniki">
                          Холодильники
                        </a>
                        <a href="/product/bytovaya-tehnika/krupnaya-tehnika-dlya-kuhni/gazovye-plity">
                          Газовые плиты
                        </a>
                        <a href="/product/bytovaya-tehnika/krupnaya-tehnika-dlya-kuhni/morozilniki">
                          Морозильники
                        </a>
                        <a href="/product/bytovaya-tehnika/krupnaya-tehnika-dlya-kuhni/posudomoechnye-mashiny">
                          Посудомоечные машины
                        </a>
                        <a href="/product/bytovaya-tehnika/krupnaya-tehnika-dlya-kuhni/vytyazhki">
                          Вытяжки
                        </a>
                        <a href="/product/bytovaya-tehnika/krupnaya-tehnika-dlya-kuhni/kulery-dlya-vody">
                          Кулеры для воды
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/bytovaya-tehnika/tehnika-dlya-doma-2"
                      >
                        Техника для дома
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/bytovaya-tehnika/tehnika-dlya-doma-2">
                          Все товары
                        </a>
                        <a href="/product/bytovaya-tehnika/tehnika-dlya-doma-2/pylesosy">
                          Пылесосы
                        </a>
                        <a href="/product/bytovaya-tehnika/tehnika-dlya-doma-2/stiralnye-mashiny">
                          Стиральные машины и аксессуары
                        </a>
                        <a href="/product/bytovaya-tehnika/tehnika-dlya-doma-2/utyugi">
                          Утюги и аксессуары
                        </a>
                        <a href="/product/bytovaya-tehnika/tehnika-dlya-doma-2/shvejnye-mashiny-i-oborudovanie">
                          Швейные машины и оборудование
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/bytovaya-tehnika/kuhnya"
                      >
                        Техника для кухни
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/bytovaya-tehnika/kuhnya">
                          Все товары
                        </a>
                        <a href="/product/bytovaya-tehnika/kuhnya/multivarki">
                          Мультиварки
                        </a>
                        <a href="/product/bytovaya-tehnika/kuhnya/mikrovolnovye-i-duhovye-pechi">
                          Микроволновые и духовые печи
                        </a>
                        <a href="/product/bytovaya-tehnika/kuhnya/myasorubki">
                          Мясорубки
                        </a>
                        <a href="/product/bytovaya-tehnika/kuhnya/kuhonnye-mashiny-i-kombajny">
                          Кухонные машины и комбайны
                        </a>
                        <a href="/product/bytovaya-tehnika/kuhnya/chajniki-i-termopoty">
                          Чайники и термопоты
                        </a>
                        <a href="/product/bytovaya-tehnika/kuhnya/hlebopechki">
                          Хлебопечки
                        </a>
                        <a href="/product/bytovaya-tehnika/kuhnya/sokovyzhimalki">
                          Соковыжималки
                        </a>
                        <a href="/product/bytovaya-tehnika/kuhnya/tostery-sendvichnicy-vafelnicy">
                          Тостеры, Сэндвичницы, Вафельницы
                        </a>
                        <a href="/product/bytovaya-tehnika/kuhnya/kofevarki-i-kofemolki">
                          Кофеварки и кофемолки
                        </a>
                        <a href="/product/bytovaya-tehnika/kuhnya/kuhonnye-vesy">
                          Кухонные весы
                        </a>
                        <a href="/product/bytovaya-tehnika/kuhnya/vstraivaemaya-tehnika">
                          Встраиваемая техника
                        </a>
                        <a href="/product/bytovaya-tehnika/kuhnya/aksessuary">
                          Аксессуары
                        </a>
                        <a href="/product/bytovaya-tehnika/kuhnya/parovarki">
                          Пароварки
                        </a>
                        <a href="/product/bytovaya-tehnika/kuhnya/grili-frityurnicy-shashlychnicy">
                          Грили, Фритюрницы, Шашлычницы
                        </a>
                        <a href="/product/bytovaya-tehnika/kuhnya/blendery-i-miksery">
                          Блендеры и Миксеры
                        </a>
                        <a href="/product/bytovaya-tehnika/kuhnya/elektrosushilki-dlya-ovoshey-fruktov">
                          Электросушилки для овощей, фруктов
                        </a>
                        <a href="/product/bytovaya-tehnika/kuhnya/mangali-uchagi">
                          Мангалы, учаги
                        </a>
                        <a href="/product/bytovaya-tehnika/kuhnya/yaicevarki">
                          Яйцеварки
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/bytovaya-tehnika/klimaticheskaya-tehnika"
                      >
                        Климатическая техника
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/bytovaya-tehnika/klimaticheskaya-tehnika">
                          Все товары
                        </a>
                        <a href="/product/bytovaya-tehnika/klimaticheskaya-tehnika/elektroobogrevateli-i-teplovye-zavesy">
                          Электрообогреватели и тепловые завесы
                        </a>
                        <a href="/product/bytovaya-tehnika/klimaticheskaya-tehnika/vodonagrevateli">
                          Водонагреватели
                        </a>
                        <a href="/product/bytovaya-tehnika/klimaticheskaya-tehnika/uvlazhniteli-i-vozduhoochistiteli">
                          Увлажнители и воздухоочистители
                        </a>
                        <a href="/product/bytovaya-tehnika/klimaticheskaya-tehnika/ventilyatory">
                          Вентиляторы
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/bytovaya-tehnika/texniki-dlya-krasota-i-zdorove"
                      >
                        Техника для красоты и здоровья
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/bytovaya-tehnika/texniki-dlya-krasota-i-zdorove">
                          Все товары
                        </a>
                        <a href="/product/bytovaya-tehnika/texniki-dlya-krasota-i-zdorove/elektrobritvy-epilyatory-trimmery">
                          Эпиляторы и женские электробритвы
                        </a>
                        <a href="/product/bytovaya-tehnika/texniki-dlya-krasota-i-zdorove/napolnye-vesy">
                          Напольные весы
                        </a>
                        <a href="/product/bytovaya-tehnika/texniki-dlya-krasota-i-zdorove/kosmeticheskie-pribory">
                          Косметические приборы
                        </a>
                        <a href="/product/bytovaya-tehnika/texniki-dlya-krasota-i-zdorove/feny-i-vypryamiteli-dlya-volos">
                          Фены и выпрямители для волос
                        </a>
                        <a href="/product/bytovaya-tehnika/texniki-dlya-krasota-i-zdorove/mashinki-dlya-strizhki-i-trimmery">
                          Машинки для стрижки и триммеры
                        </a>
                        <a href="/product/bytovaya-tehnika/texniki-dlya-krasota-i-zdorove/elektrobritvy-muzhskie">
                          Электробритвы мужские
                        </a>
                        <a href="/product/bytovaya-tehnika/texniki-dlya-krasota-i-zdorove/elektricheskie-zubnye-shchetki">
                          Электрические зубные щетки
                        </a>
                        <a href="/product/bytovaya-tehnika/texniki-dlya-krasota-i-zdorove/irrigatory">
                          Ирригаторы
                        </a>
                        <a href="/product/bytovaya-tehnika/texniki-dlya-krasota-i-zdorove/elektricheskie-ushnye-palochki">
                          Электрические ушные палочки
                        </a>
                        <a href="/product/bytovaya-tehnika/texniki-dlya-krasota-i-zdorove/massazhery">
                          Массажёры
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-content " data-id="televizory-video-i-audio">
                <div class="mega__menu-right-inner">
                  <div class="mega__menu-content">
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/televizory-video-i-audio/televizory"
                      >
                        Телевизоры
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/televizory-video-i-audio/televizory">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/televizory-video-i-audio/pristavki-smart-tv"
                      >
                        Приставки Smart TV
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/televizory-video-i-audio/pristavki-smart-tv">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/televizory-video-i-audio/igrovye-pristavki"
                      >
                        Игровые приставки
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/televizory-video-i-audio/igrovye-pristavki">
                          Все товары
                        </a>
                        <a href="/product/televizory-video-i-audio/igrovye-pristavki/igry-dlya-playstation">
                          Игры для PlayStation
                        </a>
                        <a href="/product/televizory-video-i-audio/igrovye-pristavki/playstation">
                          PlayStation
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/televizory-video-i-audio/domashnij-kinoteatr"
                      >
                        Домашние кинотеатры и аудиосистемы
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/televizory-video-i-audio/domashnij-kinoteatr">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/televizory-video-i-audio/tv-antenny-i-aksessuary"
                      >
                        ТВ Антенны и аксессуары
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/televizory-video-i-audio/tv-antenny-i-aksessuary">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/televizory-video-i-audio/kronshtejny"
                      >
                        Кронштейны
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/televizory-video-i-audio/kronshtejny">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/televizory-video-i-audio/tv-tyunery"
                      >
                        ТВ тюнеры
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/televizory-video-i-audio/tv-tyunery">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/televizory-video-i-audio/pulty-du"
                      >
                        Пульты ДУ
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/televizory-video-i-audio/pulty-du">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/televizory-video-i-audio/kabeli-perexodniki-tv"
                      >
                        Кабели, переходники TV
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/televizory-video-i-audio/kabeli-perexodniki-tv">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/televizory-video-i-audio/cifrovoe-televidenie"
                      >
                        Цифровое телевидение
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/televizory-video-i-audio/cifrovoe-televidenie">
                          Все товары
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-content " data-id="posuda">
                <div class="mega__menu-right-inner">
                  <div class="mega__menu-content">
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/posuda/posuda-dlya-prigotovleniya"
                      >
                        Посуда для приготовления
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/posuda/posuda-dlya-prigotovleniya">
                          Все товары
                        </a>
                        <a href="/product/posuda/posuda-dlya-prigotovleniya/kazany">
                          Казаны
                        </a>
                        <a href="/product/posuda/posuda-dlya-prigotovleniya/skovorody">
                          Сковороды
                        </a>
                        <a href="/product/posuda/posuda-dlya-prigotovleniya/kastryuli">
                          Кастрюли
                        </a>
                        <a href="/product/posuda/posuda-dlya-prigotovleniya/nabory">
                          Наборы
                        </a>
                        <a href="/product/posuda/posuda-dlya-prigotovleniya/mantovarka">
                          Мантоварка
                        </a>
                        <a href="/product/posuda/posuda-dlya-prigotovleniya/formy-vypechki">
                          Формы для выпечки
                        </a>
                        <a href="/product/posuda/posuda-dlya-prigotovleniya/kotly">
                          Котлы
                        </a>
                        <a href="/product/posuda/posuda-dlya-prigotovleniya/razdelochniye-doski-i-terki">
                          Ножи и разделочные доски
                        </a>
                        <a href="/product/posuda/posuda-dlya-prigotovleniya/chay-kofe-napitki">
                          Чай, кофе, напитки
                        </a>
                        <a href="/product/posuda/posuda-dlya-prigotovleniya/miski">
                          Миски
                        </a>
                        <a href="/product/posuda/posuda-dlya-prigotovleniya/soteiniki">
                          Сотейники
                        </a>
                        <a href="/product/posuda/posuda-dlya-prigotovleniya/steklyannye-kryshki">
                          Стеклянные крышки
                        </a>
                        <a href="/product/posuda/posuda-dlya-prigotovleniya/aksessuary-dlya-grilei">
                          Аксессуары для грилей
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/posuda/servirovka"
                      >
                        Сервировка
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/posuda/servirovka">Все товары</a>
                        <a href="/product/posuda/servirovka/stolovie-pribori">
                          Столовые приборы
                        </a>
                        <a href="/product/posuda/servirovka/podnosi">Подносы</a>
                        <a href="/product/posuda/servirovka/servizi">Сервизы</a>
                        <a href="/product/posuda/servirovka/stolovaya-posuda">
                          Столовая посуда
                        </a>
                        <a href="/product/posuda/servirovka/posuda-dlya-napitkov">
                          Посуда для напитков
                        </a>
                        <a href="/product/posuda/servirovka/aksessuari-dlya-speciy">
                          Аксессуары для специй
                        </a>
                        <a href="/product/posuda/servirovka/maslenki">
                          Масленки
                        </a>
                        <a href="/product/posuda/servirovka/salfetnici">
                          Салфетницы
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/posuda/hranenie"
                      >
                        Хранение
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/posuda/hranenie">Все товары</a>
                        <a href="/product/posuda/hranenie/termoposuda">
                          Термопосуда
                        </a>
                        <a href="/product/posuda/hranenie/banki-i-emkosti">
                          Банки и емкости
                        </a>
                        <a href="/product/posuda/hranenie/pishevie-konteyneri">
                          Пищевые контейнеры
                        </a>
                        <a href="/product/posuda/hranenie/butylki-dlya-sporta-i-puteshestvii">
                          Бутылки для спорта и путешествий
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/posuda/kuxonniye-prinadlejnosti"
                      >
                        Кухонные принадлежности
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/posuda/kuxonniye-prinadlejnosti">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/posuda/sushilki-dlya-posudi"
                      >
                        Сушилки для посуды
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/posuda/sushilki-dlya-posudi">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/posuda/1000-melochey"
                      >
                        1000 мелочей
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/posuda/1000-melochey">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/posuda/filtri-i-umyagchiteli-dlya-vodi"
                      >
                        Фильтры и умягчители для воды
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/posuda/filtri-i-umyagchiteli-dlya-vodi">
                          Все товары
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-content " data-id="mebel">
                <div class="mega__menu-right-inner">
                  <div class="mega__menu-content">
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/mebel/myagkaya-mebel"
                      >
                        Мягкая мебель
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/mebel/myagkaya-mebel">Все товары</a>
                        <a href="/product/mebel/myagkaya-mebel/divany">
                          Диваны
                        </a>
                        <a href="/product/mebel/myagkaya-mebel/uglovie-divani">
                          Угловые диваны
                        </a>
                        <a href="/product/mebel/myagkaya-mebel/komplekty-myagkoy-mebeli">
                          Комплекты мягкой мебели
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/mebel/kuxonnaya-mebel"
                      >
                        Кухонная мебель
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/mebel/kuxonnaya-mebel">Все товары</a>
                        <a href="/product/mebel/kuxonnaya-mebel/kuxni-hi-tech">
                          Кухни Hi-tech
                        </a>
                        <a href="/product/mebel/kuxonnaya-mebel/klassicheskaya-kuxnya">
                          Классическая кухня
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/mebel/gostinaya-mebel"
                      >
                        Гостиная мебель
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/mebel/gostinaya-mebel">Все товары</a>
                        <a href="/product/mebel/gostinaya-mebel/gorka">Горка</a>
                        <a href="/product/mebel/gostinaya-mebel/gorka-penal">
                          Горка и пенал
                        </a>
                        <a href="/product/mebel/gostinaya-mebel/penalkamod">
                          Пенал и комод
                        </a>
                        <a href="/product/mebel/gostinaya-mebel/penalpodtv">
                          Пенал и под тв
                        </a>
                        <a href="/product/mebel/gostinaya-mebel/penal">Пенал</a>
                        <a href="/product/mebel/gostinaya-mebel/komod">Комод</a>
                        <a href="/product/mebel/gostinaya-mebel/pod-tv">
                          Под ТВ
                        </a>
                        <a href="/product/mebel/gostinaya-mebel/gorka-komod">
                          Горка и комод
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/mebel/ofisnaya-mebel"
                      >
                        Офисная мебель
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/mebel/ofisnaya-mebel">Все товары</a>
                        <a href="/product/mebel/ofisnaya-mebel/kompyuterniy-stoli">
                          Компьютерные столы
                        </a>
                        <a href="/product/mebel/ofisnaya-mebel/ofisnie-shkafi">
                          Офисные шкафы
                        </a>
                        <a href="/product/mebel/ofisnaya-mebel/pismennie-stoli">
                          Письменные столы
                        </a>
                        <a href="/product/mebel/ofisnaya-mebel/dlya-sotrudnikov">
                          Для сотрудников
                        </a>
                        <a href="/product/mebel/ofisnaya-mebel/art-kreslo">
                          АРТ кресло
                        </a>
                        <a href="/product/mebel/ofisnaya-mebel/ofisniy-komplekt">
                          Офисный комплект
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a class="menu__item-title" href="/product/mebel/kreslo">
                        Кресла
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/mebel/kreslo">Все товары</a>
                        <a href="/product/mebel/kreslo/kresla-kachalki">
                          Кресла-качалки
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a class="menu__item-title" href="/product/mebel/shkafi">
                        Шкафы
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/mebel/shkafi">Все товары</a>
                        <a href="/product/mebel/shkafi/prixojie-shkafi">
                          Прихожие шкафы
                        </a>
                        <a href="/product/mebel/shkafi/shkafi-kupe">
                          Шкафы-купе
                        </a>
                        <a href="/product/mebel/shkafi/shkafi-nazakaz">
                          шкафы на заказ
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/mebel/sadovaya-mebel"
                      >
                        Комплекты садовой мебели
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/mebel/sadovaya-mebel">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/mebel/importnaya-mebel"
                      >
                        Импортная мебель
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/mebel/importnaya-mebel">Все товары</a>
                        <a href="/product/mebel/importnaya-mebel/shatura">
                          Шатура
                        </a>
                        <a href="/product/mebel/importnaya-mebel/era">ЭРА</a>
                        <a href="/product/mebel/importnaya-mebel/slonimmebel">
                          СЛОНИММEБEЛ
                        </a>
                        <a href="/product/mebel/importnaya-mebel/lerom">
                          Лером
                        </a>
                        <a href="/product/mebel/importnaya-mebel/neman">
                          НЕМАН
                        </a>
                        <a href="/product/mebel/importnaya-mebel/import-spalnayamebel">
                          Импортная спальня мебель
                        </a>
                        <a href="/product/mebel/importnaya-mebel/import-gostinayamebel">
                          Импортная гостиная мебель
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/mebel/razlichnaya-mebel"
                      >
                        Различная мебель
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/mebel/razlichnaya-mebel">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/mebel/stoli-i-stulya"
                      >
                        Столы и Стулья
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/mebel/stoli-i-stulya">Все товары</a>
                        <a href="/product/mebel/stoli-i-stulya/oshxona-stol-va-stullari">
                          Кухонный стол и стулья
                        </a>
                        <a href="/product/mebel/stoli-i-stulya/mehmonxona-stol-stullari">
                          Гостиный стол и стулья
                        </a>
                        <a href="/product/mebel/stoli-i-stulya/jurnalniye-stoli">
                          Журнальные столы
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/mebel/odinarniy-krovati"
                      >
                        Кровати
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/mebel/odinarniy-krovati">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/mebel/spalnaya-mebel"
                      >
                        Спальная мебель
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/mebel/spalnaya-mebel">Все товары</a>
                        <a href="/product/mebel/spalnaya-mebel/dvux-spalni">
                          Двух спальни кровати
                        </a>
                        <a href="/product/mebel/spalnaya-mebel/klassik-spalnaya-mebel">
                          Классик
                        </a>
                        <a href="/product/mebel/spalnaya-mebel/hitech-spalnaya-mebel">
                          Хай-тек
                        </a>
                        <a href="/product/mebel/spalnaya-mebel/spalnaya-chester">
                          Честер
                        </a>
                        <a href="/product/mebel/spalnaya-mebel/pufik">Пуфик</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/mebel/detskaya-mebel"
                      >
                        Детская мебель
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/mebel/detskaya-mebel">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/mebel/detskaya-mebel-nazakaz"
                      >
                        Детская мебель
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/mebel/detskaya-mebel-nazakaz">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/mebel/tv-podstavka"
                      >
                        ТВ подставка
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/mebel/tv-podstavka">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/mebel/myagkaya-mebel-nazakaz-1"
                      >
                        Мягкая мебель на заказ
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/mebel/myagkaya-mebel-nazakaz-1">
                          Все товары
                        </a>
                        <a href="/product/mebel/myagkaya-mebel-nazakaz-1/beskarkasnye-kresla">
                          Бескаркасные кресла
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/mebel/mebel-na-zakaz"
                      >
                        Мебель на заказ
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/mebel/mebel-na-zakaz">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/mebel/spalnaya-mabal-nazakaz-1"
                      >
                        Спальная мебель на заказ
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/mebel/spalnaya-mabal-nazakaz-1">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a class="menu__item-title" href="/product/mebel/loft">
                        Лофт
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/mebel/loft">Все товары</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-content " data-id="sport-i-otdyh">
                <div class="mega__menu-right-inner">
                  <div class="mega__menu-content">
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/sport-i-otdyh/bassejny"
                      >
                        Бассейны
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/sport-i-otdyh/bassejny">Все товары</a>
                        <a href="/product/sport-i-otdyh/bassejny/karkasnye-basseiny">
                          Каркасные бассейны
                        </a>
                        <a href="/product/sport-i-otdyh/bassejny/naduvnye-basseiny">
                          Надувные бассейны
                        </a>
                        <a href="/product/sport-i-otdyh/bassejny/detskie-basseiny">
                          Детские бассейны
                        </a>
                        <a href="/product/sport-i-otdyh/bassejny/naduvnye-krovati">
                          Надувные кровати
                        </a>
                        <a href="/product/sport-i-otdyh/bassejny/naduvnye-matrasy">
                          Надувные матрасы
                        </a>
                        <a href="/product/sport-i-otdyh/bassejny/tenty-i-podstilki-dlya-basseinov">
                          Тенты и подстилки для бассейнов
                        </a>
                        <a href="/product/sport-i-otdyh/bassejny/nabory-dlya-chistki-skimmery-sachki">
                          Наборы для чистки, скиммеры, сачки
                        </a>
                        <a href="/product/sport-i-otdyh/bassejny/lestnicy-dlya-basseina">
                          Лестницы для бассейна
                        </a>
                        <a href="/product/sport-i-otdyh/bassejny/filtry-nasosy">
                          Фильтры, насосы, нагреватели, обработка воды
                        </a>
                        <a href="/product/sport-i-otdyh/bassejny/lasty-dlya-plavaniya">
                          Ласты для плавания
                        </a>
                        <a href="/product/sport-i-otdyh/bassejny/ochki-dlya-plavaniya">
                          Очки и шапочки для плавания
                        </a>
                        <a href="/product/sport-i-otdyh/bassejny/berushi-dlya-plavaniya">
                          Беруши для плавания
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/sport-i-otdyh/sport-tovary"
                      >
                        Спорт товары
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/sport-i-otdyh/sport-tovary">
                          Все товары
                        </a>
                        <a href="/product/sport-i-otdyh/sport-tovary/velotrenojori">
                          Велотренажеры
                        </a>
                        <a href="/product/sport-i-otdyh/sport-tovary/begovie-dorojki">
                          Беговые дорожки
                        </a>
                        <a href="/product/sport-i-otdyh/sport-tovary/kompleksnie-trenajori">
                          Комплексные тренажёры
                        </a>
                        <a href="/product/sport-i-otdyh/sport-tovary/ellipticheskie-trenajori">
                          Эллиптические тренажеры
                        </a>
                        <a href="/product/sport-i-otdyh/sport-tovary/fitnes-aksessuary">
                          Фитнес аксессуары
                        </a>
                        <a href="/product/sport-i-otdyh/sport-tovary/edinoborstva">
                          Единоборства
                        </a>
                        <a href="/product/sport-i-otdyh/sport-tovary/turniki">
                          Турники
                        </a>
                        <a href="/product/sport-i-otdyh/sport-tovary/setki-sportivnye">
                          Сетки спортивные
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/sport-i-otdyh/nastolniye-igri"
                      >
                        Настольные игры
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/sport-i-otdyh/nastolniye-igri">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/sport-i-otdyh/velosipedi-i-samokati"
                      >
                        Велосипеды, самокаты, роликовые коньки
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/sport-i-otdyh/velosipedi-i-samokati">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/sport-i-otdyh/tennis"
                      >
                        Теннис
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/sport-i-otdyh/tennis">Все товары</a>
                        <a href="/product/sport-i-otdyh/tennis/tennisnye-stoly">
                          Теннисные столы
                        </a>
                        <a href="/product/sport-i-otdyh/tennis/myachi-i-raketki-dlya-bolshogo-tennisa">
                          Мячи и ракетки для большого тенниса
                        </a>
                        <a href="/product/sport-i-otdyh/tennis/myachi-i-raketki-dlya-nastolnogo-tennisa">
                          Мячи и ракетки для настольного тенниса
                        </a>
                        <a href="/product/sport-i-otdyh/tennis/setki-dlya-nastolnogo-tennisa">
                          Сетки для настольного тенниса
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/sport-i-otdyh/basketbol"
                      >
                        Баскетбол
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/sport-i-otdyh/basketbol">
                          Все товары
                        </a>
                        <a href="/product/sport-i-otdyh/basketbol/basketbolnye-myachi">
                          Баскетбольные мячи
                        </a>
                        <a href="/product/sport-i-otdyh/basketbol/shchity-i-stoiki">
                          Щиты и стойки
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/sport-i-otdyh/futbol"
                      >
                        Футбол
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/sport-i-otdyh/futbol">Все товары</a>
                        <a href="/product/sport-i-otdyh/futbol/futbolnye-myachi">
                          Футбольные мячи
                        </a>
                        <a href="/product/sport-i-otdyh/futbol/futbolnaya-forma">
                          Футбольная форма
                        </a>
                        <a href="/product/sport-i-otdyh/futbol/futbolnye-manishki">
                          Футбольные манишки
                        </a>
                        <a href="/product/sport-i-otdyh/futbol/futbolnye-shchitki">
                          Футбольные щитки
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/sport-i-otdyh/sportivnaya-obuv"
                      >
                        Спортивная обувь
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/sport-i-otdyh/sportivnaya-obuv">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/sport-i-otdyh/sportivnye-odezhdy"
                      >
                        Спортивная одежда
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/sport-i-otdyh/sportivnye-odezhdy">
                          Все товары
                        </a>
                        <a href="/product/sport-i-otdyh/sportivnye-odezhdy/kimono">
                          Кимоно
                        </a>
                        <a href="/product/sport-i-otdyh/sportivnye-odezhdy/sportivnye-shorty">
                          Спортивные шорты
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/sport-i-otdyh/giroskutery"
                      >
                        Гироскутеры
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/sport-i-otdyh/giroskutery">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/sport-i-otdyh/voleibol"
                      >
                        Волейбол
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/sport-i-otdyh/voleibol">Все товары</a>
                        <a href="/product/sport-i-otdyh/voleibol/voleibolnye-myachi">
                          Волейбольные мячи
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/sport-i-otdyh/ioga"
                      >
                        Йога
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/sport-i-otdyh/ioga">Все товары</a>
                        <a href="/product/sport-i-otdyh/ioga/kovriki-dlya-iogi">
                          Коврики для йоги
                        </a>
                        <a href="/product/sport-i-otdyh/ioga/roliki-dlya-iogi">
                          Ролики для йоги
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-content " data-id="dlya-doma">
                <div class="mega__menu-right-inner">
                  <div class="mega__menu-content">
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/videonablyudenie"
                      >
                        Видеонаблюдение
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/videonablyudenie">
                          Все товары
                        </a>
                        <a href="/product/dlya-doma/videonablyudenie/kamery-videonablyudeniya">
                          Камеры видеонаблюдения
                        </a>
                        <a href="/product/dlya-doma/videonablyudenie/registratory">
                          Регистраторы
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/bezopasnost"
                      >
                        Безопасность
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/bezopasnost">Все товары</a>
                        <a href="/product/dlya-doma/bezopasnost/sistemy-kontrolya-dostupa">
                          Системы контроля доступа
                        </a>
                        <a href="/product/dlya-doma/bezopasnost/domofony">
                          Домофоны
                        </a>
                        <a href="/product/dlya-doma/bezopasnost/zamki">Замки</a>
                        <a href="/product/dlya-doma/bezopasnost/trevozhnye-knopki">
                          Тревожные кнопки
                        </a>
                        <a href="/product/dlya-doma/bezopasnost/datchiki-dvizheniya-i-otkrytiya-dverei">
                          Датчики движения и открытия дверей
                        </a>
                        <a href="/product/dlya-doma/bezopasnost/sireny">
                          Сирены
                        </a>
                        <a href="/product/dlya-doma/bezopasnost/datchiki-dyma">
                          Датчики дыма
                        </a>
                        <a href="/product/dlya-doma/bezopasnost/centry-sistemy-bezopasnosti">
                          Центры системы безопасности
                        </a>
                        <a href="/product/dlya-doma/bezopasnost/komplekty-sistem-bezopasnosti">
                          Комплекты систем безопасности
                        </a>
                        <a href="/product/dlya-doma/bezopasnost/klaviatury-karty-i-brelki-bezopasnosti">
                          Клавиатуры, карты и брелки безопасности
                        </a>
                        <a href="/product/dlya-doma/bezopasnost/datchiki-zatopleniya">
                          Датчики затопления
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/ofisnye-kresla"
                      >
                        Офисные кресла
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/ofisnye-kresla">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/stabilizatory-napryazheniya"
                      >
                        Стабилизаторы напряжения
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/stabilizatory-napryazheniya">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/gadzhety-xiaomi"
                      >
                        Гаджеты Xiaomi
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/gadzhety-xiaomi">
                          Все товары
                        </a>
                        <a href="/product/dlya-doma/gadzhety-xiaomi/ruchki">
                          Ручки
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/gadzhety-xiaomi/ruchki/lugatlar"
                      >
                        Словари и разговорники
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/gadzhety-xiaomi/ruchki/lugatlar">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/tehnika-dlya-doma"
                      >
                        Гаджеты для дома
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/tehnika-dlya-doma">
                          Все товары
                        </a>
                        <a href="/product/dlya-doma/tehnika-dlya-doma/umnye-rozetki">
                          Умные розетки
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/lestnici-i-stremyanki"
                      >
                        Лестницы и стремянки
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/lestnici-i-stremyanki">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/gigienicheskietovari"
                      >
                        Медицинские изделия и расходные материалы
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/gigienicheskietovari">
                          Все товары
                        </a>
                        <a href="/product/dlya-doma/gigienicheskietovari/baktericidnye-i-ultrafioletovye-lampy">
                          Бактерицидные и ультрафиолетовые лампы
                        </a>
                        <a href="/product/dlya-doma/gigienicheskietovari/termometry">
                          Термометры
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/zerkala"
                      >
                        Зеркала
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/zerkala">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/veshalki-i-organayzeri-dlya-veshey"
                      >
                        Вешалки и органайзеры для вещей
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/veshalki-i-organayzeri-dlya-veshey">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/sadoviy-inventar"
                      >
                        Садовый инвентарь
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/sadoviy-inventar">
                          Все товары
                        </a>
                        <a href="/product/dlya-doma/sadoviy-inventar/topori-pili">
                          Топоры, пилы
                        </a>
                        <a href="/product/dlya-doma/sadoviy-inventar/suchkorezi-kustorezi-sadovie-nojnici">
                          Сучкорезы, кусторезы, садовые ножницы
                        </a>
                        <a href="/product/dlya-doma/sadoviy-inventar/lopati">
                          Лопаты
                        </a>
                        <a href="/product/dlya-doma/sadoviy-inventar/vili-sadovie">
                          Вилы садовые
                        </a>
                        <a href="/product/dlya-doma/sadoviy-inventar/sadovie-buri">
                          Садовые буры
                        </a>
                        <a href="/product/dlya-doma/sadoviy-inventar/udaliteli-sornyakov">
                          Удалители сорняков
                        </a>
                        <a href="/product/dlya-doma/sadoviy-inventar/instrumenti-dlya-posadki">
                          Инструменты для посадки (Сеялки)
                        </a>
                        <a href="/product/dlya-doma/sadoviy-inventar/grabli">
                          Грабли
                        </a>
                        <a href="/product/dlya-doma/sadoviy-inventar/perchatki">
                          Перчатки
                        </a>
                        <a href="/product/dlya-doma/sadoviy-inventar/poliv-opriskivanie">
                          Полив, опрыскивание
                        </a>
                        <a href="/product/dlya-doma/sadoviy-inventar/uhod-za-gazonom">
                          Уход за газоном
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/vse-dlya-remonta"
                      >
                        Все для ремонта
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/vse-dlya-remonta">
                          Все товары
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/otvertki">
                          Отвертки
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/dreli-shurupoverti">
                          Дрели, шуроповерты
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/perforatori-otboynye-molotki">
                          Перфораторы, отбойные молотки
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/instrumenty-dlya-shlifovki">
                          Инструменты для шлифовки
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/instrumenty-dlya-raspila">
                          Инструменты для распила
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/stroitelnye-miksery">
                          Строительные миксеры
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/vozduhoduvy">
                          Воздуходувы
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/stroitelnye-feny">
                          Строительные фены
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/tochilnye-stanki">
                          Станочное оборудование
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/svarochnie-apparati">
                          Сварочные аппараты
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/vozdushnye-kompressory">
                          Воздушные компрессоры
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/instrumenty-dlya-pokraski">
                          Инструменты для покраски
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/pnevmaticheskie-instrumenty">
                          Пневматические инструменты
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/ruchnye-instrumenty">
                          Ручные инструменты и принадлежности
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/slesarnye-tiski">
                          Слесарные тиски
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/akkumulyatory-i-zaryadnye-ustroistva">
                          Аккумуляторы и зарядные устройства
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/pistolety-stroitelnye">
                          Пистолеты строительные
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/verstaki">
                          Верстаки
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/izmeritelnye-pribory">
                          Измерительные приборы
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/shtroborezy">
                          Штроборезы
                        </a>
                        <a href="/product/dlya-doma/vse-dlya-remonta/hranenie-instrumentov">
                          Хранение инструментов
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/moiki-vysokogo-davleniya"
                      >
                        Мойки высокого давления
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/moiki-vysokogo-davleniya">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/fonari"
                      >
                        Фонари
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/fonari">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/uborochnye-mashiny"
                      >
                        Уборочные машины
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/uborochnye-mashiny">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/vodyanye-nasosy"
                      >
                        Водяные насосы
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/vodyanye-nasosy">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/bytovaya-himiya"
                      >
                        Бытовая химия
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/bytovaya-himiya">
                          Все товары
                        </a>
                        <a href="/product/dlya-doma/bytovaya-himiya/geli-i-poroshki">
                          Гели и порошки
                        </a>
                        <a href="/product/dlya-doma/bytovaya-himiya/dlya-vannoi-i-tualeta">
                          Для ванной и туалета
                        </a>
                        <a href="/product/dlya-doma/bytovaya-himiya/sredstva-ot-nasekomyh-i-gryzunov">
                          Средства от насекомых и грызунов
                        </a>
                        <a href="/product/dlya-doma/bytovaya-himiya/sredstva-dlya-mytya-posudy">
                          Средства для мытья посуды
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/pledy-i-podushki"
                      >
                        Пледы и подушки
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/pledy-i-podushki">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/dekor-i-interer"
                      >
                        Декор и интерьер
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/dekor-i-interer">
                          Все товары
                        </a>
                        <a href="/product/dlya-doma/dekor-i-interer/nastennye-chasy">
                          Настольные и настенные часы
                        </a>
                        <a href="/product/dlya-doma/dekor-i-interer/elochnye-igrushki-i-ukrasheniya">
                          Ёлочные игрушки и украшения
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/sistemy-ventilyacii"
                      >
                        Системы вентиляции
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/sistemy-ventilyacii">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/osveshchenie"
                      >
                        Освещение
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/osveshchenie">Все товары</a>
                        <a href="/product/dlya-doma/osveshchenie/nochniki-i-prikrovatnye-lampy">
                          Ночники и прикроватные лампы
                        </a>
                        <a href="/product/dlya-doma/osveshchenie/napolnye-i-nastolnye-svetilniki">
                          Напольные и настольные светильники
                        </a>
                        <a href="/product/dlya-doma/osveshchenie/ulichnye-svetilniki">
                          Уличные светильники
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/hozyaistvennye-tovary"
                      >
                        Хозяйственные товары
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/hozyaistvennye-tovary">
                          Все товары
                        </a>
                        <a href="/product/dlya-doma/hozyaistvennye-tovary/musornye-vedra-i-baki">
                          Мусорные ведра и баки
                        </a>
                        <a href="/product/dlya-doma/hozyaistvennye-tovary/dispensery-dozatory">
                          Диспенсеры, дозаторы
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/fototehnika"
                      >
                        Фототехника
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/fototehnika">Все товары</a>
                        <a href="/product/dlya-doma/fototehnika/fotoapparaty">
                          Фотоаппараты
                        </a>
                        <a href="/product/dlya-doma/fototehnika/plenka-dlya-fotoapparatov-momentalnoi-pechati">
                          Пленка для фотоаппаратов моментальной печати
                        </a>
                        <a href="/product/dlya-doma/fototehnika/fotoapparaty-momentalnoi-pechati">
                          Фотоаппараты моментальной печати
                        </a>
                        <a href="/product/dlya-doma/fototehnika/videokamery">
                          Видеокамеры
                        </a>
                        <a href="/product/dlya-doma/fototehnika/chehly-i-sumki-dlya-kamer">
                          Чехлы и сумки для камер
                        </a>
                        <a href="/product/dlya-doma/fototehnika/shtativy-dlya-fotoapparatov">
                          Штативы для фотоаппаратов
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/kuhonnye-taimery"
                      >
                        Кухонные таймеры
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/kuhonnye-taimery">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/batareiki-i-akkumulyatory-dlya-audio-i-videotehniki"
                      >
                        Батарейки и аккумуляторы для аудио и видеотехники
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/batareiki-i-akkumulyatory-dlya-audio-i-videotehniki">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/dlya-doma/generatory"
                      >
                        Генераторы
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/dlya-doma/generatory">Все товары</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-content " data-id="instrumenty-i-avtotovary">
                <div class="mega__menu-right-inner">
                  <div class="mega__menu-content">
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/instrumenty-i-avtotovary/shiny-i-diski"
                      >
                        Шины и диски
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/instrumenty-i-avtotovary/shiny-i-diski">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/instrumenty-i-avtotovary/avtomagnitoly-i-avtoakustika"
                      >
                        Автомагнитолы и Автоакустика
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/instrumenty-i-avtotovary/avtomagnitoly-i-avtoakustika">
                          Все товары
                        </a>
                        <a href="/product/instrumenty-i-avtotovary/avtomagnitoly-i-avtoakustika/avtomagnitoly">
                          Автомагнитолы
                        </a>
                        <a href="/product/instrumenty-i-avtotovary/avtomagnitoly-i-avtoakustika/pulty">
                          Пульты
                        </a>
                        <a href="/product/instrumenty-i-avtotovary/avtomagnitoly-i-avtoakustika/avtousiliteli">
                          Автоусилители
                        </a>
                        <a href="/product/instrumenty-i-avtotovary/avtomagnitoly-i-avtoakustika/cifrovoj-processor">
                          Цифровой процессор
                        </a>
                        <a href="/product/instrumenty-i-avtotovary/avtomagnitoly-i-avtoakustika/avtoakustika">
                          Автоакустика
                        </a>
                        <a href="/product/instrumenty-i-avtotovary/avtomagnitoly-i-avtoakustika/sabvufer">
                          Сабвуферы
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/instrumenty-i-avtotovary/radar-detektory"
                      >
                        Радар - детекторы
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/instrumenty-i-avtotovary/radar-detektory">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/instrumenty-i-avtotovary/avtomobilnye-videoregistratory"
                      >
                        Автомобильные видеорегистраторы
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/instrumenty-i-avtotovary/avtomobilnye-videoregistratory">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/instrumenty-i-avtotovary/avtosignalizacii"
                      >
                        Автосигнализации
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/instrumenty-i-avtotovary/avtosignalizacii">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/instrumenty-i-avtotovary/akkumulyatory"
                      >
                        Аккумуляторы
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/instrumenty-i-avtotovary/akkumulyatory">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/instrumenty-i-avtotovary/aksessuary-dlya-avto"
                      >
                        Аксессуары для авто
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/instrumenty-i-avtotovary/aksessuary-dlya-avto">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/instrumenty-i-avtotovary/podushki-i-spinki"
                      >
                        Подушки и спинки
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/instrumenty-i-avtotovary/podushki-i-spinki">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/instrumenty-i-avtotovary/chehly-dlya-avtomobilei"
                      >
                        Чехлы для автомобилей
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/instrumenty-i-avtotovary/chehly-dlya-avtomobilei">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/instrumenty-i-avtotovary/portativnye-pylesosy"
                      >
                        Портативные пылесосы
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/instrumenty-i-avtotovary/portativnye-pylesosy">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/instrumenty-i-avtotovary/avtomobilnye-kompressory"
                      >
                        Автомобильные компрессоры
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/instrumenty-i-avtotovary/avtomobilnye-kompressory">
                          Все товары
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-content " data-id="suvi">
                <div class="mega__menu-right-inner">
                  <div class="mega__menu-content">
                    <div class="mega__menu-item">
                      <a class="menu__item-title" href="/product/suvi/zonty">
                        Зонты
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/suvi/zonty">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/suvi/musulmankiye"
                      >
                        Идеи подарков для мусульман
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/suvi/musulmankiye">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/suvi/kollektsionnie-igrushki"
                      >
                        Коллекционные игрушки
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/suvi/kollektsionnie-igrushki">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/suvi/tvorchestvo"
                      >
                        Творчество
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/suvi/tvorchestvo">Все товары</a>
                        <a href="/product/suvi/tvorchestvo/kartini-po-nomeram">
                          Картины по номерам
                        </a>
                        <a href="/product/suvi/tvorchestvo/almaznaya-jivopis">
                          Алмазная живопись
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a class="menu__item-title" href="/product/suvi/gadzhety">
                        Гаджеты
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/suvi/gadzhety">Все товары</a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a class="menu__item-title" href="/product/suvi/knigi-2">
                        Книги
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/suvi/knigi-2">Все товары</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-content " data-id="odejda-obuv-i-aksessuari">
                <div class="mega__menu-right-inner">
                  <div class="mega__menu-content">
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/odejda-obuv-i-aksessuari/sumki-rukzaki"
                      >
                        Сумки, рюкзаки
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/odejda-obuv-i-aksessuari/sumki-rukzaki">
                          Все товары
                        </a>
                        <a href="/product/odejda-obuv-i-aksessuari/sumki-rukzaki/chemodany">
                          Чемоданы
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/odejda-obuv-i-aksessuari/dlya"
                      >
                        Для мужчин
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/odejda-obuv-i-aksessuari/dlya">
                          Все товары
                        </a>
                        <a href="/product/odejda-obuv-i-aksessuari/dlya/shorti">
                          Шорты
                        </a>
                        <a href="/product/odejda-obuv-i-aksessuari/dlya/bryuki">
                          Брюки
                        </a>
                        <a href="/product/odejda-obuv-i-aksessuari/dlya/futbolki">
                          Футболки
                        </a>
                        <a href="/product/odejda-obuv-i-aksessuari/dlya/portmone-i-koshelki">
                          Портмоне и кошельки
                        </a>
                        <a href="/product/odejda-obuv-i-aksessuari/dlya/remni">
                          Ремни
                        </a>
                        <a href="/product/odejda-obuv-i-aksessuari/dlya/zazhigalki">
                          Зажигалки
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/odejda-obuv-i-aksessuari/dlya-jenshin"
                      >
                        Для женщин
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/odejda-obuv-i-aksessuari/dlya-jenshin">
                          Все товары
                        </a>
                        <a href="/product/odejda-obuv-i-aksessuari/dlya-jenshin/jenskie-bryuki">
                          Женские брюки
                        </a>
                        <a href="/product/odejda-obuv-i-aksessuari/dlya-jenshin/jenskie-futbolki">
                          Женские футболки
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/odejda-obuv-i-aksessuari/dlya-malchikov"
                      >
                        Для мальчиков
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/odejda-obuv-i-aksessuari/dlya-malchikov">
                          Все товары
                        </a>
                        <a href="/product/odejda-obuv-i-aksessuari/dlya-malchikov/futbolki-dlya-malchikov">
                          Футболки для мальчиков
                        </a>
                        <a href="/product/odejda-obuv-i-aksessuari/dlya-malchikov/detskie-shorti">
                          Детские шорты
                        </a>
                        <a href="/product/odejda-obuv-i-aksessuari/dlya-malchikov/pijami-dlya-malchikov">
                          Пижамы для мальчиков
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/odejda-obuv-i-aksessuari/dlya-devochek"
                      >
                        Для девочек
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/odejda-obuv-i-aksessuari/dlya-devochek">
                          Все товары
                        </a>
                        <a href="/product/odejda-obuv-i-aksessuari/dlya-devochek/futbolki-dlya-devochek">
                          Футболки для девочек
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/odejda-obuv-i-aksessuari/svitshoty-dlya-devochek/rezinovye-tapochki"
                      >
                        Резиновые тапочки
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/odejda-obuv-i-aksessuari/svitshoty-dlya-devochek/rezinovye-tapochki">
                          Все товары
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-content " data-id="detskiye-tovari">
                <div class="mega__menu-right-inner">
                  <div class="mega__menu-content">
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/detskiye-tovari/kolyaski"
                      >
                        Коляски
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/detskiye-tovari/kolyaski">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/detskiye-tovari/myagkie-igrushki"
                      >
                        Мягкие игрушки
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/detskiye-tovari/myagkie-igrushki">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/detskiye-tovari/konstruktory"
                      >
                        Конструкторы
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/detskiye-tovari/konstruktory">
                          Все товары
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-content " data-id="krasota-i-zdorove">
                <div class="mega__menu-right-inner">
                  <div class="mega__menu-content">
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/krasota-i-zdorove/uhod-za-licom"
                      >
                        Средства по уходу за лицом
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/krasota-i-zdorove/uhod-za-licom">
                          Все товары
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-licom/maski">
                          Маски для лица
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-licom/ochishchenie">
                          Очищение
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-licom/pitanie-i-uvlazhnenie">
                          Питание и увлажнение
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-licom/ot-morshchin-lifting">
                          От морщин (лифтинг)
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-licom/otbelivanie">
                          Отбеливание
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-licom/omolazhivanie">
                          Омолаживание
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-licom/akne">
                          Акне
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-licom/vokrug-glaz">
                          Вокруг глаз
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-licom/uhod-za-polostyu-rta">
                          Уход за полостью рта
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/krasota-i-zdorove/uhod-za-volosami"
                      >
                        Уход за волосами
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/krasota-i-zdorove/uhod-za-volosami">
                          Все товары
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-volosami/shampun">
                          Шампунь
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-volosami/kompleksnoe-maslo">
                          Комплексное масло
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-volosami/kondicioner-dlya-volos">
                          Кондиционер для волос
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-volosami/maslo">
                          Масло
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-volosami/maska-dlya-volos">
                          Маска для волос
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-volosami/hna">
                          Хна
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-volosami/dlya-brovei">
                          Для бровей
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-volosami/zagustitel-volos">
                          Загуститель волос
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-volosami/dlya-borody">
                          Для бороды
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/krasota-i-zdorove/uhod-za-telom-2"
                      >
                        Уход за телом
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/krasota-i-zdorove/uhod-za-telom-2">
                          Все товары
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-telom-2/pohudenie">
                          Похудение
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-telom-2/otbelivanie-2">
                          Отбеливание
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-telom-2/uvlazhnenie">
                          Увлажнение
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-telom-2/podtyagivanie">
                          Подтягивание
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-telom-2/intimnaya-gigiena">
                          Интимная гигиена
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-telom-2/depilyaciya">
                          Депиляция
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-telom-2/massazh">
                          Массаж
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-telom-2/zashchita-ot-solnca">
                          Защита от солнца
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-telom-2/dlya-ruk">
                          Для рук
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-telom-2/dlya-nog">
                          Для ног
                        </a>
                        <a href="/product/krasota-i-zdorove/uhod-za-telom-2/antiperspiranty-i-dezodoranty">
                          Антиперспиранты и дезодоранты
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/krasota-i-zdorove/lechebnye-sredstva"
                      >
                        Лечебные средства
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/krasota-i-zdorove/lechebnye-sredstva">
                          Все товары
                        </a>
                        <a href="/product/krasota-i-zdorove/lechebnye-sredstva/lechebnye-masla">
                          Лечебные масла
                        </a>
                        <a href="/product/krasota-i-zdorove/lechebnye-sredstva/vitaminy-i-poroshki">
                          Витамины и порошки
                        </a>
                        <a href="/product/krasota-i-zdorove/lechebnye-sredstva/lechebnye-kremy-i-mazi">
                          Лечебные кремы и мази
                        </a>
                        <a href="/product/krasota-i-zdorove/lechebnye-sredstva/efirnye-masla">
                          Эфирные масла
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/krasota-i-zdorove/makiyazh"
                      >
                        Макияж
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/krasota-i-zdorove/makiyazh">
                          Все товары
                        </a>
                        <a href="/product/krasota-i-zdorove/makiyazh/dlya-lica">
                          Для лица
                        </a>
                        <a href="/product/krasota-i-zdorove/makiyazh/glaza">
                          Глаза
                        </a>
                        <a href="/product/krasota-i-zdorove/makiyazh/guby">
                          Губы
                        </a>
                        <a href="/product/krasota-i-zdorove/makiyazh/paletki">
                          Палетки
                        </a>
                        <a href="/product/krasota-i-zdorove/makiyazh/brovi">
                          Брови
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/krasota-i-zdorove/parfyumeriya"
                      >
                        Парфюмерия
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/krasota-i-zdorove/parfyumeriya">
                          Все товары
                        </a>
                        <a href="/product/krasota-i-zdorove/parfyumeriya/duhi">
                          Духи
                        </a>
                        <a href="/product/krasota-i-zdorove/parfyumeriya/maslennyi-parfyum">
                          Масленный парфюм
                        </a>
                        <a href="/product/krasota-i-zdorove/parfyumeriya/parfyumernyi-krem">
                          Парфюмерный крем
                        </a>
                        <a href="/product/krasota-i-zdorove/parfyumeriya/gelevyi-parfyum">
                          Гелевый парфюм
                        </a>
                        <a href="/product/krasota-i-zdorove/parfyumeriya/parfyumernyi-osvezhitel">
                          Парфюмерный освежитель
                        </a>
                        <a href="/product/krasota-i-zdorove/parfyumeriya/parfyumernoe-mylo">
                          Парфюмерное мыло
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/krasota-i-zdorove/nabory-2"
                      >
                        Наборы
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/krasota-i-zdorove/nabory-2">
                          Все товары
                        </a>
                      </div>
                    </div>
                    <div class="mega__menu-item">
                      <a
                        class="menu__item-title"
                        href="/product/krasota-i-zdorove/apteka"
                      >
                        Аптека
                      </a>
                      <div class="mega__menu-item-inner">
                        <a href="/product/krasota-i-zdorove/apteka">
                          Все товары
                        </a>
                        <a href="/product/krasota-i-zdorove/apteka/kinezio-teipy">
                          Кинезио тейпы
                        </a>
                        <a href="/product/krasota-i-zdorove/apteka/intimnye-tovary">
                          Интимные товары
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
