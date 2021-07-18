import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Products.css";
import CatalogProduct from "./CatalogProduct";
import Modal from "./modal/Modal";


const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const onClose = () => {
    history.push(`/catalog/`)
    setIsOpen(false);
  }

  return (
    <div className="content__products">
      <div id="products-wrapper">
        <CatalogProduct />
        <Modal 
            open={isOpen}
            onClose={onClose}
        />
      </div>
    </div>
  );
};

export default Products;