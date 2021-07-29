import './SingleProduct.css';
import { Paper, Box, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { addToCart } from '../../../API';
import { useState } from 'react';
import Counter from './counter/Counter';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  count,
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onClickCombined = () => {
    addToCart(id, count);
    handleClick();
  };

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
        <div>
          <Counter productId={id} count={count} />
        </div>
        <Paper className="products-paper">
          <input
            type="button"
            className="hidden-btn"
            value="Add To Cart"
            onClick={onClickCombined}
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
          <Snackbar
            open={open}
            autoHideDuration={800}
            onClose={handleClose}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          >
            <Alert onClose={handleClose} severity="success">
              Product added to inventory successfully
            </Alert>
          </Snackbar>
        </Paper>
      </Box>
    </Box>
  );
};
export default SingleProduct;
