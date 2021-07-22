import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Products.css';
import CatalogProduct from './CatalogProduct';
import Modal from './modal/Modal';

const Products = ({ checkedProducts, checkboxChanged }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState({});
  const history = useHistory();

  const onClose = () => {
    history.push(`/catalog/`);
    setIsOpen(false);
  };

  return (
    <div className="content__products">
      <div id="products-wrapper">
        <CatalogProduct
          checkedProducts={checkedProducts}
          checkboxChanged={checkboxChanged}
          setActiveProduct={setActiveProduct}
          setIsOpen={setIsOpen}
        />
        <Modal
          open={isOpen !== false}
          onClose={onClose}
          products={activeProduct}
        />
      </div>
    </div>
  );
};

export default Products;
