import React from "react";
import "./CatalogContent.css";
import Header from "../../header/Header";
import Sort from "../../header/Sort";
import Products from "../products/Products";

const CatalogContent = ({
  checkboxChanged,
  checkedProducts,
  selectAll,
  clearAll
}) => {

  return (
    <section className="catalog__content">
      <div className="content__header-wrapper">
          <Header 
            checkedProducts={checkedProducts}
            checkboxChanged={checkboxChanged}
            selectAll={selectAll}
            clearAll={clearAll}
          />
          <Sort />
      </div>
      <Products 
        checkedProducts={checkedProducts}
        checkboxChanged={checkboxChanged}
      />
    </section>
  );
};

export default CatalogContent;
