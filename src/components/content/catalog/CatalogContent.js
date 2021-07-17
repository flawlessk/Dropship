import React from "react";
import "./CatalogContent.css";
import Header from "../../header/Header";
import Sort from "../../header/Sort";

const CatalogContent = () => {

  return (
    <section className="catalog__content">
      <div className="content__header-wrapper">
          <Header />
          <Sort />
      </div>
    </section>
  );
};

export default CatalogContent;
