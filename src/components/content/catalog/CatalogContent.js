import React from "react";
import "./CatalogContent.css";
import Header from "../../header/Header";
import Sort from "../../header/Sort";
import Products from "../products/Products";

const CatalogContent = () => {

  return (
    <section className="catalog__content">
      <div className="content__header-wrapper">
          <Header />
          <Sort />
      </div>
      <Products />
    </section>
  );
};

export default CatalogContent;
