import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "../SingleProduct/SingleProduct";
import { fetchProducts } from "./products_slice";
import "./Products.scss";

function Products() {
  const dispatch = useDispatch();
  const { products, productsLoading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());

    //eslint-disable-next-line
  }, []);

  const renderProducts = () => {
    if (productsLoading === "loading") {
      return <p>Loading...</p>;
    } else if (productsLoading === "error") {
      return <p>Error</p>;
    }
    if (products.featured) {
      return products.featured.map((product, index) => {
        if (index < 8) {
          return <SingleProduct {...product} />;
        } else return null;
      });
    } else {
      return null;
    }
  };

  return (
    <div className="mb-40">
      <div className="row newProducts">
        <div className="col-12">
          <h5 class="section__title">Cнова в школу</h5>
        </div>
        {renderProducts()}
      </div>
    </div>
  );
}

export default Products;
