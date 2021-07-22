import React from 'react';
import './Modal.css';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: '1163px',
  height: '691px',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#ffffff',
  padding: '50px',
  zIndex: 100,
  borderRadius: '10px',
};

const Modal = ({ open, onClose, products }) => {
  if (!open) return null;

  return (
    <>
      <div className="main-div">
        <div style={MODAL_STYLES}>
          <div className="modal-content">
            <div className="content-left">
              <div className="left">
                <ul className="price-list">
                  <li>
                    <strong>{products.price}</strong>
                    <div>RRP</div>
                  </li>
                  <li>
                    <strong>{products.price}$</strong>
                    <div>COST</div>
                  </li>
                  <li>
                    <strong>{products.price}</strong>
                    <div>PROFIT</div>
                  </li>
                </ul>
              </div>
              <div className="modal-slideshow">
                <div className="slideshow-image">
                  <img src={products.imageUrl} alt="prod" />
                </div>
                <div className="slideshow-pagination">
                  <ul className="pagination-ul">
                    <li className="pagination-li">
                      <img
                        className="pagination-img"
                        src={products.imageUrl}
                        alt="produc"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content-right">
              <div className="description">
                <div className="description-header">
                  <div className="sku">SKU# alm-lo4678</div>
                  <h3>
                    <span>Supplier:</span>
                    <button>US-Supplier103</button>
                  </h3>
                </div>
                <h2 className="header-title">{products.title}</h2>
                <div className="header-btn">
                  <button className="header-btn--big">
                    Add To My Inventory
                  </button>
                </div>
              </div>
              <div className="tabs">
                <div className="active-tab">Product Details</div>
                <div className="tab">Shipping Rates</div>
              </div>
              <div className="cont">
                <div className="cont-order">
                  <p>Backordered:</p>
                  <p>Category: {products.description}</p>
                  <p>Material:</p>
                  <p>Finish</p>
                  <p>Center Stone Type:</p>
                  <p>Center Stone Name: </p>
                  <p>Center Stone Color:</p>
                  <p>Weight (approx): {products.description}</p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/assets/close.png"
            alt="close"
            aria-label="Close"
            className="content-btn-close"
            onClick={onClose}
          />
        </div>
      </div>
    </>
  );
};
export default Modal;
