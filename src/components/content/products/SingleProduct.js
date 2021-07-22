import './SingleProduct.css';
import { Paper, Box } from '@material-ui/core';
import { addToCart } from '../../../API';

const SingleProduct = ({
  image,
  title,
  id,
  price,
  description,
  item,
  checkedProducts,
  checkboxChanged,
  openModal,
}) => {
  return (
    <Box className="product-box" key={id}>
      <Box
        xs={3}
        className={`${
          checkedProducts && checkedProducts.includes(id)
            ? ' products__item--input--highlited'
            : 'products-item'
        }`}
      >
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="products__item--input"
            className="products__item--input"
            checked={checkedProducts && checkedProducts.includes(id)}
            onChange={() => checkboxChanged(id)}
          />
        </div>
        <Paper className="products-paper">
          <input
            type="button"
            className="hidden-btn"
            value="Add To Cart"
            onClick={() => {
              addToCart(id, 1);
            }}
          />
          <div className="products-image" onClick={() => openModal(item)}>
            <img src={image} alt="img" />
          </div>
          <div className="products-info">
            <div className="products-title">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <h3 className="products-supplier">
              <span>By:</span>
              <button>US-Supplier103</button>
            </h3>
          </div>
          <div className="products-price">
            <span>COST {price} $ </span>
          </div>
        </Paper>
      </Box>
    </Box>
  );
};
export default SingleProduct;
