import React, { useEffect, useState } from 'react';
import './Cart.css';
import { cart, removeFromCart } from '../../API';
import { Paper, Box, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Cart = () => {
  const [cartData, setCartData] = useState({});
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

  useEffect(() => {
    cart().then((res) => {
      setCartData(res);
    });
  }, []);

  const deleteItem = (id) => {
    removeFromCart(id).then(() => {
      const cart = JSON.parse(JSON.stringify(cartData));
      const cartItems = cart.cartItem.items;
      const idx = cartItems.findIndex((e) => e.id === id);
      cartItems.splice(idx, 1);
      setCartData(cart);
    });
    handleClick();
  };

  return (
    <>
      <div className="cart-wrapper">
        {cartData?.cartItem &&
          cartData.cartItem.items.map((item) => (
            <Box className="product-box" key={item.id}>
              <Box xs={3} className="products-item">
                <div className="checkbox-container">
                  <button
                    className="products__item--input"
                    onClick={() => deleteItem(item.id)}
                  >
                    Remove Item
                  </button>
                </div>

                <Paper className="products-paper">
                  <div className="products-image">
                    <img src={item.image} alt="img" />
                  </div>
                  <div className="products-info">
                    <div className="products-title">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <p className="qty">Quantity: {item.qty}</p>
                    </div>
                    <h3 className="products-supplier">
                      <span>By:</span>
                      <button>US-Supplier103</button>
                    </h3>
                  </div>
                  <div className="products-price">
                    <span>COST {item.price}$ </span>
                  </div>
                </Paper>
                <Snackbar
                  open={open}
                  autoHideDuration={800}
                  onClose={handleClose}
                  anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                >
                  <Alert onClose={handleClose} severity="error">
                    Product was deleted successfully!!!
                  </Alert>
                </Snackbar>
              </Box>
            </Box>
          ))}
      </div>
    </>
  );
};
export default Cart;
